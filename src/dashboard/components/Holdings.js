import React, {useContext, useEffect , useState} from 'react'

import { CSSTransition } from 'react-transition-group';
import {mockCompanyDetails} from '../../demo_data/mock'
import { mockHoldings } from '../../demo_data/mock'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

/* TODO: 
 - add CSS Transition to searchbar 

*/

import HoldingItems from './HoldingItems';

const Holdings = (props) => {

    const [input, setInput] = useState('')
    const [holdingSearch, SetHoldingSearch] = useState(false)
    const [sort, setSort] = useState('alpha')

    const toggleHoldingSearch = () => {
        SetHoldingSearch(!holdingSearch)
    }

    return (
        <div className='h-full w-full px- lg:px-4 overflow-y-auto'>
            <div className='flex justify-between py-2'>
                <h1 className='text-xl'>{`Your Holdings (${mockHoldings.count})`}</h1>
                <div className=''>
                    <button className={`bg-zinc-200 px-2 mx-3 ${holdingSearch ? 'rounded-md': 'rounded-xl'}`}>                        
                        {holdingSearch && 
                            (
                                <CSSTransition>
                                    <input className='focus:outline-none h-5 p-1 bg-zinc-200 w-32 text-left text-zinc-800'/>
                                </CSSTransition>
                            )
                        }
                        <SearchOutlinedIcon className="h-10 w-10 text-zinc-600" onClick={toggleHoldingSearch}/>
                    </button>
                    <button className=' bg-zinc-200 rounded-full px-2 mx-1'>
                        <ArrowBackIosNewOutlinedIcon className="h-8 w-8 text-zinc-600"/>
                    </button>
                    <button className='px-2 bg-zinc-200 rounded-xl'>
                        <ArrowForwardIosOutlinedIcon className="h-8 w-8 text-zinc-600"/>
                    </button>
                </div>
            </div>

            <table class="table-fixed w-full relative max-h-max">
                <thead className=''>
                    <tr className='text-xs md:[&>th]:text-base [&>th]:text-start [&>th]:font-normal [&>th]:text-zinc-500'>
                        <th>Symbol</th>
                        <th>Last Price</th>
                        <th>Change</th>
                        <th>Your Equity</th>
                        <th>Today's Return</th>
                        <th>Total Return</th>
                        <th>7-Day Chart</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <HoldingItems ticker={mockCompanyDetails.ticker} name={mockCompanyDetails.name} lastChange={6.5} />
                    <HoldingItems ticker={mockCompanyDetails.ticker} name={mockCompanyDetails.name} lastChange={-6.5} />
                </tbody>
            </table>

        </div>
    )
}

export default Holdings