import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {

  const { isOpen } = useSidebar();

  return (
    <aside className={`lg:hidden sidebar ${isOpen ? 'sidebarOpen' : ''}`}>
      <nav>
        <div className="">
          <a className="hover:underline underline-offset-4" href="#">Build Pool</a>
          <a className="hover:underline underline-offset-4" href="#">Maintenance</a>
          <a className="hover:underline underline-offset-4" href="#">Products</a>
          <a className="hover:underline underline-offset-4" href="#">Blog</a>

        </div>
        <div>
          <select name="languages">
            <option value="english">🇺🇸 English</option>
            <option value="spanish">🇲🇽 Español</option>
          </select>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar;
