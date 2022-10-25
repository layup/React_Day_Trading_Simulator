import React from 'react'

const DashboardLayuout = () => {
  return (
    <div className='bg-neutral-300 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-8 gap-4 p-4 max-w-screen lg:w-screen h-screen  mt-16 md:ml-16 md:mt-0 lg:ml-52 xl:ml-64 auto-rows-fr'>
        <div className=' bg-orange-100 col-span-1 md:col-span-2 xl:col-span-4 row-span-1  '>
          <div className='w-full h-full '>Header</div>
        </div>
        <div className='bg-orange-100 md:col-span-2 xl:col-span-3 row-span-5'> 
         <div className='w-full h-full '>Chart</div>
        </div>
        <div className='bg-orange-100 row-span-2 xl:row-span-7'> 
          <div className='w-full h-full '>Overview</div>
        </div>
        <div className='bg-orange-100 xl:col-span-3 row-span-2 xl:row-span-2'> 
          <div className='w-full h-full'>Footer</div>
        </div>
    
    </div>
  )
}

export default DashboardLayuout