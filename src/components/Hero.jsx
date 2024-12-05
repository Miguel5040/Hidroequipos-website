
const Hero = () => {
  return (
    <main className='flex relative justify-center items-center'>

      <div className='-z-10 brightness-90'>
        <img src="../src/assets/img/pool-hero-2.jpg" alt="" />
      </div>

      <div className='absolute top-auto bottom-auto left-auto right-auto flex flex-col gap-6 items-center'>
        {/* <span className="bg-blue-500 text-white font-light text-base rounded-full px-4 py-1 text-center w-fit">SJC No.1 Swimming Pool Contractors</span> */}

        <header className="flex flex-col items-center">
          <h1 className="font-bold text-5xl text-white mb-2">YOUR DREAM POOL PERFECTLY</h1>
          <h1 className="font-bold text-5xl text-white">BUILT AND CARED FOR</h1>
        </header>

        {/* <span className="bg-green-500 text-white font-light rounded-full px-4 py-1 w-fit">+52 624 164 4122</span> */}
        <p className="text-white text-center text-lg bg-blue-400 px-4 py-1 rounded-full bg-opacity-70">Expert pool construction, maintenance, and care products in one place</p>
      </div>

    </main>
  )
}

export default Hero
