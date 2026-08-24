import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'; //Componentes interfaz

export default function Inicio(){
  return(
    <View style={styles.contenedor}>
      <Text style={styles.texto} >Pantalla Inicio</Text>
      <Image
        source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1280px-React.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail"}}
        style={styles.imagen}
      />
      <Button
        title="Boton"
      />
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
  imagen:{
    width:250,
    height:200
  }

})
