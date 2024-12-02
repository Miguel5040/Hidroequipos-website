import React from "react"

const Navbar = () => {
  return (
    <header className="py-4 px-10 flex justify-between items-center">

      <div className="flex flex-grow basis-0">
        <img className=" w-40" src="../src/assets/img/logo.png" alt="hidroequipos logo" />
      </div>

      <nav>
        <ul className="flex [&>li]:px-4">
          <li><a href="#">Build Pool</a></li>
          <li><a href="#">Maintenance</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>

      <div className="flex flex-grow basis-0 justify-end">
        <a className="text-white bg-[#8BC34A] px-6 py-2 rounded-full" href="#">Contact Us</a>
      </div>

    </header>
  )
}

export default Navbar
