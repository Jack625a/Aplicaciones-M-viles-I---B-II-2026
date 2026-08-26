import {View, Text, StyleSheet,
    TouchableOpacity

} from 'react-native'; //Componentes interfaz
import {Ionicons} from '@expo/vector-icons';

import {Button, Snackbar} from 'react-native-paper'
//Importar la gestion de estados
import React, {useState}  from 'react';
import * as Notifications from 'expo-notifications';


export default function Perfil(){
  const [visible,setVisible]=useState(false);

  const click=()=>{
    alert("Se hizo Click");
  }
 

  return(
    <View style={styles.contenedor}>
      <Text style={styles.texto} >Pantalla Perfil</Text>
      <Button
          icon="home"
          mode="elevated"
          onPress={click}
      >
          Boton Prueba
      </Button>
      <TouchableOpacity
        style={styles.boton}
        onPress={click}
      >
        <Ionicons
            name="leaf"
            color="#fff"
            size={18}
        />
        <Text style={styles.textobtn}>Boton Personalizable</Text>
      </TouchableOpacity>

      <Button 
        mode="contained"
        icon="star"
        onPress={()=>setVisible(true)}
      >
        Mostra Notificacion
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={()=>setVisible(false)}
        duration={5000}
      >
        Notificacion SnackBar React Native Paper
      </Snackbar>


    </View>
  );
}

const styles=StyleSheet.create({
  contenedor:{
    backgroundColor:"#f3f3f3",
    justifyContent:"center",
    alignItems:"center",
    flex:1
  },
  texto:{
    fontSize:30
  },
  boton:{
    backgroundColor:"#bd1849",
    padding:10,
    borderRadius:10,
    marginTop:10,
    flexDirection:"row",
    gap:8,
    alignItems:"center"
  },
  textobtn:{
    color:"#FFF",
    fontSize:18,
    fontWeight:"bold"
  }

})
