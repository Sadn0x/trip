import TextContainer from "../Root/TextContainer";
import CheckoutPackageItem from "./CheckoutPackageItem";
import api from "../../../services/api";
import { useEffect, useState } from "react";

export default function CheckoutPackages() {

  const [packages, setPackages] = useState([])
  const [more, setMore] = useState(false)

  async function fetchPackages(){
    try{
      const response = await api.get('/experiences')
      setPackages(response.data)
    } catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchPackages()
  },[])


  return(
    <div className="flex flex-col justify-center items-center px-4">
      <TextContainer 
        title='CHECKOUT OUR PACKAGES' 
        subtitle='POPULAR PACKAGES' 
        text='Fusce hic augue velit wisi quibusdam pariatur,
              iusto primis, nec nemo, rutrum. Vestibulum
              cumque laudantium. Sit ornare mollitia tenetur,
              aptent.' 
      />

    {packages.map((packages, idx)=>{
      if (idx < 3) {
      return(<div key={idx}>
        <CheckoutPackageItem 
          image={packages.image}
          title={packages.title}
          description={packages.description}
          days={packages.number_of_days}
          capacity={packages.capacity}
          location={packages.location}
          reviews={packages.number_of_reviews}
          rating={packages.rating}
          value={packages.value}
        />
      </div>)}
    }
    )}

    {more === false ? 
      <button onClick={()=>{setMore(true)}} className="mt-12 bg-blue-500 text-white text-xl py-4 rounded-full w-64 mx-auto">View All Packages</button> : 
      <>
        {packages.map((packages, idx)=>{
          if (idx > 3) {
          return(<div key={idx}>
            <CheckoutPackageItem 
              image={packages.image}
              title={packages.title}
              description={packages.description}
              days={packages.number_of_days}
              capacity={packages.capacity}
              location={packages.location}
              reviews={packages.number_of_reviews}
              rating={packages.rating}
              value={packages.value}
            />
          </div>)}
        }
    )}
      </>
    }
    </div>
  )}