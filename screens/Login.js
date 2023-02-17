import React, { Component, useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";




export default function Login () {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (password === 'Socorro 73' || password === 'Onekey22' || password === 'Socorro73') {
      navigation.navigate('Report');
    } else {
      setErrorMessage('Contraseña incorrecta');
    }
  };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>
        {/* <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          autoCapitalize="none"
          value={password}
        onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#f2f2f2',
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
