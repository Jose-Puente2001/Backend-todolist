import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button, Text, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import  '../database/Firebase';

const db = getFirestore();

const TaskScreen =  (props) =>{

const [task, setTask] = useState([]);
const [check, setCheck] = useState(false);

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


const renderItem = ({item}) =>{
  return(
  <View>
    <CheckBox 
      title={item.name}
      checked={check}
      onPress={() => setCheck(!check)}
        />
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
              keyExtractor={item => item.id}
           />
        </ScrollView>

  )
}

export default TaskScreen;