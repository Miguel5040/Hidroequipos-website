import { useTranslation } from 'react-i18next'
import './Carrousel.css'


const Carrousel = () => {

  const { t } = useTranslation()

  return (
    <>
      <header className="flex flex-col gap-3 items-center mb-10">
        <h2 className="text-4xl text-center font-medium text-pretty">{t('carrouselTitle')}</h2>
      </header>

      <section className="logo lg:px-8 px-3 sm:my-6">

        <div className='carrousel [&_img]:lg:h-[42px] [&_img]:lg:mx-[50px] [&_img]:sm:h-[36px] [&_img]:sm:mx-[35px] [&_img]:h-[30px] [&_img]:mx-[25px]'>
          <div className="logo-slide">
            <img src="../src/assets/img/Pentair.png" alt='Logo de Pentair' />
            <img src="../src/assets/img/Hayward.png" alt='Logo de Hayward' />
            <img src="../src/assets/img/Raypack.png" alt='Logo de Raypack' />
            <img src="../src/assets/img/Jandy.png" alt='Logo de Jandy' />
            <img src="../src/assets/img/Interwater.png" alt='Logo de Interwater' />
            <img src="../src/assets/img/Fluidra.png" alt='Logo de Fluidra' />
            <img src="../src/assets/img/Innowater.png" alt='Logo de Innowater' />
            <img src="../src/assets/img/CMP.png" alt='Logo de CMP' />
            <img src="../src/assets/img/Staride.png" alt='Logo de Staride' />
          </div>

          <div className="logo-slide">
            <img src="../src/assets/img/Pentair.png" alt='Logo de Pentair' />
            <img src="../src/assets/img/Hayward.png" alt='Logo de Hayward' />
            <img src="../src/assets/img/Raypack.png" alt='Logo de Raypack' />
            <img src="../src/assets/img/Jandy.png" alt='Logo de Jandy' />
            <img src="../src/assets/img/Interwater.png" alt='Logo de Interwater' />
            <img src="../src/assets/img/Fluidra.png" alt='Logo de Fluidra' />
            <img src="../src/assets/img/Innowater.png" alt='Logo de Innowater' />
            <img src="../src/assets/img/CMP.png" alt='Logo de CMP' />
            <img src="../src/assets/img/Staride.png" alt='Logo de Staride' />
          </div>

        </div>
      </section>
    </>
  )
}

export default Carrousel
