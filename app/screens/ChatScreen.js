import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import { getAuth } from 'firebase/auth';
import { db } from '../../config/firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  doc,
} from 'firebase/firestore';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';

const CustomBubble = props => {
  const { currentMessage } = props;

  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: { backgroundColor: '#4F4A45' },
        right: { backgroundColor: '#123C5F' },
      }}
      renderMessageText={() => (
        <View style={styles.bubbleContainer}>
          <Text style={styles.userName}>{currentMessage.user.name}</Text>
          <Text style={styles.messageText}>{currentMessage.text}</Text>
        </View>
      )}
    />
  );
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
  });
  const [loading, setLoading] = useState(true);

  const scrollViewRef = useRef(null);

  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid);

      const unsubscribeUser = onSnapshot(userDocRef, doc => {
        if (doc.exists()) {
          const userData = doc.data();
          setUserProfile({
            firstName: userData.firstName || 'First',
            lastName: userData.lastName || 'Last',
          });
        } else {
          console.error('No such document!');
        }
      });

      return () => unsubscribeUser();
    }
  }, [currentUser]);

  useEffect(() => {
    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    const unsubscribeChats = onSnapshot(q, querySnapshot => {
      const messagesFirestore = querySnapshot.docs.map(doc => {
        const firebaseData = doc.data();
        const { _id, text, user, createdAt } = firebaseData;
        return {
          _id: _id,
          text: text,
          createdAt: createdAt.toDate(),
          user: {
            _id: user._id,
            name: `${user.firstName} ${user.lastName}`,
          },
        };
      });
      setMessages(messagesFirestore);
      setLoading(false);
    });

    return () => unsubscribeChats();
  }, []);

  const onSend = useCallback(
    (messages = []) => {
      const { _id, text, createdAt } = messages[0];
      const { firstName, lastName } = userProfile;

      if (!firstName.trim() || !lastName.trim()) {
        console.error(
          'User profile information (firstName or lastName) is missing.'
        );
        return;
      }

      addDoc(collection(db, 'chats'), {
        _id,
        text,
        createdAt: Timestamp.fromDate(createdAt),
        user: {
          _id: currentUser.uid,
          firstName,
          lastName,
          name: `${firstName} ${lastName}`,
        },
      });
    },
    [userProfile, currentUser]
  );

  const getUserInitials = name => {
    if (!name) return '';
    const initials = name
      .split(' ')
      .map(part => part[0])
      .join('');
    return initials.toUpperCase();
  };

  const renderAvatar = ({ currentMessage = { user: { name: '' } } }) => {
    const userInitials = getUserInitials(currentMessage.user.name);
    return (
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{userInitials}</Text>
      </View>
    );
  };

  const renderSend = props => (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <Ionicons name="send" size={24} color="#074173" />
      </View>
    </Send>
  );

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors.PRIMARY}
        style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
      />
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: currentUser.uid,
            name: `${userProfile.firstName} ${userProfile.lastName}` || 'User',
          }}
          renderBubble={props => <CustomBubble {...props} />}
          renderAvatar={renderAvatar}
          renderSend={renderSend}
          scrollToBottom
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F8',
  },

  bubbleContainer: {
    padding: 10,
    borderRadius: 15,
  },

  userName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    color: '#FBA834',
    paddingBottom: 5,
  },

  messageText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    color: 'white',
  },

  avatarContainer: {
    backgroundColor: '#4F4A45',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
  },

  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
});

export default ChatScreen;
