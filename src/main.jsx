import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' */
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Contact from './pages/Contact'
import Realisations from './pages/FicheRealisations'
import MentionsLegales from './pages/MentionsLegales'
import Error from './pages/Error'
import ScrollToTop from './components/Utils/ScrollToTop'
import './style/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
      <ScrollToTop /> 
        < Header />
          <Routes>
            <Route path="/portfolio" element={<Home />} />  
            <Route path="/portfolio-a-propos" element={<Apropos />} />
            <Route path="/portfolio-realisations/:id" element={<Realisations />}></Route>
            <Route path="/portfolio-mentions-legales" element={<MentionsLegales />}></Route>
            <Route path="/portfolio-contact" element={<Contact />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes> 
        < Footer />
      </Router>
  </StrictMode>
)
