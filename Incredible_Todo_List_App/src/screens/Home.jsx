import React, {useState} from 'react';
import {SafeAreaView, Button, View, StyleSheet} from 'react-native';

import MainLayout from '../layouts/MainLayout';
import Footer from '../layouts/Footer';

import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

import ChuckNorrisFact from '../components/ChuckNorrisFact';

function Home({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };
  return (
    <>
      <MainLayout>
        <SafeAreaView>
          <View style={styles.container}>
            <ToDoList tasks={tasks} />
            <ToDoForm onAddTask={handleAddTask} />
          </View>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
          <ChuckNorrisFact />
        </SafeAreaView>
      </MainLayout>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
});

export default Home;
