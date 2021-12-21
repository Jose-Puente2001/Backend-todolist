import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button, Text, FlatList } from 'react-native';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import  '../database/Firebase';

const db = getFirestore();

const TaskScreen =  (props) =>{

const [task, setTask] = useState([]);

useEffect(async() => {

const querySnapshot = await getDocs(collection(db, 'task'));
const task = [];
querySnapshot.forEach((doc)=>{
  
  const { name, description } = doc.data();
    task.push({

        id: doc.id,
        name,
        description

    })


	setTask(task)
})


},[])


	return(
        <ScrollView>
        	<View>
        		<Button 
                   title="Create New Task"
                   onPress={() => props.navigation.navigate("CreateTask")}
                  
        		/>
        	</View>
        	<FlatList 
              data={task}
              renderItem={({item}) => (
                   <View>
                   	<Text>{item.name}</Text>
                   	<Text>{item.description}</Text>
                   </View>
              )}

        	 />
        </ScrollView>

	)
}

export default TaskScreen;