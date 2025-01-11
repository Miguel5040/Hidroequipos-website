import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Design from '../components/Design.jsx'
import Carrousel from '../components/Carrousel.jsx'
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
    </main >
  )
}

export default Home
