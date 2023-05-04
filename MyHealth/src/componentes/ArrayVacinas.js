export const vacinas = [
    {
        id: 1,
        nome: 'Vacina A',
        data: '01/01/2022',
        data2: '01/02/2022',
        dosagem: '1a. Dose',
      },
      {
        id: 2,
        nome: 'Vacina B',
        data: '01/03/2022',
        data2: '01/04/2022',
        dosagem: '2a. Dose',
      },
      {
        id: 3,
        nome: 'Vacina C',
        data: '01/05/2022',
        data2: '01/06/2022',
        dosagem: '3a. Dose',
      },

];

import {estiloHome} from '../estilos/HomeStyle'

import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'

let id = 0;
export let refresh = 0;

const retornaData = (data) => {
    const formattedDate = `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;
    return formattedDate;
}

export const cadastrarVacina = (nomeVacina, data1, data2, dosagemVacina, props) => {

    data1 = retornaData(data1);
    data2 = retornaData(data2);

    if(dosagemVacina == 1){
        dosagemVacina = "1a. Dose"
    }else if(dosagemVacina == 2){
        dosagemVacina = "2a. Dose"
    }else if(dosagemVacina == 3){
        dosagemVacina = "3a. Dose"
    }else if(dosagemVacina == 4){
        dosagemVacina = "Dose única"
    }

    vacinas.push({
        id: id,
        nome: nomeVacina,
        data: data1,
        data2: data2,
        dosagem: dosagemVacina,
    });

    id = id + 1;
    props.navigation.pop();

}

export const atualiza = () => {
    refresh = refresh + 1;
    return refresh;
}

export const modelo = ({ item }) => {     
    return (         
        <View style={estiloHome.containerCard}> 
            <TouchableOpacity style={estiloHome.cardFundoBranco}> 
                <Text style={estiloHome.cardTextoNome}> 
                    {item.nome} 
                    <Text style={estiloHome.cardTextoID}> 
                        {item.id}
                    </Text> 
                </Text>
                <Text style={estiloHome.cardTextoDosagem}>
                    {item.dosagem}
                </Text>
                <Text style={estiloHome.cardTextoData}>{item.data}</Text>
                <View>
                    <Image style={estiloHome.imagem} source={require('../imagens/vacina1.png')}/>
                </View>
                <Text style={estiloHome.cardTextoData2}>Proxima dose em: {item.data2}</Text>
            </TouchableOpacity >
        </View>
    )
}






