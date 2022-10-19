import React, {useContext, useEffect , useState} from 'react'

import {mockCompanyDetails} from '../../demo_data/mock'
import { AreaChart, ResponsiveContainer, Area, XAxis, YAxis,Tooltip, CartesianGrid, LineChart, Line } from 'recharts'

import { mockHoldings } from '../../demo_data/mock'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

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

const Transaction = (props) => {

    return (
        <div className='h-full px-4'>
            <div className='flex justify-between py-2'>
                <h1 className='text-xl'>Your Holdings (12) </h1>
                <div className=''>
                    <button className='bg-zinc-200 rounded-xl px-2 mx-3'>
                        <SearchOutlinedIcon className="h-10 w-10 text-zinc-600"/>
                    </button>
                    <button className=' bg-zinc-200 rounded-full px-2 mx-1'>
                        <ArrowBackIosNewOutlinedIcon className="h-8 w-8 text-zinc-600"/>
                    </button>
                    <button className='px-2 bg-zinc-200 rounded-xl'>
                        <ArrowForwardIosOutlinedIcon className="h-8 w-8 text-zinc-600"/>
                    </button>
                </div>

            </div>


            <table class="table-fixed  w-full max-h-max overflow-y-scroll">
                <thead className='border-b-2'>
                    <tr className='[&>th]:text-start [&>th]:font-normal [&>th]:text-zinc-500'>
                        
                        <th className=''>Symbols/Stock Name</th>
                        <th>Last Price</th>
                        <th>Change</th>
                        <th>Your Equity</th>
                        <th>Today's Return</th>
                        <th>Total Return</th>
                        <th>7-Day Chart</th>
                    </tr>
                </thead>
                <tbody className='border-b-2 h-14'>
                    <tr className=''>
                        
                        <td>
                            <p className=''><span className='font-semibold pr-2'>{mockCompanyDetails.ticker}</span>({mockCompanyDetails.name})</p>
                        </td>
                        <td>$250</td>
                        <td>+6.30</td>
                        <td>521.43</td>
                        <td>+8.30</td>
                        <td>+60.22</td>
                        <td className=' h-full'>
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
                                    <Area type="temperature" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </td>
                        
                    </tr> 
                </tbody>
            </table>

        </div>
    )
}

export default Transaction