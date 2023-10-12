import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import axios from "axios";
import { API_URL } from '../constants';
import base64 from 'react-native-base64';
import jwt_decode from "jwt-decode";
import { useAuthContext } from '../ctx/AuthContext';
import { User } from '../types';
import { Redirect } from 'expo-router';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });


export default function Login(){
    
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, displayError] = useState<boolean>(false);

    const {user, setUser} = useAuthContext();

    if(user?.type === "worker"){
        return <Redirect href="/worker/appointments"/>
    }

    const login = () => {
        const authHeader = 'Basic ' + base64.encode(`${username}:${password}`);
        axios.post(`${API_URL}/api/v1/users/login`, {}, {headers: {"Authorization": authHeader}}).then((response) => {
                const jwt = response.headers["authorization"].split(" ")[1];
                console.log(jwt);
                const decoded = jwt_decode(jwt);
                setUser?.({...decoded as User, jwt});
            }).catch((e: any) => {             
                displayError(true)
            })
    }
    
    return (
              <View style={styles.container}>
                <TextInput
                  value={username}
                  onChangeText={setUsername}
                  placeholder={'Username'}
                  style={styles.input}
                />
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  style={styles.input}
                />

                {error && <Text>Error</Text>}
                
                <Button
                  title={'Login'}
                  style={styles.input}
                  onPress={login}
                />

              </View>
            );
}