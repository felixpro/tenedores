import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Input, Icon, Button } from "react-native-elements";
import Loading from "../../components/Loading"
import {validateEmail} from "../../utils/validation";
import {size, isEmpty} from "lodash";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native"

export default function RegisterForm(props) {
	const {toastRef} = props;
	const [showPassword, setShowPassword] = useState( false );
	const [showRepeatPassword, setShowRepeatPassword] = useState( false );
	const [formData, setFormData] = useState( defaultFormValue );
	const navigation = useNavigation();
	const [loading, setLoading] = useState(false)

	const onSubmit = () => {

		// Validation
		if (
			isEmpty(formData.email) ||
			isEmpty(formData.password) ||
			isEmpty(formData.repeatPassword)) {
			toastRef.current.show("todos los campos son obligatorios")
	}else if (!validateEmail(formData.email)) {
		toastRef.current.show("Email no es correcto")
	}else if (formData.password !== formData.repeatPassword) {
		toastRef.current.show("Las contra deben ser iguales")
	}else if (size(formData.password) < 6) {
		toastRef.current.show("La contrasena tiene que tener al menos 6 caracteres")
	}else {
		setLoading(true)
		firebase
		.auth()
		.createUserWithEmailAndPassword(formData.email, formData.password)
		.then(response => {
			setLoading(false)
			navigation.navigate("account");
		})
		.catch(() =>{
			setLoading(false)
			toastRef.current.show("El email ya esta en uso, pruebe con otro")
		})
		}
	}

	// Update state with the new value
	const onChange = ( e, type ) => {
		// console.log( e.nativeEvent.text )
		 setFormData( { ...formData, [ type ]: e.nativeEvent.text } )

	}

	return ( <View style={styles.formContainer}>
		<Input
			placeholder="Correo Electronico"
			containerStyle={styles.inputForm}
			rightIcon={<Icon type = "material-community" name = "at"
			iconStyle = {	styles.iconRight}/>}
			onChange={( e ) => onChange( e, "email" )}
		/>
		<Input
			placeholder="Contraseña"
			containerStyle={styles.inputForm}
			password={true}
			secureTextEntry={showPassword ? false: true}
			rightIcon={<Icon type = "material-community" name = {	showPassword ? "eye-off-outline" : "eye-outline"} onPress = {() => setShowPassword( !showPassword )}
			iconStyle = {styles.iconRight	} />}
			onChange={( e ) => onChange( e, "password" )}/>
		<Input
			placeholder="Repetir Contraseña"
			containerStyle={styles.inputForm}
			password={true}
			secureTextEntry={showRepeatPassword ? false : true}
			rightIcon={<Icon type = "material-community" name = { showRepeatPassword ? "eye-off-outline" : "eye-outline" } onPress = {	() => setShowRepeatPassword( !showRepeatPassword )}
			iconStyle = {styles.iconRight} />}
			onChange={( e ) => onChange( e, "repeatPassword" )}/>

		<Button title="Unirse" containerStyle={styles.btnContainerRegister} buttonStyle={styles.btnRegister} onPress={onSubmit}/>
		<Loading isVisible={loading} text="Creando cuenta"/>
	</View> )
}

function defaultFormValue() {
	return { email: "", password: "", repeatPassword: "" }
}

const styles = StyleSheet.create( {
	formContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: 'center',
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
	},
	iconRight: {
		color: "#c1c1c1"
	}
} );
