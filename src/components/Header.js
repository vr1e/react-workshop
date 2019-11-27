import React from 'react';
import logo from '../logo.png';

const Header = ({ geolocation }) => {
	return (
		<div className='text-center mb-4'>
			<img className='mb-4 img-fluid' src={logo} alt='' />
			<h1 className='h3 mb-3 font-weight-normal'>Vremenska aplikacija</h1>
			<p>
				Za učitavanje inicijalnih podataka morate imati uključen geolocation
				api.
			</p>
			<p>
				{geolocation
					? `Vaša geografska širina je: ${geolocation.latitude} a vaša geografska dužina je: ${geolocation.longitude}.`
					: 'Geolokacija nije podržana u vašem browseru.'}
			</p>
		</div>
	);
};

export default React.memo(Header);
