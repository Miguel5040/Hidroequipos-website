import { useTranslation } from "react-i18next";

const AboutHeader = () => {

  const { t } = useTranslation()

  return (
    <section className="flex items-center flex-col justify-center lg:pt-10 pt-0 px-4">
      <div className="w-full h-32"></div>
      <header className="flex items-start flex-col justify-end max-w-[50rem] gap-8 md:pb-18 pb-10">
        <h2 className="md:text-5xl xs:text-[2.9rem] text-4xl font-medium text-balance md:text-center text-start xs:leading-16 leading-12">{t('aboutPageTitle')}</h2>
        <p className="md:text-center text-start text-xl max-w-[40 rem]">{t('aboutIntroduction')}</p>
      </header>
      <footer>
        <ul className="flex justify-center md:flex-row flex-col md:gap-42 gap-12 [&_span]:text-6xl [&_span]:font-semibold [&_span]:mb-2 [&_span]:block [&_p]:text-sm [&_p]:text-balance [&_p]:font-light">
          <li>
            <span>80+</span>
            <p>Albercas</p>
            <p>construidas</p>
          </li>
          <li>
            <span>30+</span>
            <p>años</p>
            <p>de experiencia</p>
          </li>
          <li>
            <span>25+</span>
            <p>proveedores</p>
            <p>de confianza</p>
          </li>
        </ul>
      </footer>
    </section>
  )
}

export default AboutHeader;
