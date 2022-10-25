import React, { useContext } from 'react'

import StockContext from '../../context/StockContext'

const SearchResults = ({results}) => {

    const {setStockSymbol} = useContext(StockContext);

    return (
        <ul 
            className='absolute top-32 lg:top-24 w-96 rounded-md h-64 overflow-y-scroll overflow-x-hidden bg-white drop-shadow-md z-40 hover:cursor-pointer'
        >
            {results.map((item) => {
                return (
                    <li 
                        key={item.symbol} 
                        className="curosr-pointer p-4 m-2 flex items-center justify-between text-sm rounded-md hover:bg-green-200 transition duration-300`" 
                        onClick={() => 
                            setStockSymbol(item.symbol)
                        }
                    >
                        <span>{item.symbol}</span>
                        <span>{item.description}</span>       
                    </li>
                )
            })}
        </ul>
    ) 
}

export default SearchResults