import React from "react";


const Form = props => (
	<form onSubmit={props.getWeather}>
        <label>Enter your city!</label>
		<input type="text" name="city" placeholder="City"/>
		<button className="submit-button">Get Weather</button>
	</form>
    
);

export default Form;