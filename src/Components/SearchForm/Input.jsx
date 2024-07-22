export default function Input({type, label, placeholder}) {
  return(
    <div className="flex flex-col gap-0">
      <label htmlFor="label" className="text-white font-bold">{label}</label>
      <input type={type} placeholder={placeholder} className="rounded-full mr-4 py-4 px-4 outline-none"/>
    </div>
  )
}