import React, { useState } from 'react'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import logo from './../../images/logo.png'

function Sidebar() {


  return (
    <div className='h-screen sticky top-0 w-1/5 md:w-1/6'>
        <div className='bg-white h-full flex flex-col py-4'>
            <div className='flex flex-col justify-center  p-4 text-center '>
              <img src={logo} alt='logo' className='w-16  mx-auto'/>
              <h1 className='basis-1/12 font-extrabold text-transparent text-2xl bg-clip-text bg-green-700 '>Leaf Simulator</h1>
              <p className='text-sm text-zinc-400 font-thin'>We Create Futures</p>
            </div>

            <ul  
              className='[&>li]:p-3 [&>li>a]:text-med [&>li>a]:px-2  [&>li]:flex [&>li]:item-center [&>li]:my-2 [&>li>div]:p-1 [&>li>div]:rounded-lg' 
            >
                <li className='flex items-center bg-emerald-400 bg-opacity-20 text-emerald-800 border-r-4 border-emerald-300'>
                  <div className='bg-emerald-300' >
                       <GridViewOutlinedIcon className='text-slate-50' />
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
                <li className='child:text-slate-400'>
                  <div className='bg-gray-200 child:text-gray-400'>
                    <ManageAccountsOutlinedIcon />
                  </div>
                  <a href='/' className=''>History</a>
              </li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar