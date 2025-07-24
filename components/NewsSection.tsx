import React from 'react'
import Link from 'next/link'
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// Mock data - in production, this would come from an API or CMS
const newsItems = [
  {
    id: 1,
    title: 'New Energy Assistance Program Launches for 2024',
    excerpt: 'RurAL CAP announces expanded energy assistance programs to help families manage heating costs this winter.',
    date: '2024-01-15',
    category: 'Programs',
    image: '/images/news-1.jpg',
  },
  {
    id: 2,
    title: 'Community Partnership Brings New Housing to Nome',
    excerpt: 'Collaboration with local organizations results in 20 new affordable housing units for Nome residents.',
    date: '2024-01-10',
    category: 'Housing',
    image: '/images/news-2.jpg',
  },
  {
    id: 3,
    title: 'Early Childhood Education Center Opens in Bethel',
    excerpt: 'New state-of-the-art facility will serve 50 children and their families with comprehensive development programs.',
    date: '2024-01-05',
    category: 'Education',
    image: '/images/news-3.jpg',
  },
]

const NewsSection: React.FC = () => {
  return (
    <section className="section" aria-labelledby="news-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="news-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-xl text-neutral-600">
              Stay informed about our programs, initiatives, and community impact.
            </p>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            View all news
            <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden={true} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="card hover:shadow-xl transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 mb-4 bg-neutral-200 rounded-md overflow-hidden">
                {/* In production, use Next.js Image component */}
                <div className="w-full h-48 bg-gradient-to-r from-primary-100 to-primary-200"></div>
              </div>
              <div className="flex items-center text-sm text-neutral-500 mb-2">
                <CalendarIcon className="h-4 w-4 mr-1" aria-hidden={true} />
                <time dateTime={item.date}>
                  {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span className="mx-2">•</span>
                <span className="text-primary-600">{item.category}</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                <Link href={`/news/${item.id}`} className="hover:text-primary-600 transition-colors duration-200">
                  {item.title}
                </Link>
              </h3>
              <p className="text-neutral-600 mb-4">{item.excerpt}</p>
              <Link
                href={`/news/${item.id}`}
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Read more
                <ArrowRightIcon className="ml-1 h-4 w-4" aria-hidden={true} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/news" className="btn-primary">
            View all news
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection