import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Input, Icon, Button} from "react-native-elements";

export default function RegisterForm() {
	return (<View style={styles.formContainer}>
		<Input placeholder="Correo Electronico" containerStyle={styles.inputForm}/>
		<Input placeholder="Contraseña" containerStyle={styles.inputForm} password={true} secureTextEntry={true}/>
		<Input placeholder="Repetir Contraseña" containerStyle={styles.inputForm} password={true} secureTextEntry={true}/>

		<Button title="Unirse" containerStyle={styles.btnContainerRegister} buttonStyle={styles.btnRegister}/>
	</View>)
}

const styles = StyleSheet.create({
	formContainer: {
		// flex: 1,
		// alignItems: "center",
		// justifyContent: 'center',
		marginTop: 30
	},
	inputForm: {
		width: "100%",
		marginTop: 20
	},
	btnContainerRegister: {
		width: "95%",
		marginTop: 20
	},
	btnRegister: {
		backgroundColor: "#00a680"
	}
});
