import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Colors from '../utils/Colors';

function DiplomaInDataScienceAndAnalytics() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.background}>
          <View style={styles.rows}>
            <View style={styles.levelContainer}>
              <Text style={styles.level}>Level 100</Text>

              <TouchableOpacity
                style={styles.firstBorderStyle}
                activeOpacity={0.7}
              >
                <Text style={styles.firstSemester}>First Semester</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondBorderStyle}
                activeOpacity={0.7}
              >
                <Text style={styles.secondSemester}>Second Semester</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.levelContainer}>
              <Text style={styles.level}>Level 200</Text>

              <TouchableOpacity
                style={styles.firstBorderStyle}
                activeOpacity={0.7}
              >
                <Text style={styles.firstSemester}>First Semester</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.secondBorderStyle}
                activeOpacity={0.7}
              >
                <Text style={styles.secondSemester}>Second Semester</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default DiplomaInDataScienceAndAnalytics;

const styles = StyleSheet.create({
  background: {
    //marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    marginTop: 15,
    marginBottom: 35,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  firstBorderStyle: {
    borderRadius: Platform.OS === 'android' ? 15 : 15,
    backgroundColor: Colors.POWDER_BLUE,
  },

  firstSemester: {
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
  },

  levelContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 25,
    padding: 8,
    width: '48%',
    height: 200,
    borderColor: '#4E4F50',
  },

  level: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.BLACK,
  },

  rows: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  secondBorderStyle: {
    borderRadius: Platform.OS === 'android' ? 15 : 15,
    backgroundColor: Colors.STEEL_BLUE,
  },

  secondSemester: {
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 10,
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },
});
