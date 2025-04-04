import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Hamburger from "../components/Hamburger"
import { SidebarProvider } from "../context/SidebarContext"
import Header from "../components/Header"
import Form from "../components/Form"
import Information from "../components/Information"
import Footer from "../components/Footer"

const Contact = () => {
  return (
    <main className="relative">
      <Navbar />
      <SidebarProvider>
        <Hamburger />
        <Sidebar />
      </SidebarProvider>
      <Header />
      <Form />
      <Information />
      <Footer />
    </main>
  )
}

export default Contact