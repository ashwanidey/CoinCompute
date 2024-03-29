export default function Output({Class,Label,Value,Sign,Id}){
  return (
    <>
    <div class={Class}>
        <span class="label-output">{Label}</span>
        <output id={Id} class="label-output-value">{Value}</output>
        <span class="label-output-not">{Sign}</span>
    </div >
    </>
  )
}