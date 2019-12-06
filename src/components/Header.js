import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGeolocation } from '../store/actions/prognozaActions';
import sun from '../sun.png';
import moon from '../fullmoon.png';

const Header = () => {
	const { geolocation } = useSelector(store => store.prognozaReducer);
	const { darkMode } = useSelector(store => store.layoutReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		if ('geolocation' in navigator) {
			dispatch(setGeolocation());
		}
	}, []);

	return (
		<div className='text-center mb-4'>
			<img className='mb-4 img-fluid' src={darkMode ? moon : sun} alt='' />
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
