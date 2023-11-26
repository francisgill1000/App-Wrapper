import React, { useState, useEffect } from 'react';

import MapView from 'react-native-maps';
import { SafeAreaView, StatusBar, Text, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  let text = 'Waiting..';

  if (errorMsg) {
    text = errorMsg;
  }

  if (location) {
    text = location;
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        ref={(ref) => (webViewRef = ref)} // Set the reference
        source={{ uri: 'https://mobile.mytime2cloud.com/' }}
        style={styles.webview}
        javaScriptEnabled={true}
      />
    </SafeAreaView>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Latitude: {text.latitude}</Text>
    //   <Text>Longitude: {text.longitude}</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
