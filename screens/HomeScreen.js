// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Menggunakan Ionicons untuk outline
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreen = ({ navigation }) => {
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = ({ window }) => {
      setWindowDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  const bottomNavHeight = hp('10%'); // Tinggi bottom navigation

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
        contentContainerStyle={[styles.gridContainer, { paddingBottom: bottomNavHeight }]} 
        showsVerticalScrollIndicator={false}
      >
        {/* New Container Below Search Bar */}
        <View style={styles.newContainer}>
          <Text style={styles.containerText}>Content Here</Text>
        </View>

        {/* Placeholder boxes for grid items */}
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
        <View style={styles.row}>
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </ScrollView>

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
    fontWeight: 'bold',
    color: '#fff',  // Ubah teks menjadi putih agar kontras dengan latar hitam
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: wp('4%'), // Space between icons
    color: '#fff',  // Ubah warna ikon menjadi putih
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
    alignItems: 'center',
  },
});

export default HomeScreen;
