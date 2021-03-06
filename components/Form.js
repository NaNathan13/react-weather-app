import React from "react";


const Form = props => (
	<form onSubmit={props.getWeather}>
        <label>Enter your city!</label>
		<input type="text" name="city" placeholder="City"/>
		<button className="submit-button">Get Weather</button>


        <style jsx>{`
        form{
            text-align: center;
        }

        label{
            margin-right: 20px;
        }

        button{

        }

        hover:button{
            color: blue;
        }
    `}</style>

	</form>
    
);

export default Form;