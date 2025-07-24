export const SITE_CONFIG = {
  name: 'Rural Alaska Community Action Program',
  shortName: 'RurAL CAP',
  description: 'Empowering rural Alaska communities through comprehensive services and programs.',
  url: 'https://www.ruralcap.org',
  phone: '(907) 279-1251',
  tollFree: '1-800-478-4775',
  email: 'info@ruralcap.org',
  address: {
    street: '731 E. 8th Avenue',
    city: 'Anchorage',
    state: 'AK',
    zip: '99501',
  },
}

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/ruralcap',
  twitter: 'https://twitter.com/ruralcap',
  linkedin: 'https://www.linkedin.com/company/ruralcap',
  youtube: 'https://www.youtube.com/ruralcap',
}

export const SERVICE_CATEGORIES = {
  HOUSING: 'Housing & Weatherization',
  ENERGY: 'Energy Assistance',
  CHILD: 'Child Development',
  COMMUNITY: 'Community Services',
} as const

export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const