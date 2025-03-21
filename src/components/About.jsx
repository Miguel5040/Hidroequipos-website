import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation();

  return (
    <>
      <div className="fade-up"></div>
      <section className="bg-[#F5F6FF] text-[#333] lg:px-16 px-6 lg:pb-10 pb-3 overflow-x-hidden flex lg:flex-col md:flex-row flex-col lg:gap-0 md:gap-10 gap-0">
        <header className="flex lg:flex-row flex-col justify-between items-start gap-8 lg:w-auto md:w-[1100px] w-auto">
          <aside className="flex flex-col gap-5 max-w-[450px]">
            <h4 className="text-md mt-5 font-medium text-sky-700">{t('aboutSubTitle')}</h4>
            <h2 className="text-4xl text-balance">{t('aboutTitle')}</h2>
            <p className="text-balance text-lg">{t('aboutText')}</p>
            <a className="text-white px-4 py-2 bg-[#1aa3c8] rounded-lg w-fit text-sm mt-4" href="/contact">{t('aboutButton')}</a>
          </aside>
          <div className="md:max-w-[500px] w-full rounded-lg overflow-hidden lg:h-[400px] h-[300px] shadow-2xl">
            <img className="w-full h-full object-cover object-center" src="../src/assets/img/empleado.webp" alt="Foto de oficina Hidroequipos" />
          </div>
        </header>

        <footer className="grid lg:grid-cols-4 grid-cols-1 gap-8 mt-10 items-start">
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/trusted.svg" alt="Trusted Icon" />
            <h5 className="text-lg font-medium mb-2">{t('aboutTitleValue1')}</h5>
            <p className="text-sm">{t('aboutTextValue1')}</p>
          </div>
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/honesty.svg" alt="Honesty Icon" />
            <h5 className="text-lg font-medium mb-2">{t('aboutTitleValue2')}</h5>
            <p className="text-sm">{t('aboutTextValue2')}</p>
          </div>
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/passion.svg" alt="Passion Icon" />
            <h5 className="text-lg font-medium mb-2">{t('aboutTitleValue3')}</h5>
            <p className="text-sm">{t('aboutTextValue3')}</p>
          </div>
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/experience.svg" alt="Experience Icon" />
            <h5 className="text-lg font-medium mb-2">{t('aboutTitleValue4')}</h5>
            <p className="text-sm">{t('aboutTextValue4')}</p>
          </div>
        </footer>

      </section>
      <div className="fade-down"></div>
    </>
  )
}

export default About;
