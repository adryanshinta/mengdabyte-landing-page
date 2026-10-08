import { Helmet } from 'react-helmet-async'
import { About } from '../components/sections/About'
import { CTA } from '../components/sections/CTA'
import { FAQ } from '../components/sections/FAQ'
import { Hero } from '../components/sections/Hero'
import { Keunggulan } from '../components/sections/Keunggulan'
import { Programs } from '../components/sections/Programs'
import { Testimonials } from '../components/sections/Testimonials'
import { VisiMisi } from '../components/sections/VisiMisi'
import contentData from '../data/content.json'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_URL } from '../lib/seo'

export function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: contentData.company.name,
    url: SITE_URL,
    email: contentData.company.email,
    telephone: '+6287859228358',
    address: { '@type': 'PostalAddress', streetAddress: contentData.company.address, addressCountry: 'ID' },
    description: DEFAULT_DESCRIPTION,
  }
  return <>
    <Helmet>
      <title>{DEFAULT_TITLE}</title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={SITE_URL} />
      <meta property="og:type" content="website" /><meta property="og:title" content={DEFAULT_TITLE} /><meta property="og:description" content={DEFAULT_DESCRIPTION} /><meta property="og:url" content={SITE_URL} /><meta property="og:site_name" content="Mengdabyte" />
      <meta name="twitter:card" content="summary" /><meta name="twitter:title" content={DEFAULT_TITLE} /><meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
    <main><Hero /><About /><VisiMisi /><Programs /><Keunggulan /><Testimonials /><FAQ /><CTA /></main>
  </>
}
