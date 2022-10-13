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

    /*
    return (
        <div key={key} className=''>
            <animated.div style={scrolling} >
                <span className="text-emerald-500 px-2">PINE +6.79</span>
                <span className="text-red-500 px-2">APPL -24.5</span>
                <span className="text-emerald-500 px-2">MSFT +12.56</span>
                
            </animated.div>
        </div>
    )
    */ 
   return (
      <div>
        <span className="text-emerald-500 px-2">PINE +6.79</span>
      </div>
   )
}

export default StockTicker