import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../utils/Colors';

import { auth, db } from '../../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

function EditProfileScreen2() {
  const navigation = useNavigation();

  // Retrieving the user data from Firestore Database

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [studentYear, setStudentYear] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setEmail(userData.email);
            setContact(userData.contact);
            setStudentYear(userData.studentYear);
          } else {
            console.log('User document does not exist');
            // Handle case where user document does not exist, set default values or handle error
          }
        } else {
          console.log('No user is signed in');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors.PRIMARY}
        style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
      />
    );
  }

  // Updating the profile data of users in Firestore

  const handleSaveProfile = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          firstName,
          lastName,
          email,
          contact,
          studentYear,
        });
        console.log('Profile updated successfully!');
        Alert.alert(
          'Profile Updated',
          'Your profile has been updated successfully.',
          [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
        );
      } else {
        console.log('No user is signed in');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Utility function to get initials
  const getInitials = fullName => {
    const names = fullName.split(' ');
    const initials = names.reduce((result, name) => {
      if (name) {
        result += name[0].toUpperCase();
      }
      return result;
    }, '');

    return initials;
  };

  // Example usage of getInitials function
  const fullName = firstName + ' ' + lastName;
  const initials = getInitials(fullName);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        behavior="padding"
        style={{ backgroundColor: 'white', flex: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView style={styles.background}>
            <View style={styles.profile}>
              <Text style={styles.profileInitials}>{initials}</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>First Name</Text>
              <TextInput
                placeholder={firstName}
                placeholderTextColor={Colors.PRIMARY}
                onChangeText={setFirstName}
                value={firstName}
                style={styles.inputText}
                maxLength={15}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Last Name</Text>
              <TextInput
                placeholder={lastName}
                placeholderTextColor={Colors.PRIMARY}
                onChangeText={setLastName}
                value={lastName}
                style={styles.inputText}
                maxLength={15}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                placeholder={email}
                placeholderTextColor={Colors.PRIMARY}
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                style={styles.inputText}
                maxLength={27}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Contact</Text>
              <TextInput
                placeholder={contact}
                placeholderTextColor={Colors.PRIMARY}
                onChangeText={setContact}
                value={contact}
                style={styles.inputText}
                maxLength={10}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Student Year</Text>
              <TextInput
                placeholder={studentYear}
                placeholderTextColor={Colors.PRIMARY}
                onChangeText={setStudentYear}
                value={studentYear}
                style={styles.inputText}
                maxLength={15}
              />
            </View>

            <View>
              <TouchableOpacity
                style={styles.saveProfileButtonContainer}
                activeOpacity={0.7}
                onPress={handleSaveProfile}
              >
                <Text style={styles.saveProfileButton}>Save Profile</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default EditProfileScreen2;

const styles = StyleSheet.create({
  backArrow: {
    width: 45,
    height: 45,
  },

  background: {
    //marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    marginTop: 15,
    marginBottom: 35,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  inputContainer: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.PRIMARY,
  },

  inputLabel: {
    color: Colors.LIGHT_PRIMARY,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  inputText: {
    width: '100%',
    height: 45,
    color: Colors.PRIMARY,
    borderRadius: 17,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  profile: {
    backgroundColor: Colors.PRIMARY,
    width: 110,
    height: 110,
    borderRadius: Platform.OS === 'android' ? 55 : 55,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  profileInitials: {
    color: Colors.WHITE,
    fontFamily: 'Roboto-Medium',
    fontSize: 35,
  },

  saveProfileButton: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.WHITE,
  },

  saveProfileButtonContainer: {
    marginTop: 60,
    backgroundColor: Colors.PRIMARY,
    width: '50%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: Platform.OS === 'android' ? 30 : 30,
    overflow: 'hidden',
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },
});
