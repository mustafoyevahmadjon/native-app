import { Alert, StyleSheet } from 'react-native';
import Loader from './components/loader';
import { useEffect, useState } from 'react';
import Weather from './components/weather';
import * as Location from 'expo-location';

export default function App() {
  const [isloading, setisloading] = useState(true)
  const [location, setlocation] = useState({
    latitude: null,
    longitude: null,
  })

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({})
      setlocation({
        latitude: latitude,
        longitude: longitude
      })
    } catch (error) {
      Alert.alert("I can't find your current location, so bad ):")
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setisloading(false)
      getLocation()
    }, 2000)
  }, [])

  return isloading ? <Loader /> : <Weather />
}

const styles = StyleSheet.create({});
