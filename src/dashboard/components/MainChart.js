import React, { useState, useContext, useEffect } from 'react'
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis,Tooltip } from 'recharts'

import { portfolioValue } from '../../demo_data/mock'
import { chartConfig } from '../../utiles/config'
import { convertUnixTimestampToDate, convertDateToUnixTimestamp, createDate} from '../../utiles/Helper/Helper'
import { fetchHistoricalData } from '../../utiles/API/stock-api'

import ChartFilter from './ChartFilter'
import StockContext from '../../context/StockContext'

import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';


const MainChart = () => {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState('1W')



  const {stockSymbol} = useContext(StockContext);   

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(3),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
  };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    console.log('UPDATING ATTEMPT')  
    updateChartData();    


    
  }, [stockSymbol, filter]);


  return (
    <div className='h-96 '>
      <ul className="flex flex-end ">
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
        <AreaChart data={data} width={730} height={250}>\
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type='temperature' 
            dataKey="value"
            stroke="#15803d" 
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#colorUv)"
           
          />
          <Tooltip />
          <XAxis dataKey={"date"}/>
          <YAxis domain={['dataMin' , 'dataMax']}  />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MainChart