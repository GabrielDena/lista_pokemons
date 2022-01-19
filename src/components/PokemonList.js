import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// COMPONENTS
import PokemonListItem from './PokemonListItem'

function PokemonList(props) {
   const { pokemons } = props

   const items = pokemons.map((pokemon, index) => {
      return <PokemonListItem key={index} pokemon={pokemon} />
   })

   return <View>{items}</View>

}

export default PokemonList
