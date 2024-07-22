import { useEffect, useState } from "react";
import api from "../../../services/api";
import TextContainer from "../Root/TextContainer";
import CardPackage from "./CardPackages";

export default function SpecialPackages() {

  const [packages, setPackages] = useState([])

  async function fetchPackages(){
    try{
      const response = await api.get('/specialPackages')
      setPackages(response.data)
    } catch{(e)=>{console.log(e)}}
  }

  useEffect(()=>{
    fetchPackages()
  },[])

  console.log(packages)

  return (
    <div className="flex flex-col">
      <TextContainer title='OUR SPECIAL PACKAGES' subtitle='OFFER & DISCOUNT' text='Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.' />
    
        <div className="cardContainer flex flex-col justify-center gap-8 xl:gap-20 mt-16 xl:flex-row">
            <CardPackage 
              capacity={packages[1]?.capacity}
              description={packages[1]?.description}
              discount={packages[1]?.discount}
              image={packages[1]?.image}
              location={packages[1]?.location}
              number_of_days={packages[1]?.number_of_days}
              number_of_reviews={packages[1]?.number_of_reviews}
              rating={packages[1]?.rating}
              title={packages[1]?.title}
              value={packages[1]?.value} 
            />
                        <CardPackage 
              capacity={packages[3]?.capacity}
              description={packages[3]?.description}
              discount={packages[3]?.discount}
              image={packages[3]?.image}
              location={packages[3]?.location}
              number_of_days={packages[3]?.number_of_days}
              number_of_reviews={packages[3]?.number_of_reviews}
              rating={packages[3]?.rating}
              title={packages[3]?.title}
              value={packages[3]?.value} 
            />
        </div>

    </div>
  )
}