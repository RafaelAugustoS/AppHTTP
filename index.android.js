import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListaItens from './src/components/ListaItens'

class app4 extends Component {
  constructor(props){
    super(props);
    console.log('Construindo aplicação');
  }

  componentWillMount(){
    console.log('Fazer alguma coisa antes de renderizar');
  }

  componentDidMount(){
    console.log('Fazer alguma coisa depois de renderizar');
  }

  render(){
    console.log('Objeto é renderizado');
    return (
      <ListaItens />
    );
  }
}


AppRegistry.registerComponent('app4', () => app4);
