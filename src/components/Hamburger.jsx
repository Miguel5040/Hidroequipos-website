import { useEffect } from 'react';
import { useSidebar } from "../context/SidebarContext";
import { useLocation } from 'react-router';

const Hamburger = () => {

  const location = useLocation();

  const { isOpen, toggleSidebar } = useSidebar();

  useEffect(() => {

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    }

  }, [isOpen])

  useEffect(() => {

    if (location.pathname === "/") {
      import("./Hamburger.css");
    }
    else {
      import("./DarkHamburger.css")
    }

  }, [location.pathname])

  return (
    <div className="lg:hidden flex flex-col absolute top-[17px] right-[40px] z-10">

      <label className="hamburger-menu">
        <input className="checkbox" type="checkbox" checked={isOpen} onChange={toggleSidebar} />
      </label>

    </div>
  )
}

export default Hamburger;
