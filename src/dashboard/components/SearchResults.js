import React from 'react'

const SearchResults = ({results}) => {

    return (
        <ul className='absolute top-14 w-96 rounded-md h-64 overflow-y-scroll bg-white drop-shadow-md z-40 hover:cursor-pointer'>
            {results.map((item) => {
                return (
                    <li 
                        key={item.symbol} 
                        className="curosr-pointer p-4 m-2 flex items-center justify-between text-sm rounded-md hover:bg-green-200 " 
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