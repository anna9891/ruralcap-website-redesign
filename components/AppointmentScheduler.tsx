import React, { useState } from 'react'
import { CalendarDaysIcon, ClockIcon, UserIcon, EnvelopeIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { AppointmentSlot, Appointment } from '../types'

interface AppointmentSchedulerProps {
  programId: string
  programName: string
  serviceId?: string
  availableSlots?: AppointmentSlot[]
}

// Mock available slots
const generateMockSlots = (programId: string): AppointmentSlot[] => {
  const slots: AppointmentSlot[] = []
  const today = new Date()
  
  // Generate slots for next 14 days
  for (let day = 1; day <= 14; day++) {
    const date = new Date(today)
    date.setDate(today.getDate() + day)
    
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) continue
    
    // Morning slots
    slots.push({
      id: `${programId}-${day}-morning`,
      date: date.toISOString().split('T')[0],
      startTime: '9:00 AM',
      endTime: '10:00 AM',
      available: Math.random() > 0.3,
      programId
    })
    
    slots.push({
      id: `${programId}-${day}-late-morning`,
      date: date.toISOString().split('T')[0],
      startTime: '10:30 AM',
      endTime: '11:30 AM',
      available: Math.random() > 0.3,
      programId
    })
    
    // Afternoon slots
    slots.push({
      id: `${programId}-${day}-afternoon`,
      date: date.toISOString().split('T')[0],
      startTime: '2:00 PM',
      endTime: '3:00 PM',
      available: Math.random() > 0.3,
      programId
    })
    
    slots.push({
      id: `${programId}-${day}-late-afternoon`,
      date: date.toISOString().split('T')[0],
      startTime: '3:30 PM',
      endTime: '4:30 PM',
      available: Math.random() > 0.3,
      programId
    })
  }
  
  return slots
}

const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({
  programId,
  programName,
  serviceId,
  availableSlots = generateMockSlots(programId)
}) => {
  const [selectedSlot, setSelectedSlot] = useState<AppointmentSlot | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  
  // Get unique dates from available slots
  const availableDates = Array.from(new Set(availableSlots.map(slot => slot.date))).sort()
  
  // Get slots for selected date
  const slotsForDate = selectedDate 
    ? availableSlots.filter(slot => slot.date === selectedDate && slot.available)
    : []
  
  const handleDateChange = (date: string) => {
    setSelectedDate(date)
    setSelectedSlot(null)
  }
  
  const handleSlotSelect = (slot: AppointmentSlot) => {
    setSelectedSlot(slot)
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedSlot) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In production, this would submit to an API
    const appointment: Appointment = {
      id: `apt-${Date.now()}`,
      programId,
      serviceId,
      date: selectedSlot.date,
      time: selectedSlot.startTime,
      duration: 60,
      clientName: formData.name,
      clientEmail: formData.email,
      clientPhone: formData.phone,
      notes: formData.notes,
      status: 'scheduled'
    }
    
    console.log('Appointment scheduled:', appointment)
    
    setIsSubmitting(false)
    setIsConfirmed(true)
  }
  
  if (isConfirmed) {
    return (
      <div className="bg-green-50 p-8 rounded-lg text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Appointment Confirmed!</h3>
        <p className="text-gray-600 mb-4">
          Your appointment for {programName} has been scheduled for:
        </p>
        <p className="text-lg font-medium mb-6">
          {selectedSlot && new Date(selectedSlot.date).toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })} at {selectedSlot?.startTime}
        </p>
        <p className="text-gray-600 mb-6">
          A confirmation email has been sent to {formData.email}
        </p>
        <button
          onClick={() => {
            setIsConfirmed(false)
            setSelectedSlot(null)
            setSelectedDate('')
            setFormData({ name: '', email: '', phone: '', notes: '' })
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Schedule Another Appointment
        </button>
      </div>
    )
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Schedule an Appointment</h3>
      
      {/* Date Selection */}
      <div className="mb-6">
        <label htmlFor="date-select" className="block text-sm font-medium text-gray-700 mb-2">
          <CalendarDaysIcon className="inline h-4 w-4 mr-2" />
          Select a Date
        </label>
        <select
          id="date-select"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Choose a date...</option>
          {availableDates.map(date => (
            <option key={date} value={date}>
              {new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
              })}
            </option>
          ))}
        </select>
      </div>
      
      {/* Time Slot Selection */}
      {selectedDate && (
        <div className="mb-6">
          <p className="block text-sm font-medium text-gray-700 mb-2">
            <ClockIcon className="inline h-4 w-4 mr-2" />
            Available Times
          </p>
          {slotsForDate.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {slotsForDate.map(slot => (
                <button
                  key={slot.id}
                  onClick={() => handleSlotSelect(slot)}
                  className={`px-4 py-2 rounded-lg border-2 transition ${
                    selectedSlot?.id === slot.id
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                >
                  {slot.startTime}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No available slots for this date. Please select another date.</p>
          )}
        </div>
      )}
      
      {/* Contact Information Form */}
      {selectedSlot && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              <UserIcon className="inline h-4 w-4 mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              <EnvelopeIcon className="inline h-4 w-4 mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              <PhoneIcon className="inline h-4 w-4 mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Please share any specific topics or questions you'd like to discuss..."
            />
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
                isSubmitting
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isSubmitting ? 'Scheduling...' : 'Confirm Appointment'}
            </button>
          </div>
        </form>
      )}
      
      {/* Edit Permission Comment */}
      {/* TODO: Implement appointment management permissions
          - Program staff can view and manage appointments for their programs
          - Clients can view and cancel their own appointments
          - Admin can access all appointment data
          - Consider HIPAA compliance for health-related appointments
      */}
    </div>
  )
}

export default AppointmentScheduler