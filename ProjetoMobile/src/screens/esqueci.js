
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, Button} from 'react-native'
import {estiloCadastro} from '../estilos/CadastroStyle'


const backgroundImage = require('../imagens/home.png');
  
const Esqueci = (props) =>{

    return(
        <View style={estiloCadastro.container}>
            {/*Reaproveitando o estilo do Cadastro, desse modo apenas alterando algumas coisas manualmente*/}
            <View style={estiloCadastro.viewFormulario}>

                <View style={[estiloCadastro.containerEscrever,{ marginTop: 250, alignSelf: 'center', paddingRight: 100}]}>  
                    <View style={estiloCadastro.containerTexto}>
                        <Text style={estiloCadastro.textoTitulo}>Email</Text>
                    </View>

                    <View>
                        <TextInput style={[estiloCadastro.textoBranco,{ width: 295 }]}/>
                    </View>
                </View>
                <View style={[estiloCadastro.botao, ,{ marginTop: 100 }]}/>    
                    <TouchableOpacity style={[estiloCadastro.cadastrar,{ width: 165 }]} onPress={() => { props.navigation.pop() }}>
                        <Text style={estiloCadastro.textoBotao}> Recuperar Senha </Text>
                    </TouchableOpacity>
                </View>
            </View>

    )

}


export default Esqueci;