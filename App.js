import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyClassComp from "./Components/MyClassComp";
import Counter from "./Components/Counter/Counter";


const Stack = createNativeStackNavigator();
export default function App() {
const [isActive, setIsActive] = useState(false);

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Counter}
                  options={{ title: 'Welcome' }}
              />
              <Stack.Screen name="Profile" component={MyClassComp} />
          </Stack.Navigator>
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
/**
 * <View style={styles.container}>
 <Button title="Toggle Me" onPress={()=>{
                setIsActive(!isActive)
            }} />
 <StatusBar style="auto" />
 {(isActive)&&(<Counter
                InitValue={0}
                Steps={5}
                Reversed={false}
                NullComponent={''}
                MaxValue={300}
                MaxComponent={''}
            />)}
 </View>
 */
