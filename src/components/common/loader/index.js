import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = () =>
  <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color="'#B7071F'" />
  </View>

export default Loader;
