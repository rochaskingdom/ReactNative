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
  FlatList,
  StyleSheet,
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
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={fotos}
      renderItem={ ({item}) => 
        <View>			
			<View style={styles.cabecalho}>
				<Image source={require('./resources/img/catalina.jpg')} 
					style={styles.fotoDePerfil}/>
            <Text>{item.usuario}</Text>
			</View>

            <Image source={require('./resources/img/catalina.jpg')} 
            	style={styles.foto}/>
        </View>
      }
    />
  );
 }
 }

 const styles = StyleSheet.create({

	 cabecalho: {
		 margin: 10, 
		 flexDirection: 'row', 
		 alignItems: 'center'
	},

	fotoDePerfil: {
		marginRight: 10, 
		borderRadius: 20, 
		width: 40, 
		height: 40
	},

	foto: {
		width:width, 
		height:width
	}
 });