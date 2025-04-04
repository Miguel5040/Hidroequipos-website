import { useTranslation } from "react-i18next"

const Experience = () => {

  const { t } = useTranslation()

  return (
    <section className="flex md:flex-row flex-col-reverse mt-[9rem] px-6 gap-28 items-center justify-center">
      <aside className="relative max-w-[35rem] max-h-[25rem]">
        <div>
          <span className="bg-[#f2f2f2] w-full h-full absolute z-10 rounded-2xl bottom-12 right-12"></span>
          <div className="relative w-full h-full z-20">
            <img className="w-full h-full object-cover object-center rounded-lg shadow-blue-200 shadow-lg" src="https://images.pexels.com/photos/31181029/pexels-photo-31181029/free-photo-of-majestic-elk-in-yellowstone-national-park-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
          <span className="bg-[#f2f2f2] w-full h-4/6 absolute z-10 rounded-2xl left-12 top-14"></span>
        </div>
      </aside>
      <div className="max-w-[40rem] flex flex-col gap-4">
        <h5 className="text-base font-medium text-blue-500 tracking-[0.25rem] uppercase">{t('experienceSubTitle')}</h5>
        <h2 className="text-[#333] text-3xl text-start font-semibold text-pretty">{t('experienceTitle')}</h2>
        <p className="text-[#333] text-base text-start font-normal text-pretty">
          {t('experienceDescription')}
        </p>
        <div className="flex flex-row gap-8">
          <a className="text-white px-4 py-2 bg-[#1aa3c8] rounded-lg w-fit text-sm mt-4 flex gap-1 items-center" href="../src/assets/documents/curriculum-spanish.pdf" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /></svg>
            Curriculum
          </a>
          <a className="text-white px-4 py-2 bg-[#1aa3c8] rounded-lg w-fit text-sm mt-4 flex gap-1 items-center" href="../src/assets/documents/organigrama-2025.pdf" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sitemap"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M15 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" /><path d="M12 9l0 3" /></svg>
            {t('buttonOrg')}
          </a>
        </div>
      </div>
    </section >
  )
}

export default Experience
