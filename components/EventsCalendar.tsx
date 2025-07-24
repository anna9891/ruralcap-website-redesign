import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Event } from '../types'

// Mock events data with program associations
const upcomingEvents: Event[] = [
  {
    id: 1,
    title: 'Community Resource Fair',
    description: 'Connect with all RurAL CAP programs and services',
    date: '2024-02-15',
    startTime: '10:00 AM',
    endTime: '2:00 PM',
    location: 'Anchorage Community Center',
    type: 'Community',
  },
  {
    id: 2,
    title: 'Energy Assistance Workshop',
    description: 'Learn about weatherization and energy savings programs',
    date: '2024-02-20',
    startTime: '6:00 PM',
    endTime: '7:30 PM',
    location: 'Virtual Event',
    type: 'Workshop',
    program: 'Housing',
    isVirtual: true,
  },
  {
    id: 3,
    title: 'Housing Application Assistance',
    description: 'Get help with housing program applications',
    date: '2024-02-22',
    startTime: '9:00 AM',
    endTime: '12:00 PM',
    location: 'Fairbanks Office',
    type: 'Services',
    program: 'Housing',
  },
  {
    id: 4,
    title: 'Parent & Child Playgroup',
    description: 'Early childhood development activities and parent support',
    date: '2024-02-25',
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    location: 'Nome Family Center',
    type: 'Family',
    program: 'Education',
  },
]

interface EventsCalendarProps {
  events?: Event[]
  filterByProgram?: 'Education' | 'Housing' | 'Health & Well-Being'
  showProgramFilter?: boolean
}

const EventsCalendar: React.FC<EventsCalendarProps> = ({ 
  events = upcomingEvents, 
  filterByProgram,
  showProgramFilter = true 
}) => {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedProgram, setSelectedProgram] = useState<string>(filterByProgram || 'all')

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'Community', label: 'Community' },
    { value: 'Workshop', label: 'Workshops' },
    { value: 'Services', label: 'Services' },
    { value: 'Family', label: 'Family' },
  ]

  const programs = [
    { value: 'all', label: 'All Programs' },
    { value: 'Education', label: 'Education' },
    { value: 'Housing', label: 'Housing' },
    { value: 'Health & Well-Being', label: 'Health & Well-Being' },
  ]

  // Apply filters
  let filteredEvents = events
  
  // Filter by type
  if (selectedType !== 'all') {
    filteredEvents = filteredEvents.filter(event => event.type === selectedType)
  }
  
  // Filter by program (either from prop or selection)
  const programFilter = filterByProgram || (selectedProgram !== 'all' ? selectedProgram : null)
  if (programFilter) {
    filteredEvents = filteredEvents.filter(event => event.program === programFilter)
  }

  return (
    <section className="section bg-neutral-50" aria-labelledby="events-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 id="events-heading" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-neutral-600">
              Join us for community events, workshops, and assistance programs.
            </p>
          </div>
          <Link
            href="/events"
            className="btn-primary"
          >
            View Full Calendar
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Event Type Filter */}
          <div>
            <label htmlFor="event-filter" className="sr-only">
              Filter events by type
            </label>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedType === type.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                  aria-pressed={selectedType === type.value}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Program Filter - only show if enabled */}
          {showProgramFilter && (
            <div>
              <label htmlFor="program-filter" className="sr-only">
                Filter events by program
              </label>
              <div className="flex flex-wrap gap-2">
                {programs.map((program) => (
                  <button
                    key={program.value}
                    onClick={() => setSelectedProgram(program.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedProgram === program.value
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100'
                    }`}
                    aria-pressed={selectedProgram === program.value}
                  >
                    {program.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full mb-3">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    <Link href={`/events/${event.id}`} className="hover:text-primary-600 transition-colors duration-200">
                      {event.title}
                    </Link>
                  </h3>
                  <div className="space-y-1 text-sm text-neutral-600">
                    <p className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" aria-hidden={true} />
                      <time dateTime={event.date}>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </p>
                    <p className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-2" aria-hidden={true} />
                      {event.startTime} - {event.endTime}
                    </p>
                    <p className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-2" aria-hidden={true} />
                      {event.location}
                      {event.isVirtual && <span className="ml-1 text-primary-600">(Virtual)</span>}
                    </p>
                    {event.program && (
                      <p className="text-xs text-primary-600 font-medium mt-2">
                        {event.program} Program
                      </p>
                    )}
                  </div>
                </div>
                <Link
                  href={`/events/${event.id}`}
                  className="ml-4 p-2 text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                  aria-label={`View details for ${event.title}`}
                >
                  <ChevronRightIcon className="h-5 w-5" aria-hidden={true} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">No events found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

// Icons (in production, import from @heroicons/react)
const CalendarIcon: React.FC<{ className?: string; 'aria-hidden'?: boolean }> = ({ className, ...props }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const ClockIcon: React.FC<{ className?: string; 'aria-hidden'?: boolean }> = ({ className, ...props }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const MapPinIcon: React.FC<{ className?: string; 'aria-hidden'?: boolean }> = ({ className, ...props }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default EventsCalendar