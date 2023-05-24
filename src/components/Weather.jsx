import React from "react";
import ImageSun from '../utils/png/Clear.png';
import ImageClouds from '../utils/png/Clouds.png';
import ImageRain from '../utils/png/Rain.png';
import Cloudoff from '../utils/cloud-off.png';

const Weather = props => {
	console.log(props.mainWeather);
	return(
	<section id="foundWeather" className="container my-3">
		{(props.city && props.country && props.temperature && props.description) ? 
			<div className="row d-flex justify-content-center mx-sm-2 mx-lg-0">    
				<div className="bg-white rounded-3 col-lg-8 col-sm-12 my-shadow py-5 px-4">
					<div className="row">
						<div className="col"> 
							{(props.mainWeather === 'Clear') ? <img src={ImageSun} alt="weather"/> : '' }
							{(props.mainWeather === 'Clouds') ? <img src={ImageClouds} alt="weather"/> : '' }
							{(props.mainWeather === 'Rain') ? <img src={ImageRain} alt="weather"/> : '' }
							{(props.mainWeather === 'Clear' || props.mainWeather === 'Clouds' || props.mainWeather === 'Rain') ? '' : <img src={Cloudoff} alt="weather"/> }
						</div>
						<div className="col d-flex justify-content-center flex-column"> 
							<h2 className="fs-4 fw-normal text-center mb-3">{ props.city }, { props.country }</h2> 
							<h2 className="display-2 fw-bolder text-center mb-0 mt-2">{ (props.temperature > 0) ? '+' + String(Math.round(props.temperature)) + '°' : '-' + String(Math.round(props.temperature) + '°')}</h2>
							<h2 className="fs-5 text-secondary text-center mt-2">{ props.description }</h2> 
						</div>
							
					</div>
				</div>  
			</div>
		: ''}
	</section>)
};

export default Weather;