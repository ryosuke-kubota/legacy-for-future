import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
import Hero from './components/Hero'
import TableOfContents from './components/TableOfContents'
import GXVision from './components/GXVision'
import ServiceOverview from './components/ServiceOverview'
import SupportContent from './components/SupportContent'
import EffectImage from './components/EffectImage'
import CaseVideos from './components/CaseVideos'
import CaseStudies from './components/CaseStudies'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Breadcrumb />
        <Hero />
        <TableOfContents />
        <GXVision />
        <ServiceOverview />
        <SupportContent />
        <EffectImage />
        <CaseVideos />
        <CaseStudies />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App