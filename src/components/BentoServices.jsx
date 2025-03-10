import './BentoServices.css';

const BentoServices = () => {

  return (

    <div className="grid grid-cols-7 grid-rows-12 gap-4 [&>img]:rounded-md h-[1000px] px-20 [&>div]:rounded-md py-14">

      <a
        href='/services/poolstructions'
        className="col-span-4 row-span-5 bg-cover flex items-end justify-between py-3 px-3 card-container
      bg-[url('https://images.pexels.com/photos/1247523/pexels-photo-1247523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
      ">
        <div className="bg-white px-2 py-1 rounded-md logo-container">
          <img className="h-8 card-image" src="../src/assets/img/logos/Poolstructions.png" alt="" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
          Conoce mas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a
        href='/services/poolsolutions'
        className="col-span-3 row-span-4 col-start-5 bg-cover flex items-end justify-between py-3 px-3 card-container
      bg-[url('https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D')] 
      ">
        <div className="bg-white px-2 py-1 rounded-md logo-container">
          <img className="h-8 card-image" src="../src/assets/img/logos/Poolsolutions.png" alt="" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
          Conoce mas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a
        href='/services/poolsales'
        className="col-span-3 row-span-4 col-start-5 row-start-5 bg-cover flex items-end justify-between py-3 px-3 card-container
      bg-[url('https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg')]
      ">
        <div className="bg-white px-2 py-1 rounded-md logo-container">
          <img className="h-6 card-image" src="../src/assets/img/logos/Poolsales.png" alt="" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
          Conoce mas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a
        href='/services/poolfix'
        className="col-span-4 row-span-3 row-start-6 bg-cover flex items-end justify-between py-3 px-3 card-container
      bg-[url('https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg')]
      ">
        <div className="bg-white px-2 py-1 rounded-md logo-container">
          <img className="h-6 card-image" src="../src/assets/img/logos/PoolFix.png" alt="" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
          Conoce mas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a
        href='/services/pooldesign'
        className="col-span-4 row-span-4 col-start-4 row-start-9 bg-cover flex items-end justify-between py-3 px-3 card-container
      bg-[url('https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
      ">
        <div className="bg-white px-2 py-1 rounded-md logo-container">
          <img className="h-8 card-image" src="../src/assets/img/logos/Pooldesign.png" alt="" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
          Conoce mas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a
        href='/services/poolshotcrete'
        className="col-span-3 row-span-4 col-start-1 row-start-9 bg-cover flex items-end justify-between py-3 px-3 card-container
      bg-[url('https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
      ">
        <div className="bg-white px-2 py-1 rounded-md logo-container">
          <img className="h-8 card-image" src="../src/assets/img/logos/PoolShotcrete.webp" alt="" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
          Conoce mas <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

    </div >

  )
}

export default BentoServices;
