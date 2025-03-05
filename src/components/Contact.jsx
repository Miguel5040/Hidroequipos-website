import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const { t } = useTranslation();

  function sendEmail(e) {
    e.preventDefault();
    alert('Email sent');
    emailjs.sendForm('service_zc1s4q8', 'template_a88en3v', e.target, 'HWBazbHz8_8IKJWyz')
  }

  return (
    <section className="flex md:pl-6 md:px-0 px-2 md:py-8 py-6 items-center md:justify-start justify-center w-full mt-6 bg-[url('../src/assets/img/alberca1.jpg')] bg-center bg-cover bg-no-repeat" id="contact">
      <div className="flex flex-col items-center justify-start md:w-[600px] w-full md:max-w-none max-w-[550px] p-6 bg-white rounded-lg">
        <h5 className="w-full text-start text-2xl font-medium">{t('contactTitle')}</h5>
        <form className="flex flex-col w-full mt-4 gap-5" onSubmit={sendEmail}>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
            <input name='firstName' className="w-full border-[1px] rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="text" placeholder={t('firstName')} />
            <input name='lastName' className="w-full border-[1px] rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="text" placeholder={t('lastName')} />
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
            <input name='email' className="w-full border-[1px] rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="email" placeholder={t('email')} />
            <input name='phone' className="w-full border-[1px] rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:font-thin placeholder-opacity-55" type="phone" placeholder={t('phone')} />
          </div>
          <textarea name='message' className="w-full border-[1px] rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:font-thin placeholder-opacity-55 resize-none h-[120px]" placeholder={t('message')} ></textarea>
          <button className="w-full bg-sky-700 text-white text-center rounded-md py-2" type="submit">{t('send')}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
