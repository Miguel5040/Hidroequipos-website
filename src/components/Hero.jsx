import { useTranslation } from "react-i18next"


const Hero = () => {
  const { t } = useTranslation()

  return (
    <main className='flex justify-center items-center h-screen brightness-90 bg-fixed bg-cover bg-center bg-[url("../src/assets/img/hero.jpg")] bg-blend-darken -z-50'>

      <div className='flex flex-col gap-4 items-center'>

        <header className="flex flex-col items-center mx-2">
          <h1 className="sm:text-6xl xs:text-5xl text-3xl text-white text-center text-balance sm:mb-2 xs:mb-0.5">{t('upperHero')}</h1>
          <h1 className="sm:text-6xl xs:text-5xl text-3xl text-white text-center">{t('lowerHero')}</h1>
        </header>

        <div className="text-white text-center md:text-lg text-base text-balance px-4 py-1 rounded-full bg-opacity-70 mb-4 font-semibold">{t('subHero')}</div>

      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-down absolute bottom-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 11l8 3l8 -3" /></svg>

    </main>
  )
}

export default Hero
