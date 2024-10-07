import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Linking,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Colors from '../utils/Colors';
import PdfIcon from '../../assets/images/Pdf icon.png';
import TutorialIcon from '../../assets/images/Tutorial icon.png';
import QuizIcon from '../../assets/images/Quiz icon.png';

import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

function FoundationsOfMultimedia() {
  const [expanded, setExpanded] = useState(false);
  const [courseDescription, setCourseDescription] = useState('');
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const openPdf = url => {
    navigation.navigate('Document Reader', { pdfUrl: url });
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  };

  // Function to fetch course data from Firestore
  const fetchCourseData = async () => {
    try {
      const courseDocRef = doc(db, 'bitCourses', 'IT 245');
      const courseDoc = await getDoc(courseDocRef);

      if (courseDoc.exists()) {
        const courseData = courseDoc.data();
        setCourseDescription(courseData.courseDescription || '');
        setMaterials(courseData.materials || []);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching course data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  const openMaterial = material => {
    if (material.type === 'Pdf') {
      openPdf(material.url);
    } else if (material.type === 'Video') {
      Alert.alert(
        'Confirm',
        'You are about to leave the app to view this video. Do you want to continue?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('User canceled the action'),
            style: 'cancel',
          },
          {
            text: 'Continue',
            onPress: () => {
              Linking.openURL(material.url).catch(err =>
                console.error('Failed to open URL: ', err)
              );
            },
          },
        ]
      );
    } else if (material.type === 'Quiz') {
      Alert.alert(
        'Confirm',
        'You are about to leave the app to take this quiz. Do you want to continue?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('User canceled the action'),
            style: 'cancel',
          },
          {
            text: 'Continue',
            onPress: () => {
              Linking.openURL(material.url).catch(err =>
                console.error('Failed to open URL: ', err)
              );
            },
          },
        ]
      );
    } else {
      Linking.openURL(material.url).catch(err =>
        console.error('Failed to open URL: ', err)
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.background}>
          <Text style={styles.courseDescriptionHeading}>
            Course Description
          </Text>

          <View style={styles.descriptionBorder}>
            <Text style={styles.courseDescription}>
              {expanded
                ? courseDescription
                : truncateText(courseDescription, 150)}
            </Text>
            <TouchableOpacity onPress={toggleExpand} activeOpacity={0.6}>
              <Text style={styles.readMore}>
                {expanded ? 'Read less' : 'Read more'}
              </Text>
            </TouchableOpacity>
          </View>

          {materials[0] && (
            <>
              <Text style={styles.chapterHeading}>Lecture One</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[0])}
              >
                <View style={styles.chapterContent}>
                  <Image source={PdfIcon} style={styles.icon} />

                  <Text style={styles.learningMaterial}>
                    {materials[0].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[1] && (
            <>
              <Text style={styles.chapterHeading}>Lecture Two</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[1])}
              >
                <View style={styles.chapterContent}>
                  <Image source={PdfIcon} style={styles.icon} />
                  <Text style={styles.learningMaterial}>
                    {materials[1].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[2] && (
            <>
              <Text style={styles.chapterHeading}>Lecture Three</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[2])}
              >
                <View style={styles.chapterContent}>
                  <Image source={PdfIcon} style={styles.icon} />
                  <Text style={styles.learningMaterial}>
                    {materials[2].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[3] && (
            <>
              <Text style={styles.chapterHeading}>Lecture Four</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[3])}
              >
                <View style={styles.chapterContent}>
                  <Image source={PdfIcon} style={styles.icon} />

                  <Text style={styles.learningMaterial}>
                    {materials[3].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[4] && (
            <>
              <Text style={styles.chapterHeading}>Lecture Five</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[4])}
              >
                <View style={styles.chapterContent}>
                  <Image source={PdfIcon} style={styles.icon} />

                  <Text style={styles.learningMaterial}>
                    {materials[4].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[5] && (
            <>
              <Text style={styles.chapterHeading}>Tutorial</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[5])}
              >
                <View style={styles.chapterContent}>
                  <Image source={TutorialIcon} style={styles.icon} />
                  <Text style={styles.learningMaterial}>
                    {materials[5].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[6] && (
            <>
              <Text style={styles.chapterHeading}>Tutorial</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[6])}
              >
                <View style={styles.chapterContent}>
                  <Image source={TutorialIcon} style={styles.icon} />
                  <Text style={styles.learningMaterial}>
                    {materials[6].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[7] && (
            <>
              <Text style={styles.chapterHeading}>First Quiz</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[7])}
              >
                <View style={styles.chapterContent}>
                  <Image source={QuizIcon} style={styles.icon} />
                  <Text style={styles.learningMaterial}>
                    {materials[7].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}

          {materials[8] && (
            <>
              <Text style={styles.chapterHeading}>Second Quiz</Text>
              <TouchableOpacity
                style={styles.chapterBorder}
                activeOpacity={0.6}
                onPress={() => openMaterial(materials[8])}
              >
                <View style={styles.chapterContent}>
                  <Image source={QuizIcon} style={styles.icon} />
                  <Text style={styles.learningMaterial}>
                    {materials[8].title}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
}

export default FoundationsOfMultimedia;

const styles = StyleSheet.create({
  background: {
    marginTop: 25,
    marginBottom: 35,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: Colors.WHITE,
    flex: 1,
  },

  chapterBorder: {
    borderWidth: 1,
    borderColor: Colors.TRANSPARENT_BLACK,
    borderRadius: 15,
    marginTop: 15,
    width: '100%',
    overflow: 'hidden',
    padding: 15,
  },

  chapterContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  courseDescription: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    textAlign: 'left',
    color: Colors.BLACK,
  },

  courseDescriptionHeading: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Colors.BLACK,
  },

  chapterHeading: {
    marginTop: 25,
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: Colors.BLACK,
  },

  descriptionBorder: {
    borderWidth: 1,
    borderColor: Colors.TRANSPARENT_BLACK,
    borderRadius: 15,
    marginTop: 15,
    width: '100%',
  },

  icon: {
    width: 45,
    height: 45,
    marginRight: 15,
  },

  learningMaterial: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    color: Colors.BLACK,
    flex: 1,
    flexWrap: 'wrap',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },

  readMore: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    color: 'blue',
    marginTop: 5,
    textAlign: 'right',
    marginRight: 15,
    marginBottom: 15,
  },

  scrollView: {
    backgroundColor: Colors.WHITE,
  },
});
