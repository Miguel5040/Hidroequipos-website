import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  return (
    <header id="navbar" className="py-3 pb-14 px-10 flex justify-between items-center absolute right-0 left-0 z-[9] backdrop-brightness-90 backdrop-blur-[2px]">

      <div className="flex flex-grow basis-0 z-20 mr-auto">
        <img className=" w-36" src="../src/assets/img/my-image-4.png" alt="hidroequipos logo" />
      </div>

      <nav className="lg:block hidden">
        <ul
          onMouseLeave={() => setPosition({
            ...position,
            opacity: 0
          })}
          className="relative flex font-medium">
          <Tab setPosition={setPosition} link={"building-pool"}>Building Pool</Tab>
          <Tab setPosition={setPosition} link={"maintenance"}>Maintenance</Tab>
          <Tab setPosition={setPosition} link={"products"}>Products</Tab>
          <Tab setPosition={setPosition} link={"blog"}>Blog</Tab>

          <Cursor position={position} />
        </ul>
      </nav>

      <div className="lg:flex hidden flex-grow basis-0 justify-end">
        <select className="bg-transparent text-white cursor-pointer outline-none" name="languages" id="">
          <option value="english">🇺🇸 English</option>
          <option value="spanish">🇲🇽 Español</option>
        </select>
      </div>

      <span className="w-[50px] h-[33px] lg:hidden block"></span>

    </header>

  )
}


const Tab = ({ children, setPosition, link }) => {

  const ref = useRef(null)

  return (
    <a
      href={link}
      ref={ref}
      onMouseEnter={() => {
        const { width } = ref.current.getBoundingClientRect()
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        })
      }}
      className="relative z-10 px-5 py-1.5 text-white cursor-pointer">
      {children}
    </a>
  )
}


const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-[9] h-full w-24 rounded-lg bg-[#0e6982]"></motion.div>
  )
}

export default Navbar
