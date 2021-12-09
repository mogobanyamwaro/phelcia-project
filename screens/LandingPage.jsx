import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';

import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
const StatusBarHeight = Constants.statusBarHeight;
import { styles } from '../components/styles';

const LandingPage = () => {
  const handleSubmit = () => {
    console.log('hello');
  };
  return (
    <KeyboardAvoidingWrapper>
      <View style={landingScreen.landingContainer}>
        <StatusBar style="light" />
        <View style={landingScreen.SafeRide}>
          <Text style={landingScreen.SafeRideText}>Safe Rides</Text>
          <View style={landingScreen.TextInputContainer}>
            <Octicons name="search" size={20} color="black" />
            <TextInput
              style={{ marginLeft: 17 }}
              placeholder="Search Plate or Driver's Name"
            />
          </View>
        </View>
        <View style={landingScreen.UsersSafeContainer}>
          <Text style={landingScreen.UserSafeTitle1}>
            Want to flag a harmful driver or cab?
          </Text>
          <Text style={landingScreen.UserSafeTitle2}>
            Help us keep you and other
          </Text>
          <Text style={landingScreen.UserSafeTitle2}>users safe.</Text>
        </View>
        <View style={landingScreen.DriverContainer}>
          <View style={landingScreen.DriverSubContainer}>
            <Text>Drivers Name: </Text>
            <TextInput style={landingScreen.Line} />
          </View>
          <View style={landingScreen.DriverSubContainer}>
            <Text>Plate Number:</Text>
            <TextInput style={landingScreen.Line} />
          </View>
          <View style={landingScreen.FlaggingText}>
            <Text>Reasons for flagging:</Text>
          </View>
          <View style={landingScreen.FlaggingCheckBoxes}>
            <View style={landingScreen.DriverSubContainer}>
              <Text style={landingScreen.checkBox}>Che</Text>
              <Text style={landingScreen.checkBoxText}>Physical assault</Text>
            </View>
            <View style={landingScreen.DriverSubContainer}>
              <Text style={landingScreen.checkBox}>Che</Text>
              <Text style={landingScreen.checkBoxText}>Physical assault</Text>
            </View>
            <View style={landingScreen.DriverSubContainer}>
              <Text style={landingScreen.checkBox}>Che</Text>
              <Text style={landingScreen.checkBoxText}>Theft or robbery</Text>
            </View>
            <View style={landingScreen.DriverSubContainer}>
              <Text style={landingScreen.checkBox}>Che</Text>
              <Text style={landingScreen.checkBoxText}>Sexual assault</Text>
            </View>
            <View style={landingScreen.DriverSubContainer}>
              <Text style={landingScreen.checkBox}>Che</Text>
              <Text style={landingScreen.checkBoxText}>Rude driver</Text>
            </View>
          </View>
          <View style={landingScreen.OtherContainer}>
            <Text>Other reasons:</Text>
            <TextInput style={landingScreen.Line} />
          </View>
          <View style={landingScreen.AttachContainer}>
            <Text style={landingScreen.AttachImage}>Attach image(2)</Text>
            <TouchableOpacity
              style={styles.StyledButtonSubmit}
              onPress={handleSubmit}
            >
              <Text style={styles.ButtonTextFeedBack}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={landingScreen.ShareContainer}>
          <Text style={landingScreen.ShareText}>
            Your feedback helps us improve this services .Share some
          </Text>
          <Text style={landingScreen.Here}> here</Text>
          <Text style={landingScreen.ShareText}>.</Text>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default LandingPage;

const landingScreen = StyleSheet.create({
  landingContainer: {
    flex: 1,
    padding: 25,
    paddingTop: StatusBarHeight,
    backgroundColor: '#fff',
    zIndex: -100,
  },
  SafeRide: {
    backgroundColor: '#143843',
    width: windowWidth,
    marginLeft: -25,
    marginTop: -24,
    height: 140,
  },
  SafeRideText: {
    color: '#0EAE4E',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 40,
    marginLeft: 30,
    marginBottom: 5,
  },
  TextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 260,
    marginLeft: 30,
    borderRadius: 5,
    height: 40,
  },
  UsersSafeContainer: {
    position: 'absolute',
    backgroundColor: '#0F323D',
    top: 120,
    height: 80,
    marginLeft: 30,
    width: 280,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DriverContainer: {
    marginTop: 70,
    // marginBottom: -50,
  },
  DriverSubContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  OtherContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  UserSafeTitle1: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 15,
  },
  UserSafeTitle2: {
    color: '#0EAE4E',
    textAlign: 'center',
  },
  Line: {
    width: 120,
    height: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginTop: -15,
    marginLeft: 10,
  },
  FlaggingText: {
    marginBottom: 8,
  },
  FlaggingCheckBoxes: {
    marginLeft: 30,
  },
  checkBox: {
    backgroundColor: '#1B5B70',
    color: '#fff',
    marginRight: 9,
  },
  checkBoxText: {
    color: '#0EAE4E',
  },
  AttachImage: {
    color: '#0EAE4E',
  },
  AttachContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ShareText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
    marginTop: 10,
    // marginLeft: 10,
  },
  Here: {
    color: '#0EAE4E',
    fontSize: 10,
    fontWeight: '700',
    marginTop: 10,
  },
  ShareContainer: {
    backgroundColor: '#143843',
    width: windowWidth,
    marginLeft: -25,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',

    height: 70,
  },
});
