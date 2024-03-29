import { useState, useEffect } from "react";

export default function PositionButton({ OuterBox = "container-position-setter",long, handleLong, handleShort }) {
  const [isLong, setIsLong] = useState(true);

  useEffect(() => {
    // Update the local state when the prop changes
    setIsLong(long !== undefined ? long : true);
  }, [long]);

  const longStyle = {
    backgroundColor: isLong ? 'green' : '',
    color: isLong ? 'white' : "#3B3B3B",
    borderRadius : "20px 0 0 20px",
  };

  const shortStyle = {
    backgroundColor: !isLong ? 'red' : '',
    color: !isLong ? 'white' : "#3B3B3B",
    borderRadius : "0px 20px 20px 0px"
  };

  return (
    <div className={OuterBox} >
      <div id="long-button" style={longStyle} className="button-28" role="button" onClick={handleLong}>
        LONG
      </div>
      <div id="short-button" style={shortStyle} className="button-28" role="button" onClick={handleShort}>
        SHORT
      </div>
    </div>
  );
}
