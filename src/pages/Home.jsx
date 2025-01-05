import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
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
    </main >
  )
}

export default Home
