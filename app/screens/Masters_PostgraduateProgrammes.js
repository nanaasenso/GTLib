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

import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Colors from '../utils/Colors';

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

function Masters_PostgraduateProgrammes() {
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
            <View style={styles.programmeOverviewContainer}>
              <Text style={styles.programmeOverview}>
                List of Programmes & Courses
              </Text>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>MBA Finance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>MBA Logistics</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>Oil and Gas Management</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MSc. Business Decision Management
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    Engineering Project Management
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    Engineering and Management
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>Supply Chain Management</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MSc. Management Information Systems
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MSc. Information Technology for Management
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>MBA International Trade</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    Msc. Internet of Things and Big data
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>Msc. Computer Science</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    Mphil Internet of Things and Big data
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>Mphil Computer Science</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>PhD Computer Science</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MA E-Business And Marketing Strategy
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>MPhil Digital Marketing</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>MSc. Digital Marketing</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MSc. Procurement and Logistics
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MSc.Procurement and Supply Chain
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.courseRow}>
                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MSc. Human Resource Management with Informatics
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.course} activeOpacity={0.8}>
                  <CapImage />
                  <Text style={styles.courseName}>
                    MSc. Procurement and Logistics Management
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default Masters_PostgraduateProgrammes;

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

  course: {
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

  courseName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: Colors.WHITE,
    textAlign: 'center',
    paddingTop: 10,
  },

  courseRow: {
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },

  programmeOverview: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: Colors.BLACK,
    textAlign: 'center',
    paddingTop: 20,
  },

  programmeOverviewContainer: {
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
