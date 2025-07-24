import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { Resource } from '../../types'
import { DocumentIcon, DocumentTextIcon, VideoCameraIcon, BookOpenIcon, ArrowDownTrayIcon, FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

// Mock resources data
const mockResources: Resource[] = [
  // Education Resources
  {
    id: '1',
    title: 'Head Start Enrollment Guide',
    description: 'Complete guide for enrolling your child in Head Start programs',
    type: 'document',
    url: '/resources/headstart-enrollment-guide.pdf',
    fileSize: '2.3 MB',
    lastUpdated: '2025-07-15',
    category: 'Enrollment',
    program: 'Education',
    topic: 'early-childhood',
    accessLevel: 'public'
  },
  {
    id: '2',
    title: 'Adult Education Class Schedule',
    description: 'Current schedule for GED preparation and literacy classes',
    type: 'document',
    url: '/resources/adult-education-schedule.pdf',
    fileSize: '1.1 MB',
    lastUpdated: '2025-07-20',
    category: 'Schedules',
    program: 'Education',
    topic: 'adult-education',
    accessLevel: 'public'
  },
  {
    id: '3',
    title: 'Workforce Development Training Video',
    description: 'Introduction to career planning and job search strategies',
    type: 'video',
    url: '/resources/workforce-development-intro',
    lastUpdated: '2025-07-10',
    category: 'Training',
    program: 'Education',
    topic: 'workforce',
    accessLevel: 'public'
  },
  
  // Housing Resources
  {
    id: '4',
    title: 'Weatherization Application Form',
    description: 'Application for home weatherization assistance program',
    type: 'form',
    url: '/resources/weatherization-application.pdf',
    fileSize: '890 KB',
    lastUpdated: '2025-07-18',
    category: 'Applications',
    program: 'Housing',
    topic: 'weatherization',
    accessLevel: 'public'
  },
  {
    id: '5',
    title: 'First-Time Homebuyer Guide',
    description: 'Comprehensive guide to purchasing your first home in Alaska',
    type: 'guide',
    url: '/resources/homebuyer-guide.pdf',
    fileSize: '4.5 MB',
    lastUpdated: '2025-07-05',
    category: 'Guides',
    program: 'Housing',
    topic: 'homeownership',
    accessLevel: 'public'
  },
  {
    id: '6',
    title: 'Emergency Housing Assistance Form',
    description: 'Application for emergency rental and housing assistance',
    type: 'form',
    url: '/resources/emergency-housing-form.pdf',
    fileSize: '1.2 MB',
    lastUpdated: '2025-07-22',
    category: 'Applications',
    program: 'Housing',
    topic: 'emergency-assistance',
    accessLevel: 'public'
  },
  
  // Health & Well-Being Resources
  {
    id: '7',
    title: 'Behavioral Health Services Guide',
    description: 'Overview of mental health and substance abuse services',
    type: 'guide',
    url: '/resources/behavioral-health-guide.pdf',
    fileSize: '3.1 MB',
    lastUpdated: '2025-07-12',
    category: 'Service Guides',
    program: 'Health & Well-Being',
    topic: 'behavioral-health',
    accessLevel: 'public'
  },
  {
    id: '8',
    title: 'Elder Nutrition Program Application',
    description: 'Apply for meal delivery and congregate meal services',
    type: 'form',
    url: '/resources/elder-nutrition-application.pdf',
    fileSize: '750 KB',
    lastUpdated: '2025-07-20',
    category: 'Applications',
    program: 'Health & Well-Being',
    topic: 'elder-care',
    accessLevel: 'public'
  },
  {
    id: '9',
    title: 'Wellness Workshop Series Videos',
    description: 'Video series on nutrition, exercise, and healthy living',
    type: 'video',
    url: '/resources/wellness-workshop-series',
    lastUpdated: '2025-07-08',
    category: 'Educational Videos',
    program: 'Health & Well-Being',
    topic: 'wellness',
    accessLevel: 'public'
  },
  
  // Staff-only resources (example)
  {
    id: '10',
    title: 'Program Reporting Templates',
    description: 'Internal templates for program reporting and metrics',
    type: 'document',
    url: '/resources/staff/reporting-templates.xlsx',
    fileSize: '450 KB',
    lastUpdated: '2025-07-23',
    category: 'Staff Resources',
    program: 'Education',
    topic: 'administration',
    accessLevel: 'staff'
  }
]

const ResourceLibraryPage: React.FC = () => {
  const router = useRouter()
  const [resources, setResources] = useState<Resource[]>([])
  const [filteredResources, setFilteredResources] = useState<Resource[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProgram, setSelectedProgram] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedTopic, setSelectedTopic] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)
  
  // Get unique topics from resources
  const topics = Array.from(new Set(mockResources.map(r => r.topic).filter(Boolean)))
  
  useEffect(() => {
    // Check URL parameters for initial filters
    const { program, type, topic } = router.query
    if (program && typeof program === 'string') setSelectedProgram(program)
    if (type && typeof type === 'string') setSelectedType(type)
    if (topic && typeof topic === 'string') setSelectedTopic(topic)
    
    // In production, this would fetch from an API
    // For now, filter out staff-only resources for public users
    const publicResources = mockResources.filter(r => r.accessLevel === 'public')
    setResources(publicResources)
  }, [router.query])
  
  useEffect(() => {
    // Apply filters
    let filtered = resources
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Program filter
    if (selectedProgram !== 'all') {
      filtered = filtered.filter(resource => resource.program === selectedProgram)
    }
    
    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(resource => resource.type === selectedType)
    }
    
    // Topic filter
    if (selectedTopic !== 'all') {
      filtered = filtered.filter(resource => resource.topic === selectedTopic)
    }
    
    setFilteredResources(filtered)
  }, [searchTerm, selectedProgram, selectedType, selectedTopic, resources])
  
  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'document':
        return <DocumentIcon className="h-5 w-5 text-red-500" />
      case 'form':
        return <DocumentTextIcon className="h-5 w-5 text-blue-500" />
      case 'guide':
        return <BookOpenIcon className="h-5 w-5 text-green-500" />
      case 'video':
        return <VideoCameraIcon className="h-5 w-5 text-purple-500" />
      default:
        return <DocumentTextIcon className="h-5 w-5 text-gray-500" />
    }
  }
  
  const getProgramColor = (program?: string) => {
    switch (program) {
      case 'Education':
        return 'bg-blue-100 text-blue-800'
      case 'Housing':
        return 'bg-green-100 text-green-800'
      case 'Health & Well-Being':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  return (
    <Layout>
      <Head>
        <title>Resource Library - RurAL CAP</title>
        <meta name="description" content="Access forms, guides, videos, and documents for all RurAL CAP programs" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Resource Library</h1>
            <p className="text-xl">Access forms, guides, videos, and documents for all our programs</p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-6">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="mb-4 flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
              >
                <FunnelIcon className="h-5 w-5 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              {/* Filters */}
              {showFilters && (
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="program-filter" className="block text-sm font-medium text-gray-700 mb-2">
                      Program
                    </label>
                    <select
                      id="program-filter"
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="all">All Programs</option>
                      <option value="Education">Education</option>
                      <option value="Housing">Housing</option>
                      <option value="Health & Well-Being">Health & Well-Being</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">
                      Resource Type
                    </label>
                    <select
                      id="type-filter"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="all">All Types</option>
                      <option value="document">Documents</option>
                      <option value="form">Forms</option>
                      <option value="guide">Guides</option>
                      <option value="video">Videos</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="topic-filter" className="block text-sm font-medium text-gray-700 mb-2">
                      Topic
                    </label>
                    <select
                      id="topic-filter"
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="all">All Topics</option>
                      {topics.map(topic => (
                        <option key={topic} value={topic}>
                          {topic?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              
              {/* Results Count */}
              <p className="text-gray-600">
                Showing {filteredResources.length} of {resources.length} resources
              </p>
            </div>
          </div>
        </section>
        
        {/* Resources Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredResources.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map(resource => (
                    <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-3xl mr-3">
                            {getResourceIcon(resource.type)}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProgramColor(resource.program)}`}>
                            {resource.program}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                          {resource.fileSize && <span>{resource.fileSize}</span>}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Updated: {new Date(resource.lastUpdated).toLocaleDateString()}
                          </span>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                          >
                            <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
                            {resource.type === 'video' ? 'Watch' : 'Download'}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedProgram('all')
                      setSelectedType('all')
                      setSelectedTopic('all')
                    }}
                    className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help Finding Resources?</h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help you find the right resources and answer any questions you may have.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  Contact Us
                </a>
                <a
                  href="/faq"
                  className="bg-white text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
                >
                  View FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Edit Permission Comment */}
      {/* TODO: Implement resource management permissions
          - Program managers can upload/edit resources for their programs
          - Staff can update resource metadata and descriptions
          - Admin can manage all resources and set access levels
          - Consider version control for important documents
          - Implement secure file storage with access controls
      */}
    </Layout>
  )
}

export default ResourceLibraryPage