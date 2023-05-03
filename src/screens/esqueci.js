import { ActivityIndicator, MD2Colors, Searchbar} from 'react-native-paper';
import { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, Button} from 'react-native'
import {estiloCadastro} from '../estilos/CadastroStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker'
import { RadioButton } from 'react-native-paper';

const backgroundImage = require('../imagens/home.png');
  
const Esqueci = (props) =>{

    return(
        <View style={estiloCadastro.container}>
    
            <View style={[estiloCadastro.containerEsqueciSenha,{ marginTop: 250}]}>
                <Text style={estiloCadastro.textoTitulo}>Email</Text>
                <TextInput style={[estiloCadastro.textoBranco,{ width: 295 }]}/>
            </View>
     
            <View style={estiloCadastro.container1}>      
                <TouchableOpacity style={[estiloCadastro.cadastrar,{ width: 160 }]}>
                    <Text style={estiloCadastro.textoBotao}>Recuperar Senha</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}


export default Esqueci;