import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import InputPolje from './components/InputPolje';
import Rezultat from './components/Rezultat';
import TipPrognoze from './components/TipPrognozePicker';
import { weatherApi, appId } from './util/const';

function App() {
	const [tipPrognoze, setTipPrognoze] = useState('weather');
	const [geolocation, setGeolocation] = useState();
	const [grad, setGrad] = useState('');
	const [weatherData, setWeatherData] = useState([]);
	const [responseMessage, setResponseMessage] = useState('Loading...');

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				const { latitude, longitude } = position.coords;
				setGeolocation({ latitude, longitude });
			});
		}
	}, []);

	useEffect(() => {
		if (geolocation) {
			fetch(
				`${weatherApi}${tipPrognoze}?lat=${geolocation.latitude}&lon=${geolocation.longitude}&units=metric&${appId}`
			)
				.then(response => response.json())
				.then(response => {
					console.log(response);
					response && setWeatherData([response]);
				})
				.catch(err => {
					console.log(err);
				});
		}
	}, [geolocation]);

	const handlePretraga = e => {
		e.preventDefault();

		if (grad) {
			fetch(`${weatherApi}${tipPrognoze}?q=${grad}&units=metric&${appId}`)
				.then(response => response.json())
				.then(response => {
					console.log(response);
					if (response.cod === '404') {
						setResponseMessage(response.message);
						setWeatherData([]);
					} else if (tipPrognoze === 'weather') {
						response && setWeatherData([response]);
					} else {
						const newForecast = response.list.map((hour, idx) => {
							return {
								...hour,
								name: response.city.name,
								id: `${response.city.id}_${idx}`,
								sys: {
									...hour.sys,
									sunrise: response.city.sunrise,
									sunset: response.city.sunset
								}
							};
						});
						setWeatherData(newForecast);
					}
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	const handleInputChange = e => setGrad(e.currentTarget.value);

	const handleTipPrognoze = e => setTipPrognoze(e.target.id);

	return (
		<div className='container'>
			<div className='row justify-content-md-center'>
				<div className='col-sm-8'>
					<form className='form-signin'>
						<Header geolocation={geolocation} />
						<InputPolje grad={grad} handleInputChange={handleInputChange} />
						<TipPrognoze
							tipPrognoze={tipPrognoze}
							handleTipPrognoze={handleTipPrognoze}
						/>
						<button
							className='btn btn-warning btn-block mt-2'
							type='submit'
							disabled={!grad}
							onClick={handlePretraga}>
							Pretraži prognozu
						</button>
					</form>
					{geolocation && weatherData.length ? (
						weatherData.map(weather => (
							<Rezultat
								key={weather.id}
								geolocation={geolocation}
								weather={weather}
							/>
						))
					) : (
						<div className='card mt-4'>
							<div className='card-body'>{responseMessage}</div>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
