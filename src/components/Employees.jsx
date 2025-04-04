import { useTranslation } from "react-i18next";

const Employees = () => {

  const { t } = useTranslation();

  return (
    <section className="flex md:flex-row-reverse flex-col-reverse mt-[9rem] mb-[9rem] px-6 gap-20 items-center justify-center">
      <aside className="relative xs:h-[35rem] flex gap-8 min-w-[350px]">
        <div className="xs:flex hidden flex-col gap-8 w-[15rem]">
          <div className="h-[13rem]">
            <img className="w-full h-full object-cover object-center rounded-lg" src="../src/assets/img/Lucy.jpg" alt="" />
          </div>
          <div className="flex-grow overflow-hidden">
            <img className="w-full h-full object-cover object-center rounded-lg scale-120`" src="../src/assets/img/Sara.jpeg" alt="" />
          </div>
        </div>
        <div className="flex items-end pb-14">
          <div className="relative">
            <span className="bg-[#f2f2f2] w-full h-full max-h-[22rem] absolute z-10 rounded-2xl bottom-12 left-12"></span>
            <div className="relative max-w-[18rem] h-[22rem] z-20">
              <img className="w-full h-full object-cover object-center rounded-lg shadow-blue-200 shadow-lg" src="../src/assets/img/Eduardo.JPG" alt="" />
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-col gap-4 flex-1/2 max-w-[590px]">
        <h5 className="text-base font-medium text-blue-500 tracking-[0.25rem] uppercase">{t('employeesSubTitle')}</h5>
        <h2 className="text-[#333] text-3xl text-start font-semibold text-pretty">{t('employeesTitle')}</h2>
        <p className="text-[#333] text-base text-start font-normal text-pretty">
          {t('employeesDescription')}
        </p>
      </div>
    </section >
  )
}

export default Employees;
