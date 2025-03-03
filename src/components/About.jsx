
const About = () => {
  return (
    <>
      <div className="fade-up"></div>
      <section className="bg-[#F5F6FF] lg:px-16 px-6 lg:pb-10 pb-3 overflow-x-hidden flex lg:flex-col md:flex-row flex-col lg:gap-0 md:gap-10 gap-0">
        <header className="flex lg:flex-row flex-col justify-between items-start gap-8">
          <aside className="flex flex-col gap-5 max-w-[450px]">
            <h4 className="text-md mt-5 font-medium text-sky-700">Why choose us</h4>
            <h2 className="text-4xl text-balance">We build the best swimming pools</h2>
            <p className="text-balance text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et eleifend ante, vitae aliquet arcu. Donec sed sagittis lorem. In posuere nec metus vel blandit. </p>
            <a className="text-white px-3 py-1.5 bg-cyan-700 rounded-lg w-fit text-sm mt-4" href="#">Contact us</a>
          </aside>
          <div className="md:max-w-[500px] w-full rounded-lg overflow-hidden lg:h-[400px] h-[300px]">
            <img className="w-full h-full object-cover object-center" src="../src/assets/img/Hidroffice.jpg" alt="Foto de oficina Hidroequipos" />
          </div>
        </header>

        <footer className="grid lg:grid-cols-4 grid-cols-1 gap-8 mt-10 items-start">
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/trusted.svg" alt="" />
            <h5 className="text-lg font-medium mb-2">Reliable and trusted</h5>
            <p className="text-sm">Our clients trust us because we
              consistently provide high quality
              pools and pay attention to all of
              the fine details during the process.</p>
          </div>
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/honesty.svg" alt="" />
            <h5 className="text-lg font-medium mb-2">Integrity and honesty</h5>
            <p className="text-sm">We provide realistic and honest
              advice and ideas to our clients,
              according to the space we are
              given to work with.</p>
          </div>
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/passion.svg" alt="" />
            <h5 className="text-lg font-medium mb-2">Passion for excelence</h5>
            <p className="text-sm">We are leaders in our industry and
              we continually aspire to surpass
              personal excellence in whatever
              we do.</p>
          </div>
          <div>
            <img className="max-h-[50px] mb-1" src="../src/assets/img/experience.svg" alt="" />
            <h5 className="text-lg font-medium mb-2">Depth of Experience</h5>
            <p className="text-sm">We have a depth of experience
              in the pool-building industry
              that is hard to beat, resulting in
              numerous happy customers.</p>
          </div>
        </footer>

      </section>
      <div className="fade-down"></div>
    </>
  )
}

export default About;
