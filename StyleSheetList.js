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
  rowStyle: {
    flexDirection: 'row',
  },
  redContainerStyle: {
    backgroundColor: 'red',
  },
  blueContainerStyle: {
    backgroundColor: 'blue',
  },
});

export const StyleSheetList = ({data}) => {
  const renderItem = item => (
    <View key={item.id} style={styles.containerStyle}>
      <Text>{item.title}</Text>
      <View style={styles.rowStyle}>
        <View style={styles.redContainerStyle}>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.blueContainerStyle}>
          <Text>{item.title}</Text>
        </View>
      </View>
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
