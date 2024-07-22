import TextContainer from "../Root/TextContainer";

export default function TravelersPhotographies() {
  return(
    <>
      <TextContainer title="PHOTO'S FROM TRAVELLERS" subtitle="PHOTO GALLERY" text="Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent." />
    
      <div className="flex flex-col justify-center gap-10 items-center xl:flex-row w-full">
        <div className="flex flex-col gap-10 ">
          <div>
            <img className="rounded-2xl w-[380px] md:w-[500px] xl:w-[490px] xl:h-[285px]" src="./images/traveler1.jpg"/>
          </div>

          <div className="flex flex-col xl:flex-row justify-between gap-10">
            <img className="rounded-2xl w-[380px] md:w-[500px] xl:w-[223px] xl:h-[195px]" src="./images/traveler2.jpg"/>
            <img className="rounded-2xl w-[380px] md:w-[500px] xl:w-[223px] xl:h-[195px]" src="./images/traveler3.jpg"/>
          </div>
        </div>

        <div className="">
          <img className="rounded-2xl w-[380px] md:w-[500px] xl:w-[322px] xl:h-[521px]" src="./images/traveler4.jpg"/>
        </div>

        <div className="flex flex-col gap-10">
          <img className="rounded-2xl w-[380px] md:w-[500px] xl:w-[328px] xl:h-[240px]" src="./images/traveler5.jpg"/>
          <img className="rounded-2xl xl:w-[328px] xl:h-[240px]" src="./images/traveler6.jpg"/>
        </div>
      </div>
    </>
  )
}