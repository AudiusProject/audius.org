import React, { ReactNode } from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type StyledLinkProps = LinkProps & {
  activeClassName?: string
  children: ReactNode
}
/**
 * A wrapper around Link that applies an active className
 */
export const StyledLink = ({
  activeClassName = 'active',
  children,
  ...props
}: StyledLinkProps) => {
  const router = useRouter()

  return (
    <Link {...props}>
      <a className={router.pathname == props.href ? activeClassName : ''}>
        {children}
      </a>
    </Link>
  )
}
