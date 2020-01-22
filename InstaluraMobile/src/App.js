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

	constructor() {
		super();
		this.state = {
			fotos: []
		}
	}

	componentDidMount() {

		fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
			.then(resposta => resposta.json())
			.then(json => this.setState({fotos: json}))
	}

  	render() {

	return (
		<FlatList
		keyExtractor={item => item.id.toString()}
		data={this.state.fotos}
		renderItem={ ({item}) => 
			<Post foto={item}/>
		}
		/>
	);
 }
 }