import React from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    drawerLabel: 'Go to Home',
    /*
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./home-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
    */
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        <Button title="Open Drawer" onPress={this.props.navigation.openDrawer} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});