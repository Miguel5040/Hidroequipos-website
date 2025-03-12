import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      upperHero: "We design and build",
      lowerHero: "the pool of your dreams",
      navbar1: "Services",
      navbar2: "About us",
      navbar3: "Pay online",
      navbar4: "Contact",
      subHero: "Expert pool construction, maintenance, and care products in one place",
      servicesTitle: "Top Rated Swimming Pool Company in Los Cabos",
      servicesSubTitle: "Swimming pool construction, maintenance, and repair in Los Cabos",
      imageTextTitle: "Swimming pool Construction",
      imageTextDescription: "We design, build and maintain swimming pools in all of Los Cabos",
      imageTextTitle2: "Replacement and repair",
      imageTextDescription2: "We make sure that everything works perfectly",
      imageTextTitle3: "Swimming pool maintenance",
      imageTextDescription3: "We do our best home and commercial pool maintenance",
      designText: "Our team of experts will help you design the pool of your dreams. We will work with you to create a design that fits your needs and your budget. Whether you want a simple lap pool or a luxurious oasis, we can help you create the perfect pool for your home.",
      aboutSubTitle: "Why Choose Us?",
      aboutTitle: "We build the best swimming pools",
      aboutButton: "Contact us",
      aboutText: "From the first consultation to the final walkthrough, we're committed to providing a seamless and stress-free experience.",
      aboutTitleValue1: "Reliable and trusted",
      aboutTextValue1: "Our clients trust us because we consistently provide high quality pools and pay attention to all of the fine details during the process.",
      aboutTitleValue2: "Integrity and honesty",
      aboutTextValue2: "We provide realistic and honest advice and ideas to our clients, according to the space we are given to work with.",
      aboutTitleValue3: "Passion for excelence",
      aboutTextValue3: "We are leaders in our industry and we continually aspire to surpass personal excellence in whatever we do.",
      aboutTitleValue4: "Depth of Experience",
      aboutTextValue4: "We have a depth of experience in the pool-building industry that is hard to beat, resulting in numerous happy customers.",
      contactTitle: "Get in touch",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send",
      phoneNumber: "Call now",
      informationTitle: "Where can you find us?",
      servicesPageUpperTitle: "Transforming dreams into",
      servicesPageLowerTitle: "aquatic reailities",
      servicesPageSubTitle: "Services",
      servicesHoverCard: "See more"
    }
  },
  es: {
    translation: {
      upperHero: "Construimos y diseñamos",
      lowerHero: "la alberca de tus sueños",
      navbar1: "Servicios",
      navbar2: "Nosotros",
      navbar3: "Pagar en línea",
      navbar4: "Contacto",
      subHero: "Productos expertos en construcción, mantenimiento y cuidado de albercas en un solo lugar",
      servicesTitle: "Empresa de Albercas Más Recomendada en Los Cabos",
      servicesSubTitle: "Construcción, mantenimiento y reparación de albercas en Los Cabos",
      imageTextTitle: "Construcción de albercas",
      imageTextDescription: "Diseñamos, construimos y mantenemos albercas en todo Los Cabos",
      imageTextTitle2: "Reemplazo y reparación",
      imageTextDescription2: "Nos aseguramos de que todo funcione perfectamente",
      imageTextTitle3: "Mantenimiento de albercas",
      imageTextDescription3: "Hacemos nuestro mejor mantenimiento de albercas residenciales y comerciales",
      designText: "Nuestro equipo de expertos te ayudará a diseñar la alberca de tus sueños. Trabajaremos contigo para crear un diseño que se ajuste a tus necesidades y a tu presupuesto. Ya sea que desees una simple alberca de nado o un oasis de lujo, podemos ayudarte a crear la alberca perfecta para tu hogar.",
      aboutSubTitle: "¿Por qué elegirnos?",
      aboutTitle: "Construimos las mejores albercas",
      aboutButton: "Contáctanos",
      aboutText: "Desde la primera consulta hasta el recorrido final, estamos comprometidos a brindar una experiencia fluida y sin estrés",
      aboutTitleValue1: "Confiable y de confianza",
      aboutTextValue1: "Nuestros clientes confían en nosotros porque consistentemente proporcionamos albercas de alta calidad y prestamos atención a todos los detalles durante el proceso.",
      aboutTitleValue2: "Integridad y honestidad",
      aboutTextValue2: "Proporcionamos consejos e ideas realistas y honestos a nuestros clientes, de acuerdo con el espacio que se nos da para trabajar.",
      aboutTitleValue3: "Pasión por la excelencia",
      aboutTextValue3: "Somos líderes en nuestra industria y continuamente aspiramos a superar la excelencia personal en todo lo que hacemos.",
      aboutTitleValue4: "Amplia experiencia",
      aboutTextValue4: "Tenemos una profunda experiencia en la industria de la construcción de albercas que es difícil de superar, lo que resulta en numerosos clientes felices.",
      contactTitle: "Da el primer paso",
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar",
      phoneNumber: "Llama ahora",
      informationTitle: "¿Donde nos puedes encontrar?",
      servicesPageUpperTitle: "Transformamos la alberca de",
      servicesPageLowerTitle: "tus sueños en realidad",
      servicesPageSubTitle: "Servicios",
      servicesHoverCard: "Conoce mas"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;