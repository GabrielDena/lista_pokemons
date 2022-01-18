import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// LIBRARIES
import axios from 'axios';

// COMPONENTS
import Header from './src/components/Header';
import PokemonList from './src/components/PokemonList';

export default function App() {

   const [pokemons, setPokemons] = useState([])

   useEffect(async () => {
      await axios
         .get('https://pokeapi.co/api/v2/pokemon?limit=12')
         .then(response => {
            const { results } = response.data
            setPokemons(results)
         })
   }, [])

   return (
      <View style={styles.container}>
         <Header title='Pokemons' />
         <PokemonList pokemons={pokemons} />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#292929',
      height: '100%'
   }
});
