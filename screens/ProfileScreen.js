import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }], // Navigasi ke Login saat logout
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>
      <View style={styles.logoutContainer}>
        <Button title="Log Out" onPress={handleLogout} />
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
});

export default ProfileScreen;
