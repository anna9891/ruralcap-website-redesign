import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { 
    name: 'Programs', 
    href: '/programs',
    submenu: [
      { name: 'All Programs', href: '/programs' },
      { name: 'Education', href: '/programs/education' },
      { name: 'Housing', href: '/programs/housing' },
      { name: 'Health & Well-Being', href: '/programs/health-wellbeing' },
    ]
  },
  { name: 'Resources', href: '/resources' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo.png"
                alt="Rural Alaska Community Action Program"
              />
              <span className="ml-2 text-xl font-semibold text-primary-700 hidden sm:block">
                RurAL CAP
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <>
                    <button
                      className={`inline-flex items-center text-base font-medium transition-colors duration-200 ${
                        router.pathname.startsWith(item.href)
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-neutral-700 hover:text-primary-600'
                      }`}
                      onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                      aria-expanded={dropdownOpen === item.name}
                    >
                      {item.name}
                      <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${
                        dropdownOpen === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {dropdownOpen === item.name && (
                      <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className={`block px-4 py-2 text-sm ${
                                router.pathname === subitem.href
                                  ? 'bg-primary-50 text-primary-700'
                                  : 'text-gray-700 hover:bg-gray-100'
                              }`}
                              role="menuitem"
                              onClick={() => setDropdownOpen(null)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-colors duration-200 ${
                      router.pathname === item.href
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-neutral-700 hover:text-primary-600'
                    }`}
                    aria-current={router.pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <SearchBar />
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden={true} />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden={true} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  )
}

export default Header