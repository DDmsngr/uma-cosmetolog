import { lazy, Suspense } from 'react'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import MobileCTA from './components/MobileCTA'
import Marquee from './components/Marquee'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <main className="min-h-screen bg-[#EDE4D3] overflow-x-hidden">
      <ScrollProgress />
      <Hero />
      <Marquee />
      <Suspense fallback={<div className="h-40" />}>
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
      <MobileCTA />
    </main>
  )
}
