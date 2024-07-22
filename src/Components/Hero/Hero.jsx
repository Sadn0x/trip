import SecondaryButton from "../Root/SecondaryButton";

export default function Hero (){
  return(
    <div className="hero h-screen w-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center" style={{background: `url('/images/hero-bg.jpg') no-repeat`, backgroundSize: 'cover'}}>
      <h2 className="text-white text-4xl lg:text-6xl 2xl:text-8xl font-bold uppercase text-center pb-4 xl:w-8/12">Journey to explore World</h2>
      <p className="w-4/5 md:w-1/2">
          Ac mi duis mollis. Sapiente? Scelerisque quae,
          penatibus? Suscipit class corporis nostra rem quos
          voluptatibus habitant? Fames, vivamus minim nemo
          enim, gravida lobortis quasi, eum.
      </p>
      <div className="flex justify-center flex-row items-center gap-14 py-8">
        <button className="rounded-full bg-blue-500 w-36 h-12 uppercase">Learn More</button>
        <SecondaryButton label="Book Now" styles="w-36"/>
      </div>
    </div>
  )
}