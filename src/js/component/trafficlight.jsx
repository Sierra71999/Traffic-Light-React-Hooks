import React, { useState } from "react";

export const TrafficLight = () => {
  const [color, setColor] = useState("red");
  
  if (color == "red") {
    return (
      <div>
        <div className="trafficTop"></div>
        <div className="container">
          <div className="red light circle selected" onClick={() => setColor("red")}></div>
          <div className="yellow light circle" onClick={() => setColor("yellow")}></div>
          <div className="green ligth circle" onClick={() => setColor("green")}></div>
        </div>
      </div>
    );
  }
  if ( color == 'yellow') {
    return (
        <div className="container">
            <div className="red light circle" onClick={() => setColor("red")}></div>
            <div className="yellow light circle selected" onClick={() => setColor("yellow")}></div>
            <div className="green ligth circle" onClick={() => setColor("green")}></div>
        </div>
    );
  }
  if ( color == 'green') {
    return (
        <div className="container">
            <div className="red light circle" onClick={() => setColor("red")}></div>
            <div className="yellow light circle" onClick={() => setColor("yellow")}></div>
            <div className="green ligth circle selected" onClick={() => setColor("green")}></div>
        </div>
    );
  }
};
