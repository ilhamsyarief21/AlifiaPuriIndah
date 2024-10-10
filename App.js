import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import Tab Navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Import Stack Navigator
import { useFonts } from 'expo-font';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'; // Import ProfileScreen
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons untuk ikon tab

const Tab = createBottomTabNavigator(); // Buat instance dari Bottom Tab Navigator
const Stack = createNativeStackNavigator(); // Buat instance dari Stack Navigator

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Tentukan ikon berdasarkan nama route
          if (route.name === 'Home') {
            iconName = 'home-outline'; // Ikon untuk Home
          } else if (route.name === 'Profile') {
            iconName = 'person-outline'; // Ikon untuk Profile
          } else if (route.name === 'Schedule') {
            iconName = 'time-outline'; // Ikon untuk Schedule
          }

          // Mengubah ikon menjadi hitam penuh jika aktif
          const iconColor = color === 'black' ? 'black' : 'gray'; // Warna hitam jika aktif, warna abu-abu jika tidak aktif

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        tabBarActiveTintColor: 'black', // Warna tab yang aktif
        tabBarInactiveTintColor: 'gray', // Warna tab yang tidak aktif
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      {/* Uncomment jika Anda telah membuat ScheduleScreen */}
      {/* <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Menampilkan null jika font belum dimuat
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
