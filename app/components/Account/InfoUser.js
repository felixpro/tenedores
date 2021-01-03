import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-easy-toast";

export default function InfoUser(props) {
  const {userInfo, toastRef} = props;
  const {photoURL, displayName, email} = userInfo;


  const changeAvatar = async () => {
    // Request Permissions
    const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;

    if (resultPermissionCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos de la galeria")
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [4,3]
      })
    };
}
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={photoURL ? {uri: photoURL} : require("../../../assets/img/original.jpg")}
      />

      <View>
        <Text style={styles.displayName}>{displayName? displayName: "Anonimo"}</Text>
        <Text>{email? email:"Social Login"}</Text>
      </View>
    </View>
    )
}


const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingBottom: 30,
    paddingTop: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: 'bold',
    paddingBottom: 10,
  }
});
