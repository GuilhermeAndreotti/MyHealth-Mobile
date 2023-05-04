import {StyleSheet} from 'react-native'

const estiloCadastro = StyleSheet.create({
    
    container: 
    {
        flex: 5,
        backgroundColor: '#ADD4D0',
        flexDirection: 'column',
        paddingTop: 50,
        paddingLeft: 30 
    },
    container1: 
    {
        flexDirection: 'column',
        alignContent: 'center'     
    },
    container2: 
    {
        paddingRight: 70,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 15          
    },
    container3: 
    {
        paddingRight: 30,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 15          
    },
    textoTitulo:{
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16  
    },
    textoBranco:{
        backgroundColor: 'white',
        marginLeft: 15,
        width: 200,
        height: 40
    },
    textoDataMesAno:{    
        alignSelf: 'center',
        color: '#3F92C5',
        fontWeight: 'bold',
        fontSize: 16
    },
    data:{
        width: 175,
        height: 40,
        marginLeft: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    ImagemCalendario:{
        alignSelf: 'center',
        marginLeft: 50
    },
    cadastrar:{
        width: 120,
        height: 40,
        marginTop: 130,
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
    },
    containerEsqueciSenha: 
    {
        alignSelf:'center',
        marginRight: 30,
        flexDirection: 'row',
        marginTop: 15          
    },
 
})

export {estiloCadastro}