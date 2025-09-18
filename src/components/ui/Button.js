'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const variants = {
  default: {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -2,
    },
    tap: {
      scale: 0.95,
      y: 2,
    },
  },
  subtle: {
    rest: {
      scale: 1,
      opacity: 0.9,
    },
    hover: {
      scale: 1.02,
      opacity: 1,
    },
    tap: {
      scale: 0.98,
      opacity: 0.8,
    },
  },
};

const Button = forwardRef(({
  children,
  className = '',
  variant = 'default',
  type = 'button',
  isLoading = false,
  disabled = false,
  size = 'md',
  onClick,
  ...props
}, ref) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    default: `
      bg-blue-600 text-white
      hover:bg-blue-700
      focus:ring-blue-500
      dark:bg-blue-500 dark:hover:bg-blue-600
    `,
    outline: `
      border-2 border-blue-600 text-blue-600
      hover:bg-blue-50
      focus:ring-blue-500
      dark:border-blue-400 dark:text-blue-400
      dark:hover:bg-blue-900/30
    `,
    ghost: `
      text-blue-600
      hover:bg-blue-50
      focus:ring-blue-500
      dark:text-blue-400
      dark:hover:bg-blue-900/30
    `,
    subtle: `
      bg-blue-100 text-blue-900
      hover:bg-blue-200
      focus:ring-blue-400
      dark:bg-blue-900 dark:text-blue-100
      dark:hover:bg-blue-800
    `,
  };

  const combinedClassName = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <motion.button
      ref={ref}
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled || isLoading}
      variants={variants[variant === 'subtle' ? 'subtle' : 'default']}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outline', 'ghost', 'subtle']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
};

export default Button;
