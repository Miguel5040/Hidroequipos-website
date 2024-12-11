
const Hero = () => {
  return (
    <main className='flex justify-center items-center w-screen h-screen brightness-90 bg-fixed bg-cover bg-[url("../src/assets/img/pool-hero-2.jpg")] bg-blend-darken'>

      <div className='flex flex-col gap-4 items-center'>

        <header className="flex flex-col items-center">
          <h1 className="font-bold md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-white text-center">BUILT AND CARED FOR</h1>
          <h1 className="font-bold md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-white text-center">YOUR DREAM POOL PERFECTLY</h1>
        </header>

        <div className="text-white text-center md:text-lg text-base text-balance px-4 py-1 rounded-full bg-opacity-70 mb-4">Expert pool construction, maintenance, and care products in one place</div>

        <span>
          <a className="text-white px-9 py-2 bg-cyan-700 rounded-lg" href="#">Learn more</a>
        </span>

      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-down absolute bottom-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 11l8 3l8 -3" /></svg>

    </main>
  )
}

export default Hero
