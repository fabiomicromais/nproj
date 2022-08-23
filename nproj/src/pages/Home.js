import React, { useState, useEffect } from 'react';
import { View, Text,TextInput, StyleSheet, StatusBar, Platform, FlatList} from 'react-native';
import { Button } from './components/Button';


export function Home(){
  //seta novo valor
const [valor, setNewValor] = useState('');
//console.log(valor);

//armazena valores
const [valores, setNewValores ] = useState([]);
//console.log(valores);

//função para renderizar os valores
function handleValores(){
//  console.log('valores');
//pega valores que ja estavam no array
//cria novo array adicionando os valores  antigo e colocando o novo
   setNewValores(oldValores =>  [...oldValores, valor ]);
  }

useEffect( () => {
  console.log('chamou use efecct')
}, [] )

useEffect( () => {
   const currentHour = new Date().getHours();
   if(currentHour < 12) {
       console.log(' manha')
   } else if(currentHour >=12 && currentHour < 18 ){
      console.log('tarde')
   } else
   console.log('Noite');
}, [valores] )


return(
        <>
        <StatusBar barStyle="dark-content"/>
        <View style={styles.container}> 
            <Text style={{color: 'blue', fontSize:15, fontWeight: 'bold', marginLeft:70, width: 180,padding:10, backgroundColor: 'white'}}> Sistemas de Laticinio </Text>
            <Text style={[styles.text ]}> Cadastro de Clientes</Text>
            <TextInput
              onChangeText={setNewValor}    
              placeholder="Digite o Nome do cliente"
              placeholderTextColor= '#999'
              style={styles.textInput}
            />
            <View style={styles.box}>
              <TextInput
                placeholder="Digite a cidade"
                placeholderTextColor= '#999'
                style={styles.textInput}
              />
              <TextInput
                placeholder="UF"
                placeholderTextColor= '#999'
                style={styles.textInput}
              />
            </View >

            <TextInput
              placeholder="Digite o endereço"
              placeholderTextColor= '#999'
              style={[styles.textInput, {width: 350}]}
              
            />
           {
           //passando a propriedade por paramenteo para o button }
            }
            <Button  
              onPress={handleValores}/>
            
          
            {
            //flat list, permite mostrar os itens carragando aos poucos
            }

 
            {                 
              //exmplo do map
              // valores = tem o conteudo
             // cadvalor é um nome qualquer
             // precisa do key para não duplicar valores iguais
                valores.map(cadavalor => (
                   <Text key={cadavalor}>
                      {cadavalor }
                  </Text>
                ))   
            }

            <FlatList
                data={valores}
                keyExtrator={ item => item }
                renderItem={ ({item}) => (
                    <Text> { item } </Text> )}
            />

              


        </View>
        
       </>
    )
}

const styles=StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      paddingHorizontal: 20,
      paddingVertical: 70,
      alignItems: 'flex-start',
      
    },
    text: {
      color: 'black',  
      paddingHorizontal: 100,
      paddingVertical: 13,
      backgroundColor: 'aliceblue',
      marginTop: 20
    },
    textInput: {
      backgroundColor: '#FFF',
      color: 'black',
      fontSize: 18,
      padding: Platform.OS == 'ios' ? 15: 10,
      margin: 10,
      borderRadius: 7,
      
    },
    box:{
      flexDirection: 'row' 
    },


  })