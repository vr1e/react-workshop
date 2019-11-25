import React, { useState, useEffect } from 'react';
import './styles/styles.scss';
import logo from './logo.png';

function App() {
	const [lokacija, setLokacija] = useState('');
	const [location, setLocation] = useState({});
	const [weatherData, setWeatherData] = useState({});

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

	const handlePretraga = e => {
		e.preventDefault();
	};

	return (
		<div className='container'>
			<div className='row justify-content-md-center'>
				<div className='col-sm-8'>
					<form className='form-signin'>
						<div className='text-center mb-4'>
							<img className='mb-4 img-fluid' src={logo} alt='' />
							<h1 className='h3 mb-3 font-weight-normal'>
								Vremenska aplikacija
							</h1>
							<p>
								Za učitavanje inicijalnih podataka morate imati uključen
								geolocation api.
							</p>
							<p>
								{geoLocation
									? `Your latitude is: ${location.latitude} and your longitude: ${location.longitude}.`
									: 'Geolocation is not supported by this browser.'}
							</p>
						</div>

						<div className='form-label-group'>
							<input
								type='text'
								className='form-control'
								placeholder='Lokacija'
								required=''
								autoFocus=''
								value={lokacija}
								onChange={e => setLokacija(e.currentTarget.value)}
							/>
						</div>

						<div className='form-check form-check-inline mt-2'>
							<input
								className='form-check-input'
								type='radio'
								id='trenutnoVreme'
								value='trenutnoVreme'
							/>
							<label className='form-check-label' htmlFor='trenutnoVreme'>
								Trenutno vreme
							</label>
						</div>
						<div className='form-check form-check-inline mt-2'>
							<input
								className='form-check-input'
								type='radio'
								id='prognoza'
								value='prognoza'
							/>
							<label className='form-check-label' htmlFor='prognoza'>
								Prognoza (5 dana/ 3 sata)
							</label>
						</div>

						<button
							className='btn btn-warning btn-block mt-2'
							type='submit'
							onClick={handlePretraga}>
							Unesite lokaciju
						</button>
					</form>
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
				</div>
			</div>
			<p className='mt-5 mb-3 text-muted text-center'>© 2019 Gowi</p>
		</div>
	);
}

export default App;
