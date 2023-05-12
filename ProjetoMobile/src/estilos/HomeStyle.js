import {StyleSheet} from 'react-native'

const estiloHome = StyleSheet.create({
    
    container: 
    {
        flex: 1,
        backgroundColor: '#ADD4D0',
        padding: 10,
        
    },
    container2: 
    {
        marginBottom: 50,
        flexDirection: 'column',
        
    },
    barraPesquisa:
    {
        pesquisa:{
            flexDirection: 'row',
            top: 15,
            height: 40,
            backgroundColor: 'white',     
        },

    },
    parteBotao:
    {
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: '#37BD6D',
        marginBottom: 30,
        width: '45%',
        height: "5%",
        elevation: 3,
    },
    buttontexto: 
    {
        fontFamily: 'AveriaLibre-Regular',
        alignSelf: 'center',
        paddingLeft: 10,
        fontSize: 25,
        color: 'white',
    },

    containerCard: 
    {
        flex: 1,
        alignItems: 'center',   
    },

    cardFundoBranco:{
        shadowRadius: 1,
        elevation: 3,
        backgroundColor: 'white',
        width: 179,
        height: 185,
        marginTop: 10,
        alignItems: 'center'       
    },
    cardTextoNome:{
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        fontSize: 20,
        alignSelf:'center',
        marginLeft: 15
    },
    cardTextoDosagem:{
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        backgroundColor: '#3F92C5',
        fontSize: 18,
    },
    cardTextoData:{
        fontFamily: 'AveriaLibre-Regular',
        color: '#8B8B8B',
        fontSize: 16,
        fontWeight: 'bold'
    },
    imagem:{
        width: 160,
        height: 90,
        resizeMode:'contain',
    },
    imagem2:{
        width: 20,
        height: 20,
        marginTop: 10,
        marginLeft: 5,
        resizeMode:'contain',
    },
    cardTextoData2:{
        color: 'red',
        fontSize: 13,
        alignSelf: 'flex-end',
        fontFamily: 'AveriaLibre-Regular',
    },
    cardTextoID:{
        color: 'white'
    },
    cardFundoProximo:{
        shadowRadius: 1,
        elevation: 3,
        backgroundColor: 'white',
        width: 350,
        height: 95,
        marginTop: 10,
        alignItems: 'center',
        borderRadius: 10       
    },
    cardTextoNome2:{
        marginTop: 10,
        color: '#3F92C5',
        fontSize: 30,
        fontFamily: 'AveriaLibre-Regular',
        alignSelf:'flex-start',
        marginLeft: 25
    },
    cardTextoDataP:{
        color: '#8B8B8B',
        fontSize: 20,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginLeft: 25
    },

})

export {estiloHome}