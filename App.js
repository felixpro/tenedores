import React, {useEffect} from 'react';
import { YellowBox } from 'react-native'
import Navigation from './app/Navigations/Navigation';
import {firebaseApp} from './app/utils/firebase';
import * as firebase from 'firebase';

// Hide useNativeDriver warning
YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  "Setting a timer"
])
export default function App() {

  return (
    <Navigation />
  );
}
