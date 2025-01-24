
const Card = ({ img, alt, title, text, link }) => {
  return (
    <article className="flex lg:flex-col xs:flex-row flex-col lg:justify-between xs:justify-normal justify-between lg:w-[350px] w-full lg:p-1 p-2 lg:pb-2 shadow rounded-xl">
      <div className="xs:mb-0 mb-4 lg:h-[250px] h-[180px] lg:w-auto xs:w-[50%] w-full overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover object-center" src={img} alt={alt} />
      </div>
      <div className="lg:block xs:flex block flex-col justify-evenly lg:w-auto xs:w-[50%] w-auto lg:p-auto xs:p-4 p-auto">
        <div className="mx-2">
          <h5 className="text-xl font-medium">{title}</h5>
          <p className="text-sm font-light">{text}</p>
        </div>
        <footer className="flex items-center justify-between mt-4 mx-2">
          <span>Explore now</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
        </footer>
      </div>

    </article>
  )
}

export default Card;