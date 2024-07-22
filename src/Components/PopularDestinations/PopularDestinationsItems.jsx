import Rating from "./Rating";

export default function PopularDestinationItems({image, country, city, rating, description}) {

  return(
    <div className="popularContainer flex flex-col justify-center items-center bg-black w-full h-[363px] md:h-[450px] rounded-3xl" style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}> 
      <div className="card bg-white relative top-20 w-4/5 p-6 rounded-xl">
        <div className="flex flex-row-reverse">
          <div className="flex flex-row justify-center items-center relative bg-blue-500 text-white w-40 rounded-full px-4 h-8 bottom-10">
            <Rating rating={rating} />
          </div>
        </div>
        <h3 className="text-[#3A78C9] text-lg uppercase">{country}</h3>
        <h2 className="text-[#223645] text-xl uppercase font-bold">{city}</h2>
        <p className="text-[#626672] text-md">{description}</p>
      </div>
    </div>
  )
}