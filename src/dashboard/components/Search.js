import React, { useState } from 'react'
import { mockSearchResults } from '../../demo_data/mock'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchResults from './SearchResults';

const Search = () => {

    const [input, setInput] = useState("")
    const [bestMatches, setBestMatches] = useState(mockSearchResults.result)

    const clear = () => {
        setInput(""); 
        setBestMatches([]); 
    }

    const updateBestMaches =() => {
        setBestMatches(mockSearchResults.result); 
        console.log(bestMatches)
    }

    return (
        <div className='flex text-zinc-600 shadow rounded-lg w-96' >
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

            {input && bestMatches.length > 0 ? (
                <SearchResults results={bestMatches}/>
            ): null}
        </div>
    )
}

export default Search