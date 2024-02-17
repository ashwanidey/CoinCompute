import React from 'react'

export const InvestWidget = () => {
  const script = document.createElement('script');
    script.src = "https://static.coinstats.app/widgets/coin-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);
  return (
    <>
     <coin-stats-chart-widget type="medium" coin-id="bitcoin" width="435" chart-height="170" currency="USD" locale="en" bg-color="#FFFFFF" text-color="#1C1B1B" status-up-color="#4F8A5B" status-down-color="#FE4747" buttons-color="#FFFFFF" chart-color="#E47103" chart-gradient-from="#FFFFFF" chart-gradient-to="#EFEFEF" chart-label-background="#FFFFFF" candle-grids-color="rgba(0,0,0,0.1)" border-color="rgba(28,27,27,0.15)" font="Roboto, Arial, Helvetica" style="max-width: 435px; width: 100%;"></coin-stats-chart-widget>
    </>
  )
}
