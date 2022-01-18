import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// LIBRARIES
import axios from 'axios';

// COMPONENTS
import Header from './src/components/Header';

export default function App() {
   axios
      .get('https://pokeapi.co/api/v2/pokemon/growlithe')
      .then(response => {
         const { front_default } = response.data
         const { name } = response.data
      })

   return (
      <View style={styles.container}>
         <Header title='Pokemons' />

      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#292929',
      height: '100%'
   },
   name: {
      fontSize: 20,
      color: '#E3E3E3',
      padding: "2%"
   },
   option: {
      backgroundColor: '#5C5C5C',
      margin: '2%',
      alignItems: 'center',
      borderRadius: 10
   }
});
