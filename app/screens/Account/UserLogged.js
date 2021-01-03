import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InfoUser from "../../components/Account/InfoUser"
import {Button} from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Loading from "../../components/Loading"

export default function userLogged() {
  const [userInfo, setUserInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("")
  // ref for loading
  const toastRef = useRef()

  useEffect(() => {

    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user)
    })()

  }, [])

  return (<View style={styles.viewUserInfo}>
    {userInfo && <InfoUser userInfo={userInfo} toastRef={toastRef}/>}

    <Text>Account Options</Text>
    <Button
      title="Cerrar sesion"
      buttonStyle={styles.btnCloseSession}
      titleStyle={styles.btnCloseSessionText}
      onPress={() => firebase.auth().signOut()}
    />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text={loadingText} isVisible={loading} />
  </View>)
}


const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2"
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSessionText: {
    color: "#00a680",
  }
});
