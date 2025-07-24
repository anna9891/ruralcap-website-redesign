import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Housing & Weatherization', href: '/services/housing' },
      { name: 'Energy Assistance', href: '/services/energy' },
      { name: 'Child Development', href: '/services/child-development' },
      { name: 'Community Services', href: '/services/community' },
    ],
    about: [
      { name: 'Our Mission', href: '/about/mission' },
      { name: 'Board & Leadership', href: '/about/leadership' },
      { name: 'Annual Reports', href: '/about/reports' },
      { name: 'Careers', href: '/careers' },
    ],
    resources: [
      { name: 'Forms & Documents', href: '/resources/forms' },
      { name: 'Partner Links', href: '/resources/partners' },
      { name: 'FAQ', href: '/resources/faq' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  }

  return (
    <footer className="bg-neutral-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src="/logo-white.png"
              alt="Rural Alaska Community Action Program"
              className="h-12 w-auto mb-4"
            />
            <p className="text-neutral-300 text-sm mb-4">
              Empowering rural Alaska communities through comprehensive services and programs.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-neutral-300">
                <strong className="text-white">Phone:</strong>{' '}
                <a href="tel:+19072791251" className="hover:text-primary-300">
                  (907) 279-1251
                </a>
              </p>
              <p className="text-neutral-300">
                <strong className="text-white">Toll-Free:</strong>{' '}
                <a href="tel:+18004784775" className="hover:text-primary-300">
                  1-800-478-4775
                </a>
              </p>
              <p className="text-neutral-300">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:info@ruralcap.org" className="hover:text-primary-300">
                  info@ruralcap.org
                </a>
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Rural Alaska Community Action Program, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-neutral-400 hover:text-primary-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-neutral-400 hover:text-primary-300 transition-colors duration-200"
              >
                Terms of Use
              </Link>
              <Link
                href="/sitemap"
                className="text-neutral-400 hover:text-primary-300 transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer