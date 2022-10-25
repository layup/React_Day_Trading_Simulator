import React, { useState } from 'react'
import { Link } from "react-router-dom";

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

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

  const [activeNavbar, setActiveNavbar] = useState(false)

  return (
    <div className='bg-white h-full   lg:py-4 flex flex-row md:flex-col justify-between items-center md:items-stretch md:justify-start drop-shadow-md'>
        <div className='flex md:flex-col justify-center p-2 lg:p-4 text-center items-center'>
          <img src={logo} alt='logo' className='w-12 lg:w-16  mx-auto '/>
          <h1 className='lg:basis-1/12 font-bold lg:font-extrabold text-transparent py-2 text-xl xl:text-2xl bg-clip-text bg-green-700 md:hidden lg:block ml-3 md:ml-0 '>Leaf Simulator</h1>
          <p className='text-sm text-zinc-400 font-thin hidden lg:block'>We Create Futures</p>
        </div>
        <nav className=''>
          <button className=' md:hidden mr-4 bg-zinc-300 p-2 rounded-lg'>
            <MenuOutlinedIcon className='w-96 h-96'/> 
          </button>

          <ul className=''>

          </ul>

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
    <div className='fixed top-0 left-0 w-full h-16 bg-white md:w-16 lg:w-52 xl:w-64 md:h-full'>
      <DesktopNavbar toggleDashboard={toggleDashboard} togglePortfolio={togglePortfolio} activeSection={activeSection} /> 
    </div>
  )
}

export default Sidebar