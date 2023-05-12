export let vacinas = [];

import {estiloHome} from '../estilos/HomeStyle'

import { View, Text, Image, TouchableOpacity } from 'react-native'

let id = 0;

{/*Procura a posição no array que tenha o id passado como parametro, fiz isso para evitar do id ser igual ao espaço*/}
let retornaTemp = (id) => {
    let v = 0
    for(let t = 0; t < vacinas.length; t++){
        if (vacinas[t].id == id){
            v = t
        }
    }
    return v
}

{/*Deixar o formato de apenas com apenas dias mes e ano*/}
const retornaData = (data) => {
    const formattedDate = `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;
    return formattedDate;
}

const retornaDose = (dosagemVacina) => {
    
    if(dosagemVacina == 1){
        dosagemVacina = "1a. Dose"
    }else if(dosagemVacina == 2){
        dosagemVacina = "2a. Dose"
    }else if(dosagemVacina == 3){
        dosagemVacina = "3a. Dose"
    }else if(dosagemVacina == 4){
        dosagemVacina = "Dose única"
    }

    return dosagemVacina

}

{/*Cadastro de vacinas, chamando as variaveis para deixar formatado.*/}
export const cadastrarVacina = (nomeVacina, data1, data2, dosagemVacina, props) => {
    
    data1 = retornaData(data1);
    data2 = retornaData(data2);
    dosagemVacina = retornaDose(dosagemVacina);
    vacinas.push({
        id: vacinas.length === 0 ? 0 : vacinas[vacinas.length-1].id+1,
        nome: nomeVacina,
        data: data1,
        data2: data2,
        dosagem: dosagemVacina,
    });
    props.navigation.pop();
    
}

{/*Edição, chamando as variaveis para deixar formatado.*/}
export const editarVacina = (id, nomeVacina, data1, data2, dosagemVacina, props) => {

    let temp = retornaTemp(id);

    data1 = retornaData(data1);
    data2 = retornaData(data2);
    dosagemVacina = retornaDose(dosagemVacina);
    vacinas[temp].nome = nomeVacina;
    vacinas[temp].data = data1;
    vacinas[temp].data2 = data2;
    vacinas[temp].dosagem = dosagemVacina;

    props.navigation.pop();

}

export const excluirVacina = (excluir, props) => {
    
    let temp = retornaTemp(excluir);
    vacinas.splice(temp, 1); 
               
    props.navigation.pop();

}

{/*Modelo da flatlist está aqui. Let data1 e data2 são usados para trocar - por /*/}
export const modelo = ({ item }, props) => {
    
    let data1 = item.data.split("-").join("/")
    let data2 = item.data2.split("-").join("/")

    return (         
        <View style={estiloHome.containerCard}> 
                <TouchableOpacity style={estiloHome.cardFundoBranco} onPress={
                    () => props.navigation.navigate('NovaVacina', {edicao: 1, id: item.id}
                )}> 
                    <Text style={estiloHome.cardTextoNome}> 
                        {item.nome} 
                        <Text style={estiloHome.cardTextoID}>      
                            {item.id}
                        </Text> 
                    </Text>
                    <Text style={estiloHome.cardTextoDosagem}>
                        {item.dosagem}
                    </Text>
                    <Text style={estiloHome.cardTextoData}>{data1}</Text>
                    <View>
                        <Image style={estiloHome.imagem} source={require('../imagens/vacina1.png')}/>
                    </View>
                    {item.dosagem != "Dose única" ? 
                        <Text style={estiloHome.cardTextoData2}>Proxima dose em: {data2}</Text>
                    : ""}
                </TouchableOpacity >
           
        </View>
    )
}

{/*Modelo do flat list do proxima vacians, so aparece se não for dose unica.*/}
export const proximo = ({ item }, props) => {    
    
    let data2 = item.data2.split("-").join("/")
    
    return (      
            <View style={estiloHome.containerCard}> 
              {item.dosagem != "Dose única" ? 
                    <TouchableOpacity style={estiloHome.cardFundoProximo} onPress={() => props.navigation.navigate('NovaVacina', {edicao: 1, id: item.id})}> 
                        <Text style={estiloHome.cardTextoNome2}> 
                            {item.nome} 
                            <Text style={estiloHome.cardTextoID}> 
                                {item.id}
                            </Text> 
                        </Text>
                        <Text style={estiloHome.cardTextoDataP}>{data2}</Text>
                    </TouchableOpacity >
                : ""}
            </View>
    )
}






