import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {Divider} from "react-native-elements";
import RegisterForm from "../../components/Account/RegisterForm"

export default function Register() {
	return (<ScrollView>
		<Image source={require("../../../assets/img/5-tenedores.png")} resizeMode="contain" style={styles.logo}/>
		<View style={styles.viewForm}>
			<RegisterForm/>
		</View>
	</ScrollView>)
}

const styles = StyleSheet.create({
	logo: {
		width: "100%",
		height: 150,
		marginTop: 20
	},
	viewForm: {
		marginRight: 40,
		marginLeft: 40
	}
});
