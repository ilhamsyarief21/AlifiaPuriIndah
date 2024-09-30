import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Welcome and Instruction Text */}
      <Text style={styles.welcomeText}>Selamat Datang di Alifia Puri Indah</Text>
      <Text style={styles.instructionText}>Silahkan login menggunakan akun anda yang sudah didaftarkan</Text>

      {/* Username Input with Label */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password Input with Label */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

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
    padding: 20,
    backgroundColor: '#fff',
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
    color: '#888',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000', // Black text for the label
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#000', // Black border
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
    marginBottom: 5,
  },
  forgotPasswordText: {
    color: '#000',
    textAlign: 'center',
  },
  orText: {
    color: '#000',
    textAlign: 'center',
    top: 3,
  },
  signupButton: {
    marginTop: 10,
  },
  signupButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
