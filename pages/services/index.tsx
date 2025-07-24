import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { 
  HomeIcon, 
  BoltIcon, 
  UserGroupIcon, 
  HeartIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    category: 'Housing & Home',
    items: [
      {
        title: 'Weatherization Assistance',
        description: 'Free home weatherization services to improve energy efficiency and reduce heating costs.',
        icon: HomeIcon,
        href: '/services/weatherization',
      },
      {
        title: 'Housing Development',
        description: 'Affordable housing solutions for rural Alaska communities.',
        icon: ShieldCheckIcon,
        href: '/services/housing-development',
      },
    ],
  },
  {
    category: 'Energy & Utilities',
    items: [
      {
        title: 'Energy Assistance Program',
        description: 'Help with heating bills and energy costs during winter months.',
        icon: BoltIcon,
        href: '/services/energy-assistance',
      },
      {
        title: 'Utility Support',
        description: 'Emergency assistance for utility disconnection prevention.',
        icon: CurrencyDollarIcon,
        href: '/services/utility-support',
      },
    ],
  },
  {
    category: 'Family & Children',
    items: [
      {
        title: 'Head Start Programs',
        description: 'Early childhood education and development programs for children ages 3-5.',
        icon: AcademicCapIcon,
        href: '/services/head-start',
      },
      {
        title: 'Family Support Services',
        description: 'Comprehensive support for families including parenting resources and counseling.',
        icon: UserGroupIcon,
        href: '/services/family-support',
      },
    ],
  },
  {
    category: 'Community Support',
    items: [
      {
        title: 'Emergency Services',
        description: '24/7 crisis intervention and emergency assistance programs.',
        icon: PhoneIcon,
        href: '/services/emergency',
      },
      {
        title: 'Community Development',
        description: 'Programs to strengthen and empower rural Alaska communities.',
        icon: HeartIcon,
        href: '/services/community-development',
      },
    ],
  },
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - Rural Alaska Community Action Program</title>
        <meta name="description" content="Comprehensive services for rural Alaska communities including housing, energy assistance, child development, and community support programs." />
      </Head>
      <Layout>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl">
              We provide comprehensive programs and services designed to meet the unique challenges 
              of rural Alaska communities. From housing assistance to early childhood education, 
              we&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      href={service.href}
                      className="group block"
                    >
                      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                              <service.icon className="h-6 w-6 text-primary-600" aria-hidden={true} />
                            </div>
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-neutral-600">
                              {service.description}
                            </p>
                            <span className="inline-flex items-center mt-3 text-primary-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                              Learn more
                              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Need Help Finding the Right Service?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you navigate our services and find the support you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:+19072791251" className="btn-secondary">
                Call (907) 279-1251
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}