export default function CardPackage({capacity, description, discount, image, location, number_of_days, number_of_reviews, rating, title, value}) {

  const discountPrice = (value, discount) =>{
    let discountFormatted = discount/100
    let calculation = value - value * discountFormatted
    return calculation.toFixed(2)
  }

  return(
    <div className="flex flex-col justify-between mx-4 w-[90%] xl:h-[500px] xl:w-[500px] rounded-3xl gap-20 p-8" style={{background: `url('${image}')`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className="flex flex-row-reverse">
        <p className="text-white uppercase p-4 bg-blue-500 rounded-full bg-opacity-40">Up to {discount}% off</p>
      </div>

      <div className="bg-white bg-opacity-80 flex flex-col p-6 rounded-3xl">
        <div className="flex flex-row justify-start gap-4 text-[#626672] py-2">
          {number_of_days} 
          <span className="text-[#a7a7a779]">|</span> 
          Pax: {capacity}
          <span className="text-[#a7a7a779]">|</span>
          {location}
        </div>
        <h3 className="text-[#223645] text-2xl font-bold py-2">
          {title}         
        </h3>
        <p className="text-[#626672] text-sm font-regular">
          {description}
        </p>
        <h4 className="text-[#174B90] text-lg lg:text-2xl font-bold py-2">
          Price: <span className="line-through">${value}.00</span> ${discountPrice(value, discount)}
        </h4>
        <button className="bg-blue-500 text-white uppercase px-8 py-2 w-64 rounded-full">Book Now</button>
      </div>
    </div>
  )
}