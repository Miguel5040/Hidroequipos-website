import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Design from '../components/Design.jsx'
import Carrousel from '../components/Carrousel.jsx'
import About from '../components/About.jsx'
import Services2 from '../components/Services2.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Hamburger from '../components/Hamburger.jsx'
import { SidebarProvider } from '../context/SidebarContext.jsx'

const Home = () => {
  return (
    <main className='relative'>
      <Navbar />
      <SidebarProvider>
        <Hamburger />
        <Sidebar />
      </SidebarProvider>
      <Hero />
      <Services />
      <Design />
      <Carrousel />
      <About />
      {/* <Services2 /> */}
      <Contact />
      <Footer />
    </main >
  )
}

export default Home
