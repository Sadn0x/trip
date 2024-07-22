export default function SecondaryButton({label, styles}) {
  return(
    <button  className={`rounded-full h-12 uppercase border border-white ${styles}`}>{label}</button>
  )
}