import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import NewsSection from '@/components/NewsSection'
import EventsCalendar from '@/components/EventsCalendar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rural Alaska Community Action Program, Inc. - Empowering Rural Alaska</title>
        <meta name="description" content="RurAL CAP provides essential services to rural Alaska communities including housing, energy assistance, child development, and community services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <ServicesOverview />
        <NewsSection />
        <EventsCalendar />
      </Layout>
    </>
  )
}