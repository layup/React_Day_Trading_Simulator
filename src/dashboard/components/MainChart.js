import React, { useState } from 'react'
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis,Tooltip } from 'recharts'
import { mockHistoricalData } from '../../demo_data/mock'
import { chartConfig } from '../../utiles/config'
import { convertUnixTimestampToDate } from '../../utiles/Helper/Helper'
import ChartFilter from './ChartFilter'


import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';


const MainChart = () => {

  const [data, setData] = useState(mockHistoricalData)
  const [filter, setFilter] = useState('1W')

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]), 
      }
    })
  }

  return (
    <div className='h-5/6'>
      <ul className="flex top-100 right-96 z-40 absolute">
      {Object.keys(chartConfig).map((item) => (
        <li key={item}>
          <ChartFilter
            text={item}
            active={filter === item}
            onClick={() => {
              setFilter(item);
            }}
          />
        </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={formatData(data)} width={730} height={250}>\
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type='monotone' 
            dataKey="value"
            stroke="#15803d" 
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#colorUv)"
           
          />
          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={['dataMin', 'dataMax']} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MainChart