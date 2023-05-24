import React from "react";

const Titles = () => {
	return (
		<section id="aboutWeather" className="container">
			<div className="row d-flex justify-content-center mx-sm-2 mx-lg-0">
				<div className="bg-white py-2 col-xl-8 col-sm-12 rounded-3 my-shadow">
					<div className="col-8 py-5 mx-auto">
						<h1 className="display-6 fw-semibold ">Проект создан для поиска погоды</h1>
						<p className="fs-6">
							В проекте используется React и Bootstrap, а также сайт рассчитан на получение данных из сервиса <a href="https://openweathermap.org/">OpenWeather</a> 
						</p>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Titles;