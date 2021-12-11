import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Provider as PaperProvider, TextInput, Button } from 'react-native-paper';
import axios from 'axios';

export default function App() {

const [name, setName] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = () =>{

if(name.length < 5){
  Alert.alert('por favor ingrese un nombre')
  
}

if(description.length < 5){
  Alert.alert('por favor ingrese una description')
  
}
//192.168.1.103:8000
axios.post('http://localhost:8000/api/task/save', {name: name, description: description})
.then((resp)=>{
   console.log('datos enviados')
   console.log(resp.data);
})

.catch((error)=>{
   console.log('error')
   console.log(error);
})


}


  return (
    <PaperProvider>
    <View>
      <TextInput 
        label="name"
        value={name}
        onChangeText={name => setName(name)}
      />

       <TextInput 
        label="description"
        value={description}
        onChangeText={description => setDescription(description)}
      />

      <Button mode="contained" onPress={handleSubmit}>
        Press me
      </Button>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
