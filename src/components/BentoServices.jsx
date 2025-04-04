import { useTranslation } from 'react-i18next';
import './BentoServices.css';

const BentoServices = () => {

  const { t } = useTranslation()

  return (

    // <div className="grid grid-cols-1 grid-rows-6 gap-4 sm:grid-cols-7 sm:grid-rows-12 [&>img]:rounded-md h-[140vh] lg:px-20 md:px-12 sm:px-6 px-4 [&>div]:rounded-md py-14">

    //   <a
    //     href='/services/poolstructions'
    //     className="col-span-1 row-span-1 sm:col-span-4 sm:row-span-5 bg-cover flex items-end justify-between py-3 px-3 card-container
    //   bg-[url('https://images.pexels.com/photos/1247523/pexels-photo-1247523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
    //   ">
    //     <div className="bg-white px-2 py-1 rounded-md logo-container">
    //       <img className="h-8 card-image" src="../src/assets/img/logos/PoolStructions.png" alt="Logo de Poolstructions" />
    //     </div>
    // <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
    //   {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
    // </span>
    //   </a>

    //   <a
    //     href='/services/poolsolutions'
    //     className="col-span-1 row-span-1 sm:col-span-3 sm:row-span-4 sm:col-start-5 bg-cover flex items-end justify-between py-3 px-3 card-container
    //   bg-[url('https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8fDA%3D')] 
    //   ">
    //     <div className="bg-white px-2 py-1 rounded-md logo-container">
    //       <img className="h-8 card-image" src="../src/assets/img/logos/PoolSolutions.png" alt="Logo de Poolsolutions" />
    //     </div>
    //     <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
    //       {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
    //     </span>
    //   </a>

    //   <a
    //     href='/services/poolsales'
    //     className="col-span-1 row-span-1 sm:col-span-3 sm:row-span-4 sm:col-start-5 sm:row-start-5 bg-cover flex items-end justify-between py-3 px-3 card-container
    //   bg-[url('https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg')]
    //   ">
    //     <div className="bg-white px-2 py-1 rounded-md logo-container">
    //       <img className="h-6 card-image" src="../src/assets/img/logos/PoolSales.png" alt="Logo de Poolsales" />
    //     </div>
    //     <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
    //       {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
    //     </span>
    //   </a>

    //   <a
    //     href='/services/poolfix'
    //     className="col-span-1 row-span-1 sm:col-span-4 sm:row-span-3 sm:row-start-6 bg-cover flex items-end justify-between py-3 px-3 card-container
    //   bg-[url('https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg')]
    //   ">
    //     <div className="bg-white px-2 py-1 rounded-md logo-container">
    //       <img className="h-6 card-image" src="../src/assets/img/logos/PoolFix.png" alt="Logo de Poolfix" />
    //     </div>
    //     <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
    //       {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
    //     </span>
    //   </a>

    //   <a
    //     href='/services/pooldesign'
    //     className="col-span-1 row-span-1 sm:col-span-4 sm:row-span-4 sm:col-start-4 sm:row-start-9 bg-cover flex items-end justify-between py-3 px-3 card-container
    //   bg-[url('https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
    //   ">
    //     <div className="bg-white px-2 py-1 rounded-md logo-container">
    //       <img className="h-8 card-image" src="../src/assets/img/logos/PoolDesign.png" alt="Logo de Pooldesign" />
    //     </div>
    //     <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
    //       {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
    //     </span>
    //   </a>

    //   <a
    //     href='/services/poolshotcrete'
    //     className="col-span-1 row-span-1 sm:col-span-3 sm:row-span-4 sm:col-start-1 sm:row-start-9 bg-cover flex items-end justify-between py-3 px-3 card-container
    //   bg-[url('https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]
    //   ">
    //     <div className="bg-white px-2 py-1 rounded-md logo-container">
    //       <img className="h-8 card-image" src="../src/assets/img/logos/PoolShotcrete.webp" alt="Logo de Poolshotcrete" />
    //     </div>
    //     <span className='flex opacity-0 invisible items-center gap-1 text-[#333] p-1 rounded-md font-medium text-sm bg-white link-container'>
    //       {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
    //     </span>
    //   </a>

    // </div >



    <div className="grid grid-cols-1 grid-rows-14 gap-4 lg:grid-cols-12 lg:grid-rows-10 lg:h-[140vh] h-[200vh] lg:px-6 md:px-6 sm:px-2 px-2 py-14">

      <a href='/services/poolstructions'
        className="col-span-1 row-span-2 lg:col-span-3 lg:row-span-7 bg-cover flex items-end justify-between py-3 px-3 card-container
        bg-[url('https://images.pexels.com/photos/1247523/pexels-photo-1247523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
        <div className="bg-white px-2 py-1 rounded-md">
          <img className="h-8" src="../src/assets/img/logos/PoolStructions.png" alt="Poolstructions Logo" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] pl-1.5 py-1 rounded-md font-medium text-sm bg-white link-container'>
          {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a href='/services/poolsolutions'
        className="col-span-1 row-span-2 lg:col-span-6 lg:row-span-3 lg:col-start-4 bg-cover flex items-end justify-between py-3 px-3 card-container
        bg-[url('https://plus.unsplash.com/premium_photo-1709579654090-3f3ca8f8416b?fm=jpg&q=60&w=3000')]">
        <div className="bg-white px-2 py-1 rounded-md">
          <img className="h-8" src="../src/assets/img/logos/PoolSolutions.png" alt="Poolsolutions Logo" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] pl-1.5 py-1 rounded-md font-medium text-sm bg-white link-container'>
          {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a href='/services/poolsales'
        className="col-span-1 row-span-2 lg:col-span-4 lg:row-span-4 lg:col-start-4 lg:row-start-4 bg-cover flex items-end justify-between py-3 px-3 card-container
        bg-[url('https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg')]">
        <div className="bg-white px-2 py-1 rounded-md">
          <img className="h-6" src="../src/assets/img/logos/PoolSales.png" alt="Poolsales Logo" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] pl-1.5 py-1 rounded-md font-medium text-sm bg-white link-container'>
          {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a href='/services/poolfix'
        className="col-span-1 row-span-2 lg:col-span-3 lg:row-span-3 lg:col-start-10 lg:row-start-1 bg-cover flex items-end justify-between py-3 px-3 card-container
        bg-[url('https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg')]">
        <div className="bg-white px-2 py-1 rounded-md">
          <img className="h-6" src="../src/assets/img/logos/PoolFix.png" alt="Poolfix Logo" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] pl-1.5 py-1 rounded-md font-medium text-sm bg-white link-container'>
          {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a href='/services/pooldesign'
        className="col-span-1 row-span-2 lg:col-span-5 lg:row-span-4 lg:col-start-8 lg:row-start-4 bg-cover flex items-end justify-between py-3 px-3 card-container
        bg-[url('https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg')]">
        <div className="bg-white px-2 py-1 rounded-md">
          <img className="h-8" src="../src/assets/img/logos/PoolDesign.png" alt="Pooldesign Logo" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] pl-1.5 py-1 rounded-md font-medium text-sm bg-white link-container'>
          {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a href='/services/poolshotcrete'
        className="col-span-1 row-span-2 lg:col-span-8 lg:row-span-3 lg:row-start-8 bg-cover flex items-end justify-between py-3 px-3 card-container
        bg-[url('https://images.pexels.com/photos/2922672/pexels-photo-2922672.jpeg')]">
        <div className="bg-white px-2 py-1 rounded-md">
          <img className="h-8" src="../src/assets/img/logos/PoolShotcrete.webp" alt="PoolShotcrete Logo" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] pl-1.5 py-1 rounded-md font-medium text-sm bg-white link-container'>
          {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

      <a href='/services/poolmaintenance'
        className="col-span-1 row-span-2 lg:col-span-4 lg:row-span-3 lg:col-start-9 lg:row-start-8 bg-cover flex items-end justify-between py-3 px-3 card-container
        bg-[url('https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg')]">
        <div className="bg-white px-2 py-1 rounded-md">
          <img className="h-6" src="../src/assets/img/logos/PoolCoating.webp" alt="PoolMaintenance Logo" />
        </div>
        <span className='flex opacity-0 invisible items-center gap-1 text-[#333] pl-1.5 py-1 rounded-md font-medium text-sm bg-white link-container'>
          {t('servicesHoverCard')} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
        </span>
      </a>

    </div>



  )
}

export default BentoServices;
