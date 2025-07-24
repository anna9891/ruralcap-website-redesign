import React from 'react'

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="skip-link"
      onFocus={(e) => e.currentTarget.classList.add('translate-y-0')}
      onBlur={(e) => e.currentTarget.classList.remove('translate-y-0')}
    >
      Skip to main content
    </a>
  )
}

export default SkipLink