import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    padding: wp('5%'),
    backgroundColor: '#fff',
  },
  logo: {
    width: wp('40%'),
    height: hp('15%'),
    marginBottom: hp('2%'),
    alignSelf: 'left',
    top: 50,
    right: 35,
  },
  welcomeText: {
    fontSize: wp('8%'),
    fontFamily: 'Poppins-SemiBold',
    marginBottom: hp('2%'),
    textAlign: 'left',
    top: 10,
  },
  instructionText: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    textAlign: 'left',
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    width: '100%',
    marginBottom: hp('2%'),
  },
  inputLabel: {
    fontSize: wp('4%'),
    marginBottom: hp('0.5%'),
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  input: {
    width: '100%',
    padding: hp('1.5%'),
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: wp('4%'),
    fontSize: wp('4%'),
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: hp('2%'),
    borderRadius: wp('7%'),
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  signupButtonText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: hp('1%'),
  },
  loginButtonText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('4%'),
  },
});

export default SignupScreen;
