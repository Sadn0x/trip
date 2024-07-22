import Rating from "../PopularDestinations/Rating";
import SecondaryButton from "../Root/SecondaryButton";

export default function CheckoutPackageItem({image, title, description, days, capacity, location, reviews, rating, value}) {
  return(
    <div className="mt-8 flex flex-col justify-center items-center bg-[#F9F9F9] rounded-t-xl mx-4 md:h-72 2xl:mx-64">
      <div className="flex flex-col md:flex-row justify-start items-start md:h-72">
        <img className="rounded-t-3xl w-full md:rounded-t-none md:rounded-l-3xl md:rounded-s-3xl md:w-2/6 2xl:min-w-[460px] md:h-72" src={image} alt={'Image of ' + location} />
        
        <div className="md:w-4/6">
          <h2 className="text-[#223645] font-bold text-2xl text-center px-4 pt-12 md:pt-8 lg:text-3xl 2xl:text-3xl">{title}</h2>
          <p className="px-4 text-center text-[#626672] mt-4 pb-12 md:pb-8">{description}</p>
          
          <div className="px-4 m-4 text-[#626672] bg-white rounded-full flex flex-row justify-center items-center h-8 w-5/6 md:w-10/12 lg:mt-0 lg:w-[95%] xl:mt-8 2xl:w-[90%] 3xl:w-6/12">
            <div>{days} <span className="text-[#A7A7A7]">|</span> &nbsp;</div>
            <div> Pax: {capacity} <span className="text-[#A7A7A7]">|</span> &nbsp;</div>
            <div> {location}</div>
          </div>
        </div>
        
        <div className="bg-blue-500 text-white w-full rounded-b-3xl md:rounded-b-none md:rounded-e-3xl md:w-2/6 md:h-72">
          <div className="flex flex-col justify-center items-center py-8">
            <div className="flex flex-row md:flex-col md:justify-center md:items-center pb-4">
              <p className="pr-6 md:pr-0">({reviews} Reviews)</p>
              <Rating rating={rating}/>
            </div>
            <h3 className="text-5xl font-bold mt-4">${value}</h3>
            <p>/per person</p>

            <SecondaryButton label='Book Now' styles='w-64 mt-8 md:w-36' />
          </div>
        </div>
      </div>
    </div>
  )
}