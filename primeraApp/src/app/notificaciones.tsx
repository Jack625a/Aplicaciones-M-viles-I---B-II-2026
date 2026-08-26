import {View, Text, StyleSheet} from 'react-native';
import * as Notifications from 'expo-notifications';
import{Button} from 'react-native-paper';

export default function Notificaciones(){

    const mostrarNotificacion=async()=>{
        await Notifications.scheduleNotificationAsync({
            content:{
                title:"Notificacion de Prueba",
                body:"Tienes una nueva notificacion App",
            },
            trigger:null
        });
    };
    
    return(
        <View style={styles.contenedor}>
            <Text style={styles.texto}>Pantalla Notificaciones</Text>
            <Button
                mode="contained"
                onPress={mostrarNotificacion}
            >
                Mostrar Notifiacion Push
            </Button>
        </View>
    );
}

const styles=StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92c9f9"
    },
    texto:{
        fontSize:55,
    }
})