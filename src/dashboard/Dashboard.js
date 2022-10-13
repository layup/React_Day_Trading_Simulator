import React, {useEffect, useState, setState} from 'react'
import sample_data from './../demo_data/sample_data.csv';
import MSFT_data from './../demo_data/MSFT.tsv'

import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker'

import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';


import MainChart from './components/MainChart';

import * as d3 from 'd3'

import DashboardHeader from './components/DashboardHeader';
import DashboardFooter from './components/DashboardFooter';

const userInfo = {
    'username': 'Tommy Layup',
    'profile_pic':'https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=120x',
    'balance': 10211.76, 
    'balancePercentage': 3.32,
    'dailyChange': 211.76, 
}


function Dashboard() {

    const [barChart, setbarChart] = useState(true);

    return (
        <div className=' bg-neutral-200 w-screen h-screen px-4 py-2 grid grid-rows-16 gap-3 grid-cols-5 '>
            <DashboardHeader profile_pic={userInfo.profile_pic} />

            <div className=' rounded-xl text-zinc-800 flex col-span-4 row-span-10'>
                <div className='p-4 w-full bg-white rounded-lg shadow-md'>
                    <div className='flex justify-between  pt-2 pb-6'>
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium text-zinc-600'>Investment Perforance</h2>  
                            <p className='text-3xl'>${userInfo.balance.toLocaleString()}</p>
                        </div>
                    </div>    

                    <MainChart/>
                </div>
            </div>

            <div className='bg-white rounded-lg p-2 shadow-md col-span-1 row-span-10'>
                    <p className='text-sm'>Account Balance</p>
                    <div className='flex'>
                        <h1 className='text-5xl'>${userInfo.balance.toLocaleString()}</h1>
                        {userInfo.balancePercentage > 0 ? 
                            <div className='flex bg-green-300 h-fit px-1 rounded-lg text-center child:text-green-600 bg-opacity-50'>
                                <ArrowDropUpOutlinedIcon/>
                                <p>
                                    {userInfo.balancePercentage}%
                                </p>
                            </div>
                        : 
                            <div className='flex bg-red-300 h-fit px-1 rounded-lg text-center child:text-red-600 bg-opacity-50'>
                                <ArrowDropDownOutlinedIcon/>
                                <p>
                                    {Math.abs(userInfo.balancePercentage)}%
                                </p>
                            </div>
                        }
                    </div>
                    <div className='flex justify-between text-center'>
                        <div>
                            <h3 className='text-sm'>Todays Change</h3>
                            {userInfo.dailyChange > 0 ? 
                                <p className='text-green-500 text-2xl '>+{userInfo.dailyChange}</p>
                            :
                                <p className='text-red-600 text-med'>-{userInfo.dailyChange}</p>
                            }
                        </div>
                        <div>
                            <h3 className='text-sm'>Annual Change</h3>
                            {userInfo.balancePercentage > 0 ? 
                                <p className='text-green-500 text-2xl '>+{userInfo.balancePercentage}%</p>
                            :
                                <p className='text-red-600 text-med'>-{userInfo.balancePercentage}%</p>
                            }
                        </div>
                    </div>
                
            </div>

            

            <DashboardFooter />
        </div>
    )
}

export default Dashboard