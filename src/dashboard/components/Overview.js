import React from 'react'

import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Overview = ({userInfo}) => {
    return (
        <div className='w-full h-full '>
            <div>
                <h5 className='text-sm'>Porfolio Value</h5>
                <div className='flex'>
                    <h1 className='text-3xl lg:text-5xl'>${userInfo.balance.toLocaleString()}</h1>
                    {userInfo.balancePercentage > 0 ? 
                        <div className=' text-xs flex bg-green-300 h-fit items-center marker:pr-1 rounded-lg text-center child:text-green-600 bg-opacity-50  '>
                            <ArrowDropUpOutlinedIcon/>
                            <p>{userInfo.balancePercentage}%</p>
                        </div>
                        : 
                        <div className='text-xs flex items-center h-fit px-1 rounded-lg text-center child:text-red-600 bg-opacity-50'>
                            <ArrowDropDownOutlinedIcon/>
                            <p>{Math.abs(userInfo.balancePercentage)}%</p>
                        </div>
                    }
                </div>
            </div>

            <div className='py-2'>
                <h5 className='text-sm'>Buying Power</h5>
                <h1 className='text-3xl lg:text-5xl'>${userInfo.buyingPower.toLocaleString()}</h1>
            </div>

            <div className='flex justify-between text-center'>
                <div>
                    <h3 className='text-sm'>Todays Change</h3>
                    {userInfo.dailyChange > 0 ? 
                        <p className='text-green-500 text-2xl '>+{userInfo.dailyChange}</p>:
                        <p className='text-red-600 text-med'>-{userInfo.dailyChange}</p>
                    }
                </div>
                <div>
                    <h3 className='text-sm'>Annual Change</h3>
                    {userInfo.balancePercentage > 0 ? 
                        <p className='text-green-500 text-2xl '>+{userInfo.balancePercentage}%</p>:
                        <p className='text-red-600 text-med'>-{userInfo.balancePercentage}%</p>
                    }
                </div>
            </div>
        </div>     
    )
}

export default Overview