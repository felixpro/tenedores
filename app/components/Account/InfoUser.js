import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-easy-toast";

export default function InfoUser(props) {
  const {userInfo, toastRef, setLoading, setLoadingText} = props;
  const {photoURL, displayName, email, uid} = userInfo;


  const changeAvatar = async () => {
    // Request Permissions
    const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;

    if (resultPermissionCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos de la galeria")
    } else {
      // Get the image
      const result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true,
        aspect: [4,3]
      })

      if (result.cancelled) {
        toastRef.current.show("Has cerrado la seleccion de imagenes");
      } else {
        uploadImage(result.uri).then(() => {
          updatePhotoUrl()
        }).catch(()=> {
          toastRef.current.show("Error al subir el avatar.")
        })
      }
    }

};

  // Upload image to firebase
  const uploadImage = async (uri) => {
    setLoadingText("Actualizando avatar")
    setLoading(true);
    const response = await fetch(uri)
    const blob = await response.blob()
    // Save image in the avatar firebase folder, it update aut as this is the same
    const ref = firebase.storage().ref().child(`avatar/${uid}`)
    // Upload
    return ref.put(blob)
  };


  // Update the userInfo object with the new image
  const updatePhotoUrl = () => {
    firebase
    .storage()
    .ref(`avatar/${uid}`)
    .getDownloadURL()
    .then(async (response) => {
      const update = {
        photoURL: response
      };
      // Update the photo
      await firebase.auth().currentUser.updateProfile(update)
      setLoading(false);
    })
    .catch(() => {
      toastRef.current.show("Error al actualizar el avatar");
    })
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
