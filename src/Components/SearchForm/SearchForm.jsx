import SecondaryButton from "../Root/SecondaryButton";
import Input from "./Input";

export default function SearchForm(){
  return(
    <div className="searchForm flex flex-col gap-6 px-4 py-32 bg-blue-400 xl:flex-row xl:items-center xl:justify-center xl:h-64">
      <Input type="text" placeholder="Enter Destination..." label="Search Destination" />
      <Input type="text" placeholder="Nº of People..." label="Pax Number" />
      <Input type="text" placeholder="mm/dd/yyyy" label="Checkin Date" />
      <Input type="text" placeholder="mm/dd/yyyy" label="Checkout Date" />
      <SecondaryButton label="Inquiry Now" styles='w-4/5 ml-6 text-white mt-4 xl:w-80'/>
    </div>
  )
}