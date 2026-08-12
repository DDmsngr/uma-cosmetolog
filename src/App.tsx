import { lazy, Suspense } from 'react'
import Hero from './components/Hero'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <main className="min-h-screen bg-[#EDE4D3]">
      <Hero />
      <Suspense fallback={<div className="h-40" />}>
        <About />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}
