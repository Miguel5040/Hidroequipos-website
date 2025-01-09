
const Services = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-3">

      <header className="flex flex-col gap-3 items-center mt-14 mb-10">
        <h2 className="text-3xl text-center text-pretty">Top Rated Swimming Pool Company in Los Cabos</h2>
        <p className="text-center text-pretty">Lorem ipsum dolor sit amet consectetur adipiscing elit litora, sociis egestas nec bibendum mus nibh ultrices sapien, potenti ac imperdiet fames nam dis nullam.</p>
      </header>

      <main className="flex flex-row lg:flex-nowrap flex-wrap gap-4 lg:mx-10 lg:items-center lg:justify-center">

        <div className="lg:w-[41.16666%] w-full lg:h-auto h-[280px] flex justify-center">
          <div className="relative w-full overflow-hidden">
            <img className="rounded-lg lg:aspect-[4/5] lg:max-h-[550px] h-full w-full object-cover object-center" src="../src/assets/img/pool-8.jpg" alt="Pool presentation" />
            <div className="absolute top-5 left-0 rounded-ee-3xl bg-white flex flex-col pl-4 lg:pr-2 pr-8 py-3 max-w-[90%]">
              <span className="font-medium">Swimming pool Construction</span>
              <span className="font-light text-sm">We design, build and maintain swimming pools in all of Los Cabos</span>
            </div>
          </div>
        </div>

        <div className="lg:w-[29.16666%] w-[calc(60%-8px)] lg:-order-1">
          <img className="rounded-lg lg:aspect-[10/11] lg:object-cover mb-2 w-full object-center" src="../src/assets/img/pool-filtration.jpeg" alt="Pool filtration system" />
          <div>
            <h3 className="text-xl font-medium mb-1">Replacement and repair</h3>
            <p className="text-sm">We make sure that everything works perfectly</p>
          </div>
        </div>

        <div className="lg:w-[29.16666%] w-[calc(40%-8px)] flex flex-col justify-between">
          <img className="rounded-lg lg:aspect-[10/11] object-cover object-left mb-2 flex-grow" src="../src/assets/img/probador-sal-img.png" alt="Probador de sal" />
          <div>
            <h3 className="text-xl font-medium mb-1">Swimming pool maintenance</h3>
            <p className="text-sm">We do our best home and commercial pool maintenance</p>
          </div>
        </div>
      </main>

    </section>
  )
}

export default Services
