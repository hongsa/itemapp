// eslint-disable-line
/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: '알람',
      screen: 'itemapp.Alerts', // this is a registered name for a screen
      icon: require('../img/star.png'),
      selectedIcon: require('../img/star_selected.png'), // iOS only
      title: 'Screen Alerts'
    },
    {
      label: '결과',
      screen: 'itemapp.Results',
      icon: require('../img/star.png'),
      selectedIcon: require('../img/star_selected.png'), // iOS only
      title: 'Screen Results'
    },
    {
      label: '설정',
      screen: 'itemapp.Settings',
      icon: require('../img/star.png'),
      selectedIcon: require('../img/star_selected.png'), // iOS only
      title: 'Screen Settings'
    }
  ]
});