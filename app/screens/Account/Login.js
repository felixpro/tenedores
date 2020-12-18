import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Divider} from "react-native-elements";

export default function Login() {
	return (<ScrollView>
		<Image source={require("../../../assets/img/5-tenedores.png")} resizeMode="contain" style={styles.logo}/>
		<View style={styles.viewContainer}>
			<Text>Login form....</Text>
			<CreateAccount/>
		</View>
		<Divider style={styles.divider}/>
		<Text>Social Login</Text>
	</ScrollView>)
}

function CreateAccount(props) {
	return (<Text style={styles.textRegister}>
		Aùn no tienes una cuenta? &nbsp;
		<Text style={styles.btnRegister} onPress={() => console.log("Registro")}>Registrate</Text>
	</Text>)
}

const styles = StyleSheet.create({
	logo: {
		width: "100%",
		height: 150,
		marginTop: 20
	},
	viewContainer: {
		marginRight: 40,
		marginLeft: 40
	},
	textRegister: {
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10
	},
	btnRegister: {
		color: "#00a680",
		fontWeight: 'bold'
	},
	divider: {
		backgroundColor: "#00a680",
		margin: 40
	}
});
