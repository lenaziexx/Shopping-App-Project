import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
export function Checkout ({navigation}) {
  const [name, setName] = useState("");
  const [num, setNumber] = useState("");
  const [address, setAddress] = useState("")


  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#eeeeee"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#eeeeee"
          onChangeText={(num) => setNumber(num)}
        />
      </View>
      <View style={styles.addressinputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 1"
          placeholderTextColor="#eeeeee"
          onChangeText={(address) => setAddress(address)}
        />
      </View>
      <View style={styles.addressinputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 2"
          placeholderTextColor="#eeeeee"
          onChangeText={(address) => setAddress(address)}
        />
      </View>
      <View style={styles.addressinputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address Line 3"
          placeholderTextColor="#eeeeee"
          onChangeText={(address) => setAddress(address)}
        />
      </View>

      
      <TouchableOpacity style={styles.checkBtn}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Confirmation');
        }}
      >Checkout </Text>
    </TouchableOpacity>

    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    borderColor: "blue",
    backgroundColor: "blue",
    borderRadius: 30,
    width: "90%",
    height: 35,
    marginBottom: 30,

    alignItems: "center",
  },

  numinputView: {
    borderColor: "blue",
    backgroundColor: "blue",
    borderRadius: 30,
    width: "90%",
    height: 35,
    marginBottom: 30,

    alignItems: "center",
  },

  addressinputView: {
    borderColor: "blue",
    backgroundColor: "blue",
    borderRadius: 30,
    width: "90%",
    height: 35,
    marginBottom: 10,

    alignItems: "center",
  },

  TextInput: {
    color: "white",
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  checkBtn: {
    width: "30%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40%",
    marginBottom: "1%",
    backgroundColor: "blue",
  },
  text: {
    textAlign: "left",
    color: 'white',
  },
});
