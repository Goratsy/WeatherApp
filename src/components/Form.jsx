import React from 'react';

const Form = ({getWeather, message}) => {

	return (
		<section id="searchWeather" className='container my-5'>
			<div className='row justify-content-center'>
				<div className='bg-white rounded-3 my-shadow py-5 px-4 col-lg-8 col-sm-12'>
					<form onSubmit={getWeather} className='px-lg-5 px-sm-0'>
						<h3 className='fw-normal mb-3'>Введите Город и Страну</h3>
						<input type="text" name="city" placeholder="Город" className='form-control mb-3'/>
						<input type="text" name="country" placeholder="Страна" className='form-control mb-3'/>
						{ message ? 
							<div className="alert alert-danger mb-3" role="alert">
								{message}
							</div>
						: 
							<div className="alert alert-warning mb-3" role="alert">
								Следует вводить города и страны на Английском!
							</div>
						}
						<button className='btn btn-primary '>Найти</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Form;