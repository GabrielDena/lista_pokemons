import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// LIBRARIES
import axios from 'axios';
import { capitalizeFirstLetter } from '../functions'

function PokemonListItem(props) {
   const pokemon = props.pokemon

   useEffect(async () => {
      axios
         .get('https://pokeapi.co/api/v2/pokemon/' + pokemon.name)
         .then(response => {
            const sprite = response.data.sprites.front_default
            const id = response.data.id
            pokemon.sprite = sprite
            pokemon.id = id
         })
   }, [])

   let name = capitalizeFirstLetter(pokemon.name)

   return (
      <View style={styles.option}>
         <Image style={styles.image} source={{ uri: `${pokemon.sprite}` }} />
         <Text style={styles.name}>#{pokemon.id} </Text>
         <Text style={styles.name}> {name}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   option: {
      backgroundColor: '#5C5C5C',
      margin: '2%',
      padding: '2%',
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center'
   },
   name: {
      fontSize: 25,
      color: '#E3E3E3',
      fontFamily: 'sans-serif-thin',
   },
   image: {
      width: 80,
      height: 80,
      marginRight: 20
   }
});

export default PokemonListItem
