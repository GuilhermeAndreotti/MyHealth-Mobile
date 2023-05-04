import { ActivityIndicator, MD2Colors, Searchbar} from 'react-native-paper';
import { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, Button} from 'react-native'
import {estiloCadastro} from '../estilos/CadastroStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker'
import { RadioButton } from 'react-native-paper';

const backgroundImage = require('../imagens/home.png');

//useEffect = apenas uma vez.
//#ADD4D0


  
const Cadastro = (props) =>{

    const [nasc, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)  
    const [value, setValue] = useState('option1');

    return(
    <View style={estiloCadastro.container}> 

        <DatePicker modal open={open} date={nasc} mode='date' onConfirm={(date) => {
            setOpen(false);
            setDate(nasc);
            const formattedDate2 = `${nasc.getDate()}-${nasc.getMonth()+1}-${nasc.getFullYear()}`;
                console.log(formattedDate2);
            }}
            onCancel={() => {
                setOpen(false)
            }}
        />

        <View style={estiloCadastro.container3}>
            <Text style={estiloCadastro.textoTitulo}>Nome Completo</Text>
            <TextInput style={estiloCadastro.textoBranco}/>
        </View>
        
        <View style={estiloCadastro.container2}>
            <Text style={estiloCadastro.textoTitulo}>Sexo</Text>
            
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>        
                    
                        <View style={estiloCadastro.container2}>
                            <RadioButton value="option1" color='#3F92C5'/>
                            <Text style={estiloCadastro.textoTitulo}> Masculino </Text>
                        </View>
                      
                        <View style={estiloCadastro.container2}>
                            <RadioButton value="option2" color='#3F92C5' />
                            <Text style={estiloCadastro.textoTitulo}> Feminino </Text>
                        </View>
            
                </RadioButton.Group>
        </View>

        <View style={estiloCadastro.container3}>

      
            <Text style={estiloCadastro.textoTitulo}>Data de Nascimento</Text>
            

            <TouchableOpacity style={estiloCadastro.data} onPress={() => setOpen(true)} >
                <Text style={estiloCadastro.textoDataMesAno}> {nasc.toLocaleDateString()} </Text>
                <Image style={estiloCadastro.ImagemCalendario} source={require('../imagens/calendario.png')}/>

            </TouchableOpacity>
        </View>

        <View style={estiloCadastro.container3}>
            <Text style={estiloCadastro.textoTitulo}>Email</Text>
            <TextInput style={estiloCadastro.textoBranco}/>
        </View>

        <View style={estiloCadastro.container3}>
            <Text style={estiloCadastro.textoTitulo}>Senha</Text>
            <TextInput secureTextEntry={true} style={estiloCadastro.textoBranco}/>
        </View>

        <View style={estiloCadastro.container3}>
            <Text style={estiloCadastro.textoTitulo}>Repetir Senha</Text>
            <TextInput secureTextEntry={true} style={estiloCadastro.textoBranco}/>
        </View>

        <View style={estiloCadastro.container1}>      
                    <TouchableOpacity style={estiloCadastro.cadastrar}>
                            <Text style={estiloCadastro.textoBotao}> Cadastrar </Text>
                    </TouchableOpacity>
        </View>

    </View>



    )
}


export default Cadastro;