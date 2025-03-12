import { useTranslation } from "react-i18next";

const Header = () => {

  const { t } = useTranslation()

  return (
    <header className="bg-white h-[400px] flex flex-col gap-8 items-start justify-end pb-[70px] pl-20">
      <h2 className="text-5xl font-medium flex flex-col gap-4">
        <span>{t('servicesPageUpperTitle')}</span>
        <span>{t('servicesPageLowerTitle')}</span>
      </h2>
      <span className="underline font-medium underline-offset-4">{t('servicesPageSubTitle')}</span>
    </header>
  )
}

export default Header;
