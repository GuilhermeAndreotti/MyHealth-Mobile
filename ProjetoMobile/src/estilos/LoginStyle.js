import {StyleSheet} from 'react-native'

const estilos = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        
    },
    imagemdefundo: {
        flex: 5,
        resizeMode: 'cover',
        
    },
    cabecalho: {
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    corpo: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center'
    },
    
    corpotext: {
        alignItems: 'center',
        fontSize: 32,
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',

    },
    login: {
        flex: 4,
        flexDirection: 'column',
    
    },
    image: {
        width: 60,
        height: 56
    },
    titulo: {
        fontSize: 40,
        fontFamily: 'AveriaLibre-Regular',
        textDecorationLine: 'underline',
        color: '#419ED7'
    },
    input: {
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        width: "95%",
        alignSelf: 'center',
        backgroundColor: 'white',
        fontSize: 20,
        marginTop: 20,
    },

    buttonCriar: {
        
        width: '35%',
        height: "10%",
        color: 'white',
        alignSelf: 'center',
        backgroundColor: '#37BD6D',
        marginTop: 40,
        elevation: 3
    },
    buttonCriar2: {
        shadowRadius: 1,
        width: '55%',
        height: "10%",
        color: 'white',
        alignSelf: 'center',
        backgroundColor: '#419ED7',
        marginTop: 40,
        elevation: 3
    },
    
    buttonCriar3: {
        width: '55%',
        height: "8%",
        color: 'white',
        alignSelf: 'center',
        backgroundColor: '#B0CCDE',
        marginTop: 70,
        elevation: 3
    },
    
    buttontexto: {
        fontFamily: 'AveriaLibre-Regular',
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
        top: 5
    }

})

export {estilos}