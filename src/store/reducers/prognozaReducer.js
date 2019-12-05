const initState = {
	tipPrognoze: 'weather',
	geolocation: null,
	grad: '',
	weatherData: [],
	responseMessage: 'Loading...'
};

const prognozaReducer = (state = initState, action) => {
	switch (action.type) {
		case 'SET_GEOLOCATION':
			return { ...state, geolocation: action.payload };
		case 'SET_RESPONSE_MESSAGE':
			return { ...state, responseMessage: action.payload };
		case 'RESET_WEATHER':
			return { ...state, weatherData: [] };
		case 'SET_WEATHER':
			let newForecast = [];
			if (state.tipPrognoze === 'weather') {
				newForecast = [action.payload];
			}

			if (state.tipPrognoze === 'forecast') {
				newForecast = action.payload.list.map((hour, idx) => {
					return {
						...hour,
						name: action.payload.city.name,
						id: `${action.payload.city.id}_${idx}`,
						sys: {
							...hour.sys,
							sunrise: action.payload.city.sunrise,
							sunset: action.payload.city.sunset
						}
					};
				});
			}

			return { ...state, weatherData: newForecast };
		case 'PROMENA_LOKACIJE':
			return { ...state, grad: action.payload };
		case 'PROMENA_TIPA_PROGNOZE':
			return { ...state, tipPrognoze: action.payload };
		default:
			return state;
	}
};

export default prognozaReducer;
