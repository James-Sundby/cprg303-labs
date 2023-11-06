import React from 'react';
import {View, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({navigation}) {
  return (
    <>
      <MainLayout>
        <View>
          <Text>James' Incredible To Do List App</Text>
          <Text>Created by: James</Text>
          <Text>Version 0.1.5</Text>
        </View>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </MainLayout>
    </>
  );
}

export default About;
