import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import EventsCalendar from '../../components/EventsCalendar'
import { Event, Program } from '../../types'
import { HeartIcon, UserIcon, CakeIcon, CalendarDaysIcon, MapIcon, ClipboardDocumentListIcon, ClockIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

// Mock data for Health & Well-Being program
const healthProgram: Program = {
  id: 'health-wellbeing',
  name: 'Health & Well-Being',
  slug: 'health-wellbeing',
  title: 'Health & Well-Being Services',
  description: 'Comprehensive health, nutrition, and wellness support for individuals and families',
  overview: 'Our Health & Well-Being program promotes holistic wellness through behavioral health services, nutrition assistance, elder care support, and community wellness initiatives. We believe that good health is fundamental to individual and community success.',
  services: [],
  contactInfo: {
    phone: '(907) 555-0104',
    email: 'health@ruralcap.org',
    address: {
      street: '731 E. 8th Avenue',
      city: 'Anchorage',
      state: 'AK',
      zip: '99501'
    },
    hours: ['Monday-Friday: 8:00 AM - 5:00 PM', 'Crisis support available 24/7']
  },
  intakeFormUrl: '/forms/health-wellbeing-intake',
  appointmentSchedulingUrl: '/schedule/health-wellbeing',
  storyMapUrl: 'https://storymaps.ruralcap.org/health-wellbeing'
}

// Mock health-specific events
const healthEvents: Event[] = [
  {
    id: 5,
    title: 'Community Wellness Fair',
    description: 'Free health screenings, nutrition information, and wellness resources',
    date: '2025-08-30',
    startTime: '10:00 AM',
    endTime: '2:00 PM',
    location: 'Community Center',
    type: 'Community',
    program: 'Health & Well-Being',
    registrationUrl: '/register/wellness-fair'
  },
  {
    id: 6,
    title: 'Behavioral Health Support Group',
    description: 'Weekly support group for stress management and mental wellness',
    date: '2025-08-18',
    startTime: '6:00 PM',
    endTime: '7:30 PM',
    location: 'Virtual',
    type: 'Services',
    program: 'Health & Well-Being',
    isVirtual: true,
    registrationUrl: '/register/support-group'
  }
]

const HealthWellBeingPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Health & Well-Being Services - RurAL CAP</title>
        <meta name="description" content="Comprehensive health, nutrition, and wellness support services for rural Alaska communities" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center mb-4">
                <HeartIcon className="h-10 w-10 mr-3" />
                <h1 className="text-4xl font-bold">{healthProgram.title}</h1>
              </div>
              <p className="text-xl mb-8">{healthProgram.description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={healthProgram.intakeFormUrl}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
                >
                  <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
                  Request Services
                </a>
                <a
                  href={healthProgram.appointmentSchedulingUrl}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition flex items-center"
                >
                  <ClockIcon className="h-5 w-5 mr-2" />
                  Schedule Appointment
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
                {healthProgram.overview}
              </p>

              {/* Key Service Areas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <UserIcon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Behavioral Health</h3>
                  <p className="text-gray-600">
                    Mental health counseling, substance abuse treatment, and crisis intervention
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <CakeIcon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Nutrition Services</h3>
                  <p className="text-gray-600">
                    Food assistance, nutrition education, and community gardens
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <HandRaisedIcon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Elder Services</h3>
                  <p className="text-gray-600">
                    Senior support, care coordination, and aging-in-place assistance
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <HeartIcon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Wellness Programs</h3>
                  <p className="text-gray-600">
                    Prevention education, fitness programs, and health screenings
                  </p>
                </div>
              </div>

              {/* Story Maps Integration */}
              {healthProgram.storyMapUrl && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                  <div className="flex items-center mb-4">
                    <MapIcon className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-semibold">Health & Wellness Impact Stories</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Discover how our health and wellness programs are transforming lives and building healthier communities across rural Alaska.
                  </p>
                  {/* Story Map Placeholder - In production, this would be an iframe or integrated component */}
                  <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 mb-4">Story Map Integration</p>
                      <a
                        href={healthProgram.storyMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 underline"
                      >
                        View Full Story Map →
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Special Programs Highlight */}
              <div className="bg-purple-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-semibold mb-6">Featured Programs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Behavioral Health Integration</h4>
                    <p className="text-gray-600 mb-4">
                      Integrated care approach combining mental health, substance abuse treatment, and primary care services.
                    </p>
                    <a href="/programs/behavioral-health" className="text-purple-600 hover:text-purple-800 font-medium">
                      Learn More →
                    </a>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Elder Nutrition Program</h4>
                    <p className="text-gray-600 mb-4">
                      Providing nutritious meals and social connection for seniors through congregate and home-delivered meal services.
                    </p>
                    <a href="/programs/elder-nutrition" className="text-purple-600 hover:text-purple-800 font-medium">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <CalendarDaysIcon className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Upcoming Health & Wellness Events</h2>
              </div>
              
              {/* Program-specific calendar showing only health events */}
              <EventsCalendar 
                events={healthEvents} 
                filterByProgram="Health & Well-Being"
                showProgramFilter={false}
              />

              <div className="text-center mt-8">
                <a
                  href="/events?program=health-wellbeing"
                  className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  View All Health & Wellness Events →
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
                      <a href={`tel:${healthProgram.contactInfo.phone}`} className="text-purple-600 hover:text-purple-800">
                        {healthProgram.contactInfo.phone}
                      </a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-semibold mr-2">Email:</span>
                      <a href={`mailto:${healthProgram.contactInfo.email}`} className="text-purple-600 hover:text-purple-800">
                        {healthProgram.contactInfo.email}
                      </a>
                    </p>
                    <div>
                      <p className="font-semibold mb-1">Address:</p>
                      <p className="text-gray-600">
                        {healthProgram.contactInfo.address?.street}<br />
                        {healthProgram.contactInfo.address?.city}, {healthProgram.contactInfo.address?.state} {healthProgram.contactInfo.address?.zip}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Office Hours:</p>
                      {healthProgram.contactInfo.hours?.map((hours, index) => (
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
                      <Link href="/resources?program=health-wellbeing" className="text-purple-600 hover:text-purple-800 flex items-center">
                        <span className="mr-2">→</span>
                        Health Resources & Forms
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources?program=health-wellbeing&topic=behavioral-health" className="text-purple-600 hover:text-purple-800 flex items-center">
                        <span className="mr-2">→</span>
                        Behavioral Health Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources?program=health-wellbeing&topic=nutrition" className="text-purple-600 hover:text-purple-800 flex items-center">
                        <span className="mr-2">→</span>
                        Nutrition Information
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources?program=health-wellbeing&topic=elder-care" className="text-purple-600 hover:text-purple-800 flex items-center">
                        <span className="mr-2">→</span>
                        Elder Care Resources
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Crisis Support Box */}
              <div className="mt-12 bg-red-50 border-2 border-red-200 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-red-800">Crisis Support Available 24/7</h3>
                <p className="text-gray-700 mb-4">
                  If you or someone you know is experiencing a mental health crisis, immediate help is available.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Crisis Hotline:</p>
                    <a href="tel:1-800-273-8255" className="text-red-600 hover:text-red-800 text-xl font-bold">
                      1-800-273-8255
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Text Support:</p>
                    <p className="text-red-600 text-xl font-bold">
                      Text &ldquo;HELP&rdquo; to 741741
                    </p>
                  </div>
                </div>
              </div>

              {/* Regular CTA Section */}
              <div className="mt-8 bg-purple-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Your Health Matters</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Take the first step towards better health and well-being. Our comprehensive services are here to support you and your family on your wellness journey.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={healthProgram.intakeFormUrl}
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                  >
                    Get Started Today
                  </a>
                  <a
                    href={healthProgram.appointmentSchedulingUrl}
                    className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Edit Permission Comment */}
      {/* TODO: Implement tiered editing permissions
          - Health program managers need HIPAA-compliant access controls
          - Crisis support information must be editable by authorized staff 24/7
          - Behavioral health content requires clinical review before publication
          - Admin has full access with audit trail for sensitive health data
      */}
    </Layout>
  )
}

export default HealthWellBeingPage