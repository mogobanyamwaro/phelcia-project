import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;

const StatusBarHeight = Constants.statusBarHeight;
import Rating from '../components/Rating';

const SearchSafe = () => {
  return (
    <View style={searchSafe.SearchSafeContainers}>
      <StatusBar style="light" />
      <Text style={searchSafe.Title}>You're on a Safe Ride</Text>
      <View style={searchSafe.SubTitleContainer}>
        <Text style={searchSafe.SubTitle1}>John Doe</Text>
        <Text style={searchSafe.SubTitle2}>KCZ 717S is on a Safe Ride</Text>
      </View>
      <View>
        <Text style={searchSafe.MoreInfo}>More info;</Text>
      </View>
      <View style={searchSafe.PlateNumberTextContainer}>
        <Text style={searchSafe.PlateNumberText}>
          The plate number or driver name you searched is not in our records.
          Your ride is safe and you are good to go
        </Text>
      </View>
      <View style={searchSafe.RateContainer}>
        <Text style={searchSafe.RateText}>Rate them here</Text>
        <Rating />
      </View>
    </View>
  );
};

export default SearchSafe;

const searchSafe = StyleSheet.create({
  SearchSafeContainers: {
    flex: 1,
    padding: 25,
    paddingTop: StatusBarHeight + 30,
    backgroundColor: '#143843',
    zIndex: -100,
  },
  Title: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 17,
    letterSpacing: 1,
    // fontFamily: 'Comfortaa',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#0EAE4E',
  },
  SubTitleContainer: {
    backgroundColor: '#fff',
    height: 100,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  SubTitle1: {
    color: '#0EAE4E',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -30,
    marginBottom: 17,
  },
  SubTitle2: {
    color: '#0EAE4E',
    fontSize: 15,
    fontWeight: 'bold',
  },
  MoreInfo: {
    color: '#E9ED2F',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
  },
  PlateNumberTextContainer: {
    backgroundColor: '#0EAE4E',
    position: 'relative',
    width: windowWidth,
    left: -24,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlateNumberText: {
    color: '#E9ED2F',
    lineHeight: 17,
    textAlign: 'center',
  },
  RateContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 30,
  },
  RateText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
