import { useSidebar } from "../context/SidebarContext";
import { useTranslation } from 'react-i18next'
import i18n from '../assets/utils/i18n'

const Sidebar = () => {

  const { isOpen } = useSidebar();
  const { t } = useTranslation()

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('language', e.target.value)
  }

  return (
    <aside className={`lg:hidden sidebar ${isOpen ? 'sidebarOpen' : ''}`}>
      <nav>
        <div>
          <a className="hover:underline underline-offset-4" href="/services">{t('navbar1')}</a>
          <a className="hover:underline underline-offset-4" href="/about">{t('navbar2')}</a>
          <a className="hover:underline underline-offset-4" href="/pay-online">{t('navbar3')}</a>
          <a className="hover:underline underline-offset-4" href="/contact">{t('navbar4')}</a>
        </div>
        <div>
          <select
            name="languages"
            className="bg-transparent text-white cursor-pointer outline-none"
            onChange={changeLanguage}>
            <option value="en">🇺🇸 English</option>
            <option value="es">🇲🇽 Español</option>
          </select>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar;
