import {View, Text, StyleSheet,Button,
    TouchableOpacity

} from 'react-native'; //Componentes interfaz
import {Ionicons} from '@expo/vector-icons';

export default function Perfil(){
  const click=()=>{
    alert("Se hizo Click");
  }

  return(
    <View style={styles.contenedor}>
      <Text style={styles.texto} >Pantalla Perfil</Text>
      <Button
          title="Guardar"
          color="#a51dba"
          onPress={click}
      />
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
    backgroundColor:"#18babd",
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
