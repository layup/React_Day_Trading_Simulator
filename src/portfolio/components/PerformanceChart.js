import React, { useState, useContext, useEffect } from 'react'
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis,Tooltip, CartesianGrid } from 'recharts'

import { chartConfig } from '../../utiles/config'
import { convertUnixTimestampToDate, convertDateToUnixTimestamp, createDate} from '../../utiles/Helper/Helper'
import { fetchHistoricalData } from '../../utiles/API/stock-api'

import ChartFilter from './ChartFilter'
import StockContext from '../../context/StockContext'

import { format, parseISO } from "date-fns";

const CustomTooltip = ({ active, payload, label}) => {

  if (active && payload && payload.length) {
    return (
      <div className=" bg-white shadow-md p-2 rounded-xl border-transparent focus:border-current focus:ring-0 ">
        <p className=''>{`${label}`}</p> 
        <p className=''>{`Time: ${payload[0].payload.index}`}</p>
        <p className='text-emerald-700'>{`Value:  ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
const formatData = (data, filter) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
        index:index, 
        filter:filter
      };
    });
};

const PerformanceChart = () => {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState('1D')

  const {stockSymbol} = useContext(StockContext);   

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
        setData(formatData(result, filter));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();    
  }, [stockSymbol, filter]);

  return (
    <div className='h-96'>
      <div className=' flex justify-between '>

        <ul className="flex">
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
      </div>
      <ResponsiveContainer>
        <AreaChart 
          data={data} 
          width="100%" 
          height={250}           
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >\
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area 
            type='natural' 
            dataKey="value"
            stroke="#15803d" 
            fillOpacity={1}
            strokeWidth={0.5}
            
            fill="url(#colorUv)"
           
          />
          <Tooltip content={<CustomTooltip range={data.length} index={data.index} cursor={false}/>} />
          <XAxis 
            dataKey={"date"}
            axisLine={false}
            hide={true}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              
              if(filter === '5Y' && date.getDate() % 1 === 0){
                return format(date, "yyyy")
              }

              if (date.getDate() % 1 === 0) {
                return format(date, "MMM d");
              }
              
              return "";
            }}
            minTickGap={30}
        
          />
          <YAxis 
            domain={['auto' , 'auto']} 
            unit={'$'} 
            typer="number"
            axisLine={false}
            tickLine={false}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />
          <CartesianGrid opacity={0.3} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart