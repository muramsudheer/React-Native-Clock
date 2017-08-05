/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from "./app/App";

class ClockProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('ClockProject', () => ClockProject);
