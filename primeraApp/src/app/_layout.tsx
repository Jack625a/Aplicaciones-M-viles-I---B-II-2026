import {Tabs} from 'expo-router'; //Enrutamiento dinamico
import {Ionicons} from '@expo/vector-icons';//iconos

//IMPORTACION DEL DRAWER - MENU LATERAL
import {Drawer} from 'expo-router/drawer';
import {Appbar, PaperProvider} from 'react-native-paper';



export default function TabLayout() {
  return(

    <>
    <PaperProvider>
      <Drawer
          screenOptions={{
            header:({
              navigation,route,options
            })=>(
              <Appbar.Header>
                <Appbar.Action
                  icon="menu"
                  onPress={()=>navigation.toggleDrawer()}
                />
                <Appbar.Content
                    title={options.title ||route.name}
                />
              </Appbar.Header>
            ),
          }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title:"Inicio",
            drawerIcon:({color,size})=>(
              <Ionicons
                name="home"
                color="red"
                size={size}
              />
            )
          }}
        />
        <Drawer.Screen
          name="ajustes"
          options={{
            title:"Ajustes",
            drawerIcon:({color,size})=>(
              <Ionicons
                name="settings"
                color={color}
                size={size}
              />
            )
          }}
        
        />
        <Drawer.Screen
          name="explore"
          options={{
            title:"Productos",
            drawerIcon:({color,size})=>(
              <Ionicons
                name="storefront"
                color={color}
                size={size}
              />
            )
          }}
        
        />
        <Drawer.Screen
          name="perfil"
          options={{
            title:"Perfil",
            drawerIcon:({color,size})=>(
              <Ionicons
                name="person"
                color={color}
                size={size}
              />
            )
          }}
        
        />
        <Drawer.Screen
          name="notificaciones"
          options={{
            title:"Notificaciones",
            drawerIcon:({color,size})=>(
              <Ionicons
                name="notifications"
                color={color}
                size={size}
              />
            )
          }}
        
        />
      </Drawer>
    </PaperProvider>



    
    </>
  )
  
}
