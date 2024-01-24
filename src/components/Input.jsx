export default function Input({Label,Id,Placeholder,Class}){
  return (
    <>
    <div className="wrap-input">
        <span className="label-input">{Label}</span>
        <input type="text" id={Id} className={Class}
        placeholder={Placeholder} onkeypress="return isNumberKey(event)"/>
    </div>
    </>
  )
}