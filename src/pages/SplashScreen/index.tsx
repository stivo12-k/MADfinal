import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../../assets/LogoUK.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LandingPage');
    }, 3000); // Navigate to SignIn after 3 seconds
  }, []);
  return (
    <View style={styles.container}>
      <Logo />

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02CF8E',
    justifyContent: 'center',
    alignItems: 'center',
  },

});