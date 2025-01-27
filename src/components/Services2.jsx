import Card from './Card';

const Services2 = () => {
  return (
    <section className="px-3 mb-1">
      <h2 className="text-3xl text-center text-pretty mb-8">We give you everything you need</h2>
      <main className='flex lg:flex-row flex-col justify-center gap-6'>
        <Card
          img="../src/assets/img/pool-7.webp"
          alt="Pool"
          title="Swimming Pool"
          text="We create a contemporary desing for a modern lifestyle as per our client's needs and tastes."
          link="/services"
        />
        <Card
          img="../src/assets/img/Pool-tools-2.jpg"
          alt="Pool"
          title="Swimming Pool"
          text="We create a contemporary desing for a modern lifestyle as per our client's needs and tastes."
          link="/services"
        />
        <Card
          img="../src/assets/img/jacuzzi-pool.jpg"
          alt="Pool"
          title="Swimming Pool"
          text="We create a contemporary desing for a modern lifestyle as per our client's needs and tastes."
          link="/services"
        />
      </main>
    </section>
  )
}

export default Services2;