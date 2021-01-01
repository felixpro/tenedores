import React, {useEffect} from 'react';
import Navigation from './app/Navigations/Navigation';
import {firebaseApp} from './app/utils/firebase';
import * as firebase from 'firebase';

// Hide useNativeDriver warning
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

export default function App() {
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
    })
  }, [])

  return (
    <Navigation />
  );
}
