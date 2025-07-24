import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import SkipLink from './accessibility/SkipLink'
import BackToTop from './accessibility/BackToTop'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout