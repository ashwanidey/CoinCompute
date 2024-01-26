import { useState, useEffect } from "react";

export default function PositionButton({ long, handleLong, handleShort }) {
  const [isLong, setIsLong] = useState(true);

  useEffect(() => {
    // Update the local state when the prop changes
    setIsLong(long !== undefined ? long : true);
  }, [long]);

  const longStyle = {
    backgroundColor: isLong ? 'green' : 'white',
    color: isLong ? 'white' : "#3B3B3B"
  };

  const shortStyle = {
    backgroundColor: !isLong ? 'red' : 'white',
    color: !isLong ? 'white' : "#3B3B3B"
  };

  return (
    <div className="container-position-setter">
      <div id="long-button" style={longStyle} className="button-28" role="button" onClick={handleLong}>
        LONG
      </div>
      <div id="short-button" style={shortStyle} className="button-28" role="button" onClick={handleShort}>
        SHORT
      </div>
    </div>
  );
}
