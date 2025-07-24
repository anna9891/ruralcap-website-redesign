import React, { useState } from 'react'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { IntakeForm as IntakeFormType, FormField } from '../types'

interface IntakeFormProps {
  form: IntakeFormType
  programName: string
}

// Mock intake forms for different programs
export const mockIntakeForms: Record<string, IntakeFormType> = {
  education: {
    id: 'education-intake',
    programId: 'education',
    title: 'Education Services Interest Form',
    description: 'Tell us about your educational goals and how we can help you achieve them.',
    submitUrl: '/api/forms/education',
    fields: [
      {
        id: 'service-type',
        type: 'select',
        label: 'Which service are you interested in?',
        name: 'serviceType',
        required: true,
        options: [
          'Early Childhood Education (Head Start)',
          'Adult Education / GED',
          'Workforce Development',
          'Career Counseling',
          'Other'
        ]
      },
      {
        id: 'full-name',
        type: 'text',
        label: 'Full Name',
        name: 'fullName',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        required: true
      },
      {
        id: 'phone',
        type: 'phone',
        label: 'Phone Number',
        name: 'phone',
        required: true
      },
      {
        id: 'preferred-contact',
        type: 'select',
        label: 'Preferred Contact Method',
        name: 'preferredContact',
        required: true,
        options: ['Phone', 'Email', 'Text']
      },
      {
        id: 'location',
        type: 'text',
        label: 'City/Village',
        name: 'location',
        required: true
      },
      {
        id: 'goals',
        type: 'textarea',
        label: 'What are your educational goals?',
        name: 'goals',
        required: true
      },
      {
        id: 'availability',
        type: 'checkbox',
        label: 'I am available for virtual/online programs',
        name: 'virtualAvailable',
        required: false
      }
    ]
  },
  housing: {
    id: 'housing-intake',
    programId: 'housing',
    title: 'Housing Assistance Application',
    description: 'Apply for housing assistance programs including weatherization, rental assistance, and homeownership support.',
    submitUrl: '/api/forms/housing',
    fields: [
      {
        id: 'assistance-type',
        type: 'select',
        label: 'Type of Assistance Needed',
        name: 'assistanceType',
        required: true,
        options: [
          'Weatherization',
          'Emergency Rental Assistance',
          'Long-term Rental Assistance',
          'Homeownership Counseling',
          'Housing Development Wait List',
          'Other'
        ]
      },
      {
        id: 'full-name',
        type: 'text',
        label: 'Full Name',
        name: 'fullName',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        required: true
      },
      {
        id: 'phone',
        type: 'phone',
        label: 'Phone Number',
        name: 'phone',
        required: true
      },
      {
        id: 'current-address',
        type: 'text',
        label: 'Current Address',
        name: 'currentAddress',
        required: true
      },
      {
        id: 'household-size',
        type: 'select',
        label: 'Household Size',
        name: 'householdSize',
        required: true,
        options: ['1', '2', '3', '4', '5', '6', '7', '8+']
      },
      {
        id: 'monthly-income',
        type: 'select',
        label: 'Total Monthly Household Income',
        name: 'monthlyIncome',
        required: true,
        options: [
          'Under $1,000',
          '$1,000 - $2,000',
          '$2,000 - $3,000',
          '$3,000 - $4,000',
          '$4,000 - $5,000',
          'Over $5,000'
        ]
      },
      {
        id: 'housing-situation',
        type: 'textarea',
        label: 'Please describe your current housing situation and needs',
        name: 'housingSituation',
        required: true
      },
      {
        id: 'emergency',
        type: 'checkbox',
        label: 'This is an emergency housing situation',
        name: 'isEmergency',
        required: false
      }
    ]
  },
  'health-wellbeing': {
    id: 'health-intake',
    programId: 'health-wellbeing',
    title: 'Health & Well-Being Services Request',
    description: 'Connect with our health and wellness services including behavioral health, nutrition assistance, and elder care.',
    submitUrl: '/api/forms/health',
    fields: [
      {
        id: 'service-area',
        type: 'select',
        label: 'Primary Service Need',
        name: 'serviceArea',
        required: true,
        options: [
          'Behavioral Health Services',
          'Nutrition Assistance',
          'Elder Care Services',
          'Wellness Programs',
          'Crisis Support',
          'Multiple Services'
        ]
      },
      {
        id: 'full-name',
        type: 'text',
        label: 'Full Name',
        name: 'fullName',
        required: true
      },
      {
        id: 'date-of-birth',
        type: 'date',
        label: 'Date of Birth',
        name: 'dateOfBirth',
        required: true
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        required: true
      },
      {
        id: 'phone',
        type: 'phone',
        label: 'Phone Number',
        name: 'phone',
        required: true
      },
      {
        id: 'location',
        type: 'text',
        label: 'City/Village',
        name: 'location',
        required: true
      },
      {
        id: 'insurance',
        type: 'select',
        label: 'Insurance Status',
        name: 'insurance',
        required: true,
        options: [
          'Private Insurance',
          'Medicaid',
          'Medicare',
          'VA Benefits',
          'No Insurance',
          'Other'
        ]
      },
      {
        id: 'needs-description',
        type: 'textarea',
        label: 'Please describe your health/wellness needs',
        name: 'needsDescription',
        required: true
      },
      {
        id: 'consent',
        type: 'checkbox',
        label: 'I consent to be contacted by RurAL CAP staff regarding services',
        name: 'consent',
        required: true
      }
    ]
  }
}

