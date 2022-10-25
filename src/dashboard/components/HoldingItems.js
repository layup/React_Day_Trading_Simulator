import React, { useEffect, useState } from 'react'

import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis } from 'recharts'


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
];

const HoldingItems = (props) => {
  
  const [change, setChange] = useState(); 

  useEffect(() => {
    if(props.lastChange > 0){
        setChange('+')
    }else{
        setChange('-')
    }

  }, [props.lastChange])

  return (
    <tr className='border-y-2 text-xs lg:text-base '>      
        <td>
            <p className=''><span className='font-semibold pr-2'>{props.ticker}</span></p>
        </td>
        <td>$250</td>
        <td>
            {change === '+' ? 
                <p className='text-emerald-600'>+{props.lastChange}</p>:
                <p className='text-red-500'>{props.lastChange}</p>
            }
        </td>
        <td>521.43</td>
        <td>+8.30</td>
        <td>+60.22</td>
        <td className=' h-10 w-10'>
            <ResponsiveContainer>
                <AreaChart           
                    data={data}
                >
                    <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                    
                    />
                    <YAxis 
                        axisLine={false}
                        tickLine={false}
                        hide={true}
                    />
                    {change === '+' ? 
                        <Area type="temperature" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                    : 
                        <Area type="temperature" dataKey="uv" stroke="#f44336" fillOpacity={0.2} fill="red" />
                    }
                </AreaChart>
            </ResponsiveContainer>
        </td>
    </tr> 
    )
}

export default HoldingItems