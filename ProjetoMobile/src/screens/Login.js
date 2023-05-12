import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import {estilos} from '../estilos/LoginStyle'

 
const Login = (props) =>
{
    return(
        <ImageBackground source={require('../imagens/home.png')} style={estilos.imagemdefundo}>       
            
            <View style={estilos.container}>    
                    
                    <View style={estilos.cabecalho}>
                        <Image style={estilos.image} source={require('../imagens/vacine.png')}/>
                        <Text style={estilos.titulo}>MyHealth</Text>
                    </View>

                    <View style={estilos.corpo}>            
                        <Text style={estilos.corpotext}> Controle suas vacinas</Text>
                        <Text style={estilos.corpotext}> e fique seguro</Text>
                    </View>

                    <View style={estilos.login}>
                        <TextInput placeholder='E-mail' style={estilos.input}/>
                        <TextInput placeholder='Senha' style={estilos.input}/>

                        <TouchableOpacity style={estilos.buttonCriar} onPress={() => { props.navigation.push('DrawerNavigation') }}>
                            <Text style={estilos.buttontexto}> Entrar </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.buttonCriar2} onPress={() => { props.navigation.push('Cadastro') }}>
                            <Text style={estilos.buttontexto}> Criar minha conta </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estilos.buttonCriar3} onPress={() => { props.navigation.push('Esqueci') }}>
                            <Text style={estilos.buttontexto}> Esqueci minha senha </Text>
                        </TouchableOpacity>
                    </View>
                </View>
           </ImageBackground>
    )
}

export default Login;