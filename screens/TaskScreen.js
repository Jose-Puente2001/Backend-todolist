import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';
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

	console.log(task)

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
        	{task.map((tasks)=>{
                 return(
                 <ScrollView>
                  <View>
                  	<Text key="{tasks}">{tasks.name}</Text>
                  	</View>
                   <View>
                   	<Text key="{tasks}">{tasks.description}</Text>
                   	</View>
                  </ScrollView>
                )
        	})}
        </ScrollView>

	)
}

export default TaskScreen;