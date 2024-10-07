import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StatusBar,
  Alert,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Colors from '../utils/Colors';

const PdfViewerScreen = ({ route }) => {
  const { pdfUrl } = route.params;
  const [key, setKey] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const googleDocsUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

  useEffect(() => {
    // Force reload when component mounts
    setKey(prevKey => prevKey + 1);
  }, []);

  const handleDownload = () => {
    Alert.alert(
      'Download PDF',
      'You will be redirected to your browser to download the PDF. Do you want to proceed?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            Linking.openURL(pdfUrl).catch(err =>
              console.error("Couldn't load page", err)
            );
          },
        },
      ]
    );
  };

  const handleRefresh = () => {
    setKey(prevKey => prevKey + 1);
    setIsLoading(true);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const handleLoadError = () => {
    console.log('WebView failed to load');
    // Retry loading after a short delay
    setTimeout(() => {
      setKey(prevKey => prevKey + 1);
    }, 1000);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <WebView
          key={key}
          source={{ uri: googleDocsUrl }}
          style={styles.webview}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
          onError={handleLoadError}
          cacheEnabled={false}
          cacheMode={'LOAD_NO_CACHE'}
          domStorageEnabled={true}
          javaScriptEnabled={true}
        />
        {isLoading && (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color={Colors.PRIMARY}
          />
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.refreshButton}
            activeOpacity={0.8}
            onPress={handleRefresh}
          >
            <Text style={styles.buttonText}>Refresh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.downloadButton}
            activeOpacity={0.8}
            onPress={handleDownload}
          >
            <Text style={styles.buttonText}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  webview: {
    flex: 1,
  },

  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  refreshButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 5,
    borderRadius: 15,
  },

  downloadButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 5,
    borderRadius: 15,
  },

  buttonText: {
    color: Colors.WHITE,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});

export default PdfViewerScreen;
