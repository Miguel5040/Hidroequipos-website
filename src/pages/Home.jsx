import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { SidebarProvider } from '../context/SidebarContext.jsx'

const Home = () => {
  return (
    <main className='relative'>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
      <Hero />
      <Services />
    </main >
  )
}

export default Home
