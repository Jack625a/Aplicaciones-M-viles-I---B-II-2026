import {View, Text, StyleSheet} from 'react-native'; //Componentes interfaz

export default function Productos(){
  return(
    <View style={styles.contenedor}>
      <Text style={styles.texto} >Pantalla Productos</Text>
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
