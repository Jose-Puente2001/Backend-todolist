import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button, Text, FlatList } from 'react-native';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import  '../database/Firebase';

const db = getFirestore();

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
                   </View>
              )}

           />
        </ScrollView>

  )
}

export default TaskScreen;