import React, { useState } from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

function Sidebar() {


  return (
    <div className='h-screen sticky top-0 w-1/5 md:w-2/6 xl:w-1/5'>
        <div className='bg-white h-full flex flex-col py-4'>
            <h1 className='basis-1/12 p-4 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-emerald-400 to-green-700 border-b-2'>Investment Simulator</h1>
            <ul  
              className='[&>li]:p-4 [&>li>a]:text-lg [&>li>a]:px-2  [&>li]:flex [&>li]:item-center [&>li]:my-4 [&>li>div]:p-1 [&>li>div]:rounded-lg' 
            >
                <li className='flex items-center bg-emerald-400 bg-opacity-20 text-emerald-800 border-r-4 border-emerald-300'>
                  <div className='bg-emerald-300' >
                       <HomeOutlinedIcon className='text-slate-50' />
                  </div>

                  <a href='/' className=''>Dashboard</a>
                </li>
                <li className='child:text-slate-400'>
                  <div className='bg-gray-200 child:text-gray-400'>
                    <CardTravelOutlinedIcon />
                  </div>
                  <a href='/' className=''>Portfolio</a>
                </li>
                <li className='child:text-slate-400'>
                  <div className='bg-gray-200 child:text-gray-400'>
                    <WorkOutlineOutlinedIcon />
                  </div>

                  <a href='/' className=''>Stock Market</a>
                </li>
                <li className='child:text-slate-400'>
                  <div className='bg-gray-200 child:text-gray-400'>
                    <CurrencyExchangeOutlinedIcon />
                  </div>
                  <a href='/' className=''>Cryto Market</a>
                </li>
                <li className='child:text-slate-400'>
                  <div className='bg-gray-200 child:text-gray-400'>
                    <ManageAccountsOutlinedIcon />
                  </div>
                  <a href='/' className=''>Settings</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar