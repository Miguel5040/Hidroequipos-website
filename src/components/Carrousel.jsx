import './Carrousel.css'

const Carrousel = () => {

  return (
    <section className="logo lg:px-8 px-3 sm:my-6">
      <div className='carrousel [&_img]:lg:h-[40px] [&_img]:lg:mx-[60px] [&_img]:sm:h-[40px] [&_img]:sm:mx-[20px] [&_img]:h-[30px] [&_img]:mx-[15px]'>
        <div className="logo-slide">
          <img src="../src/assets/img/Pentair.png" />
          <img src="../src/assets/img/Hayward.png" />
          <img src="../src/assets/img/Raypack.png" />
          <img src="../src/assets/img/Jandy.png" />
          <img src="../src/assets/img/Fluidra.png" />
          <img src="../src/assets/img/Innowater.png" />
          <img src="../src/assets/img/CMP.png" />
        </div>

        <div className="logo-slide">
          <img src="../src/assets/img/Pentair.png" />
          <img src="../src/assets/img/Hayward.png" />
          <img src="../src/assets/img/Raypack.png" />
          <img src="../src/assets/img/Jandy.png" />
          <img src="../src/assets/img/Fluidra.png" />
          <img src="../src/assets/img/Innowater.png" />
          <img src="../src/assets/img/CMP.png" />
        </div>

      </div>
    </section>
  )
}

export default Carrousel
