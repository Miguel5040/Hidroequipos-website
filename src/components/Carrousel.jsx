import './Carrousel.css'

const Carrousel = () => {

  return (
    <section className="logo lg:px-8 px-3 sm:my-6">
      <div className='carrousel [&_img]:lg:h-[50px] [&_img]:lg:mx-[60px] [&_img]:sm:h-[40px] [&_img]:sm:mx-[20px] [&_img]:h-[30px] [&_img]:mx-[15px]'>
        <div className="logo-slide">
          <img src="../src/assets/img/Pentair.png" alt='Logo de Pentair' />
          <img src="../src/assets/img/Hayward.png" alt='Logo de Hayward' />
          <img src="../src/assets/img/Raypack.png" alt='Logo de Raypack' />
          <img src="../src/assets/img/Jandy.png" alt='Logo de Jandy' />
          <img src="../src/assets/img/Fluidra.png" alt='Logo de Fluidra' />
          <img src="../src/assets/img/Innowater.png" alt='Logo de Innowater' />
          <img src="../src/assets/img/CMP.png" alt='Logo de CMP' />
        </div>

        <div className="logo-slide">
          <img src="../src/assets/img/Pentair.png" alt='Logo de Pentair' />
          <img src="../src/assets/img/Hayward.png" alt='Logo de Hayward' />
          <img src="../src/assets/img/Raypack.png" alt='Logo de Raypack' />
          <img src="../src/assets/img/Jandy.png" alt='Logo de Jandy' />
          <img src="../src/assets/img/Fluidra.png" alt='Logo de Fluidra' />
          <img src="../src/assets/img/Innowater.png" alt='Logo de Innowater' />
          <img src="../src/assets/img/CMP.png" alt='Logo de CMP' />
        </div>

      </div>
    </section>
  )
}

export default Carrousel
