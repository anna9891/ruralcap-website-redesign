import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FocusTrap from 'focus-trap-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: Array<{ name: string; href: string }>
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigation }) => {
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <FocusTrap active={isOpen}>
      <div
        id="mobile-menu"
        className="lg:hidden fixed inset-0 z-50"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <button
          className="fixed inset-0 bg-neutral-900 bg-opacity-50"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              onClose()
            }
          }}
          aria-label="Close mobile menu"
        />
        <div
          className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          role="presentation"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 id="mobile-menu-title" className="text-xl font-semibold text-neutral-900">Menu</h2>
              <button
                type="button"
                className="p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={onClose}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden={true}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    router.pathname === item.href
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary-600'
                  }`}
                  onClick={onClose}
                  aria-current={router.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </FocusTrap>
  )
}

export default MobileMenu