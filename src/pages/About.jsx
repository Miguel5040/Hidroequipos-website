
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Hamburger from "../components/Hamburger"
import { SidebarProvider } from "../context/SidebarContext"
import AboutHeader from "../components/AboutHeader"
import Experience from "../components/Experience"
import Employees from "../components/Employees"
import Information from "../components/Information"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <main className="relative">
      <Navbar />
      <SidebarProvider>
        <Hamburger />
        <Sidebar />
      </SidebarProvider>
      <AboutHeader />
      <Experience />
      <Employees />
      <Information />
      <Footer />
    </main>
  )
}

export default Services
