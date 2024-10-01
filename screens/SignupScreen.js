import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image
        source={require('../assets/Logo.png')} // Make sure the path is correct
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Welcome and Instruction Text */}
      <Text style={styles.welcomeText}>Daftar Akun Baru</Text>
      <Text style={styles.instructionText}>Silahkan daftar dengan mengisi informasi di bawah ini</Text>

      {/* Name Input with Label */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nama</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input with Label */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Phone Number Input with Label */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nomor HP</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
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

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={() => {
        console.log("Signup pressed with", { name, email, phoneNumber, password });
        navigation.navigate('Login');
      }}>
        <Text style={styles.signupButtonText}>Daftar</Text>
      </TouchableOpacity>

      {/* Navigate to Login */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Sudah punya akun? Login di sini</Text>
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
  logo: {
    width: 150,
    height: 130,
    top: 25,
    right: 30,
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 12,
    textAlign: 'left',
    right: 2,
  },
  instructionText: {
    fontSize: 15,
    marginBottom: 12,
    textAlign: 'left',
    color: '#888',
    fontFamily: 'Poppins-Regular'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
    fontFamily: 'Poppins-Regular'
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    fontSize: 16,
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold'
  },
});

export default SignupScreen;
