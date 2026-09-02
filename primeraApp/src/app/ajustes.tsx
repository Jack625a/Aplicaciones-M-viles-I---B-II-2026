import {FlatList,View, StyleSheet} from 'react-native'; //Componentes interfaz
import {Card, Text, Button} from 'react-native-paper';

export default function Ajustes(){
  //Simulacion datos = base de datos
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

  ]


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
                  mode="elevated"
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
    fontSize:30
  },
  card:{
    flex:1,
    margin:10
  }

})
