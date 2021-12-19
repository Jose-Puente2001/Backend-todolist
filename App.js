import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskScreen from './screens/TaskScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
       <Stack.Navigator>
        <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
        <Stack.Screen name="Task" component={TaskScreen} />
      </Stack.Navigator>
    )
}

export default function App() {

 return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
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
