import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Container = ({styles, children}) => {
  return (
    <ScrollView>
      <View style={[styles,  style.wrapper ]}>{children}</View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
export default Container;
