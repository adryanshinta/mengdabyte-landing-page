export interface Course {
  id: string
  slug: string
  title: string
  category: 'basic' | 'corporate'
  description: string
  longDescription: string
  duration: string
  price: string
  priceOriginal?: string
  level: 'Pemula' | 'Menengah' | 'Lanjutan'
  features: string[]
  hasCertificate: boolean
  isComingSoon: boolean
  iconName: 'Languages' | 'Monitor' | 'Code2' | 'Briefcase'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  message: string
  avatarUrl?: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface CompanyInfo {
  name: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  email: string
  phone: string
  address: string
  website: string
}

export interface ContentData {
  company: CompanyInfo
  courses: Course[]
  testimonials: Testimonial[]
  faqs: FAQ[]
}
