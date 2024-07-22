import CheckoutPackages from "./Components/CheckoutPackages/CheckoutPackages"
import CounterStats from "./Components/CounterStats/CounterStats"
import Hero from "./Components/Hero/Hero"
import PopularDestinations from "./Components/PopularDestinations/PopularDestinations"
import SearchForm from "./Components/SearchForm/SearchForm"
import SpecialPackages from "./Components/SpecialPackages/SpecialPackages"
import TravelersPhotographies from "./Components/TravelersPhotographies/TravelersPhotographies"
import VideoCTA from "./Components/VideoCTA/VideoCTA"

function App() {


  return (
    <>
      <main>
        <section>
          <Hero/>
        

        
          <SearchForm />
        

        
          <div className="popularDestinations">
            <PopularDestinations />
          </div>
        

        
          <div className="checkout" id="packages">
            <CheckoutPackages/>
          </div>
        

        
          <div className="videoCTA">
            <VideoCTA />
          </div> 

          <div className="counterStats" >
            <CounterStats />
          </div>
        

        
          <div className="specialPackages">
            <SpecialPackages/>
          </div>
       

        
          <div className="travelersPhotographies bg-[#f9f9f9] flex flex-col justify-center items-center mt-16 pt-8 pb-16 gap-20">
            <TravelersPhotographies />
          </div>
          </section>
        </main>


    </>
  )
}

export default App
