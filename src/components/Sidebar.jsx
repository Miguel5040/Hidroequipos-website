import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {

  const { isOpen } = useSidebar();

  return (
    <aside className={`sidebar ${isOpen ? 'sidebarOpen' : ''}`}>
      <nav>
        <div>Build Pool</div>
        <div>Maintenance</div>
        <div>Products</div>
        <div>Blog</div>
      </nav>
    </aside>
  )
}

export default Sidebar;
