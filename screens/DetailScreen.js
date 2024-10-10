import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons untuk ikon kembali
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Import untuk ukuran responsif

const DetailScreen = () => {
  const navigation = useNavigation(); // Mengakses navigation

  return (
    <View style={styles.container}>
      {/* Latar Belakang Gambar */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        {/* Tombol Kembali */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
      </ImageBackground>

      {/* Konten Halaman Detail */}
      <View style={styles.content}>
        <Text style={styles.title}>Detail Screen</Text>
        <Text style={styles.description}>
          Ini adalah halaman detail. Anda bisa menambahkan informasi lebih lanjut di sini.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBackground: {
    width: wp('100%'), // Lebar gambar 100% dari lebar layar
    height: hp('50%'), // Tinggi gambar 50% dari tinggi layar
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    position: 'absolute',
    top: hp('7%'), // Menggunakan tinggi responsif
    left: wp('5%'), // Menggunakan lebar responsif
  },
  content: {
    flex: 1,
    padding: wp('5%'), // Menggunakan lebar responsif
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30, // Naikkan konten sedikit ke atas agar tidak tumpang tindih
  },
  title: {
    fontSize: wp('6%'), // Menggunakan lebar responsif
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Menggunakan tinggi responsif
    color: '#333',
  },
  description: {
    fontSize: wp('4%'), // Menggunakan lebar responsif
    textAlign: 'center',
    color: '#666',
  },
});

export default DetailScreen;
