import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const images = [
  { id: '1', uri: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', uri: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Latar Belakang Gambar dengan FlatList */}
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <ImageBackground
            source={{ uri: item.uri }}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
          >
            {/* Tombol Kembali */}
            
          </ImageBackground>
        )}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.flatList} // Tambahkan gaya untuk FlatList
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>

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
  flatList: {
    height: hp('50%'), // Pastikan tinggi FlatList teratur
  },
  content: {
    padding: wp('5%'), // Menggunakan lebar responsif
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: hp('-50%'), // Naikkan konten sedikit ke atas agar tidak tumpang tindih
    flex: 1, // Pastikan konten memenuhi ruang
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
