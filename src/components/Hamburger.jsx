import "./hamburger.css";
import { useSidebar } from "../context/SidebarContext";

const Hamburger = () => {

  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div className="lg:hidden flex flex-col">

      <label className="hamburger-menu">
        <input type="checkbox" checked={isOpen} onChange={toggleSidebar} />
      </label>

    </div>
  )
}

export default Hamburger;
