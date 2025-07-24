import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { AcademicCapIcon, HomeIcon, HeartIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const programs = [
  {
    id: 'education',
    slug: 'education',
    title: 'Education',
    description: 'Empowering communities through educational opportunities and workforce development',
    icon: AcademicCapIcon,
    color: 'blue',
    services: [
      'Early Childhood Education',
      'Adult Education & GED',
      'Workforce Development',
      'Career Counseling'
    ],
    ctaText: 'Explore Education Services'
  },
  {
    id: 'housing',
    slug: 'housing',
    title: 'Housing',
    description: 'Providing safe, affordable housing solutions and support for rural Alaska families',
    icon: HomeIcon,
    color: 'green',
    services: [
      'Weatherization Assistance',
      'Housing Development',
      'Rental Assistance',
      'Homeownership Support'
    ],
    ctaText: 'Explore Housing Services'
  },
  {
    id: 'health-wellbeing',
    slug: 'health-wellbeing',
    title: 'Health & Well-Being',
    description: 'Comprehensive health, nutrition, and wellness support for individuals and families',
    icon: HeartIcon,
    color: 'purple',
    services: [
      'Behavioral Health',
      'Nutrition Services',
      'Elder Care Support',
      'Wellness Programs'
    ],
    ctaText: 'Explore Health Services'
  }
]

const ProgramsIndexPage: React.FC = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'text-blue-600',
          hover: 'hover:bg-blue-100',
          button: 'bg-blue-600 hover:bg-blue-700'
        }
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'text-green-600',
          hover: 'hover:bg-green-100',
          button: 'bg-green-600 hover:bg-green-700'
        }
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          icon: 'text-purple-600',
          hover: 'hover:bg-purple-100',
          button: 'bg-purple-600 hover:bg-purple-700'
        }
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'text-gray-600',
          hover: 'hover:bg-gray-100',
          button: 'bg-gray-600 hover:bg-gray-700'
        }
    }
  }

  return (
    <Layout>
      <Head>
        <title>Our Programs - RurAL CAP</title>
        <meta name="description" content="Explore RurAL CAP's comprehensive programs in Education, Housing, and Health & Well-Being" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
              <p className="text-xl">
                RurAL CAP offers comprehensive programs designed to support and empower rural Alaska communities. 
                Each program provides specialized services tailored to meet the unique needs of our region.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {programs.map((program) => {
                  const colors = getColorClasses(program.color)
                  const Icon = program.icon
                  
                  return (
                    <div
                      key={program.id}
                      className={`${colors.bg} ${colors.border} border-2 rounded-lg p-8 transition-all duration-200 ${colors.hover}`}
                    >
                      <div className={`${colors.icon} mb-6`}>
                        <Icon className="h-12 w-12" />
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      
                      <div className="mb-8">
                        <h3 className="font-semibold mb-3">Key Services:</h3>
                        <ul className="space-y-2">
                          {program.services.map((service, index) => (
                            <li key={index} className="flex items-start">
                              <span className={`mr-2 ${colors.icon}`}>•</span>
                              <span className="text-gray-700">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link
                        href={`/programs/${program.slug}`}
                        className={`inline-flex items-center text-white ${colors.button} px-6 py-3 rounded-lg font-semibold transition`}
                      >
                        {program.ctaText}
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Program Support */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Integrated Support Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our programs work together to provide comprehensive support. Many families benefit from services 
                across multiple programs, creating a holistic approach to community well-being.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Family Support</h3>
                  <p className="text-gray-600 text-sm">
                    Combining education, housing stability, and health services for comprehensive family support
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Elder Care</h3>
                  <p className="text-gray-600 text-sm">
                    Integrating health services, nutrition support, and housing assistance for seniors
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">Economic Development</h3>
                  <p className="text-gray-600 text-sm">
                    Workforce training, housing stability, and wellness programs supporting economic growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Not Sure Which Program You Need?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team can help you identify the right services and programs for your situation. 
                Contact us for personalized guidance and support.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  Contact Us
                </Link>
                <Link
                  href="/resources"
                  className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
                >
                  Browse Resources
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Edit Permission Comment */}
      {/* TODO: Implement tiered editing permissions
          - Content managers can edit program descriptions and services
          - Program managers have full control over their program's content
          - Admin can manage all program pages and cross-program content
      */}
    </Layout>
  )
}

export default ProgramsIndexPage