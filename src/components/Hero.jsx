
const Hero = () => {
  return (
    <main className='flex relative justify-center items-center overflow-hidden'>

      <div className='-z-10 brightness-90 h-screen lg:h-auto'>
        <img className="object-cover h-full" src="../src/assets/img/pool-hero-2.jpg" alt="" />
      </div>

      <div className='absolute top-auto bottom-auto left-auto right-auto flex flex-col gap-6 items-center'>

        <header className="flex flex-col items-center">
          <h1 className="font-bold md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-white text-center">BUILT AND CARED FOR</h1>
          <h1 className="font-bold md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-white text-center mb-2">YOUR DREAM POOL PERFECTLY</h1>
        </header>

        <div className="text-white text-center md:text-lg text-base text-balance bg-blue-400 px-4 py-1 rounded-full bg-opacity-70">Expert pool construction, maintenance, and care products in one place</div>

      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-down absolute bottom-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 11l8 3l8 -3" /></svg>

    </main>
  )
}

export default Hero
