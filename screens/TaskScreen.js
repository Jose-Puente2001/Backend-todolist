import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button, Text, FlatList } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import db from '../database/Firebase';


const TaskScreen =  (props) =>{

const [task, setTask] = useState([]);


const getData = async () => {
const querySnapshot = await getDocs(collection(db, 'task'));
const task = [];
querySnapshot.forEach((doc)=>{
  
  const { name } = doc.data();
    task.push({

        id: doc.id,
        name,

    });
   setTask(task)
});    
}


useEffect(() => {
  
getData();

}, []);



const onDeleteTask = async (id) => {

await deleteDoc(doc(db, 'task', id));

}

const renderItem = ({item}) =>{
  return(
  <View>
    <Text>{item.name}</Text>
    <Button title="Delete" onPress={() => onDeleteTask(item.id)}/>
   </View>   
  )
}

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
              renderItem={renderItem}
           />
        </ScrollView>

  )
}

export default TaskScreen;