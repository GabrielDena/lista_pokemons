import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// LIBRARIES
import axios from 'axios';

function PokemonList(props) {

   const pokemons = props.pokemons.map((pokemon, index) => {
      axios
         .get('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
         .then(response => {
            const sprite = response.data.sprites.front_default
            pokemon.sprite = sprite
         })
      let name = pokemon.name.replace(/(\b[a-z](?!\s))/g, function (name) { return name.charAt(0).toUpperCase() })
      return <View key={index} style={styles.option}><Text style={styles.name}>{name}</Text><Image style={styles.image} source={{ uri: `${pokemon.sprite}` }} /></View>
   })

   return <View>{pokemons}</View>

}

const styles = StyleSheet.create({
   option: {
      backgroundColor: '#5C5C5C',
      margin: '2%',
      padding: '5%',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   name: {
      fontSize: 25,
      color: '#E3E3E3',
   },
   image: {
      width: 80,
      height: 80
   }
});

export default PokemonList
