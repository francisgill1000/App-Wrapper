import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ latitude, longitude }) => {
  if (!latitude || !longitude) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta
          : 
          25.33791275002075,
          longitudeDelta
          : 
          55.39332626307665
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title="Current Location"
          description="You are here"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
