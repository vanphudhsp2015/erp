import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../navigation';

const App = () => {
  const onLogin = () => {
    NavigationService.navigate('LOGINPATH');
  };

  return (
    <LinearGradient
      colors={['#A9E6DD', '#A9E6DD', '#FFFFFF']}
      style={styles.fullView}>
      <ScrollView style={styles.fullView} scrollEnabled={true}>
        <View style={styles.logoView}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/logo_login.png')}
              style={styles.logoImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.textStyle}>Username</Text>
          <TextInput
            style={styles.textInputStyle}
            returnKeyType={'next'}
            clearButtonMode={'while-editing'}
            autoCapitalize="none"
          />
          <View style={styles.lineView} />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.textStyle}>Password</Text>
          <TextInput
            style={styles.textInputStyle}
            returnKeyType={'next'}
            clearButtonMode={'while-editing'}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <View style={styles.lineView} />
        </View>
        <View style={[styles.buttonView]}>
          <TouchableOpacity style={styles.buttonStyle} onPress={onLogin}>
            <Text style={styles.titleButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullView: {
    width: '100%',
    height: '100%',
  },
  logoView: {
    marginTop: 30,
    alignItems: 'center',
    height: 100,
  },
  logoImg: {
    width: 240,
    height: 97,
    resizeMode: 'contain',
  },
  inputView: {
    marginTop: 40,
    marginLeft: 60,
    marginRight: 60,
    height: 60,
  },
  textInputStyle: {
    height: '100%',
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
    color: '#2C2C2C',
    borderColor: 'red',
  },
  lineView: {
    backgroundColor: '#000000',
    width: '100%',
    height: 1,
  },
  buttonView: {
    marginTop: 80,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 60,
    height: 60,
  },
  buttonStyle: {
    width: '100%',
    height: 44,
    backgroundColor: '#3366ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  titleButton: {
    fontSize: 16,
    color: 'white',
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '600',
    height: 15,
    color: '#727688',
  },
});

export default App;
