import React from 'react';
import './styles/styles.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import InputPolje from './components/InputPolje';
import Rezultat from './components/Rezultat';
import TipPrognoze from './components/TipPrognozePicker';

function App() {
	const handlePretraga = e => {
		e.preventDefault();
	};

	return (
		<div className='container'>
			<div className='row justify-content-md-center'>
				<div className='col-sm-8'>
					<form className='form-signin'>
						<Header />
						<InputPolje />
						<TipPrognoze />
						<button
							className='btn btn-warning btn-block mt-2'
							type='submit'
							onClick={handlePretraga}>
							Unesite lokaciju
						</button>
					</form>
					<Rezultat />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
