/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Movies from './modules/movies/Movies';
import Alerts from './modules/alerts/Alerts';
import Results from './modules/results/Results';
import Settings from './modules/settings/Settings';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('itemapp.Movies', () => Movies, store, Provider);
  Navigation.registerComponent('itemapp.Alerts', () => Alerts, store, Provider);
  Navigation.registerComponent('itemapp.Results', () => Results, store, Provider);
  Navigation.registerComponent('itemapp.Settings', () => Settings, store, Provider);
}
