import React from 'react';
import dayjs from 'dayjs';
import { weatherIconUrl } from '../util/const';

const Rezultat = ({ weather }) => {
	return (
		<div className='card mt-4'>
			<div className='card-header'>
				{weather.name}{' '}
				<span className='badge badge-secondary'>
					{dayjs.unix(weather.dt).format('DD-MM-YYYY')}
				</span>
				<span className='badge badge-info float-right'>
					{dayjs.unix(weather.dt).format('HH:mm')}h
				</span>
				<img
					src={`${weatherIconUrl}${weather.weather[0].icon}.png`}
					alt={weather.weather[0].description}
					title={weather.weather[0].description}
				/>
			</div>
			<div className='card-body'>
				{/* <h5 className='card-title'>Temperatura</h5> */}
				<p className='card-text'>Temperatura: {weather.main.temp}°C</p>
				<p className='card-text'>
					Maksimalna temperatura: {weather.main.temp_max}°C
				</p>
				<p className='card-text'>
					Minimalna temperatura: {weather.main.temp_min}°C
				</p>
				<p className='card-text'>
					Vazdušni pritisak: {weather.main.pressure}mbar
				</p>
				<hr />
				<p className='card-text'>
					Izlazak sunca: {dayjs.unix(weather.sys.sunrise).format('HH:mm')}
				</p>
				<p className='card-text'>
					Zalazak sunca: {dayjs.unix(weather.sys.sunset).format('HH:mm')}
				</p>
			</div>
		</div>
	);
};

export default React.memo(Rezultat);
