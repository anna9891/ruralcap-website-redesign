import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import AppointmentScheduler from '../../components/AppointmentScheduler'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const programInfo: Record<string, { name: string; title: string; slug: string }> = {
  education: {
    name: 'Education',
    title: 'Education Services',
    slug: 'education'
  },
  housing: {
    name: 'Housing',
    title: 'Housing Services',
    slug: 'housing'
  },
  'health-wellbeing': {
    name: 'Health & Well-Being',
    title: 'Health & Well-Being Services',
    slug: 'health-wellbeing'
  }
}

interface ScheduleAppointmentPageProps {
  program: string
}

const ScheduleAppointmentPage: React.FC<ScheduleAppointmentPageProps> = ({ program }) => {
  const router = useRouter()
  
  // Show loading state while page is being generated
  if (router.isFallback) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Loading...</h1>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  
  const programData = program ? programInfo[program] : null
  
  if (!programData) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Program Not Found</h1>
              <p className="text-gray-600 mb-6">
                The program you&apos;re looking for doesn&apos;t exist or the URL is incorrect.
              </p>
              <Link
                href="/programs"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All Programs →
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  
  return (
    <Layout>
      <Head>
        <title>Schedule Appointment - {programData.title} | RurAL CAP</title>
        <meta name="description" content={`Schedule an appointment with our ${programData.name} program staff`} />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <Link
                href={`/programs/${programData.slug}`}
                className="inline-flex items-center text-blue-100 hover:text-white mb-4"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to {programData.name} Services
              </Link>
              <h1 className="text-4xl font-bold mb-4">Schedule an Appointment</h1>
              <p className="text-xl">
                Book a consultation with our {programData.name} program specialists
              </p>
            </div>
          </div>
        </section>
        
        {/* Appointment Scheduler */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AppointmentScheduler
                programId={program}
                programName={programData.title}
              />
              
              {/* Additional Information */}
              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Before Your Appointment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Prepare a list of questions or topics you&apos;d like to discuss</li>
                  <li>• Have any relevant documents ready (if applicable)</li>
                  <li>• Be ready to share your goals and how we can best support you</li>
                  <li>• If you need to reschedule, please call us at least 24 hours in advance</li>
                </ul>
              </div>
              
              {/* Contact Alternative */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Prefer to speak with someone immediately?
                </p>
                <a
                  href="tel:907-555-0100"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Call us at (907) 555-0100
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all available programs
  const paths = Object.keys(programInfo).map((key) => ({
    params: { program: key }
  }))

  return {
    paths,
    fallback: true // Enable fallback for any new routes
  }
}

export const getStaticProps: GetStaticProps<ScheduleAppointmentPageProps> = async ({ params }) => {
  const program = params?.program as string

  // Validate that the program exists
  if (!program || !programInfo[program]) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      program
    },
    revalidate: 60 // Revalidate every 60 seconds
  }
}

export default ScheduleAppointmentPage