import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/styles.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import InputPolje from './components/InputPolje';
import Rezultat from './components/Rezultat';
import TipPrognoze from './components/TipPrognozePicker';
import DarkSwitch from './components/DarkSwitch';
import { pretragaPrognozePoGradu } from './store/actions/prognozaActions';

function App() {
	const { weatherData, grad, responseMessage } = useSelector(
		store => store.prognozaReducer
	);
	const { darkMode } = useSelector(store => store.layoutReducer);

	const dispatch = useDispatch();

	const handlePretraga = e => {
		e.preventDefault();
		dispatch(pretragaPrognozePoGradu(e));
	};

	return (
		<div className={`viewport ${darkMode ? 'dark' : ''}`}>
			<div className='container'>
				<div className='row justify-content-md-center'>
					<div className='col-sm-8'>
						<DarkSwitch />
						<form className='form-signin'>
							<Header />
							<InputPolje />
							<TipPrognoze />
							<button
								className={`btn  btn-block mt-2 ${
									darkMode ? 'btn-secondary' : 'btn-warning'
								}`}
								type='submit'
								disabled={!grad}
								onClick={handlePretraga}>
								Pretraži prognozu
							</button>
						</form>
						{weatherData.length ? (
							weatherData.map(weather => (
								<Rezultat key={weather.id} weather={weather} />
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
		</div>
	);
}

export default App;
