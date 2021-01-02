import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Input, Icon, Button } from "react-native-elements";
import {isEmpty} from "lodash"
import {validateEmail} from "../../utils/validation";
import {useNavigation} from "@react-navigation/native"
import * as firebase from "firebase"
import Loading from "../Loading"

export default function LoginForm(props) {
	const navigation = useNavigation();
	const {toastRef} = props;
	const [showPassword, setShowPassword] = useState( false );
	const [formData, setFormData] = useState(defaultFormValue);
	const [loading, setLoading] = useState(false)

	// Update state
	const onChange = (e, type) => {
		setFormData({...formData, [type]: e.nativeEvent.text })
	}

	const onSubmit = () => {
		if (isEmpty(formData.email) || isEmpty(formData.password)) {
			toastRef.current.show("Todos los campos son obligatorios")
		}else if (!validateEmail(formData.email)) {
			toastRef.current.show("El email no es correcto")
		}else {
			setLoading(true)
			firebase
			.auth()
			.signInWithEmailAndPassword(formData.email, formData.password)
			.then(response => {
				setLoading(false)
				navigation.navigate("account")
			})
			.catch(() => {
				setLoading(false)
				toastRef.current.show("Email o contraseña incorrecta")
			})
		}


		console.log(formData)
	}

	return (
		<View style={styles.formContainer}>
			<Input
				placeholder="Correo Electronico"
				containerStyle={styles.inputForm}
				onChange={(e) => onChange(e, "email")}
				rightIcon={<Icon type = "material-community"
				name = "at"
				iconStyle = {	styles.iconRight}/>}

			/>
			<Input
				placeholder="Contraseña"
				containerStyle={styles.inputForm}
				password={true}
				secureTextEntry={showPassword ? false: true}
				onChange={(e) => onChange(e, "password")}
				rightIcon={<Icon type = "material-community"
					name = {	!showPassword ? "eye-off-outline" : "eye-outline"}
					onPress = {() => setShowPassword( !showPassword )}
				  iconStyle = {styles.iconRight} />}
			/>
			<Button
				title="Iniciar cesion"
				containerStyle={styles.btnContainerLogin}
				buttonStyle={styles.btnLogin}
				onPress={onSubmit}
			/>
			<Loading isVisible={loading} text="Iniciando sesión"/>
		</View>
	)
}

function defaultFormValue() {
	return {email: "", password:""}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputForm: {
		width:"100%",
		marginTop: 20
	},
	btnContainerLogin: {
		marginTop: 20,
		width: "95%"
	},
	btnLogin: {
		backgroundColor: "#00a680",
	},
	iconRight: {
		color: "#c1c1c1"
	}

});
