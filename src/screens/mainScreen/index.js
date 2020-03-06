/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect, useCallback } from 'react';
import api from 'api';
import {
  View,
  Text,
  Image
} from 'react-native';
import { getDataActions } from 'actions/getDataActions';
import LoginForm from 'components/forms/loginForm';
import Button from 'components/common/button';
import { SCANNER_SCREEN } from 'constants/screens';

import styles from './styles'

const MainScreen = ({ navigation }) => {

  const handlePressScanner = useCallback(() => navigation.navigate(SCANNER_SCREEN), [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.commerceText}>Comercio</Text>
      </View>
      <Button onPress={handlePressScanner} text="Escanear" />
      <Button onPress={() => {}} text="Soporte" secondary />
    </View>
  );
};

export default MainScreen;
