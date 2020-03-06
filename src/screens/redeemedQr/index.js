/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useCallback } from 'react';
import api from 'api';
import {
  View,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux'
import Button from 'components/common/button';
import { MAIN_SCREEN } from 'constants/screens';

import styles from './styles'

const RedeemedQr = ({ navigation, userInfo }) => {

  const handlePressGoToMain = useCallback(() => navigation.navigate(MAIN_SCREEN), [navigation]);
  const { photo, name, lastName, email, phone } = userInfo;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.successRedeemText}>Canje exitoso!</Text>
        <Image 
          style={styles.image}
          source={photo ? { uri: `data:image/gif;base64,${photo}`} : require('../../assets/images/avatar.png')} 
        />
        <Text style={styles.text}>
          <Text style={styles.boldText}>Nombre:</Text>
          {` ${name} ${lastName}`}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Email: </Text>
          {email}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Telefono: </Text>
          {phone}
        </Text>
      </View>
      <Button onPress={handlePressGoToMain} text="Volver al inicio" />
    </View>
  );
};

const mapState = ({ scannerReducer }) => ({
  userInfo: scannerReducer.userInfo,
});

export default connect(
  mapState,
  null
)(RedeemedQr);
