import React, { ReactNode } from 'react'

import { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import Link from 'components/Link'

type StyledLinkProps = LinkProps & {
  activeClassName?: string
  children: ReactNode
}
/**
 * A wrapper around Link that applies an active className
 */
const StyledLink = ({
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

export default StyledLink
