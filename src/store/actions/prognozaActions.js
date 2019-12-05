import { weatherApi, appId } from '../../util/const';

export const pretragaPrognozePoGradu = () => (dispatch, getState) => {
	const { prognozaReducer } = getState();

	console.log(prognozaReducer);

	if (prognozaReducer.grad) {
		fetch(
			`${weatherApi}${prognozaReducer.tipPrognoze}?q=${prognozaReducer.grad}&units=metric&${appId}`
		)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				if (response.cod === '404') {
					dispatch({
						type: 'SET_RESPONSE_MESSAGE',
						payload: response.message
					});
					// dispatch({ type: 'RESET_WEATHER' });
				} else {
					dispatch({ type: 'SET_WEATHER', payload: response });
				}
			})
			.catch(err => {
				console.log(err);
			});
	}
};

export const setGeolocation = () => (dispatch, getState) => {
	const { prognozaReducer } = getState();

	navigator.geolocation.getCurrentPosition(position => {
		const { latitude, longitude } = position.coords;

		fetch(
			`${weatherApi}${prognozaReducer.tipPrognoze}?lat=${latitude}&lon=${longitude}&units=metric&${appId}`
		)
			.then(response => response.json())
			.then(response => {
				console.log(response);
				if (response.cod === '404') {
					dispatch({
						type: 'SET_RESPONSE_MESSAGE',
						payload: response.message
					});
				} else {
					dispatch({
						type: 'SET_GEOLOCATION',
						payload: { latitude, longitude }
					});
					dispatch({ type: 'SET_WEATHER', payload: response });
				}
			})
			.catch(err => {
				console.log(err);
			});
	});
};

export const handleInputChange = value => ({
	type: 'PROMENA_LOKACIJE',
	payload: value
});

export const handleTipPrognoze = value => ({
	type: 'PROMENA_TIPA_PROGNOZE',
	payload: value
});

export const promeniPodatkeUplatnice = (idx, name, value) => ({
	type: 'IZMENI_UPLATNICU',
	payload: { idx, name, value }
});

export const odstampajDete = dete => ({
	type: 'ODSTAMPAJ_DETE',
	payload: dete
});

export const odstampajDecu = () => ({ type: 'ODSTAMPAJ_DECU' });

export const odaberiSledeciMesec = () => ({ type: 'SLEDECI_MESEC' });
