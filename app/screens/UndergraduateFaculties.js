import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

// Svg component for the cap image
const CapImage = () => {
  return (
    <Svg
      width="40"
      height="45"
      fill="white"
      stroke="white"
      strokeWidth="0.1"
      viewBox="0 0 16 16"
    >
      <Path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
      <Path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
    </Svg>
  );
};

function UndergraduateFaculties() {
  const navigation = useNavigation();

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
          <View style={styles.background}>
            <View style={styles.FacultiesOverviewContainer}>
              <Text style={styles.FacultiesOverview}>List of Faculties</Text>

              <View style={styles.facultyRow}>
                <TouchableOpacity
                  style={styles.faculty}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('FoCIS')}
                >
                  <CapImage />
                  <Text style={styles.facultyName}>
                    Faculty of Computing & Information Systems (FoCIS)
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.faculty}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('FoE')}
                >
                  <CapImage />
                  <Text style={styles.facultyName}>
                    Faculty of Engineering (FoE)
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.facultyRow}>
                <TouchableOpacity
                  style={styles.faculty}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('GCTU Business School')}
                >
                  <CapImage />
                  <Text style={styles.facultyName}>GCTU Business School</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default UndergraduateFaculties;

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    marginBottom: 35,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  capImage: {
    width: 40,
    height: 45,
  },

  faculty: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 160,
    padding: 10,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    shadowColor: 'grey',

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  facultyName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: 'center',
    paddingTop: 10,
  },

  facultyRow: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },

  FacultiesOverview: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    paddingTop: 20,
  },

  FacultiesOverviewContainer: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 25,
    borderColor: 'black',
    paddingBottom: 25,
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },
});
