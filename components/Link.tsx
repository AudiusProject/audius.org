import React, { ReactNode } from 'react'

import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'

type LinkProps = NextLinkProps & {
  children: ReactNode
}

/**
 * A wrapper around next Link that handles i18n
 */
const Link = (props: LinkProps) => {
  const router = useRouter()

  // Only prepend the locale if it is explicitly specified in the url
  const localeRegex = new RegExp(`^/(${router.query.locale})(/|$)`)
  const routeLocale = router.asPath.match(localeRegex)?.[1]
  const locale = props.locale || routeLocale

  if (!locale) {
    const href = props.href || router.asPath
    return <NextLink {...props} href={href}></NextLink>
  } else {
    const href = props.href
      ? `/${locale}${props.href}`
      : router.pathname.replace('[locale]', locale)
    return <NextLink {...props} href={href} locale={undefined}></NextLink>
  }
}

export default Link
