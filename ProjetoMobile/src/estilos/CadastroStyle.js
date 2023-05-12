import {StyleSheet} from 'react-native'

const estiloCadastro = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#ADD4D0',
    },
    viewFormulario:{
        marginTop: 60,
        marginLeft: 15,
    },
    containerEscrever:{
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center' 
    },
    
    containerTexto:{
        width:120
    },

    textoTitulo:{
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        fontSize: 18, 
        textAlign: 'right'
    },
    containerTextoSexo:{
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 1
    },
    textoBranco:{
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        backgroundColor: 'white',
        width: 230,
        height: 40,
        marginLeft: 10
    },
    textoDataMesAno:{  
        fontFamily: 'AveriaLibre-Regular',  
        alignSelf: 'center',
        color: '#3F92C5',
        fontSize: 18
    },
    data:{
        width: 185,
        height: 40,
        marginLeft: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    ImagemCalendario:{
        alignSelf: 'center',
        marginLeft: 50
    },
    botao:{
        flex: 2,
        backgroundColor: '#ADD4D0',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    cadastrar:{
        width: 120,
        height: 40,
        shadowRadius: 1,
        elevation: 3,
        alignSelf: 'center',
        backgroundColor: '#37BD6D',
        marginTop: 55 
    },
    textoBotao:{
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10
    },
 
})

export {estiloCadastro}