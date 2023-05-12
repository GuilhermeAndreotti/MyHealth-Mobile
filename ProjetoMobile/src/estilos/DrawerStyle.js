import {StyleSheet} from 'react-native'

const estiloDrawer = StyleSheet.create({
    
    topo:{
        flex: 1,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    jurandir: 
    {
        fontFamily: 'AveriaLibre-Regular',
        top: 2, 
        fontSize: 30, 
        color: '#419ED7', 
    },
    linha:
    {
        width: '80%', 
        height: 3, 
        backgroundColor: '#419ED7', 
        alignSelf: 'center',
        marginBottom: 30
    },
    sair:{
        fontFamily: 'AveriaLibre-Regular',
    }


})

export {estiloDrawer}