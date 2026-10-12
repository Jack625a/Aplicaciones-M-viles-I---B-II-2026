import {View,Text,Button,Alert} from 'react-native';
import * as Location from 'expo-location';

export default function Index(){
  //funcion para obtener la ubicacion
  const obtenerUbicacion= async()=>{
    const {status}=await Location.requestForegroundPermissionsAsync();
    if(status!=="granted"){
      Alert.alert("Error","Permisos de Ubicacion Denegados!!!");
      return;
    }
    const ubicacion=await Location.getCurrentPositionAsync({});
    Alert.alert("Ubicacion",`Latitud: ${ubicacion.coords.latitude} - Longitug: ${ubicacion.coords.longitude}`)
    console.log("Latitud: ",ubicacion.coords.latitude)
    console.log("Longitud: ",ubicacion.coords.longitude)
  }
 
return(
  <View style={{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }} >
    <Text>Ubicacion GPS</Text>
    <Button
        title="Obtener Ubicacion"
        onPress={obtenerUbicacion}
    />
  </View>
);
}