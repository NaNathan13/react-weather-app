import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import CurrentForecast from '../components/CurrentForecast'

const CurrentWeather = () => (
  <div>
    <Head>
      <title>Current Weather</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <div className="hero">
      <h1>Get the Current Weather Now!</h1>
      <CurrentForecast />
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

export default CurrentWeather
