import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      {/* <Image
        source={require('./assets/Logo.png')} // replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      /> */}
      
      <Text style={styles.welcomeText}>Selamat Datang di Alifia Puri Indah</Text>
      <Text style={styles.instructionText}>Silahkan login menggunakan akun anda yang sudah didaftarkan</Text>
      
      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => {
        console.log("Login pressed with", { username, password });
        navigation.navigate('Home');
      }}>
        <Text style={styles.loginButtonText}>Masuk</Text>
      </TouchableOpacity>
      
      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Atau</Text>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupButtonText}>Belum Punya Akun? Daftar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // White background
  },
  logo: {
    width: 150, // Adjust to your logo size
    height: 100, // Adjust to your logo size
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
    right: 2,
  },
  instructionText: {
    fontSize: 15,
    marginBottom: 12,
    textAlign: 'left',
    color: '#888', // Light gray text for instruction
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15, // Rounded edges
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#000', // Black button
    paddingVertical: 15,
    borderRadius: 30, // Rounded edges
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#000', // Black text for link
    textAlign: 'center',
  },
  orText: {
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  signupButton: {
    marginTop: 10,
  },
  signupButtonText: {
    color: '#000', // Black text for link
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
