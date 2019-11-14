import React from 'react'
import Form from '../components/Form'
import Weather from '../components/Weather'
import Results from '../components/Results'

const API_KEY = "0e412644d25134c2aa7786f47d51a4fc";

class CurrentForecast extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  state = {
    temperature: undefined,
    city: undefined,
    icon: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();


  
    console.log("currentdata" , data)

    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

  render() {
    return <div>
      <Form getWeather={this.getWeather} />
      <Weather 
        temperature={this.state.temperature} 
        city={this.state.city}
        icon={this.state.icon}
        description={this.state.description}
        error={this.state.error}
      />
      <Results />
    </div>
  }
}

export default CurrentForecast
