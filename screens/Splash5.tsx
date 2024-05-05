import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const focus = useIsFocused(); 
  const windowHeight = Dimensions.get('screen').height;
  AsyncStorage.setItem('isAlreadyLoggedIn', 'true');
  const checkLoginDetails = async () => {
    try {
      let isArabicLang : any =await AsyncStorage.getItem('isArabicLang');
      if (isArabicLang === null || isArabicLang === undefined) {
        AsyncStorage.setItem('isArabicLang', 'false');
      }
      let userInfo : any =await AsyncStorage.getItem('userInfo');
      if (userInfo !== null && userInfo !== undefined) {
        AsyncStorage.setItem('isAlreadyLoggedIn', 'true');
        navigation.navigate("Home1");
      }else{
        AsyncStorage.setItem('isAlreadyLoggedIn', 'false');
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };
  useEffect(() => {
    if(focus){
      setTimeout(() => checkLoginDetails(),1500);
    }
  }, [focus]);

  return (
    <View style={{flex: 1,
      width: "100%",
      height: windowHeight,
      overflow: "hidden",
      backgroundColor: Color.colorGray_100,}}>
      {/* <View style={styles.webViewbottom}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
      </View> */}
      <View style={styles.logoParent}>
        <View style={[styles.logo, styles.logoLayout]}>
          <Image
            style={[styles.logo1Icon, styles.logoLayout]}
            resizeMode="cover"
            source={require("../assets/logo-11.png")}
          />
        </View>
        <Text style={[styles.poweredBy, styles.poweredByClr]}>Powered by</Text>
      </View>
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-33.png")}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/3-1-45.png")}
      />
      <Image
        style={styles.splash5Child}
        resizeMode="cover"
        source={require("../assets/group-2.png")}
      />
      
      <Image
        style={styles.splash5Item}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <Text style={[styles.b2bApplication, styles.poweredByClr]}>
        <Text style={[styles.b, styles.bTypo]}>B</Text>
        <Text style={[styles.text, styles.textTypo]}>2</Text>
        <Text style={styles.bTypo}>B-Application</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoLayout: {
    height: 42,
    left: 0,
    width: 100,
    position: "absolute",
  },
  poweredByClr: {
    color: Color.praimary,
    position: "absolute",
  },
  iconPosition: {
    width: "80%",
    top: "50%",
    position: "absolute",
    left:"10%"
  },
  bTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo: {
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    bottom: 0,
    width: "100%",
    height: 34,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  logo1Icon: {
    top: 0,
  },
  logo: {
    top: 26,
  },
  poweredBy: {
    left: "25%",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    top: 0,
  },
  logoParent: {
    bottom: "5%",
    left: "35%",
    height: 68,
    width: 100,
    position: "absolute",
  },
  icon: {
    marginTop: "-15%",
    height: 102,
  },
  icon1: {
    marginTop: 40,
    height: 23,
  },
  splash5Child: {
    top: "-10%",
    left: "60%",
    width: "120%",
    height: "50%",
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  splash5Item: {
    top: 10,
    left: "-25%",
    width: 200,
    height: 200,
    position: "absolute",
  },
  b: {
    textTransform: "capitalize",
  },
  text: {
    fontSize: FontSize.size_lg,
  },
  b2bApplication: {
    top: "60%",
    textAlign: "center",
    left:"30%"
  },
});

export default Splash5;
