import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import LoginForm from 'components/forms/loginForm';
import { login } from 'actions/userActions';
import { LOGIN } from 'constants/strings';
import { SIGN_UP_SCREEN } from 'constants/screens';
import useNavigateOnLoginEffect from 'hooks/useNavigateOnLoginEffect';
import Button from '../../components/common/button';
import styles from './styles';

const LoginScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);

  useNavigateOnLoginEffect(navigation);

  return (
    <KeyboardAvoidingView style={styles.container} enabled={false} behavior="height">
      <View style={styles.welcomeMessageContainer}>
        <Text style={styles.welcomeMessage}>{LOGIN.loginTitle}</Text>
      </View>
      <View style={styles.loginContainer}>
        <LoginForm onSubmit={loginRequest} />
      </View>
    </KeyboardAvoidingView>
  );
});

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

LoginScreen.options = {
  topBar: {
    title: {
      text: "Iniciar sesión",
    },
  },
};

export default LoginScreen;