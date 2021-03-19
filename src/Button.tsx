import React from 'react'

import * as css from './button.styles'
import { multiply } from './multiply'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      type="button"
      style={{
        ...css.button,
        ...css[size],
        ...(primary ? css.primary : css.secondary),
        ...(backgroundColor && { backgroundColor }),
      }}
      {...props}
    >
      {label} {multiply(4, 4)}
    </button>
  )
}
