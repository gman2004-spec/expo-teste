import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs>
      <Header image={require("../../assets/images/react-logo.png")}/>
     <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>🤞</Text>)}}></Tabs.Screen>
     <Tabs.Screen name='explore' options={{headerShown: true, tabBarIcon: () => (<Text>👌</Text>)}}></Tabs.Screen>
     <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>✌</Text>)}}></Tabs.Screen>
    </Tabs>
  );
}
