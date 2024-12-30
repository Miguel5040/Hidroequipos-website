import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {

  const { isOpen } = useSidebar();

  return (
    <aside className={`sidebar ${isOpen ? 'sidebarOpen' : ''}`}>
      <nav>
        <div>
          <a href="#">Build Pool</a>
          <a href="#">Maintenance</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>

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
