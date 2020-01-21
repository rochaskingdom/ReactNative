/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class App extends Component {
  
  render() {
  const fotos = [
    {id: 1, usuario: 'vinicius'},
    {id: 2, usuario: 'leticia'},
    {id: 3, usuario: 'joao'}
  ];

  return (

    <View>
      {fotos.map(foto => 
      <View key={foto.id}>
        <Text>{foto.usuario}</Text>
        <Image source={require('./resources/img/catalina.jpg')}
            style={{width: width, height: width}}/>
      </View>   
        )}
      </View>
    );
  }
}

