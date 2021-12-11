import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Editor from "@monaco-editor/react";

export default function App() {

  return (
    <View>
      <Editor
          height="90vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="//Code Javacript"
      />
    </View>
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
