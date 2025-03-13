import { useTranslation } from "react-i18next"

const Information = () => {

  const { t } = useTranslation()

  return (
    <section className="px-6 pb-8">
      <div>
        <h2 className="sm:text-4xl text-3xl font-medium text-center">{t("informationTitle")}</h2>
      </div>
      <div className="max-w-[800px] mx-auto mt-10">
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-4 gap-12">
          <div className="flex flex-col text-xl gap-6">
            <span className="text-xl text-white font-medium px-6 flex flex-wrap py-4 justify-center items-center gap-2 rounded-md bg-[#0d7490]">
              <span className="font-semibold">{t('phoneNumber')}</span>
              <span>+52 (624) 164 4122</span>
            </span>
            <div className="flex flex-col flex-nowrap text-lg font-medium">
              <span>
                Cinco de Mayo, Sta Rosa, 23428
              </span>
              <span>
                San José del Cabo, B.C.S.
              </span>
              <span className="mt-6 text-cyan-600 text-lg font-medium">client_services@hidroequipos.com</span>
            </div>
            <div className="flex md:justify-start justify-center gap-8 items-center mt-4">
              <a href="https://www.instagram.com/hidroequipos_albercas/" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
                  <defs><radialGradient cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse" id="color-1_Xy10Jcu1L2Su_gr1"><stop offset="0" stopColor="#ffdd55"></stop><stop offset="0.328" stopColor="#ff543f"></stop><stop offset="0.348" stopColor="#fc5245"></stop><stop offset="0.504" stopColor="#e64771"></stop><stop offset="0.643" stopColor="#d53e91"></stop><stop offset="0.761" stopColor="#cc39a4"></stop><stop offset="0.841" stopColor="#c837ab"></stop></radialGradient><radialGradient cx="11.786" cy="5.5403" r="29.813" gradientUnits="userSpaceOnUse" id="color-2_Xy10Jcu1L2Su_gr2"><stop offset="0" stopColor="#4168c9"></stop><stop offset="0.999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient></defs><g transform="translate(-42.24,-42.24) scale(1.33,1.33)"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.33333,5.33333)"><path d="M34.017,41.99l-20,0.019c-4.4,0.004 -8.003,-3.592 -8.008,-7.992l-0.019,-20c-0.004,-4.4 3.592,-8.003 7.992,-8.008l20,-0.019c4.4,-0.004 8.003,3.592 8.008,7.992l0.019,20c0.005,4.401 -3.592,8.004 -7.992,8.008z" fill="url(#color-1_Xy10Jcu1L2Su_gr1)"></path><path d="M34.017,41.99l-20,0.019c-4.4,0.004 -8.003,-3.592 -8.008,-7.992l-0.019,-20c-0.004,-4.4 3.592,-8.003 7.992,-8.008l20,-0.019c4.4,-0.004 8.003,3.592 8.008,7.992l0.019,20c0.005,4.401 -3.592,8.004 -7.992,8.008z" fill="url(#color-2_Xy10Jcu1L2Su_gr2)"></path><path d="M24,31c-3.859,0 -7,-3.14 -7,-7c0,-3.86 3.141,-7 7,-7c3.859,0 7,3.14 7,7c0,3.86 -3.141,7 -7,7zM24,19c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5z" fill="#ffffff"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#ffffff"></circle><path d="M30,37h-12c-3.859,0 -7,-3.14 -7,-7v-12c0,-3.86 3.141,-7 7,-7h12c3.859,0 7,3.14 7,7v12c0,3.86 -3.141,7 -7,7zM18,13c-2.757,0 -5,2.243 -5,5v12c0,2.757 2.243,5 5,5h12c2.757,0 5,-2.243 5,-5v-12c0,-2.757 -2.243,-5 -5,-5z" fill="#ffffff"></path></g></g></g>
                </svg>
              </a>
              <a href="https://www.youtube.com/@hidroequiposalbercas6335" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 256 180" width="37" height="25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" fill="red" /><path fill="#FFF" d="m102.421 128.06 66.328-38.418-66.328-38.418z" /></svg>
              </a>
              <a href="https://www.facebook.com/hidropools" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="url(#a)" height="28" width="28"><defs><linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a"><stop offset="0%" stopColor="#0062E0" /><stop offset="100%" stopColor="#19AFFF" /></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" /><path fill="#FFF" d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" /></svg>
              </a>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.2000083864164!2d-109.70805732501998!3d23.089773079126687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af5a5c1d2706fd%3A0x908fd838f227d76e!2sHidroequipos!5e0!3m2!1sen!2smx!4v1741651147046!5m2!1sen!2smx"
            className="border-2 border-[#0d7490] rounded-md w-full h-[23.125rem]"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Information
