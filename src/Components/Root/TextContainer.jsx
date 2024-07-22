export default function TextContainer({text, title, subtitle}){
  return(
    <div className="mt-8 text-center px-4">
      <h4 className="text-[#174B90] text-lg font-medium">{subtitle}</h4>
      <h3 className="text-[#223645] text-3xl font-extrabold py-4">{title}</h3>
      <p className="text-[#626672] text-sm font-medium">{text}</p>
    </div>
  )
}