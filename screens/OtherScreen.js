import React from 'react';
import {
  StyleSheet,
  AsyncStorage,
  StatusBar,
  View,
  Button
} from 'react-native';

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Screen',
    drawerLabel: 'Go to Other',
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
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

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