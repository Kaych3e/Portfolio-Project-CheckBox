import { View, Text, ScrollView, TextInput, Button, FlatList, StyleSheet, Dimensions, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import LottieView from 'lottie-react-native'; Couldn't figure out the way out of this library
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/asyncStorage';
import TaskInputField from '../components/TaskInputField';
import TaskItem from '../components/TaskItem';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReset = async ()=>{
    await removeItem('onboarded');
    navigation.push('Onboarding');
  }

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.heading}>CHECKBOX - TODO APP</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>

     {/*THE CODE BELOW IF ACTIVATED WILL DISPLAY A BUTTON BELOW
     THE HOMESCREEN OF THE TO-DO LIST TO ENABLE YOU
     RESET THE SCREEN TO DISPLAY THE ONBOARDING SCREEN ONE MORE TIME */}
      
      {/* <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity> */}
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fef8e0',
  //   alignItems: 'center'
  // },
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  heading: {
    color: '#fFF',
    fontSize: 20,
    fontWeight: '600',
    // marginTop: 30,
    paddingVertical: 20,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#3E3364',
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  lottie:{
    width: width*0.9,
    height: width
  },
  text: {
    fontSize: width*0.09,
    marginBottom: 20
  },
  resetButton: {
    backgroundColor: '#34d399',
    padding: 10,
    borderRadius: 10
  },
})