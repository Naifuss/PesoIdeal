import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';

export default function App() {
  const [sexo, setSexo] = useState('homem');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(null);

  const pesoIdeal = () => {
    const alturaFloat = parseFloat(altura.replace(',', '.'));

    if (isNaN(alturaFloat)) {
      setResultado('Por favor, digite uma altura válida em metros.');
      return;
    }

    let pesoIdealValue;

    if (sexo === 'homem') {
      pesoIdealValue = alturaFloat - 100 - (alturaFloat - 150) / 4;
      setImagem(require('./assets/bobs.jpg'));
    } else if (sexo === 'mulher') {
      pesoIdealValue = alturaFloat - 100 - (alturaFloat - 150) / 2;
      setImagem(require('./assets/bobs.jpg'));
    } else {
      setResultado('Por favor, escolha um sexo válido.');
      return;
    }

    setResultado(`Seu peso ideal é aproximadamente ${pesoIdealValue.toFixed(2)} kg.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Peso Ideal</Text>

        <Text>Digite sua Altura em metros:</Text>
        <TextInput
          placeholder='Digite sua Altura'
          value={altura}
          onChangeText={text => setAltura(text)}
          keyboardType='numeric'
        />

        <Text>Escolha seu sexo:</Text>
        <Pressable onPress={() => setSexo('homem')}>
          <Text style={sexo === 'homem' ? { fontWeight: 'bold' } : {}}>Masculino</Text>
        </Pressable>
        <Pressable onPress={() => setSexo('mulher')}>
          <Text style={sexo === 'mulher' ? { fontWeight: 'bold' } : {}}>Feminino</Text>
        </Pressable>

        <Pressable onPress={pesoIdeal}>
          <Text>Exibir</Text>
        </Pressable>

        {resultado !== '' && <Text>{resultado}</Text>}

        {imagem && <Image source={imagem} style={styles.imagem} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
    color: 'black',
    backgroundColor: '#fff',
  },
  imagem: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
