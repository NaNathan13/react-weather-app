import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import FiveDayForecast from '../components/FiveDayForecast'

const Forecast = () => (
  <div>
    <Head>
      <title>Forecast</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className='hero'>
        <h1>Five Day Forecast</h1>
        <FiveDayForecast />
        
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      
      h1{
        text-align: center;
      }
    `}</style>
  </div>
)

export default Forecast
