// Importar las dependencias
import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  Alert,
  Text,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

// Función principal
export default function Multimedia() {
  // Configurar variables de estado
  const [imagen, setImagen] = useState("");
  const [cargando, setCargando] = useState(false);

  // Función para seleccionar una imagen
  const seleccionarImagen = async () => {
    const permisos =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permisos.status !== "granted") {
      Alert.alert(
        "Permisos Denegados",
        "Otorgue los permisos para continuar"
      );
      return;
    }

    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  // Función para subir la imagen a Cloudinary
  const subirCloudinary = async () => {
    if (!imagen) {
      Alert.alert("Error", "Primero debes seleccionar una imagen");
      return;
    }

    setCargando(true);

    try {
      // Crear FormData
      const datos = new FormData();

      datos.append("file", {
        uri: imagen,
        type: "image/jpeg",
        name: "imagen.jpg",
      } as any);

      // Configurar el upload preset
      datos.append("upload_preset", "aplicacionesb");

      // Enviar la imagen a Cloudinary
      const respuesta = await fetch(
        "https://api.cloudinary.com/v1_1/dvgwopekf/image/upload",
        {
          method: "POST",
          body: datos,
        }
      );

      const respuestaCloudinary = await respuesta.json();

      console.log("Respuesta obtenida:", respuestaCloudinary);

      // Verificar si Cloudinary devolvió la URL
      if (respuestaCloudinary.secure_url) {
        Alert.alert(
          "Confirmado",
          "Imagen subida correctamente"
        );

        console.log(
          "URL de la imagen:",
          respuestaCloudinary.secure_url
        );
      } else {
        Alert.alert(
          "Error",
          "No se pudo subir la imagen"
        );
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Ocurrió un error al subir la imagen"
      );

      console.log("Error:", error);
    } finally {
      setCargando(false);
    }
  };

  // Interfaz
  return (
    <View>
      <Text>Subir Imagen</Text>

      <Button
        title="Seleccionar Imagen"
        onPress={seleccionarImagen}
      />
    {imagen !=="" &&(
        <Image
            source={{uri:imagen}}
            style={{
                width:200,
                height:200
            }}
        />
    )
    }
    {cargando ?(
        <ActivityIndicator size={"large"}/>
    ):(
        <Button
            title="Subir Imagen"
            onPress={subirCloudinary}
        />
    )

    }
    </View>

  );
}