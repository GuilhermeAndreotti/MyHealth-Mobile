import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Tela1 from "../screens/home";
import Tela2 from "../screens/proxima";
import {Image, TouchableOpacity} from 'react-native'
import seringa from '../imagens/vacine.png';
import calendario from '../imagens/calendario.png';
import hamburger from '../imagens/hamburger.png';
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
            headerLeft: () =>{
                const navigation = useNavigation();
                const openMenu = () =>{
                    navigation.toggleDrawer();
                } 
                return (
                    <TouchableOpacity onPress={() => openMenu()}>
                        <Image source={hamburger} style={{ width: 30, height: 30, marginLeft: 10 }} />
                    </TouchableOpacity>
                );
            },       
            headerTitleStyle: {
                color: '#419ED7',
                fontSize: 28,
                fontFamily: 'AveriaLibre-Regular',
            }, 
            drawerLabelStyle:{
                fontFamily: 'AveriaLibre-Regular',
                color: '#419ED7',
                fontSize: 18
            }
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Minhas Vacinas" component={Tela1} options={{drawerIcon: vacina}}  />
            <Drawer.Screen name="Próximas Vacinas" component={Tela2} options={{drawerIcon: calendar}} />
        </Drawer.Navigator>
    )
}


export default DrawerNavigation;

