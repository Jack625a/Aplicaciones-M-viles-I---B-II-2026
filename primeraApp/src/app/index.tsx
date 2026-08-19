import {View, Text, StyleSheet} from 'react-native'; //Componentes interfaz

export default function Inicio(){
  return(
    <View style={styles.contenedor}>
      <Text style={styles.texto} >Pantalla Inicio</Text>
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
  }

})
