import {StyleSheet} from 'react-native'

const estiloVacinas = StyleSheet.create({
    
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

    comprovante:{
        backgroundColor: '#419ED7',
        shadowRadius: 1,
        elevation: 3,
        width: 190,
        height: 40,
        marginLeft: 10,
    },
    texto3:{
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        marginTop: 10,
        fontSize: 14
    },
    containerImagem:{
        marginLeft: 125,
    },
    imagem:{
        width: 230,
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
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18,
        alignSelf: 'center',
        marginTop: 10
    },
    editar:{
        width: 120,
        height: 40,
        marginTop: 15,
        shadowRadius: 1,
        elevation: 3,
        alignSelf: 'center',
        backgroundColor: '#37BD6D',
    },
    excluir:{
        width: 120,
        height: 40,
        marginTop: 65,
        shadowRadius: 1,
        elevation: 3,
        alignSelf: 'center',
        backgroundColor: '#FD7979',
        flexDirection: 'row'
    },
    ImagemLixo:{
        marginTop: 5,
        marginRight: 10
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,5,0.5)'
    },
    modal: {
        backgroundColor: 'white',
        flexDirection: 'column',
        width: 300,
        height: 150,
        padding: 10,
        shadowColor: 'black',
        shadowRadius: 2,
        elevation: 5,
    },
    SimNao:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    botaoSim:{
        width: 100,
        height: 50,
        backgroundColor: '#FD7979',
        alignSelf: 'flex-start'
    },
    botaoNao:{
        width: 100,
        height: 50,
        backgroundColor: '#3F92C5',
        alignSelf: 'flex-start'
    },

})

export {estiloVacinas}