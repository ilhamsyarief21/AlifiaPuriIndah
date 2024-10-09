// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login'); // Navigasi ke Login saat logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>
      <View style={styles.logoutContainer}>
        <Button title="Log Out" onPress={handleLogout} />
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Schedule')}>
          <Ionicons name="time-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navIcon} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('5%'), // Menggunakan padding responsif
  },
  title: {
    fontSize: hp('4%'), // Menggunakan font size responsif
    fontWeight: 'bold',
  },
  logoutContainer: {
    marginTop: hp('2%'), // Menggunakan margin responsif
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute', // Menempatkan di bawah layar
    bottom: 0,
    left: 0,
    right: 0,
    height: hp('10%'), // Tinggi untuk bottom nav
    backgroundColor: '#f8f8f8', // Warna latar belakang
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Garis batas atas
  },
  navIcon: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ProfileScreen;
