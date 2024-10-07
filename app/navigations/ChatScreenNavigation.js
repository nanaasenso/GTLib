import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import UserAccountScreen from '../screens/UserAccountScreen';

import { auth, db } from '../../config/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Colors from '../utils/Colors';

const Stack = createStackNavigator();

function ChatScreenNavigation() {
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
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerStyle: {
            height: 85,
            backgroundColor: Colors.PRIMARY,
          },
          headerTintColor: Colors.WHITE,
          headerTitleStyle: {
            fontFamily: 'Roboto-Bold',
            fontSize: 20,
            color: Colors.WHITE,
          },
          headerTitle: 'Discussion Forum',
          headerTitleAlign: 'left',
          headerRight: () => (
            <View style={styles.profile}>
              <Text style={styles.profileInitials}>{initials}</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default ChatScreenNavigation;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: Colors.WHITE,
    width: 40,
    height: 40,
    borderRadius: Platform.OS === 'android' ? 20 : 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
  },

  profileInitials: {
    color: Colors.PRIMARY,
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
});
