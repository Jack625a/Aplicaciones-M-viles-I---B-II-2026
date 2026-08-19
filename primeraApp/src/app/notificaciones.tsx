import {View, Text, StyleSheet} from 'react-native';

export default function Notificaciones(){
    return(
        <View style={styles.contenedor}>
            <Text style={styles.texto}>Pantalla Notificaciones</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#edf992"
    },
    texto:{
        fontSize:55,
    }
})