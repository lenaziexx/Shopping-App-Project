import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export function Confirmation({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Order Confirmed.
        Hope to see you soon, thank you.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:15,
    textAlign: "center"
  }
});
