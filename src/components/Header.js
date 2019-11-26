import React, { useState, useEffect } from 'react';
import logo from '../logo.png';

const Header = () => {
	const [location, setLocation] = useState({});

	/* Provera da li browser podržava gelocation */
	const geoLocation = 'geolocation' in navigator;

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(position => {
				const { latitude, longitude } = position.coords;
				setLocation({ latitude, longitude });
			});
		}
	}, []);

	return (
		<div className='text-center mb-4'>
			<img className='mb-4 img-fluid' src={logo} alt='' />
			<h1 className='h3 mb-3 font-weight-normal'>Vremenska aplikacija</h1>
			<p>
				Za učitavanje inicijalnih podataka morate imati uključen geolocation
				api.
			</p>
			<p>
				{geoLocation
					? `Your latitude is: ${location.latitude} and your longitude: ${location.longitude}.`
					: 'Geolocation is not supported by this browser.'}
			</p>
		</div>
	);
};

export default Header;
