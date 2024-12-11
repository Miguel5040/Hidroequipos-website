
const Navbar = () => {
  return (
    <header id="navbar" className="py-3 pb-20 px-10 flex justify-between items-center absolute right-0 left-0 z-10 backdrop-brightness-90 backdrop-blur-[2px]">

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

      <div className="lg:flex lg-flex-col items-center gap-2 hidden flex-grow basis-0 justify-end">
        <span className="text-white">🇺🇸 English</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white" className="icon icon-tabler icons-tabler-filled icon-tabler-triangle-inverted"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z" /></svg>
      </div>

      <div className="lg:hidden flex flex-grow basis-0 justify-end cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
      </div>

    </header>
  )
}

export default Navbar
