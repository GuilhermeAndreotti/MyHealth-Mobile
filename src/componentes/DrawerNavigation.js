import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Tela1 from "../screens/home";
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import seringa from '../imagens/vacine.png';
import calendario from '../imagens/calendario.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";


const vacina = () => (
    <Image source={seringa} style={{ width: 30, height: 30 }} />
);
const calendar = () => (
    <Image source={calendario} style={{ width: 30, height: 30 }} />
);

const Drawer = createDrawerNavigator()

const DrawerNavigation = (props) => {
    return (
        <Drawer.Navigator screenOptions={
            
            {drawerStyle:{ 
                backgroundColor: '#ADD4D0', width: '75%',
            },
            headerStyle:{
                backgroundColor: '#C1E7E3',

            },
            headerLeft:
                () =>{
                    const navigation = useNavigation();

                    const openMenu = () =>{
                        navigation.toggleDrawer();
                    }
                    return <Icon name='menu' style={{fontSize: 40, paddingLeft: 10}} onPress={ () => openMenu()}/>
                    
                }         
            ,
            headerTitleStyle: {
                color: '#419ED7',
                fontSize: 26,
            }, 
            headerTintColor: '#ADD4D0',
        }}

        drawerContent={(props) => <CustomDrawer {...props} />}>

            <Drawer.Screen name="Minhas Vacinas" component={Tela1} options={{drawerIcon: vacina}} />
            {/*<Drawer.Screen name="Próximas Vacinas" component={Tela1} options={{drawerIcon: calendar}} />*/}
        
        </Drawer.Navigator>
    )
}


export default DrawerNavigation;

