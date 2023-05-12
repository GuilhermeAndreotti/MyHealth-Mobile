import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Image} from 'react-native'
import Login from "./Login";
import DrawerNavigation from "../componentes/DrawerNavigation";
import NovaVacina from "./nova-vacina";
import Cadastro from "./cadastro";
import Esqueci from "./esqueci";

const Stack = createStackNavigator()

{/*Navigation padrão com todas as telas da stack, contando o drawer*/}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, headerStyle:{ backgroundColor: '#C1E7E3'}, 
            headerTintColor: '#419ED7',}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" options={{headerShown:true,title: "Nova Conta"}} component={Cadastro} />
                <Stack.Screen name="Esqueci" options={{headerShown:true,title: "MyHealth", headerLeft: () => 
                (<Image source={require('../imagens/vacine.png')} style={{ width: 35, height: 35, marginLeft: 15 }}/>) }} component={Esqueci} />
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
                <Stack.Screen name="NovaVacina" options={{headerShown:true,title: "Nova Vacina"}} component={NovaVacina}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;