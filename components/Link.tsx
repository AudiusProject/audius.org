import React, { ReactNode } from 'react'

import { useTranslation } from 'next-i18next'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter } from 'next/router'

type LinkProps = NextLinkProps & {
  children: ReactNode
}

// TODO: SK - if the local is not specified in the url, don't prepend it to the link href

/**
 * A wrapper around next Link that handles i18n
 */
const Link = (props: LinkProps) => {
  const { i18n } = useTranslation()
  const router = useRouter()

  const locale = props.locale || i18n.language || ''

  if (String(props.href).match(/^http/)) {
    return <NextLink {...props} />
  }

  if (!locale) {
    const href = props.href || router.asPath
    return <NextLink {...props} href={href} />
  } else {
    const href = props.href
      ? `/${locale}${props.href}`
      : router.pathname.replace('[locale]', locale)
    return <NextLink {...props} href={href} locale={undefined} />
  }
}

export default Link
