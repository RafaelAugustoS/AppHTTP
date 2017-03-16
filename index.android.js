import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListaItens from './src/components/ListaItens'

class app4 extends Component {
  
  render(){
    console.log('Objeto é renderizado');
    return (
      <ListaItens />
    );
  }
}


AppRegistry.registerComponent('app4', () => app4);
