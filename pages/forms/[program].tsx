import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import IntakeForm, { mockIntakeForms } from '../../components/IntakeForm'
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

interface IntakeFormPageProps {
  programKey: string
}

const IntakeFormPage: React.FC<IntakeFormPageProps> = ({ programKey }) => {
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
  
  const programData = programKey ? programInfo[programKey] : null
  const intakeForm = programKey ? mockIntakeForms[programKey] : null
  
  if (!programData || !intakeForm) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Form Not Found</h1>
              <p className="text-gray-600 mb-6">
                The form you&apos;re looking for doesn&apos;t exist or the URL is incorrect.
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
        <title>{intakeForm.title} | RurAL CAP</title>
        <meta name="description" content={intakeForm.description} />
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
              <h1 className="text-4xl font-bold mb-4">{programData.title}</h1>
              <p className="text-xl">
                Start your journey with our {programData.name} program
              </p>
            </div>
          </div>
        </section>
        
        {/* Intake Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <IntakeForm
                form={intakeForm}
                programName={programData.title}
              />
              
              {/* Privacy Notice */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Privacy & Confidentiality</h3>
                <p className="text-gray-600 mb-3">
                  Your information is kept strictly confidential and will only be used to:
                </p>
                <ul className="space-y-1 text-gray-600 ml-4">
                  <li>• Determine your eligibility for services</li>
                  <li>• Contact you about available programs</li>
                  <li>• Provide you with the assistance you need</li>
                  <li>• Comply with funding requirements (anonymized data only)</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  We will never share your personal information without your written consent, 
                  except as required by law.
                </p>
              </div>
              
              {/* Alternative Contact */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Need help with this form or prefer to apply by phone?
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
  // Generate paths for all available programs with -intake suffix
  const paths = Object.keys(programInfo).map((key) => ({
    params: { program: `${key}-intake` }
  }))

  return {
    paths,
    fallback: true // Enable fallback for any new routes
  }
}

export const getStaticProps: GetStaticProps<IntakeFormPageProps> = async ({ params }) => {
  const program = params?.program as string
  
  // Only process routes that end with '-intake'
  if (!program || !program.endsWith('-intake')) {
    return {
      notFound: true
    }
  }
  
  const programKey = program.replace('-intake', '')

  // Validate that the program exists
  if (!programInfo[programKey] || !mockIntakeForms[programKey]) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      programKey
    },
    revalidate: 60 // Revalidate every 60 seconds
  }
}

export default IntakeFormPage