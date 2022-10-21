import React, {useContext, useState, useEffect} from 'react'

import PerformanceChart from './components/PerformanceChart'
import StockContext from '../context/StockContext';
import { fetchQuote, fetchStockDetails } from '../utiles/API/stock-api';

const Portfolio = () => {

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

    //console.log(stockDetails, quote)


    return (
        <div className='w-screen h-screen p-4 bg-neutral-200 grid grid-rows-10 gap-3 grid-cols-8 '>
            <div className='col-span-6 row-span-10 bg-white rounded-xl drop-md p-4'>
                <div className=''> 
                    <div className='py-2'>
                        <h1 className='text-4xl'>${quote.c}</h1>
                        <div className=' py-1 flex justify-between ' >
                            <div className='flex flex-col '>                            
                                <p className='text-gray-500'>
                                    <span className='text-emerald-500 pr-1'>+5.17 (2.32%)</span>
                                    Today
                                </p>
                                <p>AfterHour</p>
                            </div>

                            <div className='flex flex-col justify-end text-right '>                            
                                <p className='text-xl'>{stockDetails.ticker}</p>
                                <p className='text-gray-500'>{stockDetails.name} | Common Stock</p>
                            </div>

                        </div>
                    </div>

                    <PerformanceChart /> 
                    <hr className='border-b-2 py-10'/>
                    <div className='p-2 flex  '>
                        <div className='bg-orange-200 w-full h-80 '>
                            <h2 className='text-2xl font-bold'>Stats</h2>
                            <div className='flex '>
                                <table className=' child:uppercase text-left [&>tr>th]:font-normal'>
                                    <tr>
                                        <th>Open</th>
                                        <td>{quote.o}</td>
                                    </tr>
                                    <tr>
                                        <th>High</th>
                                        <td>{quote.h}</td>
                                    </tr>
                                    <tr>
                                        <th>Low</th>
                                        <td>{quote.l}</td>
                                    </tr>
                                    <tr>
                                        <th>52 Wk High</th>
                                        <td>{quote.l}</td>
                                    </tr>
                                    <tr>
                                        <th>52 Wk Low</th>
                                        <td>{quote.l}</td>
                                    </tr>
                                </table>

                            </div>

                        </div>
                        <div className='w-full h-80 bg-orange-400'>
                            <h2>About</h2>
                        </div>
                    </div>

                </div>
            </div>
            <div className='col-span-2 row-span-1 bg-white rounded-xl drop-md '>
                <p>Search</p>
            </div>
            <div className='col-span-2 row-span-9 bg-white rounded-xl drop-md'>
                <p>Stocks</p>
            </div>
        </div>
    )
}

export default Portfolio