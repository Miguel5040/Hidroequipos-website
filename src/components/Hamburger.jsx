import { useEffect } from 'react';
import { useSidebar } from "../context/SidebarContext";
import "./hamburger.css";

const Hamburger = () => {

  const { isOpen, toggleSidebar } = useSidebar();

  useEffect(() => {

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    }

  }, [isOpen])

  return (
    <div className="lg:hidden flex flex-col absolute top-[17px] right-[40px] z-10">

      <label className="hamburger-menu">
        <input className="checkbox" type="checkbox" checked={isOpen} onChange={toggleSidebar} />
      </label>

    </div>
  )
}

export default Hamburger;
