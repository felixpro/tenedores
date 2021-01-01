import React from 'react';
import {Text, View, Button} from 'react-native';
import * as firebase from "firebase";

export default function userLogged() {
  return (<View>
    <Text>userLogged...</Text>

    <Button title="Cerrar secion" onPress={() => firebase.auth().signOut()}/>
  </View>)
}
