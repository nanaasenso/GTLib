import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import WelcomeScreenImage from '../../assets/images/welcome screen image.png';
import Colors from '../utils/Colors';

const { width, height } = Dimensions.get('window');

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.background}>
        <View style={{ marginTop: '15%' }}>
          <Image
            source={WelcomeScreenImage}
            style={{
              borderRadius: 15,
              width: width * 1,
              height: height * 0.5,
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
          <Text style={styles.heading}>Enhance Your Learning Experience</Text>
          <Text style={styles.text}>
            Empowering students with a vast library of course materials
            throughout their journey at GCTU
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.button}>Let’s Get Started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  button: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.PRIMARY,
  },

  buttonContainer: {
    marginBottom: 45,
    backgroundColor: Colors.WHITE,
    width: 220,
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: Platform.OS === 'android' ? 30 : 30,
    overflow: 'hidden',
  },

  heading: {
    color: Colors.WHITE,
    alignSelf: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },

  text: {
    marginTop: 5,
    marginLeft: '5%',
    marginRight: '5%',
    color: Colors.WHITE,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },
});
