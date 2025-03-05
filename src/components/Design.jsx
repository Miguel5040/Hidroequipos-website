import { useTranslation } from "react-i18next"

const Design = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className="fade-up"></div>
      <section id="design" className="bg-[#F5F6FF] pt-6 lg:px-8 px-3">
        {/* <h2 className="text-3xl text-center text-pretty mb-3">Design your dream pool with us</h2> */}
        <p className="sm:text-start text-pretty mb-10">{t('designText')}</p>
        <img className="max-h-[500px] w-full object-cover" src="../src/assets/img/pool-render.webp" />
      </section>
      <div className="fade-down"></div>
    </>
  )
}

export default Design
