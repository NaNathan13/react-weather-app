import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p> 
	 }
	 { 	
	 	props.temperature && <p className="weather__key"> Current Temperature: 
	 		<span className="weather__value"> { props.temperature }	</span>
	 	</p> 
	 }
	 	 { 	
	 	props.icon && <p className="weather__key"> <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />
	 	</p> 
	 }
	 { 	
	 	props.description && <p className="weather__key"> Conditions: 
	 		<span className="weather__value"> { props.description } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;