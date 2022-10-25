import React from 'react'

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import Search from './Search';
import StockTicker from './StockTicker';


const DashboardHeader = (props) => {
  return (
    <div className='flex flex-col md:flex-row text-zinc-800 ol-span-1 md:col-span-3 xl:col-span-4 row-span-1'>
        {/*<h1 className='text-3xl basis-1/4 m-auto bg-red-100'>Dashboard</h1>*/}

        <div className='basis-1/4 m-auto '>
            <Search />
        </div>

        <div className=' basis-5/6  justify-center mx-4 items-center hidden md:flex'>
            <div className='p-2 bg-white w-full rounded-md shadow'>
               <StockTicker />
            </div>
        </div>
        
        <div className='hidden md:flex items-center basis-1/4 justify-end  child:mx-2 '>

            <div className='p-2 border-2 rounded-full text-center border-zinc-800'>
                <button>
                    <NotificationsOutlinedIcon className='text-zinc-800'/>
                </button>
            </div>

            <div className='flex items-center hover:cursor-pointer hover:bg-white rounded-3xl pr-2'>
                <img 
                    className='rounded-full w-12 h-12'
                    src={props.profile_pic}
                    alt='Tommy Lay'
                />
                <h1 className='p-2 font-medium'>Tommy Lay </h1>
            </div>

        </div>

    </div>

  )
}

export default DashboardHeader