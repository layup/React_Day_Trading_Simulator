import React from 'react'

const DashboardFooter = () => {
  return (
    <div className='  rounded-lg bg-orange-200 col-span-5 row-span-4'>
        <div className=' flex h-full child:rounded-md  child:p-2 child:shadow-md'>
            <div className='bg-white basis-1/3 mr-4'>
                    <h1>Top Earners</h1>
                    <p>Test</p>
                    <p>Test</p>
                    <p>Test</p>
                    <p>test</p>
            </div>

            <div className='bg-white basis-1/3 mr-4'>
                <h1>Recent Transactions</h1>
            </div>

            <div className='bg-white basis-1/3'>
                    <h1>News</h1>
            </div>
        </div>
    </div>
  )
}

export default DashboardFooter