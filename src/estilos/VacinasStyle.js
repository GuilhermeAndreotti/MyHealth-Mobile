import {StyleSheet} from 'react-native'

const estiloVacinas = StyleSheet.create({
    
    container: 
    {
        flex: 1,
        backgroundColor: '#ADD4D0',
        flexDirection: 'column',
        paddingTop: 50,
    
    },
    container1: 
    {
        flexDirection: 'column',
        alignContent: 'center'     
    },
    container2: 
    {
        paddingRight: 60,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 15          
    },
    container3: 
    {
        marginLeft: 40,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 15          
    },
    textoTitulo:{
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16  
    },
    radioFormat:{
        paddingRight: 30
    },
    data:{
        width: 175,
        height: 40,
        marginLeft: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    textoDataMesAno:{    
        alignSelf: 'center',
        color: '#3F92C5',
        fontWeight: 'bold',
        fontSize: 16
    },
    ImagemCalendario:{
        alignSelf: 'center',
        marginLeft: 50
    },
    textoBranco:{
        backgroundColor: 'white',
        marginLeft: 25,
        width: 240,
        height: 40
    },
    comprovante:{
        backgroundColor: '#419ED7',
        shadowRadius: 1,
        elevation: 3,
        width: 160,
        height: 40,
    },
    texto3:{
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        paddingRight: 10,
        fontSize: 12
    },
    containerImagem:{
        marginRight: 25,
        alignSelf: 'flex-end',
        width: 220,
        height: 120
    },
    imagem:{
        width: 220,
        height: 130,
        resizeMode:'contain',
    },
    cadastrar:{
        width: 120,
        height: 40,
        marginTop: 100,
        shadowRadius: 1,
        elevation: 3,
        alignSelf: 'center',
        backgroundColor: '#37BD6D',
    },
    textoBotao:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 10
    }

})

export {estiloVacinas}