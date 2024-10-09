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
      {/* Header with Greeting and Icons */}
      <View style={styles.header}>
        <Text style={[styles.greeting, { fontSize: wp(windowDimensions.width > windowDimensions.height ? '4%' : '5%') }]}>
          Hai, Ilham
        </Text>

        {/* Icons on the right */}
        <View style={styles.iconsContainer}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('7%'),
    marginHorizontal: wp('5%'),
  },
  greeting: {
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: wp('4%'), // Space between icons
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: 260, // Ukuran lebar 232px
    height: 40, // Ukuran tinggi 22px
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
    paddingHorizontal: wp('2%'),
    left: 60,
    bottom: 7,
  },
  searchIcon: {
    marginRight: wp('2%'),
  },
  searchInput: {
    flex: 1,
    height: hp('5%'),
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
