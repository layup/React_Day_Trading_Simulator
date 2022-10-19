import React, { useState } from 'react'
import { Link } from "react-router-dom";

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import logo from './../../assets/images/logo.png'
import SidebarLinks from './SidebarLinks';

function Sidebar() {
  //convert this into a redux global state 
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleDashboard = () => {
    setActiveSection('dashboard')
  }
  const togglePortfolio = () => {
    setActiveSection('portfolio')
  }

  return (
    <div className='h-screen sticky top-0 w-1/5 md:w-1/6'>
        <div className='bg-white h-full flex flex-col py-4'>
            <div className='flex flex-col justify-center  p-4 text-center '>
              <img src={logo} alt='logo' className='w-16  mx-auto'/>
              <h1 className='basis-1/12 font-extrabold text-transparent text-2xl bg-clip-text bg-green-700 '>Leaf Simulator</h1>
              <p className='text-sm text-zinc-400 font-thin'>We Create Futures</p>
            </div>
            <nav>
              <ul>
                <SidebarLinks 
                  activeSection={activeSection}
                  name={'dashboard'}
                  path={'/'}
                  onClick={toggleDashboard} 
                >
                  <GridViewOutlinedIcon />
                </SidebarLinks>

                <SidebarLinks 
                  activeSection={activeSection}
                  name={'portfolio'}
                  path={'/portfolio'}
                  onClick={togglePortfolio} 
                >
                  <CardTravelOutlinedIcon />
                </SidebarLinks>
                <SidebarLinks 
                  activeSection={activeSection}
                  name={'history'}
                  path={'/'}
              
                >
                  <WorkOutlineOutlinedIcon />
                </SidebarLinks>

                <SidebarLinks 
                  activeSection={activeSection}
                  name={'stock market'}
                  path={'/'}
              
                >
                  <CurrencyExchangeOutlinedIcon />
                </SidebarLinks>

                <SidebarLinks 
                  activeSection={activeSection}
                  name={'cryto market'}
                  path={'/'}
  
                >
                  <CurrencyExchangeOutlinedIcon />
                </SidebarLinks>
                <SidebarLinks 
                  activeSection={activeSection}
                  name={'settings'}
                  path={'/'}
              
                >
                  <ManageAccountsOutlinedIcon />
                </SidebarLinks>
              </ul>
            </nav>

            <div>
            
            
            </div>
        </div>
    </div>
  )
}

export default Sidebar