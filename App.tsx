import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// Importado depois:
import { useState } from 'react';
import chicoHappy from './assets/chico-happy.jpg'
import chicoSad from './assets/chico-sad.jpg'

export default function App() {
  const [isHappy, setIsHappy] = useState(true)

  function mudaHumor(){
    setIsHappy((oldValue:Boolean) => {
      return !oldValue
    })
  }

  return (
    <View style={isHappy? styles.containera : styles.containerb}>

      <TouchableOpacity onPress={mudaHumor}>
        <Image
          style={styles.image}
          source={isHappy ? chicoHappy : chicoSad}
        />
      </TouchableOpacity>

      <Text style={{fontSize:15, color: 'white'}}>
        {isHappy ? 'Chico happy 😊' : 'Chico sad 🙁'}
      </Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  containera: {
    flex: 1,
    backgroundColor: '#ffb9ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerb:{
    flex: 1,
    backgroundColor: '#dcafff',
    color: '#6f26a7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:350, // não precisa de unidade de medida. automaticamente px.
    height:350
  }
});