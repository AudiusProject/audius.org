import React from 'react'

export const PageLayout: React.FC = ({ children }) => {
  return (
    <div>
      This is a layout
      <div>{children}</div>
    </div>
  )
}
