/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;

const App: () => React$Node = () => {
  return (
    <View>
      <Text>vinicius</Text>
      <Image source={require('./resources/img/alura.jpg')}
          style={{width: width, height: width}}/>
    </View>
  );
};



export default App;
