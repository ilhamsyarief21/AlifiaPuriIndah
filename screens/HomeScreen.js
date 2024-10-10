import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Menggunakan Ionicons untuk outline
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const HomeScreen = () => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
  const navigation = useNavigation(); // Mengakses navigation

  useEffect(() => {
    const onChange = ({ window }) => {
      setWindowDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Header with Greeting, Icons, and Search Bar */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={[styles.greeting, { fontSize: wp(windowDimensions.width > windowDimensions.height ? '4%' : '5%') }]}>
            Hai, Ilham
          </Text>

          {/* Icons on the right */}
          <View style={styles.iconsContainer}>
            <Ionicons name="heart-outline" size={24} color="white" style={styles.icon} />
            <Ionicons name="notifications-outline" size={24} color="white" style={styles.icon} />
          </View>
        </View>

        {/* Search Bar dimasukkan ke dalam header */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#fff" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#fff"
          />
        </View>
      </View>

      {/* Content Section (ScrollView) */}
      <ScrollView 
        contentContainerStyle={styles.gridContainer} 
        showsVerticalScrollIndicator={false}
      >
        {/* New Container Below Search Bar */}
        <View style={styles.newContainer}>
          <Text style={styles.containerText}>Content Here</Text>
        </View>

        {/* Placeholder boxes for grid items */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Detail')}>
            {/* Konten dalam kotak bisa dimasukkan di sini */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Detail')}>
            {/* Konten dalam kotak bisa dimasukkan di sini */}
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Detail')}>
            {/* Konten dalam kotak bisa dimasukkan di sini */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Detail')}>
            {/* Konten dalam kotak bisa dimasukkan di sini */}
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Detail')}>
            {/* Konten dalam kotak bisa dimasukkan di sini */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Detail')}>
            {/* Konten dalam kotak bisa dimasukkan di sini */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',  // Ubah latar belakang menjadi hitam
    paddingVertical: hp('3%'), // Tambahkan padding atas dan bawah
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: wp('5%'), // Padding horizontal
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('2%'), // Tambahkan jarak di bawah teks agar tidak terlalu dekat dengan search bar
  },
  greeting: {
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',  // Ubah teks menjadi putih agar kontras dengan latar hitam
    top: hp('2%')
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: wp('4%'), // Space between icons
    color: '#fff',  // Ubah warna ikon menjadi putih
    top: hp('2%')
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: wp('69%'), // Lebar responsif 69% dari lebar layar
    height: 40, // Tinggi tetap
    marginTop: hp('2%'),
    paddingHorizontal: wp('4%'), // Padding dalam search bar
    alignSelf: 'center', // Mengatur posisi search bar agar berada di tengah horizontal
    borderWidth: 2.2, // Ketebalan border
    borderColor: '#fff', // Warna border putih
    backgroundColor: 'transparent', // Menghilangkan background agar hanya border yang terlihat
  },
  
  searchIcon: {
    marginRight: wp('2%'),
  },
  searchInput: {
    flex: 1,
    fontSize: wp('4%'),
    fontFamily: 'Poppins-Regular',
    top: hp('0.2%')
  },
  newContainer: {
    width: wp('90%'), // Ukuran lebar 367px responsif
    height: hp('20%'), // Ukuran tinggi 159px responsif
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignSelf: 'center', // Center horizontally
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'), // Menambahkan jarak antara search dan new container
    marginBottom: hp('3%'), // Menambahkan jarak antara newContainer dan box
  },
  containerText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  gridContainer: {
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    flexGrow: 1, // Mengatur flexGrow untuk ScrollView
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2%'),
  },
  box: {
    width: wp('40%'),
    height: hp('20%'),
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
});

export default HomeScreen;
