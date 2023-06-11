import React, { useEffect } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { NavigationProps2 } from '../../types/navigation';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SET_SELECTED_VEHICLE2 } from '../../store/Slices/vehiclesSlice';
import { i18n } from '../../../i18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  btn1: {
    marginTop: 20,
    fontSize: 16,
  },
  btn: {
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  text2: {
    fontSize: 16,
  },
});

const VehicleDetails = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<NavigationProps2>();
  const { title, text, btn1, btn, text2 } = styles;
  const { selectedVehicle: data } = useAppSelector((state) => state.vehiclesSlice);
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(isFocused);
  }, [i18n, i18n.t, i18n.locale, isFocused]);

  const makePhoneCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const sendMessageToWhatsApp = (phone: string) => {
    const message = encodeURIComponent('Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе');
    const phoneNumber = phone;

    Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${message}`);
  };

  if (!data) return <></>;

  return (
    <ScrollView style={styles.container}>
      <Text style={title}>{data.vehicleName}</Text>
      <Text style={text}>
        {i18n.t('category')}: {i18n.t(data.category)}
      </Text>
      <Text style={text}>
        {i18n.t('driverName')}: {data.driver}
      </Text>
      <Text style={text}>
        {i18n.t('phone')}: {data.phone}
      </Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(SET_SELECTED_VEHICLE2(data));
          navigate('MapScreens');
        }}
        style={{ ...btn, ...btn1 }}
      >
        <Text style={text2}>{i18n.t('locationDriver')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => makePhoneCall(data.phone)} style={btn}>
        <Text style={text2}>{i18n.t('call')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => sendMessageToWhatsApp(data.phone)} style={btn}>
        <Text style={text2}>{i18n.t('sendMessageOnWhatsApp')}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default VehicleDetails;
