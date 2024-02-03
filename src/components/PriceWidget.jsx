export default function PriceWidget(){

  const script = document.createElement('script');
  script.src = 'https://static.coinstats.app/widgets/coin-list-widget.js';
  script.async = true;
  document.body.appendChild(script);
  return (
    <>
    
<coin-stats-list-widget locale="en" currency="INR" bg-color="#1C1B1B" status-up-color="#74D492" status-down-color="#FE4747" text-color="#FFFFFF" font="Roboto, Arial, Helvetica" border-color="rgba(255,255,255,0.15)" width="362" top-coin="5"></coin-stats-list-widget>
    </>
  )
}