import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import  '../database/Firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const db = getFirestore();

const CreateTaskScreen = () => {

const [state, setState] = useState({

	name: "",
	description: "",

});


const handleChangeText = (name, value) =>{

   setState({ ...state, [name]: value });
}


const addTask = async () =>{
	if(state.name === "" || state.description === ""){
        alert('please date');
	}

	else{

	try {

       const docRef = await addDoc(collection(db, "task"), {
            name: state.name,
            description: state.description
        });

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
      	<TextInput 
          placeholder="description" 
          onChangeText={(value)=> handleChangeText("description", value)}/>
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


