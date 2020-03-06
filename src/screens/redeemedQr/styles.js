import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  infoContainer: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    height: '80%'
  },
  image: {
    alignSelf: 'center',
    marginVertical: 30,
    width: 100,
    height: 100,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2 
  },
  successRedeemText: {
    fontWeight: 'bold',
    fontSize: 26,
    alignSelf: 'center'
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  boldText: {
    fontWeight: 'bold'
  }
});

export default styles;