import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Constants from 'expo-constants';
const windowWidth = Dimensions.get('window').width;

const StatusBarHeight = Constants.statusBarHeight;

const SearchNotSafe = () => {
  return (
    <View style={searchNotSafe.SearchSafeContainers}>
      <StatusBar style="light" />
      <Text style={searchNotSafe.Title}>Sorry, your ride might be unsafe</Text>
      <View style={searchNotSafe.SubTitleContainer}>
        <Text style={searchNotSafe.SubTitle1}>John Doe</Text>
        <Text style={searchNotSafe.SubTitle2}>
          John Doe KCZ 717S might be an unsafe ride
        </Text>
      </View>
      <View style={searchNotSafe.PlateNumberTextContainer}>
        <View>
          <Text style={searchNotSafe.PlateNumberText}>
            Reasons for flagging as cited by other users;
          </Text>
        </View>
        <View style={searchNotSafe.HikeCobContainer}>
          <View style={searchNotSafe.HikeCobSubContainer}>
            <Text style={searchNotSafe.HikeCobSubContainerText}>
              Hiked Cob Fore
            </Text>
          </View>
          <Text style={searchNotSafe.Percent}>20%</Text>
        </View>
        <View style={searchNotSafe.HikeCobContainer}>
          <View style={searchNotSafe.HikeCobSubContainer}>
            <Text style={searchNotSafe.HikeCobSubContainerText}>
              Theft or robbery
            </Text>
          </View>
          <Text style={searchNotSafe.Percent}>80%</Text>
        </View>
        <View style={searchNotSafe.HikeCobContainer}>
          <View style={searchNotSafe.HikeCobSubContainer}>
            <Text style={searchNotSafe.HikeCobSubContainerText}>
              Physical Assault
            </Text>
          </View>
          <Text style={searchNotSafe.Percent}>80%</Text>
        </View>
        <View style={searchNotSafe.HikeCobContainer}>
          <View style={searchNotSafe.HikeCobSubContainer}>
            <Text style={searchNotSafe.HikeCobSubContainerText}>Violence</Text>
          </View>
          <Text style={searchNotSafe.Percent}>15%</Text>
        </View>
        <View style={searchNotSafe.HikeCobContainer}>
          <View style={searchNotSafe.HikeCobSubContainer}>
            <Text style={searchNotSafe.HikeCobSubContainerText}>
              Sexual Assault
            </Text>
          </View>
          <Text style={searchNotSafe.Percent}>70%</Text>
        </View>
        <View style={searchNotSafe.HikeCobContainer}>
          <View style={searchNotSafe.HikeCobSubContainer}>
            <Text style={searchNotSafe.HikeCobSubContainerText}>Others</Text>
          </View>
          <Text style={searchNotSafe.Percent}>30%</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchNotSafe;

const searchNotSafe = StyleSheet.create({
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
    color: '#fff',
  },
  SubTitleContainer: {
    backgroundColor: '#fff',
    height: 100,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  SubTitle1: {
    color: '#AF3B3B',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  SubTitle2: {
    color: '#AF3B3B',
    fontSize: 15,
    fontWeight: 'bold',
  },

  PlateNumberTextContainer: {
    backgroundColor: '#0EAE4E',
    position: 'relative',
    width: windowWidth,
    left: -24,
    height: 200,
    marginTop: 30,
    // alignItems: 'center',
  },
  PlateNumberText: {
    color: '#fff',
    lineHeight: 17,
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 20,
  },
  HikeCobContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: windowWidth - 280,
  },
  HikeCobSubContainer: {
    backgroundColor: '#143843',
    borderRadius: 7,
    paddingRight: 28,
    paddingLeft: 5,
    textAlign: 'center',
  },
  HikeCobSubContainerText: {
    color: '#0EAE4E',
  },
  Percent: {
    color: '#fff',
    marginLeft: 20,
  },
});
