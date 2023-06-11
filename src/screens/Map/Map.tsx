import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, SafeAreaView, Image, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Modal, Spinner } from '@ui-kitten/components';
import cargoIcon from '../../../assets/cargo.png';
import passengerIcon from '../../../assets/passenger.png';
import specialTransportIcon from '../../../assets/specialTransport.png';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Vehicle } from '../../../vehicles';
import { SET_SELECTED_VEHICLE } from '../../store/Slices/vehiclesSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MapScreens = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const { selectedVehicle2, allVehicle } = useAppSelector((state) => state.vehiclesSlice);
  const mapRef = useRef<MapView>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load && mapRef.current && selectedVehicle2?.coordinates) {
      const { latitude, longitude } = selectedVehicle2.coordinates;
      const region = {
        latitude,
        longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };
      mapRef.current.animateToRegion(region, 1000);
    }
  }, [load, selectedVehicle2]);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        onMapReady={() => setLoad(true)}
        ref={mapRef}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 43.8256,
          longitude: 87.6168,
          latitudeDelta: 70,
          longitudeDelta: 70,
        }}
      >
        {Object.keys(allVehicle).map((key) =>
          allVehicle[key].map((el: Vehicle) => (
            <Marker
              onPress={() => {
                dispatch(SET_SELECTED_VEHICLE(el));
                navigation.navigate('ListScreens', { screen: 'VehicleDetails' });
              }}
              key={el.id}
              coordinate={{ latitude: el.coordinates.latitude, longitude: el.coordinates.longitude }}
            >
              <Image
                source={
                  el.category === 'cargo'
                    ? cargoIcon
                    : el.category === 'passenger'
                    ? passengerIcon
                    : el.category === 'specialTransport'
                    ? specialTransportIcon
                    : null
                }
                style={{ width: 25, height: 25 }}
              />
            </Marker>
          )),
        )}
      </MapView>
      {!load && ( // Возможно, механизм <Modal> создает перекрытие, которое мешает <MapView> корректно измерять свои размеры. И для этого добавил проверку.
        <View style={styles.spinnerContainer}>
          <Spinner size="giant" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default MapScreens;
