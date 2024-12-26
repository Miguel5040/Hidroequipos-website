import "./hamburger.css";

const Hamburger = () => {
  return (
    <div className="lg:hidden flex flex-col">

      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>

      <aside className="sidebar">
        <nav>
          <div>Build Pool</div>
          <div>Maintenance</div>
          <div>Products</div>
          <div>Blog</div>
        </nav>
      </aside>

    </div>
  )
}

export default Hamburger;
