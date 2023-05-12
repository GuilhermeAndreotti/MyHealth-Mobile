import { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground, Modal} from 'react-native'
import {estiloVacinas} from '../estilos/VacinasStyle'
import DatePicker from 'react-native-date-picker'
import { RadioButton } from 'react-native-paper';
import {cadastrarVacina, vacinas, editarVacina, excluirVacina} from "../componentes/ArrayVacinas";

//useEffect = apenas uma vez.
//#ADD4D0
  
const NovaVacina = (props) =>{

    {/* const necessários para abrir as datas e separar entre editar e cadastrar*/}
    let {edicao, id} = props.route.params;
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    
    {/*const necessários para salvar os valores cadastrados*/}
    const [nomeVacina, setNomeVacina] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date())

    const modalSim = () =>
    {
        setModalVisible(!modalVisible);
        excluirVacina(id, props);
    }

    {/*Caso usuário abrir em modo edição*/}
    useEffect(() =>{
        let v = 0
        for(let i = 0; i < vacinas.length; i++){
            if(vacinas[i].id == id){
                v = i;
            }
        }
        if (edicao == 1) {
            
            let valor = 0;
            {/*Transformar texto da dosagem de volta para um valor*/}
            if(vacinas[v].dosagem == "1a. Dose"){
                valor = "1"
            }else if(vacinas[v].dosagem == "2a. Dose"){
                valor = "2"
            }else if(vacinas[v].dosagem == "3a. Dose"){
                valor = "3"
            }else if(vacinas[v].dosagem == "Dose única"){
                valor = "4"
            }

            {/*Transformar data para o DatePicker*/}      
            let dataCompleta = vacinas[v].data;
            let [dia, mes, ano] = dataCompleta.split("-").map(Number);
            const date = new Date(ano, mes - 1, dia);     
            
            dataCompleta = vacinas[v].data2;
            [dia, mes, ano] = dataCompleta.split("-").map(Number);
            const date2 = new Date(ano, mes - 1, dia);     
            
            {/*Seta os valores*/}  
            setNomeVacina(vacinas[v].nome);
            setValue(valor)
            setDate(date)
            setDate2(date2)

        }

      }, [edicao]);
   
    return(

        <View style={estiloVacinas.container}> 
            {/*Modal para o pop up e seus estilos como tambem funções onPress*/}
            <Modal
                animationType='none'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    console.log("Modal acabou de ser fechado")
                }}
            >
                <View style={estiloVacinas.center}>
                    <View style={estiloVacinas.modal}>
                        <Text style={[estiloVacinas.textoTitulo,{ color:'#FD7979'}]}>
                            Tem certeza que deseja excluir?
                        </Text>

                        <View style={estiloVacinas.SimNao}>
                            <TouchableOpacity style={estiloVacinas.botaoSim} 
                            onPress={() => modalSim()}>       
                                <Text style={estiloVacinas.textoBotao}> 
                                    SIM
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={estiloVacinas.botaoNao} 
                            onPress={() => setModalVisible(!modalVisible)
                            }>       
                                <Text style={estiloVacinas.textoBotao}> 
                                    CANCELAR
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
            {/*DataPicker necessário para escolher que data irá mostrar e como ele irá reagir a clique e etc*/}
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
            />{/*São dois pq são duas datas*/}

            {/*Começo do formulário*/}
            <View style={estiloVacinas.viewFormulario}>
                {/*Cada campo foi separado por uma view, por exemplo a data de vacinação, e a vacina estão em view diferentes*/}
                <View style={estiloVacinas.containerEscrever}>               
                    <View style={estiloVacinas.containerTexto}>
                        <Text style={estiloVacinas.textoTitulo}>Data de Vacinação</Text>
                    </View>

                    <TouchableOpacity style={estiloVacinas.data} onPress={() => setOpen(true)} >
                        <Text style={estiloVacinas.textoDataMesAno}> {date.toLocaleDateString()} </Text>
                        <Image style={estiloVacinas.ImagemCalendario} source={require('../imagens/calendario.png')}/>
                    </TouchableOpacity>                  
                </View>

                <View style={estiloVacinas.containerEscrever}>        
                    <View style={estiloVacinas.containerTexto}>
                        <Text style={estiloVacinas.textoTitulo}>Vacina:</Text>
                    </View>

                    <View>
                        <TextInput value={nomeVacina} style={estiloVacinas.textoBranco} onChangeText={setNomeVacina} />
                    </View>
                </View>

                <View style={estiloVacinas.containerTextoSexo}>
                    <View style={estiloVacinas.containerTexto}>
                        <Text style={estiloVacinas.textoTitulo}>Dose</Text>
                    </View>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>   
                        {/*Duas view aqui para deixar 1 e 2 em uma linha e 3 e 4 em outra linha*/}   
                        <View style={estiloVacinas.containerTextoSexo}>
                            <RadioButton value="1" color='#3F92C5'/>
                            <Text style={estiloVacinas.textoTitulo}>1a. Dose</Text>
                            <RadioButton value="2" color='#3F92C5' />
                            <Text style={estiloVacinas.textoTitulo}>2a. Dose</Text>
                        </View>
                        <View style={estiloVacinas.containerTextoSexo}>
                            <RadioButton value="3" color='#3F92C5' />
                            <Text style={estiloVacinas.textoTitulo}>3a. Dose</Text>
                            <RadioButton value="4" color='#3F92C5' />
                            <Text style={estiloVacinas.textoTitulo}>Dose Única</Text>
                        </View>    
                    </RadioButton.Group>
                </View>

                <View style={estiloVacinas.containerEscrever}>        
                    <View style={estiloVacinas.containerTexto}>
                        <Text style={estiloVacinas.textoTitulo}>Comprovante:</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={estiloVacinas.comprovante}>
                            <Text style={estiloVacinas.texto3}> Selecione uma imagem... </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={estiloVacinas.containerEscrever}>
                    <View style={estiloVacinas.containerImagem}>
                        <Image style={estiloVacinas.imagem} source={require('../imagens/vacina1.png')}/>
                    </View>
                </View>
             
                {value != '4' ? ( 
                <View style={estiloVacinas.containerEscrever}>               
                    <View style={estiloVacinas.containerTexto}>
                        <Text style={estiloVacinas.textoTitulo}>Proxima Vacinação</Text>
                    </View>

                    <TouchableOpacity style={estiloVacinas.data} onPress={() => setOpen2(true)} >
                        <Text style={estiloVacinas.textoDataMesAno}> {date2.toLocaleDateString()} </Text>
                        <Image style={estiloVacinas.ImagemCalendario} source={require('../imagens/calendario.png')}/>
                    </TouchableOpacity>                  
                </View>
                ) : ""} {/*Não vai aparecer nada caso dose for 4*/}
            </View>

            <View>  
                    {/*Essa parte é pra definir os botões e seus chamados de método, caso for edicao, aparecer
                    botão de edição e de excluir, caso não, apenas o de cadastro. A variavel edicao é passada
                    através de params da tela home.*/}
                    {edicao == 1 ? ( 
                        <View>
                            <TouchableOpacity
                                style={estiloVacinas.editar}
                                onPress={() => editarVacina(id, nomeVacina, date, date2, value, props)}>
                                <Text style={estiloVacinas.textoBotao}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={estiloVacinas.excluir}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Image style={estiloVacinas.ImagemLixo} source={require('../imagens/lixo.png')}/>
                                <Text style={estiloVacinas.textoBotao}>Excluir</Text>
                            </TouchableOpacity>
                        </View>                         
                    ) : ( 
                        <TouchableOpacity 
                            style={estiloVacinas.cadastrar} 
                            onPress={() => cadastrarVacina(nomeVacina, date, date2, value, props)}>
                            <Text style={estiloVacinas.textoBotao}> Cadastrar </Text>
                        </TouchableOpacity>
                    )}
                </View>
        </View>

            
    )
    
}


export default NovaVacina;