import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { Image, StyleSheet, View, Text, Pressable, TextInput,TouchableOpacity, ScrollView, Keyboard, Alert, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const focus = useIsFocused(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const windowHeight = Dimensions.get('screen').height;
  const [isShowPassword, setIsShowPassword] = useState(true);
 

  const showHidePassword= async () => {
      setIsShowPassword(!isShowPassword);
  };
  const onPressLogin = async () => {
    if(username!='' && password!=''){
        Keyboard.dismiss();
        var param = {
            UserName: username,
            PassWord: password
        };
        WebServer.loginUser(param, loginCallback);
    }else{
        Alert.alert('Please enter login credintials');
    }    
  };
  const loginCallback = response => {
    if (response && response.message === undefined) {
      var userInfo : { 
        token:string ,
        userId: number ,
        userName: string ,
        email: string ,
        mobile: string ,
        loginType: string ,
        customerCode: string 
      }= {
        token:response.token,
        userId: response.userId,
        userName: response.userName,
        email: response.email,
        mobile: response.mobile,
        loginType: response.loginType,
        customerCode: response.customerCode
      };
      try {
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setUsername('');
        setPassword('');
        navigation.navigate("Home1");
      } catch (error) {
        console.error('AsyncStorage Error:', error);
      }
      
    }else{
        Alert.alert(response.message);
    }
  };

  const checkLoginDetails = async () => {
    try {
      let userInfo : any =await AsyncStorage.getItem('userInfo');
      if (userInfo !== null && userInfo !== undefined) {
        AsyncStorage.setItem('isAlreadyLoggedIn', 'true');
         navigation.navigate("Home1");
      }else{
        AsyncStorage.setItem('isAlreadyLoggedIn', 'false');
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
    <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        style={{
        width: "100%",
        backgroundColor: "transparent"
        }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps={"always"}
        scrollEnabled={false}
    >
      <View style={{flex: 1,
    width: "100%",
    height: windowHeight,
    overflow: "hidden",
    backgroundColor: Color.whait}}>
<View
style={[
styles.groupChildLayout,
]}
>
<Image
style={styles.manWorkerCleaningFloorWithIcon}
resizeMode="cover"
source={require("../assets/manworkercleaningfloorwithscrubbermachineimage-2.png")}
/>
<LinearGradient
style={styles.groupChild}
locations={[0, 1]}
colors={["rgba(0, 0, 0, 0)", "#000"]}
useAngle={true}
angle={180.13}
/>
</View>
<View style={[styles.loginChild, styles.loginChildBg]} />
<View style={[styles.webViewbottom, styles.loginChildBg]}>
<View style={styles.homeIndicator}>
   <View style={styles.homeIndicator1} />
</View>
</View>
<Pressable
      style={[styles.rectangleContainer, styles.groupItemLayout]}
      onPress={() => navigation.navigate("Login")}
  >
  <View style={[styles.groupItem, styles.groupItemLayout]} />
  <View style={[styles.frameContainer, styles.parentFlexBox]}>
              <Image
                  style={styles.frameIcon}
                  resizeMode="cover"
                  source={require("../assets/frame6.png")}
              />
              <Text style={[styles.en, styles.enClr]}>EN</Text>
  </View>
</Pressable>

<View style={[styles.frameView, styles.frameParentPosition]}>
<View style={[styles.welcomeBackParent, styles.parentFlexBox]}>
  <Text
    style={[styles.welcomeBack, styles.logInTypo]}>{`Welcome Back `}</Text>
  <Image
    style={styles.frameIcon1}
    resizeMode="cover"
    source={require("../assets/frame7.png")}/>
</View>
<Text style={[styles.logInTo, styles.enClr]}>Log in to continue</Text>
</View>
  <Image
    style={styles.icon}
    resizeMode="cover"
    source={require("../assets/3-1-4.png")}/>

  <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
      <View style={styles.mobileNumberEmailParent}>
          <Text style={[styles.mobileNumber, styles.passwordTypo]}>
               Mobile Number / Email
          </Text>
          <View style={styles.rectangleParent}>
          <View style={styles.frameShadowBox} />
          <View
              style={[
              styles.pleaseEnterYourEmailParent,
              styles.parentPosition,
              ]}>
              <Image
              style={[styles.smsIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/sms.png")}
              />
              <TextInput value={username} onChangeText={(text) => setUsername(text)}
              autoCapitalize={'none'} style={[styles.pleaseEnterYour, styles.pleaseTypo]} placeholder="Please enter your email"
                  placeholderTextColor="#000"/>
              
              
          </View>
          </View>
      </View>
      <View style={[styles.passwordParent, styles.passwordSpaceBlock]}>
          <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
          <View style={styles.rectangleParent}>
          <View style={styles.frameShadowBox} />
              <View
               style={[
                styles.pleaseEnterYourEmailParent,
                styles.parentPosition,
                ]}
            >
                <Image
                  style={[styles.lockIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/lock.png")}
              />
              <TextInput value={password} secureTextEntry={isShowPassword}
                  onChangeText={(text) => setPassword(text)} style={[styles.pleaseEnterYour1, styles.pleaseTypo]} placeholder="Please enter your password"
                  placeholderTextColor="#000"/>
              
              </View>
              <Pressable
                style={styles.eyePressable}
                onPress={showHidePassword}>
                  <Image
                      style={[styles.eyeSlashIcon, styles.iconLayout]}
                      resizeMode="cover"
                      source={!isShowPassword?require("../assets/eyeslash.png"):require("../assets/eye.png")}/>
              </Pressable>
              
          
          </View>
      </View>
      </View>
      <Pressable
      style={[styles.forgotYourPasswordWrapper, styles.passwordSpaceBlock]}
      onPress={() => navigation.navigate("ForgotPassword")}
      >
      <Text style={[styles.forgotYourPassword, styles.pleaseTypo]}>
          Forgot your password?
      </Text>
      </Pressable>

  </View>
  
  <View style={[styles.frameParent1, styles.frameParentPosition]}>
       
      <TouchableOpacity
            style={[styles.logInWrapper, styles.parentFlexBox]}
            onPress={onPressLogin}
            >
         <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.byLoggingIntoTheAccountYoParent}>
      <Text style={[styles.byLoggingInto, styles.byLoggingIntoTypo]}>
          By logging into the account you agree to
      </Text>
      <Text style={[styles.termsAndConditions, styles.byLoggingIntoTypo]}>
          Terms and conditions
      </Text>
      <View style={styles.groupInner} />
      </View>
  </View>
  <AlertMessage/>
 </View>

  </ScrollView>
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
      },
  groupChildLayout: {
    height: "40%",
    width: "100%",
    top: 0,
    position: "absolute",
    left:0
  },
  loginChildBg: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    position: "absolute",
  },
  passwordTypo: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
    height: 16,
    textAlign: "left",
    color: Color.praimary,
    fontWeight: "300",
    alignItems: "center",
  },
  parentPosition: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  pleaseTypo: {
    color: Color.black,
    fontSize: 15,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  passwordSpaceBlock: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  frameParentPosition: {
    left: "4%",
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupItemLayout: {
    height: 30,
    width: 67,
    position: "absolute",
  },
  enClr: {
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  logInTypo: {
    fontWeight: "700",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  byLoggingIntoTypo: {
    fontSize: FontSize.size_3xs,
    height: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 20,
    alignItems: "center",
    position: "absolute",
    
  },
  manWorkerCleaningFloorWithIcon: {
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
    height: 423,
    width: "100%",
    top: 0,
    position: "absolute",
  },
  loginChild: {
    top: 350,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    height: "100%",
    left: 0,
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "flex-end",
    alignItems: "center",
    height: 34,
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
  },
  rightSide: {
    top: 17,
    right: 15,
    height: 11,
    width: 67,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  mobileNumber: {
    width: "100%",
    height: 30,
    lineHeight: 15,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  frameShadowBox: {
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 56,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  pleaseEnterYour: {
    opacity: 0.5,
    textAlign: "left",
    width:"100%"
  },
  smsIcon: {
    marginLeft: 0,
  },
  pleaseEnterYourEmailParent: {
    left: "5%",
    justifyContent: "center",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 10,
    borderRadius: Border.br_3xs,
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: Color.whait,
  },
  mobileNumberEmailParent: {
    alignItems: "flex-start",
    width: "100%",
  },
  password: {
    width: "100%",
    height: 30,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  eyeSlashIcon: {
    opacity: 0.5,
    alignItems: 'flex-end',
    right:"2%",
    position: "absolute",
    top:"25%"
  },
  pleaseEnterYour1: {
    opacity: 0.5,
    textAlign: "left",
    width:"100%"
  },
  lockIcon: {
    marginLeft: 0,
  },
  pleaseEnterYourPasswordParent: {
    marginLeft: "0%",
    justifyContent: "center",
  },
  eyeSlashParent: {
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  passwordParent: {
    width:"100%",
    marginTop: 24,
  },
  frameGroup: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width:"96%"
  },
  forgotYourPassword: {
    textAlign: "right",
    right:"5%"
  },
  forgotYourPasswordWrapper: {
    
  },
  eyePressable:{
    height: 20,
    width: 20,
    zIndex:1,
    position:'absolute',
    right:"5%",
    top:"20%"
  },
  frameParent: {
    top: "50%",
    left: "2%",
    position: "absolute",
    width:"100%"
  },
  groupItem: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_500,
    right: 0,
    top: 25,
  },
  frameIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  en: {
    fontSize: FontSize.size_2xs_5,
    fontWeight: "600",
    marginLeft: 3.5,
    textAlign: "right",
  },
  frameContainer: {
    top: 30,
    width: 36,
    height: 18,
    right: 16,
    justifyContent: "flex-end",
    position: "absolute",
  },
  rectangleContainer: {
    top: 48,
    right: 16,
  },
  welcomeBack: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  frameIcon1: {
    height: 24,
    marginLeft: 8,
    width: 24,
    overflow: "hidden",
  },
  welcomeBackParent: {
    justifyContent: "center",
  },
  logInTo: {
    fontSize: FontSize.size_lg,
    marginTop: 4,
    textAlign: "left",
    fontWeight: "300",
    color: Color.whait,
  },
  frameView: {
    top: 275,
  },
  icon: {
    marginLeft: "5%",
    top: 220,
    width: 150,
    height: 48,
    position: "absolute",
  },
  logIn: {
    fontSize: FontSize.size_base,
    textAlign: "right",
  },
  logInWrapper: {
    backgroundColor: Color.praimary,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    height: 56,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    width: "100%",
    justifyContent: "center",
  },
  byLoggingInto: {
    left: "10%",
    color: Color.ternary,
    width:"60%"
  },
  termsAndConditions: {
    width: "36%",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    right: 0,
  },
  groupInner: {
    top: 16,
    left: "63%",
    borderColor: Color.praimary,
    borderTopWidth: 1,
    width: 97,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  byLoggingIntoTheAccountYoParent: {
    width: "100%",
    marginTop: 16,
    height: 30,
  },
  frameParent1: {
    top: "80%",
    alignItems: "center",
  },
});

export default Login;
