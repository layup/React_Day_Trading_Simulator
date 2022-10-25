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
        <div className=' bg-neutral-300 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 grid-rows-8 gap-4 p-3 lg:p-4 max-w-screen lg:w-screen h-screen  mt-16 md:ml-16 md:mt-0 lg:ml-52 xl:ml-64 auto-rows-fr'>
            <DashboardHeader profile_pic={userInfo.profile_pic} />

            <div className=' rounded-xl text-zinc-800 col-span-1 md:col-span-2 xl:col-span-3 row-span-5'>
                <div className='p-4 w-full h-full bg-white rounded-lg shadow-md'>
                    <PerformanceChart/>
                </div>
            </div>

            <div className='bg-white rounded-lg p-2 shadow-md col-span-1 row-span-5 xl:row-span-7  '>
                <Overview userInfo={userInfo} />              
            </div>


            <div className='col-span-1 md:col-span-3 row-span-3 xl:row-span-2 bg-white rounded-xl drop-shadow p-2 '>
                <Holdings />
            </div>
        </div>
    )
}

export default Dashboard