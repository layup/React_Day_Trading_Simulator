import React, {useEffect, useState, useContext} from 'react'

import PerformanceChart from './components/PerformanceChart';
import DashboardHeader from './components/DashboardHeader';
import Holdings from './components/Holdings';
import Overview from './components/Overview';

import StockContext from '../context/StockContext';
import { fetchQuote, fetchStockDetails } from '../utiles/API/stock-api';

const userInfo = {
    'username': 'Tommy Layup',
    'profile_pic':'https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=120x',
    'balance': 10211.76, 
    'buyingPower': 2106.20,
    'balancePercentage': 3.32,
    'dailyChange': 211.76, 
}


function Dashboard() {

    const {stockSymbol} = useContext(StockContext)

    const [stockDetails, setStockDetails] = useState({})
    const [quote, setQuote] = useState({}); 

    useEffect(() => {
        const updateStockDetails = async () => { 
            try {
                const result = await fetchStockDetails(stockSymbol)
                setStockDetails(result)
            }catch(error) {
                setStockDetails({})
                console.log(error)
            }
        }
        const updateStockOverview = async () => {
            try {
                const result = await fetchQuote(stockSymbol);
                setQuote(result)
            }catch(error){
                setQuote({})
                console.log(error)
                
            }
        };

        updateStockDetails()
        updateStockOverview()

    }, [stockSymbol])


    return (
        <div className=' bg-neutral-200 w-screen h-screen px-4 py-2 grid grid-rows-16 gap-3 grid-cols-5'>
            <DashboardHeader profile_pic={userInfo.profile_pic} />

            <div className=' rounded-xl text-zinc-800 col-span-4 row-span-2 flex '>
                <div className='p-4 w-full bg-white rounded-lg shadow-md'>
                    <PerformanceChart/>
                </div>
            </div>

            <div className='bg-white rounded-lg p-2 shadow-md col-span-1 row-span-1 justify-between '>
                <Overview userInfo={userInfo} />              
            </div>

            <div className='row-span-9 col-span-1 bg-white rounded-xl drop-shadow p-2'>
                <p>Related News</p>
            </div> 

            <div className='row-span-8 col-span-4 bg-white rounded-xl drop-shadow p-2'>
                <Holdings />
            </div>
        </div>
    )
}

export default Dashboard