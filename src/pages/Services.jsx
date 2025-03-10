import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Hamburger from "../components/Hamburger"
import { SidebarProvider } from "../context/SidebarContext"
import BentoServices from "../components/BentoServices"
import Header from "../components/Header"

const Services = () => {
  return (
    <main className="relative">
      <Navbar />
      <SidebarProvider>
        <Hamburger />
        <Sidebar />
      </SidebarProvider>
      <Header />
      <BentoServices />
    </main>
  )
}

export default Services
