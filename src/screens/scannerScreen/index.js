/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useCallback, useState } from 'react';
import api from 'api';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect, useDispatch } from 'react-redux'
import Button from 'components/common/button';
import { redeem } from 'actions/scannerActions';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera as Camera } from "react-native-camera";
import { REDEEMED_QR } from 'constants/screens';
import Loader from 'components/common/loader';

import styles from './styles';

const ScannerScreen = ({ navigation, redeemedSuccess, loading }) => {
  const dispatch = useDispatch();
  const [success, setSuccess] =   useState();
  const [message, setMessage] = useState('hola');
  const redeemRequest = useCallback(e => dispatch(redeem(e.data)), [dispatch]);
  const handleRedeemSuccess = useCallback(() => navigation.navigate(REDEEMED_QR), [navigation]);
  redeemedSuccess && handleRedeemSuccess();

  return (
    <View style={styles.container}>
      { loading ? <Loader /> :
      <View style={styles.scannerContainer}>
        <QRCodeScanner
          onRead={redeemRequest}
          flashMode={Camera.Constants.FlashMode.torch}      
          topContent={
            <Text style={styles.centerText}>
              Enfoca el codigo QR del cliente.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable} onPress={() => {}}>
              <Text style={styles.buttonText}>Necesitas ayuda? Click aquí!</Text>
            </TouchableOpacity>
          }
        />
      </View>
    }
    </View>
  );
};

const mapState = ({ scannerReducer }) => ({
  redeemedSuccess: scannerReducer.redeemedSuccess,
  loading: scannerReducer.loading
});

export default connect(
  mapState,
  null
)(ScannerScreen);
