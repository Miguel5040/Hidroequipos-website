
const Navbar = () => {
  return (
    <header className="py-3 px-10 flex justify-between items-center absolute right-0 left-0 z-10">

      {/* <div className="absolute left-[8px] z-10 bg-white w-[220px] h-28 rounded-b-full"></div> */}

      <div className="flex flex-grow basis-0 z-20">
        <img className="w-40" src="../src/assets/img/my-image-2.png" alt="hidroequipos logo" />
      </div>

      <nav>
        <ul className="flex [&>li]:px-5 [&>li]:text-white font-medium">
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
