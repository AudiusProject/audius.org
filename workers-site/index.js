import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'
import parser from 'accept-language-parser'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false
const LANGUAGES = ['en', 'es', 'zh']
const DEFAULT_LANGUAGE = 'en'

const languageRegex = new RegExp(`^/(${LANGUAGES.join('|')})(/|$)`)

addEventListener('fetch', (event) => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500
        })
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  // Redirect URL-encoded bracket paths to literal bracket paths
  const url = new URL(event.request.url)
  if (url.pathname.includes('%5B') || url.pathname.includes('%5D')) {
    const decodedPath = url.pathname.replace(/%5B/g, '[').replace(/%5D/g, ']')
    const redirectUrl = new URL(event.request.url)
    redirectUrl.pathname = decodedPath
    return Response.redirect(redirectUrl.toString(), 301)
  }

  let options = {}

  const languageHeader = event.request.headers.get('Accept-Language')
  const headerLanguage =
    parser.pick(LANGUAGES, languageHeader) || DEFAULT_LANGUAGE

  const getUrl = (requestUrl) => {
    const url = new URL(requestUrl)

    // If requesting a file, don't alter the path
    if (url.pathname.includes('.')) {
      return url
    }

    // Check if the language is specified in the path
    const languageMatch = url.pathname.match(languageRegex)
    const language = languageMatch ? languageMatch[1] : headerLanguage

    // Remove the language from the path if necessary
    const unlocalizedPathname = language
      ? url.pathname.replace(`/${language}`, '')
      : url.pathname
    const isIndex = !unlocalizedPathname.length || unlocalizedPathname === '/'

    const path = isIndex ? '/home' : unlocalizedPathname.replace(/\/$/, '')

    url.pathname = `/${language}${path}.html`
    return url
  }

  options.mapRequestToAsset = (request) => {
    const url = new URL(request.url)
    
    // For _next paths, preserve URL encoding by not decoding the path
    if (url.pathname.startsWith('/_next/')) {
      // Create a new request with the exact same URL-encoded path
      return new Request(request.url, request)
    }
    
    // For all other paths, use the normal getUrl logic
    return mapRequestToAsset(new Request(getUrl(request.url), request))
  }

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true
      }
    }
    const page = await getAssetFromKV(event, options)

    // allow headers to be altered
    const response = new Response(page.body, page)

    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'unsafe-url')
    response.headers.set('Feature-Policy', 'none')

    return response
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: (req) =>
            new Request(`${new URL(req.url).origin}/404.html`, req)
        })

        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404
        })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
  return (request) => {
    // compute the default (e.g. / -> index.html)
    let defaultAssetKey = mapRequestToAsset(request)
    let url = new URL(defaultAssetKey.url)

    // strip the prefix from the path for lookup
    url.pathname = url.pathname.replace(prefix, '/')

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey)
  }
}
