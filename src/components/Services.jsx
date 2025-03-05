import { useTranslation } from "react-i18next"

const Services = () => {

  const { t } = useTranslation()

  return (
    <section className="max-w-screen-xl mx-auto px-3">

      <header className="flex flex-col gap-3 items-center mt-14 mb-10">
        <h2 className="text-3xl text-center text-pretty">{t('servicesTitle')}</h2>
        <p className="text-center text-pretty">{t('servicesSubTitle')}</p>
      </header>

      <main className="flex flex-row lg:flex-nowrap flex-wrap gap-4 lg:mx-10 lg:items-center lg:justify-center">

        <div className="lg:w-[41.16666%] w-full lg:h-auto h-[280px] flex justify-center">
          <div className="relative w-full overflow-hidden">
            <img className="rounded-lg lg:aspect-[4/5] lg:max-h-[550px] h-full w-full object-cover object-center" src="../src/assets/img/alberca5.jpeg" alt="Pool presentation" />
            <div className="absolute sm:top-5 top-0 left-0 rounded-ee-3xl bg-white flex flex-col pl-4 lg:pr-2 pr-8 py-3 max-w-[90%]">
              <span className="font-medium">{t('imageTextTitle')}</span>
              <span className="font-light text-sm">{t('imageTextDescription')}</span>
            </div>
          </div>
        </div>

        <div className="lg:w-[29.16666%] sm:w-[calc(60%-8px)] w-full lg:-order-1 relative">
          <img id="pool-system-img" className="rounded-lg lg:aspect-[10/11] object-cover mb-2 w-full sm:max-h-[350px] max-h-[280px]" src="../src/assets/img/cuarto-maquinas.jpeg" alt="Pool filtration system" />
          <div className="absolute sm:static top-0 right-0 rounded-es-3xl sm:rounded-none bg-white sm:bg-none flex sm:block flex-col pr-8 sm:pr-0 py-3 sm:pl-0 pl-4 sm:py-0 max-w-[90%] sm:max-w-none">
            <h3 className="sm:text-xl font-medium sm:mb-1">{t('imageTextTitle2')}</h3>
            <p className="text-sm sm:font-normal font-light">{t('imageTextDescription2')}</p>
          </div>
        </div>

        <div className="lg:w-[29.16666%] sm:w-[calc(40%-8px)] w-full flex flex-col justify-between] relative">
          <img className="rounded-lg lg:aspect-[10/11] object-cover md:object-bottom object-center mb-2 flex-grow sm:max-h-[350px] max-h-[280px]" src="../src/assets/img/clorine.jpeg" alt="Probador de sal" />
          <div className="absolute sm:static top-0 left-0 rounded-ee-3xl sm:rounded-none bg-white sm:bg-none flex sm:block flex-col pr-8 sm:pr-0 sm:pl-0 pl-4 py-3 sm:py-0 max-w-[90%] sm:max-w-none">
            <h3 className="sm:text-xl font-medium sm:mb-1">{t('imageTextTitle3')}</h3>
            <p className="text-sm sm:font-normal font-light">{t('imageTextDescription3')}</p>
          </div>
        </div>
      </main>

    </section>
  )
}

export default Services
