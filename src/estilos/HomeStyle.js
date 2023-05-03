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
        texto:{
            marginTop: 1,
            color: '#8B8B8B'
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
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingLeft: 10,
        fontSize: 24,
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
        color: '#3F92C5',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf:'center',
        marginLeft: 15
    },
    cardTextoDosagem:{
        color: 'white',
        backgroundColor: '#3F92C5',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardTextoData:{
        color: '#8B8B8B',
        fontSize: 16,
        fontWeight: 'bold'
    },
    imagem:{
        width: 160,
        height: 90,
        resizeMode:'contain',
    },
    cardTextoData2:{
        color: 'red',
        fontSize: 12,
        alignSelf: 'flex-end',
        fontWeight: 'bold'
    },
    cardTextoID:{
        color: 'white'
    }

})

export {estiloHome}