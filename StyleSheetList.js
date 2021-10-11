import React from 'react';

import {View, StyleSheet, Text, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    height: 100,
    borderWidth: 1,
    borderColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainerStyle: {
    flexGrow: 1,
  },
});

export const StyleSheetList = ({data}) => {
  const renderItem = item => (
    <View key={item.id} style={styles.containerStyle}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView
      id="StyleSheetList"
      contentContainerStyle={styles.scrollContainerStyle}>
      {data.map(renderItem)}
    </ScrollView>
  );
};
