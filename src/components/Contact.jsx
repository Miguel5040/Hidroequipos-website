
const Contact = () => {
  return (
    <section className="flex md:pl-6 md:px-0 px-2 md:py-8 py-6 items-center md:justify-start justify-center w-full mt-20 bg-[url('../src/assets/img/pool-10.jpg')] bg-top bg-cover bg-no-repeat">
      <div className="flex flex-col items-center justify-start md:w-[600px] w-full md:max-w-none max-w-[550px] p-6 bg-white rounded-lg">
        <h5 className="w-full text-start text-2xl font-medium">Get in touch</h5>
        <form className="flex flex-col w-full mt-4 gap-5">
          <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
            <input className="w-full border-2 rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:text-medium placeholder-opacity-55" type="text" placeholder="First Name" />
            <input className="w-full border-2 rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:text-medium placeholder-opacity-55" type="text" placeholder="Last Name" />
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
            <input className="w-full border-2 rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:text-medium placeholder-opacity-55" type="email" placeholder="Email" />
            <input className="w-full border-2 rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:text-medium placeholder-opacity-55" type="phone" placeholder="Phone" />
          </div>
          <textarea className="w-full border-2 rounded-md p-2 border-sky-700 placeholder-sky-700 placeholder:text-medium placeholder-opacity-55 resize-none h-[120px]" placeholder="Message"></textarea>
          <button className="w-full bg-sky-700 text-white text-center rounded-md py-2" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
