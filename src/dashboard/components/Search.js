import React, { useState } from 'react'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchResults from './SearchResults';

import { searchSymbols } from '../../utiles/API/stock-api';

const Search = () => {
    
    const [input, setInput] = useState("")
    const [bestMatches, setBestMatches] = useState([])

    const clear = () => {
        setInput(""); 
        setBestMatches([]); 
    }

    const updateBestMaches = async () => {       
        try {
            if(input) {
                const searchResults = await searchSymbols(input);
                const result = searchResults.result.filter((item, index) => {
                        return item.type === "Common Stock"
                });
                setBestMatches(result)
            }
        } catch (error) {
            setBestMatches([])
            console.log(error) 
       }
    }

    return (
        <div className='flex text-zinc-600 shadow rounded-lg w-full' >
            <button className='bg-white rounded-l-lg p-2 ' onClick={updateBestMaches} >
                <SearchOutlinedIcon className=''/>
            </button>
            <input 
                type='text' 
                placeholder='Search Stock... '
                value={input} 
                className={`p-2 focus:outline-none  ${!input && 'rounded-r-lg'} w-full`}
                onChange={(event) => {
                    setInput(event.target.value); 
                }}
                onKeyPress={(event) => {
                    if(event.key === 'Enter'){
                        updateBestMaches(); 
                    }

                }}
            /> 
            {input &&
                <button onClick={clear} className='bg-white rounded-r-lg p-2'>
                    <CloseOutlinedIcon className='bg-zinc-300 rounded-full text-white p-1' />
                </button>

            }

            {input && bestMatches.length > 0 ? 
                (
                    <SearchResults results={bestMatches}/>
                ): null
            }
        </div>
    )
}

export default Search