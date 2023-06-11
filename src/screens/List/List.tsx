import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { IndexPath } from '@ui-kitten/components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { data } from '../../utils/vehicles';
import DropDown from '../../components/DropDown/DropDown';
import { NavigationProps } from '../../types/navigation';
import { useAppDispatch } from '../../hooks/redux';
import { SET_SELECTED_VEHICLE } from '../../store/Slices/vehiclesSlice';
import { i18n } from '../../../i18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginTop: 20,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  vehicleName: {
    fontSize: 16,
  },
  category: {
    fontSize: 13,
    color: 'gray',
  },
});

const List = () => {
  const { navigate } = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(new IndexPath(0));
  const filterValue = selectedIndex.row !== 0 ? Object.keys(data)[selectedIndex.row - 1] : 'all';
  const { container, title, list, vehicleName, category } = styles;
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(isFocused);
  }, [i18n, i18n.t, i18n.locale, isFocused]);

  return (
    <ScrollView style={container}>
      <Text style={title}>{i18n.t('selectVehicles')}</Text>
      <DropDown selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      {Object.keys(data).map(
        (key) =>
          (filterValue === 'all' || filterValue === key) &&
          data[key].map((el) => (
            <TouchableOpacity
              onPress={() => {
                dispatch(SET_SELECTED_VEHICLE(el));
                navigate('VehicleDetails');
              }}
              style={list}
              key={el.id}
            >
              <Text style={vehicleName}>{el.vehicleName}</Text>
              <Text style={category}>{i18n.t(el.category)}</Text>
            </TouchableOpacity>
          )),
      )}
    </ScrollView>
  );
};

export default List;
