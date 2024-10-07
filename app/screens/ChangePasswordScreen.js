import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../utils/Colors';

import { Feather } from '@expo/vector-icons';

import { auth } from '../../config/firebase';
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from 'firebase/auth';

function ChangePasswordScreen() {
  const navigation = useNavigation();

  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword) {
      Alert.alert('Change Password', 'Please fill in both fields.', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return;
    }

    try {
      const user = auth.currentUser;

      // Re-authenticate the user
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);

      // Update the password
      await updatePassword(user, newPassword);

      Alert.alert('Change Password', 'Password Successfully Changed!!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('User Account Screen'),
        },
      ]);
    } catch (error) {
      console.log('Error changing password:', error);
      Alert.alert('Change Password', 'An error occurred. Please try again.', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  // Svg components for the security image
  const SecurityImageComponent = () => {
    return (
      <Svg width="80" height="160" viewBox="0 0 1686 2266" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M843 0C1151.92 0 1404.6 252.681 1404.6 561.601V1413.03H1166.11V561.601C1166.11 384.375 1020.23 238.497 843.004 238.497C665.783 238.497 520.029 384.379 520.029 561.601V1413.03H281.408V561.601C281.399 252.681 534.08 0 843 0Z"
          fill={Colors.PRIMARY}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M843 0C1151.92 0 1404.6 252.681 1404.6 561.601V1413.03H1282.58V561.601C1282.58 273.319 1062.4 34.052 781.995 3.35474C802.11 1.15955 822.363 0 843 0ZM781.991 244.427C633.528 273.319 520.024 405.269 520.024 561.601V1413.03H398.005V561.601C398.005 384.375 543.76 238.497 720.981 238.497C741.462 238.492 761.894 240.479 781.991 244.427Z"
          fill={Colors.LIGHT_PRIMARY}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M148.546 877.093H1537.45C1618.84 877.093 1685.39 943.647 1685.39 1025.04V2118.05C1685.39 2199.44 1618.84 2266 1537.45 2266H148.546C67.1561 2266 0.601196 2199.44 0.601196 2118.05V1025.04C0.601196 943.652 67.1561 877.093 148.546 877.093Z"
          fill={Colors.PRIMARY}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M843 1249.22C948.382 1249.22 1033.9 1334.6 1033.9 1440.11C1033.9 1524.73 978.823 1596.44 902.46 1621.46V1834.42C902.46 1867.18 875.76 1894.01 843 1894.01C810.236 1894.01 783.54 1867.18 783.54 1834.42V1621.46C707.31 1596.44 652.103 1524.73 652.103 1440.11C652.103 1334.6 737.618 1249.22 843 1249.22Z"
          fill="white"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1525.07 1025.04V2118.06C1525.07 2199.45 1458.39 2266 1377.13 2266H1537.45C1618.84 2266 1685.4 2199.45 1685.4 2118.06V1025.04C1685.4 943.652 1618.84 877.097 1537.45 877.097H1377.13C1386.41 877.097 1395.7 878 1404.6 879.677C1472.96 892.702 1525.07 953.065 1525.07 1025.04Z"
          fill={Colors.LIGHT_PRIMARY}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M816.171 1251.15C899.88 1271.27 962.182 1346.73 962.182 1436.63C962.182 1521.38 907.108 1593.09 830.878 1618.11V1831.07C830.878 1851.32 820.557 1869.37 804.952 1880.08C815.273 1888.72 828.554 1894.01 843 1894.01C875.764 1894.01 902.46 1867.18 902.46 1834.42V1621.47C978.818 1596.45 1033.9 1524.73 1033.9 1440.12C1033.9 1334.61 948.382 1249.22 843 1249.22C834.022 1249.2 825.055 1249.85 816.171 1251.15Z"
          fill="white"
        />
      </Svg>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        behavior="padding"
        style={{ backgroundColor: Colors.WHITE, flex: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView style={styles.background}>
            <View style={styles.container}>
              <SecurityImageComponent />

              <View style={styles.passwordRow}>
                <TextInput
                  placeholderTextColor={Colors.LIGHT_PRIMARY}
                  placeholder="Enter old password"
                  padding={10}
                  secureTextEntry={!oldPasswordVisible}
                  style={styles.oldPassword}
                  value={oldPassword}
                  onChangeText={setOldPassword}
                />

                <TouchableOpacity
                  onPress={toggleOldPasswordVisibility}
                  activeOpacity={0.7}
                >
                  <Feather
                    name={!oldPasswordVisible ? 'eye-off' : 'eye'}
                    size={20}
                    color={Colors.PRIMARY}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.passwordRow}>
                <TextInput
                  placeholderTextColor={Colors.LIGHT_PRIMARY}
                  placeholder="Enter new password"
                  padding={10}
                  secureTextEntry={!newPasswordVisible}
                  style={styles.newPassword}
                  value={newPassword}
                  onChangeText={setNewPassword}
                />

                <TouchableOpacity
                  onPress={toggleNewPasswordVisibility}
                  activeOpacity={0.7}
                >
                  <Feather
                    name={!newPasswordVisible ? 'eye-off' : 'eye'}
                    size={20}
                    color={Colors.PRIMARY}
                  />
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  marginTop: 5,
                  fontFamily: 'Roboto-Light',
                  fontSize: 15,
                  color: Colors.PRIMARY,
                  alignSelf: 'flex-start',
                  marginLeft: '8%',
                }}
              >
                * Password should be at least 6 characters
              </Text>

              <TouchableOpacity
                style={styles.submitButtonContainer}
                activeOpacity={0.8}
                onPress={handleChangePassword}
              >
                <Text style={styles.submitButton}>Submit</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  background: {
    //marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    marginTop: 15,
    marginBottom: 35,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  container: {
    alignItems: 'center',
  },

  newPassword: {
    width: '90%',
    height: 40,
    color: Colors.PRIMARY,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  oldPassword: {
    width: '90%',
    height: 40,
    color: Colors.PRIMARY,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  passwordRow: {
    width: '85%',
    height: 45,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.PRIMARY,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },

  submitButton: {
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 1,
    fontFamily: 'Roboto-Bold',
    color: Colors.WHITE,
  },

  submitButtonContainer: {
    marginTop: 50,
    backgroundColor: Colors.PRIMARY,
    width: '50%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: Platform.OS === 'android' ? 30 : 30,
    overflow: 'hidden',
  },
});
