import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import EventsCalendar from '../../components/EventsCalendar'
import { Event, Program } from '../../types'
import { HomeIcon, WrenchScrewdriverIcon, HeartIcon, CalendarDaysIcon, MapIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/react/24/outline'

// Mock data for Housing program
const housingProgram: Program = {
  id: 'housing',
  name: 'Housing',
  slug: 'housing',
  title: 'Housing Services',
  description: 'Providing safe, affordable housing solutions and support for rural Alaska families',
  overview: 'Our Housing program addresses the critical need for safe, affordable housing in rural Alaska. We offer weatherization services, housing development, rental assistance, and homeownership support to help families achieve housing stability.',
  services: [],
  contactInfo: {
    phone: '(907) 555-0103',
    email: 'housing@ruralcap.org',
    address: {
      street: '731 E. 8th Avenue',
      city: 'Anchorage',
      state: 'AK',
      zip: '99501'
    },
    hours: ['Monday-Friday: 8:00 AM - 5:00 PM', 'Emergency assistance available 24/7']
  },
  intakeFormUrl: '/forms/housing-intake',
  appointmentSchedulingUrl: '/schedule/housing',
  storyMapUrl: 'https://storymaps.ruralcap.org/housing'
}

// Mock housing-specific events
const housingEvents: Event[] = [
  {
    id: 3,
    title: 'First-Time Homebuyer Workshop',
    description: 'Learn about the home buying process and available assistance programs',
    date: '2025-08-20',
    startTime: '5:30 PM',
    endTime: '7:30 PM',
    location: 'RurAL CAP Main Office',
    type: 'Workshop',
    program: 'Housing',
    registrationUrl: '/register/homebuyer-workshop'
  },
  {
    id: 4,
    title: 'Weatherization Information Session',
    description: 'Discover how to make your home more energy efficient and reduce utility costs',
    date: '2025-08-25',
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    location: 'Virtual',
    type: 'Services',
    program: 'Housing',
    isVirtual: true,
    registrationUrl: '/register/weatherization-info'
  }
]

const HousingPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Housing Services - RurAL CAP</title>
        <meta name="description" content="Safe, affordable housing solutions and support services for rural Alaska families" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center mb-4">
                <HomeIcon className="h-10 w-10 mr-3" />
                <h1 className="text-4xl font-bold">{housingProgram.title}</h1>
              </div>
              <p className="text-xl mb-8">{housingProgram.description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={housingProgram.intakeFormUrl}
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
                >
                  <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
                  Apply for Housing Assistance
                </a>
                <a
                  href={housingProgram.appointmentSchedulingUrl}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition flex items-center"
                >
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {housingProgram.overview}
              </p>

              {/* Key Service Areas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <WrenchScrewdriverIcon className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Weatherization</h3>
                  <p className="text-gray-600">
                    Energy efficiency improvements to reduce heating costs and improve home comfort
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <HomeIcon className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Housing Development</h3>
                  <p className="text-gray-600">
                    Building and maintaining affordable housing units across rural communities
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <HeartIcon className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Rental Assistance</h3>
                  <p className="text-gray-600">
                    Emergency and long-term rental assistance for families in need
                  </p>
                </div>
              </div>

              {/* Story Maps Integration */}
              {housingProgram.storyMapUrl && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                  <div className="flex items-center mb-4">
                    <MapIcon className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-2xl font-semibold">Housing Impact Across Alaska</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Explore how our housing programs are transforming communities and improving lives throughout rural Alaska.
                  </p>
                  {/* Story Map Placeholder - In production, this would be an iframe or integrated component */}
                  <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 mb-4">Story Map Integration</p>
                      <a
                        href={housingProgram.storyMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 underline"
                      >
                        View Full Story Map →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <CalendarDaysIcon className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Upcoming Housing Events</h2>
              </div>
              
              {/* Program-specific calendar showing only housing events */}
              <EventsCalendar 
                events={housingEvents} 
                filterByProgram="Housing"
                showProgramFilter={false}
              />

              <div className="text-center mt-8">
                <a
                  href="/events?program=housing"
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  View All Housing Events →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Resources */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <p className="flex items-start">
                      <span className="font-semibold mr-2">Phone:</span>
                      <a href={`tel:${housingProgram.contactInfo.phone}`} className="text-green-600 hover:text-green-800">
                        {housingProgram.contactInfo.phone}
                      </a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-semibold mr-2">Email:</span>
                      <a href={`mailto:${housingProgram.contactInfo.email}`} className="text-green-600 hover:text-green-800">
                        {housingProgram.contactInfo.email}
                      </a>
                    </p>
                    <div>
                      <p className="font-semibold mb-1">Address:</p>
                      <p className="text-gray-600">
                        {housingProgram.contactInfo.address?.street}<br />
                        {housingProgram.contactInfo.address?.city}, {housingProgram.contactInfo.address?.state} {housingProgram.contactInfo.address?.zip}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Office Hours:</p>
                      {housingProgram.contactInfo.hours?.map((hours, index) => (
                        <p key={index} className="text-gray-600">{hours}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/resources?program=housing" className="text-green-600 hover:text-green-800 flex items-center">
                        <span className="mr-2">→</span>
                        Housing Resources & Applications
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources?program=housing&type=form" className="text-green-600 hover:text-green-800 flex items-center">
                        <span className="mr-2">→</span>
                        Application Forms
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources?program=housing&topic=weatherization" className="text-green-600 hover:text-green-800 flex items-center">
                        <span className="mr-2">→</span>
                        Weatherization Information
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources?program=housing&topic=homeownership" className="text-green-600 hover:text-green-800 flex items-center">
                        <span className="mr-2">→</span>
                        Homeownership Resources
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Emergency Housing CTA */}
              <div className="mt-12 bg-red-50 border-2 border-red-200 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-red-800">Emergency Housing Assistance</h3>
                <p className="text-gray-700 mb-4">
                  If you are experiencing a housing crisis or are at risk of homelessness, immediate help is available.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:907-555-0103"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                  >
                    Call Emergency Hotline
                  </a>
                  <a
                    href="/emergency-housing"
                    className="bg-white text-red-600 border-2 border-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
                  >
                    Learn More About Emergency Services
                  </a>
                </div>
              </div>

              {/* Regular CTA Section */}
              <div className="mt-8 bg-green-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Find Your Path to Stable Housing</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Whether you need weatherization assistance, rental support, or homeownership guidance, our team is ready to help you achieve housing stability.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={housingProgram.intakeFormUrl}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                  >
                    Start Your Application
                  </a>
                  <a
                    href={housingProgram.appointmentSchedulingUrl}
                    className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    Talk to a Housing Counselor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Edit Permission Comment */}
      {/* TODO: Implement tiered editing permissions
          - Housing program managers can edit content and manage applications
          - Staff can update availability and resources
          - Emergency housing updates require immediate publication capability
          - Admin has full access including sensitive client data management
      */}
    </Layout>
  )
}

export default HousingPage