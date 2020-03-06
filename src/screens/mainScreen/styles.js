import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  imageContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  commerceText: {
    fontStyle: 'italic',
    fontSize: 30,
    alignSelf: 'center',
    marginLeft: 7
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  loginContainer: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
  },
  btnContainer: {
    alignSelf: 'center'
  },
  btnBack: {
    width: 20
  },
  welcomeMessageContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  welcomeMessage: {
    fontSize: 22,
    marginBottom: 20
  }
});

export default styles;