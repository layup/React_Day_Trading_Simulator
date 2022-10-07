import React, {useEffect, useState, setState} from 'react'
import sample_data from './../demo_data/sample_data.csv';

import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

import * as d3 from 'd3'

import './charts.css'

const userInfo = {
    'username': 'Tommy Layup',
    'profile_pic':'https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=120x',
    'balance': 10211.76, 
    'balancePercentage': 3.32,
    'dailyChange': 211.76, 
}



function Dashboard() {

    const [barChart, setbarChart] = useState(true);
    const [chartDaysView, setChartDaysView] = useState('1d')
    
    
    const toggleBarChart = () => {
        setbarChart(!barChart)
    }

    const toggleDay1d = () => {
        setChartDaysView('1d')
    }

    const toggleDay1w = () => {
        setChartDaysView('1w')
    }

    const toggleDay1m = () => {
        setChartDaysView('1m')
    }

    const toggleDay6m = () => {
        setChartDaysView('6m')
    }

    const toggleDay1y = () => {
        setChartDaysView('1y')
    }

    const toggleDayAll = () => {
        setChartDaysView('all')
    }

    useEffect(() => {

        // Create a dataset of pets and the amount of people that own them
        let dataSet = [
          {subject: "Dogs", count: 150},
          {subject: "Fish", count: 75},
          {subject: "Cats", count: 135},
          {subject: "Bunnies", count: 240},
        ]
        // Generate a p tag for each element in the dataSet with the text: Subject: Count 
        d3.select('#pgraphs').selectAll('p').data(dataSet).enter().append('p').text(dt => dt.subject + ": " + dt.count)
        
        // Bar Chart:
          const getMax = () => { // Calculate the maximum value in the DataSet
            let max = 0
            dataSet.forEach((dt) => {
                if(dt.count > max) {max = dt.count}
            })
            return max
          }
       
          
          // Create each of the bars and then set them all to have the same height(Which is the max value)
          d3.select('#BarChart').selectAll('div').data(dataSet) 
          .enter().append('div').classed('bar', true).style('height', `${getMax()}px`)
      
          //Transition the bars into having a height based on their corresponding count value
          d3.select('#BarChart').selectAll('.bar')
          .transition().duration(1000).style('height', bar => `${bar.count}px`)
            .style('width', '80px').style('margin-right', '10px').delay(300) // Fix their width and margin
          
          
           // Generate random data for our line where x is [0,15) and y is between 0 and 100
           let lineData = []
           for(let i = 0; i < 15; i++) {
              lineData.push({x: i + 1, y: Math.round(Math.random() * 100)})
           }
      
           // Create our scales to map our data values(domain) to coordinate values(range)
           let xScale = d3.scaleLinear().domain([0,15]).range([0, 300])
           let yScale = d3.scaleLinear().domain([0,100]).range([300, 0]) // Since the SVG y starts at the top, we are inverting the 0 and 300.
           
           // Generate a path with D3 based on the scaled data values
           let line = d3.line()
            .x(dt => xScale(dt.x))
            .y(dt => yScale(dt.y))
           
           // Generate the x and y Axis based on these scales
           let xAxis = d3.axisBottom(xScale)
           let yAxis = d3.axisLeft(yScale)
           
           // Create the horizontal base line
           d3.select('#LineChart').selectAll('path').datum(lineData) // Bind our data to the path element
          .attr('d', d3.line().x(dt => xScale(dt.x)) // Set the path to our line function, but where x is the corresponding x
          .y(yScale(0))).attr("stroke", "blue").attr('fill', 'none') // Set the y to always be 0 and set stroke and fill color
      
      
          
           d3.select('#LineChart').selectAll('path').transition().duration(1000) // Transition the line over 1 sec
           .attr('d', line) // Set the path to our line variable (Which corresponds the actual path of the data)
           
           // Append the Axis to our LineChart svg
           d3.select('#LineChart').append("g")
           .attr("transform", "translate(0, " + 300 + ")").call(xAxis)
      
           d3.select('#LineChart').append("g")
           .attr("transform", "translate(0, 0)").call(yAxis)
      }, [])
  


    return (
        <div className='col bg-gray-400 bg-opacity-30 w-screen h-screen px-6 py-2'>
            <div className='flex h-14 py-1 text-zinc-800 bg-orange-100s'>
                {/*<h1 className='text-3xl basis-1/4 m-auto bg-red-100'>Dashboard</h1>*/}

                <div className='basis-1/4 m-auto '>
                    <forum className='flex'>
                        <button className='bg-white rounded-l-lg p-2 shadow-md'>
                            <SearchOutlinedIcon className=''/>
                        </button>
                        <input type='search' placeholder='search' className='rounded-r-lg p-2 focus:outline-none shadow-md' /> 
                    </forum>
                </div>

                <div className=' basis-5/6 flex justify-center mx-4 items-center'>
                    <div className='p-2 bg-blue-200 w-full'>
                        <p>Bitcoin BTC $29,383.32 -2.45%</p>
                    </div>

                </div>
                
                <div className='flex items-center basis-1/4 justify-end  child:mx-2 '>

                    <div className='p-2 border-2 rounded-full text-center border-zinc-800'>
                        <button>
                            <NotificationsOutlinedIcon className='text-zinc-800'/>
                        </button>
                    </div>

                    <img 
                        className='rounded-full w-12 h-12'
                        src={userInfo.profile_pic}
                        alt='Tommy Lay'
                    />
                    <h1 className='pr-2 font-medium'>Tommy Lay </h1>
                    
                </div>
            </div>

            <div className=' rounded-xl h-4/6 text-zinc-800 flex'>
                <div className='p-4 basis-5/6 bg-white mr-4 rounded-lg shadow-md'>
                    <div className='flex  justify-between '>
                        <div className='flex flex-col'>
                            <h2 className='text-md font-medium text-zinc-600'>Investment Perforance</h2>  
                            <p className='text-3xl'>${userInfo.balance.toLocaleString()}</p>
                        </div>

                        
                        <div className='flex child:mx-2 items-center'>
                        
                            <div className=''>
                                <ul className='flex rounded-md bg-zinc-200 p-1 [&>li>button]:p-1 w-full '>
                                    <li>
                                        {barChart? 
                                            <button className='cursor-default bg-white rounded-md '><BarChartOutlinedIcon/></button>:
                                            <button onClick={toggleBarChart} ><BarChartOutlinedIcon /></button>
                                        }
                                    </li>
                                    <li>
                                        {barChart? 
                                            <button onClick={toggleBarChart}><ShowChartOutlinedIcon/></button>:
                                            <button className='cursos-defaut bg-white rounded-md'><ShowChartOutlinedIcon/></button>

                                        }
                                    </li>
                                </ul>
                            </div>

                            <div className=''>
                                <ul className='flex p-1 bg-zinc-200 rounded-md text-zinc-400 font-bold [&>li>button]:p-1 w-full [&>li>button]:w-10 '>
                                        <li>
                                            {chartDaysView === '1d' ? 
                                                <button className='cursor-default bg-white rounded-md text-zinc-900'>1d</button>:
                                                <button onClick={toggleDay1d} >1d</button>
                                            }
                                        </li>
                                        <li>
                                            {chartDaysView === '1w' ? 
                                                <button className='cursor-default bg-white rounded-md text-zinc-900'>1w</button>:
                                                <button onClick={toggleDay1w} >1w</button>
                                            }
                                        </li>
                                        <li>
                                            {chartDaysView === '1m' ? 
                                                <button className='cursor-default bg-white rounded-md text-zinc-900'>1m</button>:
                                                <button onClick={toggleDay1m} >1m</button>
                                            }                                       
                                        </li>
                                        <li>
                                            {chartDaysView === '6m' ? 
                                                <button className='cursor-default bg-white rounded-md  text-zinc-900'>6m</button>:
                                                <button onClick={toggleDay6m} >6m</button>
                                            }   
                                        </li>
                                        <li>
                                            {chartDaysView === '1y' ? 
                                                <button className='cursor-default bg-white rounded-md text-zinc-900'>1y</button>:
                                                <button onClick={toggleDay1y} >1y</button>
                                            }   
                                        </li>
                                        <li>
                                            {chartDaysView === 'all' ? 
                                                <button className='cursor-default bg-white rounded-md text-zinc-900'>All</button>:
                                                <button onClick={toggleDayAll} >All</button>
                                            }

                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='Chart bg-orange-200 h-5/6'>
                        <p>Hello World</p>
                    
                    </div>
  
                    
                </div>

                <div className='bg-white basis-1/6 rounded-lg p-2 shadow-md'>
                    <p className='text-sm'>Account Balance</p>
                    <div className='flex'>
                        <h1 className='text-5xl'>${userInfo.balance.toLocaleString()}</h1>
                        {userInfo.balancePercentage > 0 ? 
                            <div className='flex bg-green-300 h-fit px-1 rounded-lg text-center child:text-green-600 bg-opacity-50'>
                                <ArrowDropUpOutlinedIcon/>
                                <p>
                                    {userInfo.balancePercentage}%
                                </p>
                            </div>
                        : 
                            <div className='flex bg-red-300 h-fit px-1 rounded-lg text-center child:text-red-600 bg-opacity-50'>
                                <ArrowDropDownOutlinedIcon/>
                                <p>
                                    {Math.abs(userInfo.balancePercentage)}%
                                </p>
                            </div>
                        }
                    </div>
                    <div className='py-4 flex justify-between text-center'>
                        <div>
                            <h3 className='text-sm'>Todays Change</h3>
                            {userInfo.dailyChange > 0 ? 
                                <p className='text-green-500 text-2xl '>+{userInfo.dailyChange}</p>
                            :
                                <p className='text-red-600 text-med'>-{userInfo.dailyChange}</p>
                            }
                        </div>
                        <div>
                            <h3 className='text-sm'>Annual Change</h3>
                            {userInfo.balancePercentage > 0 ? 
                                <p className='text-green-500 text-2xl '>+{userInfo.balancePercentage}%</p>
                            :
                                <p className='text-red-600 text-med'>-{userInfo.balancePercentage}%</p>
                            }
                        </div>



                    </div>
                
                </div>

            </div>

            <div className=' h-1/6 mt-3 rounded-lg '>
                <div className=' flex h-full child:rounded-md  child:p-2 child:shadow-md'>
                    <div className='bg-white basis-1/3 mr-4'>
                            <h1>Top Earners</h1>
                    </div>

                    <div className='bg-white basis-1/3 mr-4'>
                        <h1>Recent Transactions</h1>
                    </div>

                    <div className='bg-white basis-1/3'>
                            <h1>News</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard