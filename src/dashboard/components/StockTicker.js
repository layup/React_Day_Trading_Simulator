import React, { useState } from "react";
import { useSpring, animated } from "react-spring";


const StockTicker = () => {

    const [key, setKey] = useState(1);

    const scrolling = useSpring({
      from: { transform: "translate(50%,0)" },
      to: { transform: "translate(0%,0)" },
      config: { duration: 10000 },
      reset: true,
      //reverse: key % 2 == 0,
      onRest: () => {
        setKey(key + 1);
      }
    });
   return (
      <div>
        <p>Stock Ticker Placeholder </p>
      </div>
   )
}

export default StockTicker