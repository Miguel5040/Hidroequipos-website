import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

const Header = () => {

  const { t } = useTranslation()

  let location = false

  if (useLocation().pathname !== '/contact') {
    location = true;
  }

  return (
    <header className="sm:h-[25rem] h-[22rem] flex flex-col gap-8 sm:items-start items-center justify-end pb-[4.3rem] lg:pl-20 md:pl-12 md:px-0 sm:px-6 px-4">
      <h2 className="md:text-5xl xs:text-[2.9rem] text-4xl font-medium flex flex-col sm:gap-4 gap-1 text-balance sm:px-0 px-auto text-[#333]">
        <span className="sm:block hidden">{t(`${location ? "servicesPageUpperTitle" : "contactPageUpperTitle"}`)}</span>
        <span className="sm:block hidden">{t(`${location ? "servicesPageLowerTitle" : "contactPageLowerTitle"}`)}</span>
        <span className="sm:hidden block text-center">{t(`${location ? "servicesPageFullTitle" : "contactPageFullTitle"}`)}</span>
      </h2>
      <span className="underline font-medium underline-offset-4 text-[#333]">{t(`${location ? "servicesPageSubTitle" : "contactPageSubTitle"}`)}</span>
    </header>
  )
}

export default Header;
