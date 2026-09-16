import {FlatList,View, StyleSheet} from 'react-native'; //Componentes interfaz
import {Card, Text, Button} from 'react-native-paper';
import {useState, useEffect} from 'react'; //Hooks (gestion de estados - controlo de cambios)
import {ref, onValue} from 'firebase/database'; //firebase database realtime
import {database} from '../firebaseconfig';

export default function Ajustes(){
  //Definir las variables de los datos
  const [productos,setProductos]=useState([]);

  useEffect(()=>{
    const productosObtener=ref(database,"Productos");
    const prod=onValue(productosObtener, (snapshot)=>{
      const datos= snapshot.val();
      if (datos){
        const listaProductos=Object.keys(datos).map((id)=>({
          id:id,
          nombre: datos[id].nombre,
          precio: datos[id].precio,
          imagen: datos[id].imagen,
          descripcion: datos[id].descripcion
        }));
        setProductos(listaProductos);
      }else{
        setProductos([]);
      }
    });
    //Limipieza de datos que se escucha
    return()=>prod();

  }, []);


  /*Simulacion datos = base de datos
  const productos=[
    {
      id:"1",
      nombre:"Celular",
      precio:4800,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/i/n/infinix_hot70.jpg"
    },
    {
      id:"2",
      nombre:"Laptop",
      precio:6500,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/c/e/celular-xiaomi-redmi-note-15-pro_-negro.png"
    },
    {
      id:"3",
      nombre:"Celular",
      precio:4800,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/i/n/infinix_hot70.jpg"
    },
    {
      id:"4",
      nombre:"Laptop",
      precio:6500,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/c/e/celular-xiaomi-redmi-note-15-pro_-negro.png"
    },
    {
      id:"5",
      nombre:"Celular",
      precio:4800,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/i/n/infinix_hot70.jpg"
    },
    {
      id:"6",
      nombre:"Laptop",
      precio:6500,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/c/e/celular-xiaomi-redmi-note-15-pro_-negro.png"
    },
    {
      id:"7",
      nombre:"Celular",
      precio:4800,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/i/n/infinix_hot70.jpg"
    },
    {
      id:"8",
      nombre:"Laptop",
      precio:6500,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/c/e/celular-xiaomi-redmi-note-15-pro_-negro.png"
    },
    {
      id:"9",
      nombre:"Laptop",
      precio:6500,
      imagen:"assets/images/react-logo.png"
    },
    {
      id:"10",
      nombre:"Laptop",
      precio:6500,
      imagen:"https://www.tiendaamiga.com.bo/media/catalog/product/cache/55e84a69b2b6f5251b92ffff7fcb1046/c/e/celular-xiaomi-redmi-note-15-pro_-negro.png"
    },

  ]*/

    //Conexion con la base de datos



  return(
    <View style={styles.contenedor}>
      <Text style={styles.texto} >Pantalla Ajustes</Text>
      <FlatList
          data={productos}
          numColumns={2}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <Card style={styles.card}>
              <Card.Cover
                source={{uri:item.imagen}}
              />
              <Card.Content>
                <Text style={styles.texto}>{item.nombre} </Text>
                <Text>{item.precio} Bs </Text>
              </Card.Content>
              <Card.Actions>
                <Button 
                  icon="home"
                  mode="outlined"
                  onPress={()=>alert(item.nombre)}
                >
                  Ver Producto
                </Button>
              </Card.Actions>
            </Card>
          )}  
      />
    </View>
  );
}

const styles=StyleSheet.create({
  contenedor:{
    backgroundColor:"#f3f3f3",
    flex:1,
    padding:10
  },
  texto:{
    fontSize:30,
    color:"#ba0098"
  },
  card:{
    flex:1,
    margin:10
  }

})
