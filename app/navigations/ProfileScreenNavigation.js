import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import UserAccountScreen from '../screens/UserAccountScreen';
import HomeScreen from '../screens/HomeScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';

const Stack = createStackNavigator();

function ProfileScreenNavigation() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User Account Screen"
        component={UserAccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePasswordScreen}
        options={{
          headerStyle: {
            height: 95,
            backgroundColor: Colors.WHITE,
          },
          headerTitle: () => (
            <Text style={styles.changePassword}>Change Password</Text>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={styles.backArrow}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('User Account Screen')}
              >
                <Ionicons
                  name="chevron-back"
                  size={33}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 5,
          },
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{
          headerStyle: {
            height: 90,
            backgroundColor: Colors.WHITE,
            borderBottomColor: 'rgba(0, 0, 0, 0.2)',
            borderBottomWidth: 0.5,
          },
          headerTitle: () => (
            <Text style={styles.editProfileText}>Edit Profile</Text>
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={styles.backArrow}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('User Account Screen')}
              >
                <Ionicons
                  name="chevron-back"
                  size={33}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
            </View>
          ),
          headerLeftContainerStyle: {
            paddingLeft: 5,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default ProfileScreenNavigation;

const styles = StyleSheet.create({
  backArrow: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  changePassword: {
    marginTop: 15,
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: Colors.PRIMARY,
  },

  editProfileText: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: Colors.PRIMARY,
    marginTop: 15,
  },
});
