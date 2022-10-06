import React, {useEffect} from 'react'
import Overview from './components/Overview'
import PerformanceChart from './components/PerformanceChart'
import Portfolio from './components/Portfolio'

import * as d3 from 'd3'

import './charts.css'

const userInfo = {
    'username': 'Tommy Layup',
    'profile_pic':'https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=120x'
}


function Dashboard() {

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
        <div className='col bg-emerald-700 bg-opacity-20 w-screen h-screen p-6'>
            <div className='flex h-20 text-zinc-800 '>
                <h1 className='text-3xl basis-3/4 m-auto '>Dashboard</h1>
                
                <div className='flex items-center basis-1/4 justify-end'>
                    <img 
                        className='rounded-full w-14 h-14'
                        src={userInfo.profile_pic}
                        alt='Tommy Lay'
                    />
                    <h3 className='p-2 font-semibold'>{userInfo.username}</h3>
                </div>
            </div>

            <div className='bg-white rounded-xl h-3/6 text-zinc-800'>
                <div className='p-2 '>
                    <p>Investment Perforance</p>       
                    <div id="pgraphs"></div> 
                    <div id="BarChart"></div> 
                </div>

            </div>

            <div className='bg-white h-2/6'>
                <p>Hello World</p>
            </div>
        </div>
    )
}

export default Dashboard