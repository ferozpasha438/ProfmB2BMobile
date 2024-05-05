import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { Image, StyleSheet, View, Pressable, Text, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";
import AfterLoginFooter from "../components/AfterLoginFooter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from '@react-navigation/native';

const Profile1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const windowHeight = Dimensions.get('screen').height;
  const focus = useIsFocused(); 
  const [logUserName, setLogUserName] = useState('');
  const [loginType, setLoginType] = useState("");
  const [loginRole, setLoginRole] = useState("");
  const [token, setLoginToken] = useState("");
  const [userEmail, setUserEmail] = useState('');

  const onPressLogout = async () => {
    AsyncStorage.setItem('isAlreadyLoggedIn', 'false');
    var items = ['userInfo'];
    AsyncStorage.multiRemove(items);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }], // 'Login' is the name of your login screen
      })
    );
  };
  const checkLoginDetails = async () => {
    try {
      
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
        setLogUserName(userInfo.userName);
        setLoginType(userInfo.loginType);
        setLoginRole(userInfo.role);
        setLoginToken(userInfo.token);
       
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };
  useEffect(() => {
    if(focus){
      checkLoginDetails()
    }
  }, [focus]);

  return (
    <View style={{height: windowHeight,
      overflow: "hidden",
      width: "100%",
      flex: 1,
      backgroundColor: Color.colorGray_100,}}>
      <View
        style={[styles.cleaningWindowByUsingSpeciParent, styles.wrapperLayout]}
      >
        <Image
          style={[
            styles.cleaningWindowByUsingSpeciIcon,
            styles.bottomNavLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/cleaningwindowbyusingspecialliquidrepairmanisworkingindoorsmodernroom-2.png")}
        />
        <LinearGradient
          style={[styles.wrapper, styles.wrapperLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0.2)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable
            style={[styles.pressable, styles.iconLayout1]}
            onPress={() => navigation.navigate("Home1")}
          />
        </LinearGradient>
        <Text style={[styles.myAccount, styles.lineLayout]}>My Account</Text>
        <Pressable
          style={styles.pressable1}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.iconLayout1}
            resizeMode="cover"
            source={require("../assets/3-1-41.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.profileChild, styles.bottomNavLayout]} />
      <View style={styles.encapsulatedGroupParent}>
        <Image
          style={styles.encapsulatedGroupIcon}
          resizeMode="cover"
          source={require("../assets/encapsulated-group6.png")}
        />
        <View style={styles.wrapperFlexBox}>
          <Text style={[styles.assemAlMohammadi, styles.myAccount1Clr]}>
          {logUserName}
          </Text>
        </View>
        <View
          style={[
            styles.aramcoSaudiArabiagmailcomWrapper,
            styles.wrapperFlexBox,
          ]}
        >
          <Text style={styles.aramcoSaudiArabiagmailcom}>
            Aramco Saudi Arabia@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.profileItem} />
      
      <View style={styles.encapsulatedGroupGroup}>
        <Image
          style={styles.encapsulatedGroupIcon1}
          resizeMode="cover"
          source={require("../assets/encapsulated-group3.png")}
        />
        <View style={styles.editAccountInformationWrapper}>
          <Text style={styles.changePasswordTypo}>
            Edit Account Information
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.encapsulatedGroupContainer}
        onPress={() => navigation.navigate("ChangePassword1")}
      >
        <Image
          style={styles.encapsulatedGroupIcon1}
          resizeMode="cover"
          source={require("../assets/encapsulated-group4.png")}
        />
        <Text style={[styles.changePassword, styles.changePasswordTypo]}>
          Change Password
        </Text>
      </Pressable>
      <Pressable
        style={styles.framePressable}
        onPress={onPressLogout}
      >
        <Image
          style={styles.encapsulatedGroupIcon1}
          resizeMode="cover"
          source={require("../assets/encapsulated-group5.png")}
        />
        <Text style={styles.logOut}>Log Out</Text>
      </Pressable>
      <Pressable
        style={styles.group}
        onPress={() => navigation.navigate("Home1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/group8.png")}
        />
      </Pressable>

      <AfterLoginFooter currentRoute='Profile'/>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: "50%",
    width: "100%",
    top: 0,
    position: "absolute",
  },
  bottomNavLayout: {
    width: "100%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  lineLayout: {
    width: 135,
    position: "absolute",
  },
  myAccount1Clr: {
    color: Color.praimary,
    fontWeight: "700",
  },
  wrapperFlexBox: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menuListPosition: {
    backgroundColor: Color.whait,
    width: "100%",
    right: 0,
    position: "absolute",
  },
  homeTypo: {
    marginTop: 6,
    textAlign: "right",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menuLayout: {
    width: 57,
    alignItems: "center",
  },
  changePasswordTypo: {
    color: Color.black,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cleaningWindowByUsingSpeciIcon: {
    height: "100%",
    left: 0,
    top: 0,
  },
  pressable: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    backgroundColor: "transparent",
  },
  wrapper: {
    left: "50%",
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    width: 24,
    height: 11,
    right: 0,
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
  myAccount: {
    top: "10%",
    lineHeight: 30,
    color: Color.whait,
    display: "flex",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: 20,
    fontWeight: "700",
    width: "100%",
    left:"30%",
  },
  pressable1: {
    top: "40%",
    left: "5%",
    width: "90%",
    height: 125,
    position: "absolute",
  },
  cleaningWindowByUsingSpeciParent: {
    left: 0,
  },
  profileChild: {
    top: "45%",
    borderTopLeftRadius: Border.br_6xl,
    borderTopRightRadius: Border.br_6xl,
    height: "50%",
    right: 0,
    backgroundColor: Color.colorGray_100,
    width: "100%",
  },
  encapsulatedGroupIcon: {
    width: 98,
    height: 95,
    overflow: "hidden",
  },
  assemAlMohammadi: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_base,
    color: Color.praimary,
  },
  aramcoSaudiArabiagmailcom: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontWeight: "300",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
  },
  aramcoSaudiArabiagmailcomWrapper: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLightsteelblue_200,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
  },
  encapsulatedGroupParent: {
    top: "40%",
    alignItems: "center",
    position: "absolute",
    width:"100%"
  },
  profileItem: {
    top: "65%",
    borderColor: Color.colorLightgray_100,
    borderTopWidth: 0.5,
    width: "100%",
    height: 1,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    marginTop: 6,
    textAlign: "right",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  menu5: {
    width: 58,
    marginLeft: 16,
    alignItems: "center",
  },
  container: {
    backgroundColor: Color.praimary,
    borderColor: Color.whait,
    borderWidth: 4,
    justifyContent: "flex-end",
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    flexDirection: "row",
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menu3: {
    marginLeft: 16,
  },
  myAccount1: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menu2: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  menuList: {
    bottom: 30,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  line: {
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  iphoneIndicator: {
    height: 30,
    bottom: 0,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    bottom: 0,
    left: "50%",
    overflow: "hidden",
  },
  encapsulatedGroupIcon1: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  editAccountInformationWrapper: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  encapsulatedGroupGroup: {
    top: "70%",
    left: "5%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  changePassword: {
    marginLeft: 16,
  },
  encapsulatedGroupContainer: {
    top: "77%",
    left: "5%",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  logOut: {
    color: Color.colorRed_100,
    fontSize: FontSize.size_sm,
    marginLeft: 16,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  framePressable: {
    top: "84%",
    left: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  icon1: {
    opacity: 0.5,
    height: "100%",
    width: "100%",
  },
  group: {
    right: "7%",
    top: "50%",
    width: "6%",
    height: "1.5%",
    position: "absolute",
  },
  profile: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
});

export default Profile1;
