import 'react-native-gesture-handler';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreenImage from '../../assets/images/home screen image.png';
import Colors from '../utils/Colors';
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';

function HomeScreen() {
  const navigation = useNavigation();

  const screens = [
    { name: 'Principles of Programming', route: 'Principles of Programming' },
    { name: 'Discrete Structures', route: 'Discrete Structures' },
    { name: 'Computational Mathematics', route: 'Computational Mathematics' },
    {
      name: 'Micro-Computer Systems and Applications',
      route: 'Micro-Computer Systems and Applications',
    },
    { name: 'Moral and Ethics', route: 'Moral and Ethics' },
    { name: 'Functional French I', route: 'Functional French I' },
    { name: 'Sociology of Technology', route: 'Sociology of Technology' },
    { name: 'Functional French II', route: 'Functional French II' },
    {
      name: 'High Level Language Programming',
      route: 'High Level Language Programming',
    },
    {
      name: 'Introduction to Information Systems',
      route: 'Introduction to Information Systems',
    },
    {
      name: 'Introduction to Information Technology Law',
      route: 'Introduction to Information Technology Law',
    },
    { name: 'Probability and Statistics', route: 'Probability and Statistics' },
    { name: 'Study Skills', route: 'Study Skills' },

    { name: 'African Studies', route: 'African Studies' },
    { name: 'Computer Architecture', route: 'Computer Architecture' },
    {
      name: 'Data Communications and Networks I',
      route: 'Data Communications and Networks I',
    },
    { name: 'Foundations of Multimedia', route: 'Foundations of Multimedia' },
    { name: 'Operational French', route: 'Operational French' },
    {
      name: 'Systems Analysis and Design',
      route: 'Systems Analysis and Design',
    },
    {
      name: 'Technical Communication Skills',
      route: 'Technical Communication Skills',
    },

    {
      name: 'Algorithms and Data Structures',
      route: 'Algorithms and Data Structures',
    },
    { name: 'Basic Economics', route: 'Basic Economics' },
    {
      name: 'Data Communications and Networks II',
      route: 'Data Communications and Networks II',
    },
    {
      name: 'Database Design and Management I',
      route: 'Database Design and Management I',
    },
    { name: 'Digital Computer Design', route: 'Digital Computer Design' },
    { name: 'Java Programming', route: 'Java Programming' },
    {
      name: 'Principles of Entrepreneurship',
      route: 'Principles of Entrepreneurship',
    },

    {
      name: 'Database Design and Management II',
      route: 'Database Design and Management II',
    },
    {
      name: 'Internet Technology and Web Design',
      route: 'Internet Technology and Web Design',
    },
    {
      name: 'Introduction to Operating Systems',
      route: 'Introduction to Operating Systems',
    },
    {
      name: 'Principles of Accounting and Management',
      route: 'Principles of Accounting and Management',
    },
    { name: 'Research Methods', route: 'Research Methods' },
    { name: 'Software Engineering', route: 'Software Engineering' },
    { name: 'Visual Basic Programming', route: 'Visual Basic Programming' },

    { name: 'Advanced Java Technologies', route: 'Advanced Java Technologies' },
    {
      name: 'Advanced Visual Basic .Net Programming',
      route: 'Advanced Visual Basic .Net Programming',
    },
    { name: 'Human Computer Interaction', route: 'Human Computer Interaction' },
    {
      name: 'Open Source Operating Systems',
      route: 'Open Source Operating Systems',
    },
    {
      name: 'Software Reliability and Quality Assurance',
      route: 'Software Reliability and Quality Assurance',
    },

    { name: 'Artificial Intelligence', route: 'Artificial Intelligence' },
    { name: 'Compilers and Translators', route: 'Compilers and Translators' },
    { name: 'Human Resource Development', route: 'Human Resource Development' },
    {
      name: 'Information Technology Project Management',
      route: 'Information Technology Project Management',
    },
    {
      name: 'Legal and Ethical Use of Information Technology',
      route: 'Legal and Ethical Use of Information Technology',
    },

    { name: 'Computer Security', route: 'Computer Security' },
    { name: 'Electronic Commerce', route: 'Electronic Commerce' },
    {
      name: 'Management Information Systems',
      route: 'Management Information Systems',
    },
    { name: 'Systems Administration', route: 'Systems Administration' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredScreens, setFilteredScreens] = useState([]);

  useEffect(() => {
    const filtered = screens.filter(screen =>
      screen.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredScreens(filtered);
  }, [searchQuery]);

  const handleScreenSelect = screen => {
    setSearchQuery('');
    navigation.navigate(screen.route);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.searchResultItem}
      onPress={() => handleScreenSelect(item)}
    >
      <AntDesign name="arrowright" size={20} color={'grey'} />
      <Text style={styles.searchResultText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.background}>
          <View>
            <Text style={styles.firstHeading}>
              Find a course you want to learn
            </Text>
          </View>

          <View style={styles.searchRow}>
            <TextInput
              style={styles.search}
              placeholder="Search Course"
              placeholderTextColor={'grey'}
              color={Colors.BLACK}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                if (filteredScreens.length > 0) {
                  handleScreenSelect(filteredScreens[0]);
                }
              }}
            >
              <AntDesign name="search1" size={24} color={Colors.BLACK} />
            </TouchableOpacity>
          </View>

          {searchQuery.length > 0 && (
            <FlatList
              data={filteredScreens}
              renderItem={renderItem}
              keyExtractor={item => item.name}
              style={styles.searchResults}
              scrollEnabled={false}
            />
          )}

          <Image
            source={HomeScreenImage}
            style={{
              borderRadius: 15,
              width: '100%',
              height: 300,
              alignSelf: 'center',
            }}
          />

          <View>
            <Text style={styles.secondHeading}>GCTU PROGRAMMES</Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.programmesContainer}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Undergraduate Faculties')}
            >
              <Text style={styles.undergraduate}>Undergraduate Programmes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.programmesContainer}
              activeOpacity={0.85}
              onPress={() =>
                navigation.navigate('Masters Postgraduate & Programmes')
              }
            >
              <Text style={styles.masters}>
                Masters & Postgraduate Programmes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.programmesContainer}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Professional Programmes')}
            >
              <Text style={styles.professional}>
                Professional Programmes (CSBPD)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.programmesContainer}
              activeOpacity={0.85}
              onPress={() =>
                navigation.navigate('Accelerated Certificate Programmes')
              }
            >
              <Text style={styles.accelerated}>
                Accelerated Certificate Programmes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.programmesContainer}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Access Programmes & Courses')}
            >
              <Text style={styles.access}>Access Programmes & Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.programmesContainer}
              activeOpacity={0.85}
            >
              <Text style={styles.phd}>PhD Programmes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  // STYLING FOR THE HOME SCREEN ONLY

  accelerated: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: Colors.WHITE,
  },

  access: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: Colors.WHITE,
  },

  background: {
    //marginTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    //marginTop: 15,
    marginBottom: 35,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  firstHeading: {
    paddingTop: 30,
    fontSize: 18,
    color: Colors.BLACK,
    fontFamily: 'Roboto-Medium',
  },

  masters: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: Colors.WHITE,
  },

  phd: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: Colors.WHITE,
  },

  professional: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: Colors.WHITE,
  },

  programmesContainer: {
    marginBottom: 10,
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    borderRadius: Platform.OS === 'android' ? 15 : 15,
    overflow: 'hidden',
  },

  search: {
    width: '100%',
    height: 45,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },

  searchRow: {
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.BLACK,
    paddingLeft: 15,
    paddingRight: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  secondHeading: {
    textAlign: 'center',
    margin: 20,
    fontSize: 20,
    color: Colors.BLACK,
    fontFamily: 'Roboto-Bold',
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },

  undergraduate: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: Colors.WHITE,
    textAlign: 'center',
  },

  searchResults: {
    marginTop: 5,
    marginBottom: 20,
  },

  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.TRANSPARENT_BLACK,
  },

  searchResultText: {
    marginLeft: 15,
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: Colors.BLACK,
  },

  programmeText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: Colors.WHITE,
  },
});