const IntakeForm: React.FC<IntakeFormProps> = ({ form, programName }) => {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleInputChange = (field: FormField, value: any) => {
    setFormData({
      ...formData,
      [field.name]: value
    })
    
    // Clear error when user starts typing
    if (errors[field.name]) {
      setErrors({
        ...errors,
        [field.name]: ''
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    form.fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`
      }
      
      // Email validation
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Please enter a valid email address'
        }
      }
      
      // Phone validation
      if (field.type === 'phone' && formData[field.name]) {
        const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/
        if (!phoneRegex.test(formData[field.name].replace(/\D/g, ''))) {
          newErrors[field.name] = 'Please enter a valid 10-digit phone number'
        }
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In production, this would submit to the actual API
      console.log('Form submitted:', {
        formId: form.id,
        programId: form.programId,
        data: formData
      })
      
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError('An error occurred while submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-8 rounded-lg text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Form Submitted Successfully!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your interest in {programName} services.
        </p>
        <p className="text-gray-600 mb-6">
          A member of our team will contact you within 2-3 business days to discuss next steps.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({})
            setErrors({})
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Another Form
        </button>
      </div>
    )
  }

  const renderField = (field: FormField) => {
    const commonClasses = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
    const errorClasses = errors[field.name] ? "border-red-500" : ""
    
    switch (field.type) {
      case 'text':
      case 'email':
      case 'phone':
      case 'date':
        return (
          <input
            type={field.type}
            id={field.id}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className={`${commonClasses} ${errorClasses}`}
            placeholder={field.type === 'phone' ? '(907) 555-0123' : ''}
          />
        )
      
      case 'select':
        return (
          <select
            id={field.id}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field, e.target.value)}
            className={`${commonClasses} ${errorClasses}`}
          >
            <option value="">Please select...</option>
            {field.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        )
      
      case 'textarea':
        return (
          <textarea
            id={field.id}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field, e.target.value)}
            rows={4}
            className={`${commonClasses} ${errorClasses}`}
          />
        )
      
      case 'checkbox':
        return (
          <div className="flex items-start">
            <input
              type="checkbox"
              id={field.id}
              name={field.name}
              checked={formData[field.name] || false}
              onChange={(e) => handleInputChange(field, e.target.checked)}
              className="mt-1 mr-3"
            />
            <label htmlFor={field.id} className="text-gray-700">
              {field.label}
            </label>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{form.title}</h3>
      <p className="text-gray-600 mb-6">{form.description}</p>
      
      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <ExclamationCircleIcon className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
          <p className="text-red-800">{submitError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {form.fields.map(field => (
          <div key={field.id}>
            {field.type !== 'checkbox' && (
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
            )}
            {renderField(field)}
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
            )}
          </div>
        ))}
        
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
              isSubmitting
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Form'}
          </button>
        </div>
      </form>
      
      <p className="mt-4 text-xs text-gray-500">
        * Required fields. Your information will be kept confidential and used only to provide services.
      </p>
      
      {/* Edit Permission Comment */}
      {/* TODO: Implement form management permissions
          - Program managers can create and edit forms for their programs
          - Staff can view form submissions and update status
          - Consider data encryption for sensitive information
          - Implement audit trail for form submissions
      */}
    </div>
  )
}

export default IntakeForm