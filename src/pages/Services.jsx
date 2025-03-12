import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Hamburger from "../components/Hamburger"
import { SidebarProvider } from "../context/SidebarContext"
import BentoServices from "../components/BentoServices"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      <Footer />
    </main>
  )
}

export default Services
