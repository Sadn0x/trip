import { useState, useEffect } from "react";
import TextContainer from "../Root/TextContainer";
import PopularDestinationItems from "./PopularDestinationsItems";

import api from "../../../services/api";

export default function PopularDestinations() {

  const [popular, setPopular] = useState([])
  const [more, setMore] = useState(false)

  async function fetchPopular(){
    try {
      const response = await api.get('/popularDestinations')
      setPopular(response.data)
    } catch(e){
      console.log(e)
    }
    }

  useEffect(()=> {
    fetchPopular()
  }, [])

  return(
    <div className="flex justify-center flex-col mt-8">
      <TextContainer 
        title='POPULAR DESTINATION'
        subtitle='UNCOVER PLACE'
        text='Fusce hic augue velit wisi quibusdam pariatur,
              iusto primis, nec nemo, rutrum. Vestibulum
              cumque laudantium. Sit ornare mollitia tenetur,
              aptent.'
        />
      <div className="flex flex-col lg:flex-row lg:justify-center">
        {popular.map((popular,idx)=>{
          if(idx < 3) {
            return(
              <div className="mt-8 flex flex-col justify-center items-center px-4" key={idx}>
                <PopularDestinationItems 
                  image={popular.image}
                  country={popular.country} 
                  city={popular.city} 
                  rating={popular.rating}
                  description={popular.description}
                />
            </div>
            )
          }
        })}
      </div>

      {more === false ? 
        <button onClick={()=>{setMore(true)}} className="mt-12 bg-blue-500 text-white text-xl py-4 rounded-full w-64 mx-auto">More Destinations</button> : 
        <div className="flex flex-col lg:flex-row lg:justify-center">
          {popular.map((popular,idx)=>{
            if(idx < 3) {
              return(
                <div className="mt-8 flex flex-col justify-center items-center px-4" key={idx}>
                  <PopularDestinationItems 
                    image={popular.image}
                    country={popular.country} 
                    city={popular.city} 
                    rating={popular.rating}
                    description={popular.description}
                  />
              </div>
              )
            }
          })}
        </div>}
        
    </div>
  )
}