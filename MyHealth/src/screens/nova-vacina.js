import { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, Button} from 'react-native'
import {estiloVacinas} from '../estilos/VacinasStyle'
import DatePicker from 'react-native-date-picker'
import { RadioButton } from 'react-native-paper';
import {cadastrarVacina} from "../componentes/ArrayVacinas";
const backgroundImage = require('../imagens/home.png');

//useEffect = apenas uma vez.
//#ADD4D0


  
const NovaVacina = (props) =>{

    {/* const necessários para abrir as datas */}
    
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    
    {/*const necessários para salvar os valores cadastrados*/}
    const [nomeVacina, setNomeVacina] = useState('');
    const [value, setValue] = useState('opt');
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date())

    return(

        <View style={estiloVacinas.container}> 
            <DatePicker modal open={open} date={date} mode='date' onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <DatePicker modal open={open2} date={date2} mode='date' onConfirm={(date2) => {
                    setOpen2(false);
                    setDate2(date2);
                }}
                onCancel={() => {
                    setOpen2(false)
                }}
            />
        
    <View style={estiloVacinas.container1}> 

                <View style={estiloVacinas.container3}>         
                    
                    <View style={estiloVacinas.container1}>
                        <Text style={estiloVacinas.textoTitulo}>Data de</Text>
                        <Text style={estiloVacinas.textoTitulo}>Vacinação</Text>
                    </View>
                    
                    <TouchableOpacity style={estiloVacinas.data} onPress={() => setOpen(true)} >
                        <Text style={estiloVacinas.textoDataMesAno}> {date.toLocaleDateString()} </Text>
                        <Image style={estiloVacinas.ImagemCalendario} source={require('../imagens/calendario.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={estiloVacinas.container3}>
                    <Text style={estiloVacinas.textoTitulo}>    Vacina</Text>
                    <TextInput style={estiloVacinas.textoBranco} onChangeText={setNomeVacina} />
                </View>

                <View style={estiloVacinas.container2}>
                    <Text style={estiloVacinas.textoTitulo}>Dose</Text>
                    
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        
                        <View style={estiloVacinas.container3}>
                            <View style={estiloVacinas.radioFormat}>
                                <RadioButton value="1" color='#3F92C5' />
                                <Text style={estiloVacinas.textoTitulo}>1a. Dose </Text>
                            </View>
                            <View>
                                <RadioButton value="2" color='#3F92C5' />
                                <Text style={estiloVacinas.textoTitulo}>2a. Dose </Text>
                            </View>
                        </View>
                        <View style={estiloVacinas.container3}>
                            <View style={estiloVacinas.radioFormat}>
                                <RadioButton value="3" color='#3F92C5' />
                                <Text style={estiloVacinas.textoTitulo}>3a. Dose </Text>
                            </View>
                            <View>
                                <RadioButton value="4" color='#3F92C5' />
                                <Text style={estiloVacinas.textoTitulo}>Dose Única </Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>

                <View style={estiloVacinas.container3}>
                    <Text style={estiloVacinas.textoTitulo}> Comprovante </Text>
                    <TouchableOpacity style={estiloVacinas.comprovante}>
                        <Text style={estiloVacinas.texto3}> Selecione uma imagem... </Text>
                    </TouchableOpacity>
                </View>
                <View style={estiloVacinas.containerImagem}>
                    <Image style={estiloVacinas.imagem} source={require('../imagens/vacina1.png')}/>
                </View>

                <View style={estiloVacinas.container3}>         
                    
                    <View style={estiloVacinas.container1}>
                        <Text style={estiloVacinas.textoTitulo}>Proxima</Text>
                        <Text style={estiloVacinas.textoTitulo}>Vacinação</Text>
                    </View>
                    
                    <TouchableOpacity style={estiloVacinas.data} onPress={() => setOpen2(true)} >
                        <Text style={estiloVacinas.textoDataMesAno}> {date2.toLocaleDateString()} </Text>
                        <Image style={estiloVacinas.ImagemCalendario} source={require('../imagens/calendario.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={estiloVacinas.container1}>      
                    <TouchableOpacity style={estiloVacinas.cadastrar} 
                        onPress={() =>
                            cadastrarVacina(nomeVacina, date, date2, value, props)
                        }>
                        <Text style={estiloVacinas.textoBotao}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>

            
    )
    
}


export default NovaVacina;