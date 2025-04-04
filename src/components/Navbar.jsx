import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import i18n from '../assets/utils/i18n'

const Navbar = () => {

  let location = true;

  const { t } = useTranslation()

  const [language, setLangugage] = useState('')

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })

  if (useLocation().pathname !== "/") {
    location = false;
  }

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('language', e.target.value)
    setLangugage(e.target.value)
  }

  useEffect(() => {
    setLangugage(localStorage.getItem('language'))
  }, [])


  return (
    <header id="navbar" className={
      `py-3 pb-14 px-10 flex justify-between items-center absolute right-0 left-0 z-[9] 
      ${location ? "backdrop-brightness-90 backdrop-blur-[2px]" : ""}`
    }>

      <div className="flex flex-grow basis-0 z-20 mr-auto">
        <a href="/">
          <img className=" w-28"
            src={`${location ? "../src/assets/img/logos/hidroequipos-logo-blanco.webp" : "../src/assets/img/logos/hidroequipos-logo.svg"}`}
            alt="Logo de Hidroequipos" />
        </a>
      </div>

      <nav className="lg:block hidden">
        <ul
          onMouseLeave={() => setPosition({
            ...position,
            opacity: 0
          })}
          className="relative flex font-medium">
          <Tab setPosition={setPosition} link={"/services"}>{t('navbar1')}</Tab>
          <Tab setPosition={setPosition} link={"/about"}>{t('navbar2')}</Tab>
          <Tab setPosition={setPosition} link={"/pay-online"}>{t('navbar3')}</Tab>
          <Tab setPosition={setPosition} link={"/contact"}>{t('navbar4')}</Tab>

          <Cursor position={position} />
        </ul>
      </nav>

      <div className="lg:flex hidden flex-grow basis-0 justify-end">
        <select
          name="languages"
          className={`bg-transparent 
            ${location ? "text-white" : "text-[#333]"} 
            cursor-pointer`}
          onChange={changeLanguage}
          value={language}>
          <option value="en">🇺🇸 English</option>
          <option value="es">🇲🇽 Español</option>
        </select>
      </div>

      <span className="w-[50px] h-[33px] lg:hidden block"></span>

    </header>

  )
}


const Tab = ({ children, setPosition, link }) => {

  const ref = useRef(null)
  let location = true;

  if (useLocation().pathname !== "/") {
    location = false;
  }

  return (
    <a
      href={link}
      ref={ref}

      onMouseEnter={() => {
        console.log(ref)
        const { width } = ref.current.getBoundingClientRect()
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        })
      }}

      className={`relative z-10 px-5 py-1.5
      ${location ? "text-white" : "text-[#333]"}
      cursor-pointer`}>
      {children}
    </a>
  )
}


const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={position}
      className="absolute z-[9] h-full w-24 rounded-md bg-[#1aa3c8]"></motion.div>
  )
}

export default Navbar

