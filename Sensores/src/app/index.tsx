import {View,Text,Button,Alert, StyleSheet} from 'react-native';
import * as Location from 'expo-location';
import {useState} from 'react';
import MapView,{Marker,UrlTile} from 'react-native-maps';

export default function Index(){
  //VARIABLES DE ESTADO
  const [latitud,setLatitud]=useState<number|null>(null)
  const [longitud,setLongitud]=useState<number|null>(null)
  const [lugar,setLugar]=useState({
    latitude:-17.969977,
    longitude:-67.114281,
    latitudeDelta:0.02,
    longitudDelta:0.02,
  })


  //funcion para obtener la ubicacion
  const obtenerUbicacion= async()=>{
    try {
      const {status}=await Location.requestForegroundPermissionsAsync();
      if(status!=="granted"){
        Alert.alert("Error","Permisos de Ubicacion Denegados!!!");
        return;
      }
      const ubicacion=await Location.getCurrentPositionAsync({});
      //Alert.alert("Ubicacion",`Latitud: ${ubicacion.coords.latitude} - Longitug: ${ubicacion.coords.longitude}`)
      console.log("Latitud: ",ubicacion.coords.latitude)
      console.log("Longitud: ",ubicacion.coords.longitude)
      const lat=ubicacion.coords.latitude;
      const lon=ubicacion.coords.longitude;
      setLatitud(lat);
      setLongitud(lon);
      //centrar el mapa
      setLugar({
        latitude:lat,
        longitude:lon,
        latitudeDelta:0.01,
        longitudDelta:0.01,
      });
    }catch (error){
      Alert.alert("Error","No se pudo obtener la ubicacion")
    }
  
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
    <View style={estilos.contenedorMapa}>
        <MapView
          style={estilos.mapa}
          region={lugar}
          mapType="none"
        >
          <UrlTile
            urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            maximumZ={18}
            tileSize={200}
          />
          {latitud!==null && longitud!==null &&(
            <Marker
              coordinate={{
                latitude:latitud,
                longitude:longitud
              }}
              title="Mi ubicación"
            />
          )
          }
        </MapView>
    </View>



  </View>
);
}

const estilos=StyleSheet.create({
  contenedorMapa:{
    width:'90%',
    height:350,
    marginTop:15
  },
  mapa:{
    width:'100%',
    height:'100%'
  }
})