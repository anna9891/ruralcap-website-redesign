import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  HomeIcon, 
  BoltIcon, 
  UserGroupIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 1,
    title: 'Housing & Weatherization',
    description: 'Safe, affordable housing solutions and energy-efficient home improvements for rural Alaska families.',
    icon: HomeIcon,
    href: '/services/housing',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Energy Assistance',
    description: 'Programs to help families manage heating costs and improve home energy efficiency.',
    icon: BoltIcon,
    href: '/services/energy',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 3,
    title: 'Child Development',
    description: 'Early childhood education and family support services to give children the best start in life.',
    icon: UserGroupIcon,
    href: '/services/child-development',
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 4,
    title: 'Community Services',
    description: 'Comprehensive support programs addressing the unique needs of rural Alaska communities.',
    icon: HeartIcon,
    href: '/services/community',
    color: 'bg-purple-100 text-purple-600',
  },
]

const ServicesOverview: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section bg-neutral-50" aria-labelledby="services-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We provide comprehensive programs and services designed to meet the unique challenges of rural Alaska communities.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block h-full">
                <div className="card h-full hover:shadow-xl transition-all duration-300 group">
                  <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" aria-hidden={true} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600">
                    {service.description}
                  </p>
                  <div className="mt-4 text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn more →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview