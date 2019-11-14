import React from 'react';
import App from './App';

class FiveDayForecast extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return <div>
        <App />
    </div>
  }
}

export default FiveDayForecast
