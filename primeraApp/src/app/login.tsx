//Paso1. IMPORTAR DEPENDENCIAS
import React, {useState} from 'react';
import {View,Text,TextInput,Button,Alert} from 'react-native';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebaseconfig";


//Paso 2. Configurar las variables (hook - useState)
export default function Login(){
    const[correo,setCorreo]=useState("");
    const[contraseña,setContraseña]=useState("");

    //Paso 3. crear la funcion para iniciar sesion
    const iniciarSesion=async()=>{
        if(correo==="" && contraseña===""){
            Alert.alert("Error","Complete todos los campos")
            return;
        }
        try{
            const usuario=await signInWithEmailAndPassword(
                auth,
                correo,
                contraseña
            );
            Alert.alert("Bienvido","Usuario: "+usuario.user.email)  
        }catch (error){
            Alert.alert("Error","Correo o contraseña Incorrectos");
        }
    }

    //Paso 3. crear la funcion para iniciar sesion
    const crearCuenta=async()=>{
        if(correo==="" && contraseña===""){
            Alert.alert("Error","Complete todos los campos")
            return;
        }
        try{
            const usuario=await createUserWithEmailAndPassword(
                auth,
                correo,
                contraseña
            );
            Alert.alert("Bienvido","Usuario: "+usuario.user.email)  
        }catch (error){
            Alert.alert("Error","Correo o contraseña Incorrectos");
        }
    }



return(
    <View>
        <Text>Iniciar Sesion</Text>
        <TextInput
            placeholder="Ingrese su correo"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
        />
        <TextInput
            placeholder="Ingrese su contraseña"
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry={true}
        />
        <Button
            title="Iniciar Sesion"
            onPress={iniciarSesion}
        />
        <Button
            title="Crear Cuenta"
            onPress={crearCuenta}
        />

    </View>
);
};