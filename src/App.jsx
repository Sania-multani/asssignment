import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import BookSteps from './components/BookSteps'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero onPlayDemo={() => setIsVideoOpen(true)} />
        <Services />
        <Destinations />
        <BookSteps />
        <Testimonials />
        <Partners />
        <Subscribe />
      </main>
      <Footer />
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </MotionConfig>
  )
}

export default App
