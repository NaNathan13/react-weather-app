import React from "react";

const Weather = props => (
	<div className="weather__info">
		<div className="location">
		{	
	 	props.city && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }</span>
	 	</p> 
	 }
		</div>

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


	<style jsx>{`
		.weather__info{
			text-align: center;
			border: 1px solid black;
			margin-top: 15px;
		}

    `}</style>

	</div>
	
);

export default Weather;