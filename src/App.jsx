import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import PayOnline from './pages/PayOnline.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pay-online" element={<PayOnline />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
