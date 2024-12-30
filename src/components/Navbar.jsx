import Hamburger from "./Hamburger.jsx"

const Navbar = () => {

  return (
    <header id="navbar" className="py-3 pb-14 px-10 flex justify-between items-center absolute right-0 left-0 z-10 backdrop-brightness-90 backdrop-blur-[2px]">

      <div className="flex flex-grow basis-0 z-20 mr-auto">
        <img className=" w-36" src="../src/assets/img/my-image-4.png" alt="hidroequipos logo" />
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
        <select className="bg-transparent text-white cursor-pointer outline-none" name="languages" id="">
          <option value="english">🇺🇸 English</option>
          <option value="spanish">🇲🇽 Español</option>
        </select>
      </div>

      <Hamburger />

    </header>

  )
}

export default Navbar
