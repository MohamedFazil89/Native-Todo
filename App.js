import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from './Components/Navbar';
import Input from './Components/Input';
import Notes from './Components/Notes';

export default function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    // Load tasks from AsyncStorage when the component mounts
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTask(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = (input) => {
    const newTask = [...task, input];
    setTask(newTask);
    saveTasks(newTask);
  };

  const handleDelete = (index) => {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
    saveTasks(updatedTask);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Nav}>
        <NavBar name="Todo List" />
      </View>

      <View style={styles.body}>
        <Input onAdd={addTask} />
        <FlatList
          style={styles.list}
          data={task}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Notes Note={item} Delete={() => handleDelete(index)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    marginTop: 20,
    width: '100%',
  },
  Nav: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
});
