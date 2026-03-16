import React, { ReactNode } from 'react'

import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import Link from 'components/Link'

type StyledLinkProps = LinkProps & {
  activeClassName?: string
  children: ReactNode
  className?: string
}
/**
 * A wrapper around Link that applies an active className
 */
const StyledLink = ({
  activeClassName = 'active',
  children,
  className,
  ...props
}: StyledLinkProps) => {
  const router = useRouter()
  const active = router.pathname === `/[locale]${props.href}`
  const mergedClassName = [className, active ? activeClassName : '']
    .filter(Boolean)
    .join(' ')

  return (
    <Link {...props}>
      <a className={mergedClassName || undefined}>
        {children}
      </a>
    </Link>
  )
}

export default StyledLink
