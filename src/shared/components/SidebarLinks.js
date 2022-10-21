import React from 'react'

import { Link } from "react-router-dom";

/* TODO: 

- fix the link issue 
*/


const SidebarLinks = ({children, name, activeSection, onClick, path }) => {
  return (
    <li 
      className={`flex items-center p-2 md:p-3 md:my-2 ${activeSection === name ? 'bg-emerald-400 bg-opacity-20 text-emerald-800 border-r-4 border-emerald-300': 'text-slate-400'}`}
      onClick={onClick}
    >
      <div className={`p-1 rounded-lg child:px-1 ${activeSection === name ? 'bg-emerald-300 child:text-slate-50': 'bg-gray-200 child:text-gray-400'}`}>
        {children}
      </div>
      <Link to={path} className='text-mid capitalize px-2 hidden lg:flex'>{name}</Link>
    </li>
  )
}

export default SidebarLinks