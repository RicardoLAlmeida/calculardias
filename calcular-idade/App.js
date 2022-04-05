import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  
  var [anoAtual, setanoAtual] = useState('');
  var [anoNascimento, setanoNascimento] = useState('');
  var [idade, setidade] = useState('');

  function CalcularTotal(){
    
    idade = parseInt(anoAtual) - parseInt(anoNascimento);

    alert("Sua idade será: " + idade +" anos");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Cálculo Idade</Text>

      <TextInput style={styles.campo} placeholder="Digite o ano atual" keyboardType="numeric" onChangeText={(anoAtual) => setanoAtual(anoAtual)} />
      <TextInput style={styles.campo} placeholder="Digite o ano de nascimento" onChangeText={(anoNascimento) => setanoNascimento(anoNascimento)} keyboardType="numeric"/>

      <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
        <Text style={styles.textoBotao}>CALCULAR</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#696969"

  },

  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#000"
  },

  campo: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 15,
    color: "#000000"
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#C0C0C0',
    paddin: 10,
    borderRadius: 10
    
  },

  textoBotao: {
    fontSize: 22,
    color: "#000000"
  }	

});