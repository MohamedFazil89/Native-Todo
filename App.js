import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, Modal, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from './Components/Navbar';
import Input from './Components/Input';
import Notes from './Components/Notes';
import Alerts from './Components/alert';

export default function App() {
  const [task, setTask] = useState([]);
  const [holder, setHolder] = useState("Enter the Task");
  const [color, setColor] = useState("gray");
  const [ModalVisible, setModalVisible] = useState(false);
  const [res, setRes] = useState(false);



  useEffect(() => {
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
    if (input) {
      const newTask = [...task, input];
      setTask(newTask);
      saveTasks(newTask);
      setColor("gray")
      setHolder("Enter the Task!!")

    } else {
      setHolder("You must Enter any Task!!")
      setColor("red")
    }
  };
  // console.log(res)

  const handleDelete = (index) => {
    console.log("delete" + res);

    setModalVisible(true)
    if (res) {
      const updatedTask = [...task];
      updatedTask.splice(index, 1);
      setTask(updatedTask);
      saveTasks(updatedTask);
      setModalVisible(false)
      setRes(false)
    }

  };

  function handleState(state) {
    console.log("handel state:" + state);
    setRes(state)
    if (state === false) {
      setModalVisible(false)
    } else {
      handleDelete();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!ModalVisible);
        }}>
        {/* this is the model component */}
        <Alerts modelState={handleState} />



      </Modal>
      <View style={styles.Nav}>
        <NavBar name="Todo List" />
      </View>

      <View style={styles.body}>
        <Input onAdd={addTask}
          place={holder}
          holderColor={color}

        />
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
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.5)'

  },
});
