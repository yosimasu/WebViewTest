/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  WebView,
  View
} from 'react-native';

export default class WebViewTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          scalesPageToFit={true}
          source={require('WebViewTest/index.html')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('WebViewTest', () => WebViewTest);
