import React, { useState } from 'react'
import { Link } from "react-router-dom";

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

import logo from './../../assets/images/logo.png'
import SidebarLinks from './SidebarLinks';

const MobileNavbar = () => {


  return (
    <div className='sticky lg:hidden'>
      <p>Hello World</p>
    
    </div>
  )
}


const DesktopNavbar = ({activeSection, toggleDashboard, togglePortfolio}) => {

  return (
    <div className='bg-white h-full   lg:py-4 flex flex-row-reverse md:flex-col justify-between md:justify-start'>
        <div className='flex flex-col justify-center  p-4 text-center '>
          <img src={logo} alt='logo' className='w-12 lg:w-16  mx-auto '/>
          <h1 className='basis-1/12 font-extrabold text-transparent lg:text-xl xl:text-2xl bg-clip-text bg-green-700 hidden lg:block'>Leaf Simulator</h1>
          <p className='text-sm text-zinc-400 font-thin hidden lg:block'>We Create Futures</p>
        </div>
        <nav className='bg-orange-200 '>
          <button className='border-2 md:hidden bg-red-100'>Toggle</button>
          <ul className='hidden md:flex md:flex-col'>
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
    </div>
  )
}


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
    <div className='fixed top-0 left-0 w-full h-16 bg-white md:w-16 lg:w-48 xl:w-64 md:h-full'>
      <DesktopNavbar toggleDashboard={toggleDashboard} togglePortfolio={togglePortfolio} activeSection={activeSection} /> 
    </div>
  )
}

export default Sidebar