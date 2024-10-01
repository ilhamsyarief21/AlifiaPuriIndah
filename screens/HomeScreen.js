// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, Dimensions } from 'react-native';
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

  return (
    <View style={styles.container}>
      {/* Personalized Greeting in the top-left corner */}
      <Text style={[styles.greeting, { fontSize: wp(windowDimensions.width > windowDimensions.height ? '4%' : '5%') }]}>
        Hai, Ilham!
      </Text>

      <View style={styles.mainContent}>
        <Text style={[styles.title, { fontSize: wp(windowDimensions.width > windowDimensions.height ? '4%' : '5%') }]}>
          Home Screen
        </Text>

        <Button
          title="Back to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff', // Add a background color if needed
  },
  greeting: {
    position: 'absolute',
    top: 30, // Adjust the vertical position
    left: 20, // Adjust the horizontal position
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // You can set additional font sizes here if needed
  },
});

export default HomeScreen;
