import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { IconButton, Colors } from 'react-native-paper';
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
  <View style={styles.container}>
    <Text style={styles.titletask}>{item.name}</Text>
    <IconButton
      icon="trash-can"
      color={Colors.red500}
      size={20}
      onPress={() => onDeleteTask(item.id)}
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
           />
        </ScrollView>

  )
}

const styles = StyleSheet.create({

container: {

paddingTop: 20,
flexDirection: "row",
justifyContent: "space-evenly",

},


titletask:{

marginTop: 10,

}


})


export default TaskScreen;