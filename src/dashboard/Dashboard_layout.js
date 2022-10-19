import React from 'react'

const Dashboard_layout = () => {
  return (
    <div className='bg-neutral-300 grid grid-cols-5 grid-rows-16 gap-4 h-screen w-screen p-4'>
        <div className=' bg-orange-100 col-span-5 row-span-1'> Header</div>
        <div className='bg-orange-100 col-span-4 row-span-12'> Chart</div>
        <div className='bg-orange-100 col-span-1 row-span-12'> Overview</div>
        <div className='bg-orange-100 col-span-5 row-span-'> Footer</div>
    
    </div>
  )
}

export default Dashboard_layout