import {useIsFocused} from "@react-navigation/native";
import {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {estiloHome} from '../estilos/HomeStyle'
import {modelo, vacinas} from "../componentes/ArrayVacinas";

//useEffect = apenas uma vez.
//#ADD4D0

  
const Home = (props) =>{

    {/* Aqui checa se essa página está no topo da stack, caso sim, ele incrementa 1 no contador, que é extraData do flatList*/}
    const [contador, setContador] = useState(0);    
    const foco = useIsFocused();

    useEffect(() => {
      if (foco) {
        setContador(contador + 1);
      }
    }, [foco]);
    {/* Termina aqui */}

    return(
        <View style={estiloHome.container}> 
        
            <View style={estiloHome.container2}> 
                <View style={estiloHome.barraPesquisa.pesquisa}>
                        {/* Chamando Icone de pesquisa para colocar na barra */}
                        <Image style={estiloHome.imagem2} source={require('../imagens/lupa.png')}/>
                        <TextInput placeholder=' Pesquisar Vacina...'/>
                </View>
            </View>

            {/* Parte que irá gerar os cards de forma automatica, modelo esse presente no componentes/ArrayVacinas*/}
            <FlatList data={vacinas} renderItem={({item}) => modelo({item}, props)} keyExtractor={item => item.id} 
            extraData={contador} numColumns={2}/>
      
            <View style={estiloHome.parteBotao}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('NovaVacina', {edicao: 0, id: -1})}}>
                        <Text style={estiloHome.buttontexto}> Nova Vacina </Text>
                </TouchableOpacity>
            </View>
        </View>
            
    )
}

export default Home;