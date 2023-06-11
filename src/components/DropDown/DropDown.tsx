import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { data } from '../../utils/vehicles';
import { i18n } from '../../../i18n';

const styles = StyleSheet.create({
  container: {},
});

interface Props {
  setSelectedIndex: (arg: IndexPath) => void;
  selectedIndex: IndexPath;
}

const DropDown = ({ setSelectedIndex, selectedIndex }: Props) => (
  <Layout style={styles.container} level="1">
    <Select
      placeholder="Default"
      value={i18n.t(selectedIndex.row === 0 ? 'all' : Object.keys(data)[selectedIndex.row - 1]) as string}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index as IndexPath)}
    >
      <SelectItem title={i18n.t('all') as string} />
      <SelectItem title={i18n.t('cargo') as string} />
      <SelectItem title={i18n.t('passenger') as string} />
      <SelectItem title={i18n.t('specialTransport') as string} />
    </Select>
  </Layout>
);

export default DropDown;
