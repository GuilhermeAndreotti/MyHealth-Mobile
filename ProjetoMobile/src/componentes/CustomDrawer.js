import { View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {estiloDrawer} from '../estilos/DrawerStyle';
import logout from '../imagens/logout.png';




const CustomDrawer = (props) => {
    return(
        <DrawerContentScrollView {...props} style={{backgroundColor: '#ADD4D0'}}>
            
            <View style={estiloDrawer.topo}>
                <Text style={estiloDrawer.jurandir}> Olá Jurandir! </Text>
            </View>

            {/*DrawerItemList é tudo que existe no drawer padrão*/}   
            
            <View>
                <View style={estiloDrawer.linha}></View>
            </View>
            
            <DrawerItemList {...props}/>

            <View>
                <DrawerItem label= "Sair" 
                onPress={() => {props.navigation.popToTop()}}
                
                icon={() => <Image source={logout} style={{ width: 30, height: 30 }}  />}
                labelStyle={{
                    fontFamily: 'AveriaLibre-Regular',
                    color: '#419ED7',
                    fontSize: 18 
                }}/>
            </View>
            
            
        </DrawerContentScrollView>

    )
}

export default CustomDrawer;