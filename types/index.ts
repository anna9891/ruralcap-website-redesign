export interface NewsItem {
  id: number
  title: string
  excerpt: string
  content?: string
  date: string
  category: string
  image?: string
  author?: string
  tags?: string[]
}

export interface Event {
  id: number
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  type: 'Community' | 'Workshop' | 'Services' | 'Family'
  program?: 'Education' | 'Housing' | 'Health & Well-Being' // Program-specific events
  isVirtual?: boolean
  registrationUrl?: string
  capacity?: number
  attendees?: number
}

export interface Service {
  id: string
  title: string
  description: string
  category: string
  icon?: string
  features?: string[]
  eligibility?: string[]
  contactInfo?: ContactInfo
}

export interface ContactInfo {
  phone?: string
  email?: string
  address?: Address
  hours?: string[]
}

export interface Address {
  street: string
  city: string
  state: string
  zip: string
}

export interface Staff {
  id: string
  name: string
  title: string
  department: string
  bio?: string
  image?: string
  email?: string
  phone?: string
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'document' | 'form' | 'guide' | 'video'
  url: string
  fileSize?: string
  lastUpdated: string
  category: string
  program?: 'Education' | 'Housing' | 'Health & Well-Being' // Program association
  topic?: string // Topic-based filtering
  accessLevel?: 'public' | 'staff' | 'admin' // Tiered access control
}

// Program-specific types
export interface Program {
  id: string
  name: 'Education' | 'Housing' | 'Health & Well-Being'
  slug: 'education' | 'housing' | 'health-wellbeing'
  title: string
  description: string
  overview: string
  services: Service[]
  contactInfo: ContactInfo
  intakeFormUrl?: string
  appointmentSchedulingUrl?: string
  storyMapUrl?: string // Story maps integration
}

// Form types for intake/interest
export interface FormField {
  id: string
  type: 'text' | 'email' | 'phone' | 'select' | 'checkbox' | 'textarea' | 'date'
  label: string
  name: string
  required: boolean
  options?: string[]
  validation?: {
    pattern?: string
    message?: string
  }
}

export interface IntakeForm {
  id: string
  programId: string
  title: string
  description: string
  fields: FormField[]
  submitUrl: string
}

// Appointment scheduling
export interface AppointmentSlot {
  id: string
  date: string
  startTime: string
  endTime: string
  available: boolean
  programId: string
  serviceId?: string
}

export interface Appointment {
  id: string
  programId: string
  serviceId?: string
  date: string
  time: string
  duration: number
  clientName: string
  clientEmail: string
  clientPhone?: string
  notes?: string
  status: 'scheduled' | 'confirmed' | 'cancelled' | 'completed'
}

// User permissions for tiered editing
export interface UserPermission {
  userId: string
  role: 'public' | 'staff' | 'program-manager' | 'admin'
  programAccess?: ('Education' | 'Housing' | 'Health & Well-Being')[]
  permissions: {
    canEditContent: boolean
    canManageEvents: boolean
    canAccessReports: boolean
    canManageUsers: boolean
    canApproveContent: boolean
  }
}