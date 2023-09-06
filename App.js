import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

//http://www.conversorfacil.com.br/calcular/peso-ideal  site para saber a formula 

export default function App() {
  cosnt [sexo, setSexo] = useState('homem');
  const [altura, setAltura] = useState(' ');
  const [k, setK] = useState(4);
  const [resultado, setResultado] = useState(' ')
  
  const pesoideal = () => {

  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Peso Ideal</Text>
        
        <Text>Digite sua Altura em metros:</Text>
        <TextInput placeholder='Digite sua Altura'/>
        
        <Text>Escolha seu sexo:
        </Text>
          <Pressable><Text>Masculino</Text></Pressable>
          <Pressable><Text>Feminino</Text></Pressable>

        <Pressable><Text>Exibir</Text></Pressable>
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
    color:"black",
    backgroundColor:'#fff'
  },
});
