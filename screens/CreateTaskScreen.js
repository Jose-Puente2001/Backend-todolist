import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import db from '../database/Firebase';
import { collection, addDoc } from 'firebase/firestore';


const CreateTaskScreen = (props) => {

const [state, setState] = useState({

  name: ""
  

});


const handleChangeText = (name, value) =>{

   setState({ ...state, [name]: value });
}


const addTask = async () =>{
  if(state.name === ""){
        Alert.alert(
        "Please enter the name of the task", 
        "You cannot send the form with the field empty",
        [
          
          {text: 'OK'},

        ],
     );
  }

  else{

  try {

       const docRef = await addDoc(collection(db, "task"), {
            name: state.name
            
        });
        
        props.navigation.navigate("Task");
     }

     catch (e) {
       console.error("Error adding document: ", e)
  }

   }
}


  return(
  <ScrollView style={styles.container}>
      <View style={styles.input}>
        <TextInput 
        placeholder="name" 
        onChangeText={(value) => handleChangeText("name", value)} />
      </View>
      <View style={styles.input}>
        <Button title="Save Task" onPress={() => addTask()}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

container:{

flex: 1,
padding: 35,

},

input: {

 flex: 1,
 marginBottom: 15,
},

});




export default CreateTaskScreen;

