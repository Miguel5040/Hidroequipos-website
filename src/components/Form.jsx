import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Form = () => {

  const { t } = useTranslation();

  async function sendEmail(e) {
    e.preventDefault();
    try {
      await emailjs.sendForm('service_zc1s4q8', 'template_a88en3v', e.target, 'HWBazbHz8_8IKJWyz')
        .then((res) => {
          if (res.status === 200) {
            console.log("Email enviado con exito")
            alert("Se envio con exito el mensaje")
            return
          }
        })

    } catch (error) {
      console.log(error)
      alert("Hubo un problema con tu solicitud")
    }
  }

  return (
    <section className="flex lg:pl-20 md:pl-12 md:px-0 px-2 md:py-8 py-6 mb-20 items-center md:justify-start justify-center w-full mt-6 bg-[url('../src/assets/img/footer-alberca.webp')] bg-center bg-cover bg-no-repeat" id="contact">
      <div className="flex flex-col items-center justify-start md:w-[600px] w-full md:max-w-none max-w-[550px] p-6 bg-white rounded-lg">
        <h5 className="w-full text-start text-2xl font-medium text-[#333]">{t('contactTitle')}</h5>
        <form className="flex flex-col w-full mt-4 gap-5" onSubmit={sendEmail} id='contact-form' name='contact-form'>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
            <input required name='firstName' className="w-full border-[1px] rounded-md p-2 border-[#1aa3c8] placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="text" placeholder={t('firstName')} />
            <input name='lastName' className="w-full border-[1px] rounded-md p-2 border-[#1aa3c8] placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="text" placeholder={t('lastName')} />
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
            <input required name='email' className="w-full border-[1px] rounded-md p-2 border-[#1aa3c8] placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="email" placeholder={t('email')} />
            <input required name='phone' className="w-full border-[1px] rounded-md p-2 border-[#1aa3c8] placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="phone" placeholder={t('phone')} />
          </div>
          <textarea required name='message' className="w-full border-[1px] rounded-md p-2 border-[#1aa3c8] placeholder-sky-700 placeholder:font-thin placeholder-opacity-55 resize-none h-[120px]" placeholder={t('message')} ></textarea>
          <button className="w-full bg-[#1aa3c8] text-white text-center rounded-md py-2 cursor-pointer  " type="submit">{t('send')}</button>
        </form>
      </div>
    </section>
  )
}

export default Form;
