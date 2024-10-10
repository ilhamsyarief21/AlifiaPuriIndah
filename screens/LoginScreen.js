import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login pressed with", { username, password });
  
    // Simple check for username and password
    if (username && password) { // You can replace this with actual authentication logic
      navigation.navigate('Main'); // Navigate to Main which contains the TabNavigator
    } else {
      // Handle empty fields
      alert('Username and Password cannot be empty');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>Selamat Datang di Alifia Puri Indah</Text>
      <Text style={styles.instructionText}>Silahkan login menggunakan akun anda yang sudah didaftarkan</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Atau</Text>

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
  loginButton: {
    width: wp('55%'),
    height: hp('6%'),
    backgroundColor: '#000',
    paddingVertical: hp('1.5%'),
    borderRadius: wp('4%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
    alignSelf: 'center',
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
    fontFamily: 'Poppins-SemiBold'
  },
  orText: {
    color: '#000',
    textAlign: 'center',
    top: 3,
    fontFamily: 'Poppins-SemiBold'
  },
  signupButton: {
    marginTop: 10,
  },
  signupButtonText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold'
  },
});

export default LoginScreen;
