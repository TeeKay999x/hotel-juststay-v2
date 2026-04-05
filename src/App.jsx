import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Rooms from './components/RoomsGrid'
import Services from './components/Services'
import StatsBar from './components/StatsBar'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import ContactUs from './pages/ContactUs'
import BookingModal from './pages/BookingModal'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <HeroSection />
            <AboutSection />
            <WhyChooseUs />
            <StatsBar />
            <Rooms />
            <Services />
            <Testimonials />
          </>
        } />

        <Route path='/contact' element={<ContactUs />} />
        <Route path='/booking' element={<BookingModal />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
