
const Navbar = () => {
  return (
    <header className="py-3 px-10 flex justify-between items-center absolute right-0 left-0 z-10">

      <div className="flex flex-grow basis-0 z-20">
        <img className=" w-28" src="../src/assets/img/image-logo.png" alt="hidroequipos logo" />
      </div>

      <nav className="lg:block hidden">
        <ul className="flex [&>li]:px-5 [&>li]:text-white font-medium">
          <li><a href="#">Build Pool</a></li>
          <li><a href="#">Maintenance</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>

      <div className="lg:flex hidden flex-grow basis-0 justify-end">
        <a className="text-white bg-[#8BC34A] px-6 py-1 rounded-full" href="#">Contact Us</a>
      </div>

      <div className="lg:hidden flex flex-grow basis-0 justify-end cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
      </div>

    </header>
  )
}

export default Navbar
