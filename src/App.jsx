import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Footer from './components/Footer'
import FilmGrain from './components/FilmGrain'
import LoadingScreen from './components/LoadingScreen'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Speaking from './pages/Speaking'
import Conquer from './pages/Conquer'
import Events from './pages/Events'
import Blog from './pages/Blog'
import Press from './pages/Press'
import Reel from './pages/Reel'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <LoadingScreen />
      <FilmGrain />
      <ScrollToTop />
      <Nav />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/speaking" element={<PageTransition><Speaking /></PageTransition>} />
            <Route path="/conquer" element={<PageTransition><Conquer /></PageTransition>} />
            <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/reel" element={<PageTransition><Reel /></PageTransition>} />
            <Route path="/press" element={<PageTransition><Press /></PageTransition>} />
            <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
