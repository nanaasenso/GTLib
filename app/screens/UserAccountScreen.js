import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from '../utils/Colors';

import { auth, db } from '../../config/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

function UserAccountScreen() {
  const navigation = useNavigation();

  // APPLICATION LOGOUT FUNCTION
  const handleLogout = async () => {
    await signOut(auth);

    navigation.navigate('Login'); // Redirect to login screen
  };

  // Retrieving the user data from Firestore Database

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);

      // Set up Firestore listener
      const unsubscribe = onSnapshot(userDocRef, doc => {
        if (doc.exists()) {
          const userData = doc.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
        } else {
          console.log('User document does not exist');
        }
        setLoading(false);
      });

      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    } else {
      console.log('No user is signed in');
      setLoading(false);
    }
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

      <SafeAreaView style={styles.background}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Text style={styles.profileInitials}>{initials}</Text>
          </View>

          <View style={styles.rowStyle}>
            <View>
              <Text style={styles.nameText}>
                {firstName} {lastName}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.editProfile}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Edit Profile')}
            >
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ position: 'absolute', top: '20%', width: '100%' }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Change Password')}
          >
            <View style={styles.wrap}>
              <FontAwesome name="lock" size={24} color={Colors.PRIMARY} />
              <Text style={styles.textStyle}>Change Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.wrap}>
              <FontAwesome6
                name="graduation-cap"
                size={20}
                color={Colors.PRIMARY}
              />
              <Text style={styles.textStyle}>Programmes</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.wrap}>
              <AntDesign name="infocirlce" size={24} color={Colors.PRIMARY} />
              <Text style={styles.textStyle}>Information</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.wrap}>
              <AntDesign
                name="questioncircle"
                size={24}
                color={Colors.PRIMARY}
              />
              <Text style={styles.textStyle}>FAQs</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity
            style={styles.logoutContainer}
            activeOpacity={0.7}
            onPress={handleLogout}
          >
            <Entypo name="log-out" size={24} color={Colors.WHITE} />
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    //marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    //marginBottom: 35,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  editProfile: {
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: Platform.OS === 'android' ? 10 : 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    paddingBottom: 3,
  },

  editProfileText: {
    color: Colors.WHITE,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
  },

  line: {
    marginTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: Colors.PRIMARY,
  },

  logout: {
    color: Colors.WHITE,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    paddingLeft: 10,
  },

  logoutContainer: {
    backgroundColor: 'red',
    width: 140,
    height: 50,
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.OS === 'android' ? 10 : 10,
    overflow: 'hidden',
  },

  nameText: {
    color: Colors.WHITE,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },

  profile: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.OS === 'android' ? 35 : 35,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
  },

  profileInitials: {
    color: Colors.PRIMARY,
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
  },

  profileContainer: {
    position: 'absolute',
    paddingTop: '4%',
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    height: '20%',
    paddingLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  rowStyle: {
    paddingLeft: 15,
  },

  textStyle: {
    color: Colors.PRIMARY,
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    paddingLeft: 10,
  },

  wrap: {
    marginTop: 25,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserAccountScreen;
