import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';
import { i18n } from '../../../i18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
});

const Settings = () => {
  const { title } = styles;
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(new IndexPath(0));
  const [locale, setLocale] = useState(i18n.locale);

  const changeLocale = (lang: string, index: IndexPath) => {
    i18n.locale = lang;
    setLocale(lang);
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={title}>{i18n.t('setting')}</Text>
      <Layout style={styles.container} level="1">
        <Select
          placeholder="Default"
          value={selectedIndex.row === 0 ? 'ru' : 'en'}
          selectedIndex={selectedIndex}
          onSelect={(index: any) => changeLocale(index.row === 0 ? 'ru' : 'en', index)}
        >
          <SelectItem title="ru" />
          <SelectItem title="en" />
        </Select>
      </Layout>
    </View>
  );
};

export default Settings;
