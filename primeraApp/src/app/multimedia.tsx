//Importar las dependencias
import React, {useState} from 'react';
import {View,Button,Image,Alert,Text, ActivityIndicator} from 'react-native';
import * as ImagePicker from "expo-image-picker";

//funcion principal
export default function Multimedia(){
    //Configurar variable de estado
    const [imagen,setImagen]=useState("");
    const [cargando,setCargando]=useState(false);

    const seleccionarImagen= async ()=>{
        const permisos=await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(permisos.status!=="granted"){
            Alert.alert("Permisos Denegados","Otorgue los permisos para continuar");
            return;
        }
        const resultado=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true
        });
        if(!resultado.canceled){
            setImagen(resultado.assets[0].uri);
        }
    };
    //Funcion para subir la imagen a cloudinary
    const subirCloudinary=async ()=>{
        if(!imagen){
            Alert.alert("Error","Primero debes seleccionar una imagen")
        };
        return;
    }
    setCargando(true);
    try {
        const datos=new FormData();
        datos.append("file",{
            uri:imagen,
            type:"image/jpeg",
            name:"imagen.jpg",
        }as any );
        //Configurar el preset
        datos.append("upload_preset","aplicacionesb");
        //Enviar la imagen
        const respuesta=await fetch("https://api.cloudinary.com/v1_1/dvgwopekf/image/upload",
            {
                method:"POST",
                body: datos,
            }
        );
        const respuestaCloudinary=await respuesta.json();
        console.log("Respuesta obtenida: ",respuestaCloudinary);
        if(!respuestaCloudinary.secure_url){
            Alert.alert("Confirmado","Imagen Subido correctamente...");
        }else{
            Alert.alert("Error","No se pudo subir la imagen");
        }
    
    }catch(error){
        Alert.alert("Error","Ocurrio un error al subir la imagen ")
        console.log("Error: ",error);
    } finally{
        setCargando(false);
    }

return(
    <View>
        <Text>Subir Imagen</Text>
        <Button
            title="Seleccionar Imagen"
            onPress={seleccionarImagen}
        />
        {cargando?(
            <ActivityIndicator
                size="large"
            />     
        ):(
            <Button
                title="Subir Imagen"
                onPress={subirCloudinary}
            />
        )

        }
    </View>
    
)
};