import React, { useState } from 'react';

const mockData = {
	coord: { lon: 20.49, lat: 44.81 },
	weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
	base: 'stations',
	main: { temp: 13, pressure: 1012, humidity: 58, temp_min: 13, temp_max: 13 },
	visibility: 10000,
	wind: { speed: 5.1, deg: 100 },
	clouds: { all: 0 },
	dt: 1574775613,
	sys: {
		type: 1,
		id: 7028,
		country: 'RS',
		sunrise: 1574747342,
		sunset: 1574780505
	},
	timezone: 3600,
	id: 791148,
	name: 'Dorćol (historical)',
	cod: 200
};

const Rezultat = () => {
	const [weatherData, setWeatherData] = useState(mockData);

	return (
		<div className='card border-dark mt-4'>
			<div className='card-header'>Dorćol (historical)</div>
			<div className='card-body'>
				{/* <h5 className='card-title'>Temperatura</h5> */}
				<p className='card-text'>Temperatura: 14°C</p>
				<p className='card-text'>Maksimalna temperatura: 14°C</p>
				<p className='card-text'>Minimalna temperatura: 14°C</p>
				<p className='card-text'>Vazdušni pritisak: 1011mbar</p>
				<hr />
				<p className='card-text'>Izlazak sunca: 06:47</p>
				<p className='card-text'>Zalazak sunca: 16:02</p>
			</div>
		</div>
	);
};

export default Rezultat;
