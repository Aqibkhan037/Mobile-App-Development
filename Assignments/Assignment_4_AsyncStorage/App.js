

import * as React from 'react';
import { Image, View, Text, Alert, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const data = require('D:/Web technologies... html.css.javaScript/MAD_Practise/Projects/LearningProject/assets/data.json');






const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const storeData = async () => {
    try {

      const data = {
        name: name,
        email: email,
        password: password
      };

      await AsyncStorage.setItem('userData', JSON.stringify(data));
      console.log('Data stored successfully');
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error storing data');
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={storeData}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text>If you already have an account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'blue' }}> Click Here </Text>
      </TouchableOpacity>
    </View>
  );
};





















function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [storedData, setStoredData] = useState(null);


  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data !== null) {
        setStoredData(JSON.parse(data));
        if (storedData.email === email && storedData.password === password) {
          navigation.navigate('Home', { storedData })
        }
        else {
          alert("Wrong Credentials");
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Error retrieving data: ' + error.message);
    }

  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={retrieveData}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text>If you don't have an account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={{ color: 'blue' }}> Click Here </Text>
      </TouchableOpacity>


    </View >
  );
};


const Home = ({ route }) => {

  const { user } = route.params;
  return (
    <View style={styles.container}>

      <Text>
        You are in home...
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      <Text></Text>

      <View style={{ marginTop: 20 }}>
        <Text>Name: {user}</Text>


      </View>

    </View>
  );
}


function LogoTitle() {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={{ width: 60, height: 60, borderRadius: 10, borderWidth: 4, borderColor: 'yellow' }}
        source={require('D:/Web technologies... html.css.javaScript/MAD_Practise/Projects/LearningProject/assets/20230104_044331.jpg')} />
      <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}> Muhammad Aqib Khan </Text>
    </View>

  );
}

const Stack = createNativeStackNavigator();



export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'blue' }, headerTitleStyle: { fontWeight: 'bold' } }}>

        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='Home' options={{ headerTitle: (props) => <LogoTitle {...props} /> }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F7F9FB',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },

  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 8, width: '100%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
