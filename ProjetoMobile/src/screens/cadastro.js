
import { useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, Button} from 'react-native'
import {estiloCadastro} from '../estilos/CadastroStyle'
import DatePicker from 'react-native-date-picker'
import { RadioButton } from 'react-native-paper';

const backgroundImage = require('../imagens/home.png');
  
const Cadastro = (props) =>{

    const [nasc, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)  
    const [value, setValue] = useState('option1');
    const [senha1, setSenha1] = useState('');
    const [senha2, setSenha2] = useState('');
    const [verifica, setVerifica] = useState(1);

    const checaSenha = () =>{
        if(senha1 != senha2  || senha1 == '' || senha2 == ''){
            setVerifica(0);
        }else{
            return props.navigation.push('DrawerNavigation')
        }
    }

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
            {/*Semelhante a página de nova vacina, mesma idéia*/}
            <View style={estiloCadastro.viewFormulario}>

                <View style={estiloCadastro.containerEscrever}>        
                    <View style={estiloCadastro.containerTexto}>
                        <Text style={estiloCadastro.textoTitulo}>Nome Completo</Text>
                    </View>

                    <View>
                        <TextInput style={estiloCadastro.textoBranco}/>
                    </View>
                </View>

                <View style={estiloCadastro.containerTextoSexo}>
                    <View style={estiloCadastro.containerTexto}>
                        <Text style={estiloCadastro.textoTitulo}>Sexo</Text>
                    </View>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>        
                        <View style={estiloCadastro.containerTextoSexo}>
                            <RadioButton value="option1" color='#3F92C5'/>
                            <Text style={estiloCadastro.textoTitulo}>Masculino</Text>
                            <RadioButton value="option2" color='#3F92C5' />
                            <Text style={estiloCadastro.textoTitulo}>Feminino</Text>
                        </View>    
                    </RadioButton.Group>
                </View>

                <View style={estiloCadastro.containerEscrever}>               
                    <View style={estiloCadastro.containerTexto}>
                        <Text style={estiloCadastro.textoTitulo}>Data de Nascimento</Text>
                    </View>

                    <TouchableOpacity style={estiloCadastro.data} onPress={() => setOpen(true)} >
                        <Text style={estiloCadastro.textoDataMesAno}> {nasc.toLocaleDateString()} </Text>
                        <Image style={estiloCadastro.ImagemCalendario} source={require('../imagens/calendario.png')}/>
                    </TouchableOpacity>                  
                </View>

                <View style={estiloCadastro.containerEscrever}>    
                    <View style={estiloCadastro.containerTexto}>
                        <Text style={estiloCadastro.textoTitulo}>Email</Text>
                    </View>

                    <View>
                        <TextInput style={estiloCadastro.textoBranco}/>
                    </View>
                </View>

                <View style={estiloCadastro.containerEscrever}>    
                    <View style={estiloCadastro.containerTexto}>
                        <Text style={estiloCadastro.textoTitulo}>Senha</Text>
                    </View>

                    <View>
                        <TextInput secureTextEntry={true} style={estiloCadastro.textoBranco} onChangeText={setSenha1}/>
                    </View>
                </View>

                <View style={estiloCadastro.containerEscrever}>    
                    <View style={estiloCadastro.containerTexto}>
                        <Text style={estiloCadastro.textoTitulo}>Repetir Senha</Text>
                    </View>

                    <View>
                        <TextInput secureTextEntry={true} style={estiloCadastro.textoBranco} onChangeText={setSenha2}/>
                    </View>
                </View>
            </View>
                {verifica == 0 ? (          
                    <Text style={[estiloCadastro.textoTitulo,{ color: '#FD7979', paddingRight: 105, marginTop: 5 }]}>
                        Senha não confere!
                    </Text>
                ) : ""}

            <View style={estiloCadastro.botao}>      
                    <TouchableOpacity style={estiloCadastro.cadastrar} onPress={() => checaSenha()}>
                        <Text style={estiloCadastro.textoBotao}> Cadastrar </Text>
                    </TouchableOpacity>
            </View>

        </View>



    )
}


export default Cadastro;