import { combineReducers } from 'redux';
import movies from '../modules/movies/movies.reducer';
import alerts from '../modules/alerts/alerts.reducer';
import results from '../modules/results/results.reducer';
import settings from '../modules/settings/settings.reducer';


const rootReducer = combineReducers({
	movies,
	alerts,
	results,
	settings
});

export default rootReducer;
