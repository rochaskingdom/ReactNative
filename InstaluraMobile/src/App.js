/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
} from 'react-native';
import Post from './components/Post';

export default class App extends Component {
  render() {

    const fotos = [
      {id: 1, usuario: 'vinicius'},
      {id: 2, usuario: 'leticia'},
      {id: 3, usuario: 'joao'}
    ];

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={fotos}
      renderItem={ ({item}) => 
        <Post foto={item}/>
      }
    />
  );
 }
 }