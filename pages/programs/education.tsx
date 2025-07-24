import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import EventsCalendar from '../../components/EventsCalendar'
import { Event, Program } from '../../types'
import { AcademicCapIcon, BookOpenIcon, UserGroupIcon, CalendarDaysIcon, MapIcon, ClipboardDocumentListIcon, ClockIcon } from '@heroicons/react/24/outline'

// Mock data for Education program
const educationProgram: Program = {
  id: 'education',
  name: 'Education',
  slug: 'education',
  title: 'Education Services',
  description: 'Empowering communities through educational opportunities and workforce development',
  overview: 'Our Education program provides comprehensive support for early childhood education, adult literacy, workforce development, and career pathways. We believe that education is the foundation for economic self-sufficiency and community well-being.',
  services: [],
  contactInfo: {
    phone: '(907) 555-0102',
    email: 'education@ruralcap.org',
    address: {
      street: '731 E. 8th Avenue',
      city: 'Anchorage',
      state: 'AK',
      zip: '99501'
    },
    hours: ['Monday-Friday: 8:00 AM - 5:00 PM', 'Saturday: By appointment']
  },
  intakeFormUrl: '/forms/education-intake',
  appointmentSchedulingUrl: '/schedule/education',
  storyMapUrl: 'https://storymaps.ruralcap.org/education'
}

// Mock education-specific events
const educationEvents: Event[] = [
  {
    id: 1,
    title: 'Early Childhood Development Workshop',
    description: 'Learn about child development milestones and educational activities',
    date: '2025-08-15',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    location: 'RurAL CAP Main Office',
    type: 'Workshop',
    program: 'Education',
    registrationUrl: '/register/ecd-workshop'
  },
  {
    id: 2,
    title: 'Adult Literacy Classes - Fall Session',
    description: 'Improve reading, writing, and math skills for personal and professional growth',
    date: '2025-09-01',
    startTime: '6:00 PM',
    endTime: '8:00 PM',
    location: 'Virtual',
    type: 'Services',
    program: 'Education',
    isVirtual: true,
    registrationUrl: '/register/adult-literacy'
  }
]

const EducationPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Education Services - RurAL CAP</title>
        <meta name="description" content="Educational opportunities and workforce development programs for rural Alaska communities" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center mb-4">
                <AcademicCapIcon className="h-10 w-10 mr-3" />
                <h1 className="text-4xl font-bold">{educationProgram.title}</h1>
              </div>
              <p className="text-xl mb-8">{educationProgram.description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={educationProgram.intakeFormUrl}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
                >
                  <ClipboardDocumentListIcon className="h-5 w-5 mr-2" />
                  Apply for Services
                </a>
                <a
                  href={educationProgram.appointmentSchedulingUrl}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition flex items-center"
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
                {educationProgram.overview}
              </p>

              {/* Key Service Areas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <BookOpenIcon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Early Childhood Education</h3>
                  <p className="text-gray-600">
                    Head Start and Early Head Start programs supporting children ages 0-5
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <UserGroupIcon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Adult Education</h3>
                  <p className="text-gray-600">
                    GED preparation, literacy programs, and continuing education opportunities
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <AcademicCapIcon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Workforce Development</h3>
                  <p className="text-gray-600">
                    Job training, career counseling, and employment assistance services
                  </p>
                </div>
              </div>

              {/* Story Maps Integration */}
              {educationProgram.storyMapUrl && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                  <div className="flex items-center mb-4">
                    <MapIcon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold">Success Stories & Impact</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Explore interactive stories showcasing the impact of our education programs across rural Alaska communities.
                  </p>
                  {/* Story Map Placeholder - In production, this would be an iframe or integrated component */}
                  <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 mb-4">Story Map Integration</p>
                      <a
                        href={educationProgram.storyMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
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
                <CalendarDaysIcon className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Upcoming Education Events</h2>
              </div>
              
              {/* Program-specific calendar showing only education events */}
              <EventsCalendar 
                events={educationEvents} 
                filterByProgram="Education"
                showProgramFilter={false}
              />

              <div className="text-center mt-8">
                <a
                  href="/events?program=education"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  View All Education Events →
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
                      <a href={`tel:${educationProgram.contactInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                        {educationProgram.contactInfo.phone}
                      </a>
                    </p>
                    <p className="flex items-start">
                      <span className="font-semibold mr-2">Email:</span>
                      <a href={`mailto:${educationProgram.contactInfo.email}`} className="text-blue-600 hover:text-blue-800">
                        {educationProgram.contactInfo.email}
                      </a>
                    </p>
                    <div>
                      <p className="font-semibold mb-1">Address:</p>
                      <p className="text-gray-600">
                        {educationProgram.contactInfo.address?.street}<br />
                        {educationProgram.contactInfo.address?.city}, {educationProgram.contactInfo.address?.state} {educationProgram.contactInfo.address?.zip}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Office Hours:</p>
                      {educationProgram.contactInfo.hours?.map((hours, index) => (
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
                      <Link href="/resources?program=education" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">→</span>
                        Education Resources & Forms
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources?program=education&type=guide" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">→</span>
                        Program Guides
                      </Link>
                    </li>
                    <li>
                      <a href="/faq/education" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">→</span>
                        Frequently Asked Questions
                      </a>
                    </li>
                    <li>
                      <a href="/success-stories/education" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <span className="mr-2">→</span>
                        Success Stories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Take the first step towards your educational goals. Our team is here to help you explore opportunities and find the right program for your needs.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href={educationProgram.intakeFormUrl}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Complete Interest Form
                  </a>
                  <a
                    href={educationProgram.appointmentSchedulingUrl}
                    className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
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
          - Program managers can edit their program's content
          - Staff can update events and resources
          - Admin has full access
          Component should check user permissions before showing edit buttons
      */}
    </Layout>
  )
}

export default EducationPage