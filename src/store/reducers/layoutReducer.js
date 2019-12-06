const initState = {
	darkMode: false
};

const prognozaReducer = (state = initState, action) => {
	switch (action.type) {
		case 'DARK_MODE_TOGGLE':
			return { ...state, darkMode: !state.darkMode };
		default:
			return state;
	}
};

export default prognozaReducer;
