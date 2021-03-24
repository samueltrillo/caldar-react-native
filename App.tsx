import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
        <Text style={styles.headerWhite}>Cald
          <Text style={styles.headerOrange}>Ar</Text>          
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerWhite: {
    backgroundColor: '#fc6225',
    height: 75,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 20
  },
  headerOrange: {
    color: '#3d4855',
  },
});
