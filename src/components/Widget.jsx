export default function Widget(){
  const script = document.createElement('script');
    script.src = 'https://static.coinstats.app/widgets/coin-price-marquee-widget.js';
    script.async = true;
    document.body.appendChild(script);
    return (
      <>

      <div className='sm:w-[70vh] md:w-[90vh] lg:w-[150vh] xl:w-[160vh] w-full overflow-y-hidden pr-2 pl-2'>
        <coin-stats-marquee-widget locale="en" currency="USD" background="#141E30" status-up-color="#74D492" status-down-color="#FE4747" text-color="#FFFFFF" buttons-color="#FFFFFF" border-color="rgba(255,255,255,0.15)" position="static" font="Roboto, Arial, Helvetica"  coins-count="20" ></coin-stats-marquee-widget></div>
      </>
    )
}