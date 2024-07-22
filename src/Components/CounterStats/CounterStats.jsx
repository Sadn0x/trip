import Counter from "./Counter";

export default function CounterStats() {
  return(
    <div className="flex flex-col justify-around items-center mt-6 xl:flex-row bg-white rounded-3xl relative top-[-150px] xl:top-[-100px] w-4/5 mx-auto shadow-lg">
      <Counter value={10} suffix="k" label="Satisfied Customer" plus time="100" divider/>
      <Counter value={8} suffix="k" label="Active Members" plus time="400" divider/>
      <Counter value={5} label="Tour Destinations" plus time="400" divider/>
      <Counter value={12} label="Travel Guides" plus time="100" />
    </div>
  )
}