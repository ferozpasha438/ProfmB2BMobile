import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';


const AfterLoginFooter = (props:{ currentRoute: string }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const focus = useIsFocused(); 
  const [logUserName, setLogUserName] = useState('');
  const [loginType, setLoginType] = useState("");
  const [loginRole, setLoginRole] = useState("");
  const [token, setLoginToken] = useState("");
  const [isCustomer, setIsCustomer] = useState(true);


  const checkLoginDetails = async () => {
    try {
      
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
        setLogUserName(userInfo.userName);
        setLoginType(userInfo.loginType);
        setLoginRole(userInfo.role);
        setLoginToken(userInfo.token);
        if(userInfo.loginType!=='client'){
          setIsCustomer(false);
        }else{
          setIsCustomer(true);
        }
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
    <View style={[styles.bottomNav, styles.bottomNavPosition]}>
        <View style={[styles.menuList, styles.menuListFlexBox]}>

          <View style={styles.menuLayout}>
            <Pressable
                style={styles.menu5}
                onPress={() => navigation.navigate("Home1")}>
                  <Image
                    style={styles.frameIcon9}
                    resizeMode="cover"
                    source={props.currentRoute=='Home'?require("../assets/frame12.png"):require("../assets/frame25.png")}/>
                  <Text style={props.currentRoute=='Home'?[styles.home1, styles.home1Typo]:[styles.requests, styles.home1Typo]}>Home</Text>
                </Pressable>
          </View>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={styles.frameIcon9}
              resizeMode="cover"
              source={props.currentRoute=='Requests'?require("../assets/frame74.png"):require("../assets/frame13.png")}
            />
            <Text style={props.currentRoute=='Requests'?[styles.home1, styles.home1Typo]:[styles.requests, styles.home1Typo]} >Tickets</Text>
          </Pressable>
          <Pressable
            style={[styles.menu3, styles.menuLayout]}
            onPress={() => navigation.navigate("MOREInformaion11")}
          >
            <View style={styles.menu31}>
              <View style={[styles.container, styles.parentFlexBox]}>
                <Image
                  style={styles.frameIcon9}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          
          {isCustomer?<Pressable
             style={[styles.menu5, styles.menuLayout]}
            onPress={() => navigation.navigate("Profile1")}
          >
            <Image
              style={[styles.frameIcon9,{left:"25%"}]}
              resizeMode="cover"
              source={props.currentRoute=='Profile'?require("../assets/liuser2.png"):require("../assets/liuser.png")}
            />
            <Text style={props.currentRoute=='Profile'?[styles.home1, styles.home1Typo]:[styles.requests, styles.home1Typo]}>My Account</Text>
          </Pressable> :
          <Pressable
             style={[styles.menu5, styles.menuLayout]}
            onPress={() => navigation.navigate("FrontOffice")}
          >
            <Image
              style={[styles.frameIcon9,{left:"25%"}]}
              resizeMode="cover"
              source={props.currentRoute=='FrontOffice'?require("../assets/frameFront9.png"):require("../assets/frameFront51.png")}
            />
            <Text style={props.currentRoute=='FrontOffice'?[styles.home1, styles.home1Typo]:[styles.requests, styles.home1Typo]}>Front Office</Text>
          </Pressable>}


          <Pressable
            style={styles.menu2}
            onPress={() => navigation.navigate("Reports")}
          >
            <Image
              style={styles.frameIcon9}
              resizeMode="cover"
              source={props.currentRoute=='Reports'?require("../assets/frame27.png"):require("../assets/frame14.png")}
            />
            <Text style={props.currentRoute=='Reports'?[styles.home1, styles.home1Typo]:[styles.requests, styles.home1Typo]}>Reports</Text>
          </Pressable>
        </View>
        {/* <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View> */}
      </View>
  );
};

const styles = StyleSheet.create({
    bottomNav: {
        backgroundColor: Color.colorWhitesmoke_200,
        height: 70,
        width: "100%",
        overflow: "hidden",
      },
    bottomNavPosition: {
        bottom: 0,
        width: "100%",
        position: "absolute",
      },
    menuList: {
        bottom: 0,
        paddingHorizontal: Padding.p_xs,
        paddingBottom: "5%",
        width: "100%",
        backgroundColor: Color.whait,
        justifyContent: "center",
        flexDirection: "row",
        right: 0,
        position: "absolute",
    },
    menuListFlexBox: {
        alignItems: "flex-end",
        justifyContent: "center",
      },
      menuLayout: {
        width: "20%",
        alignItems: "flex-start",
      },
      menuLayout2: {
        width: "15%",
        alignItems: "flex-start",
      },
      menuLayout3: {
        width: "25%",
        alignItems: "flex-start",
      },
      menu5: {
        width: 58,
        alignItems: "center",
        marginLeft:"2%"
      },
      frameIcon9: {
        height: 24,
        width: 24,
        overflow: "hidden",
      },
      home1: {
        color: Color.praimary,
        fontWeight: "700",
      },
      home1Typo: {
        marginTop: 6,
        lineHeight: 15,
        textAlign: "center",
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.dGBaysan,
        width:"100%"
      },
      requests: {
        color: Color.colorLightsteelblue_100,
        fontWeight: "300",
      },
      menu3: {
        marginLeft: "2%",
      },
      menu31: {
        height: 52,
        width: 74,
        alignItems: "center",
      },
      container: {
        borderColor: Color.whait,
        borderWidth: 4,
        padding: Padding.p_sm,
        borderRadius: Border.br_81xl,
        borderStyle: "solid",
        backgroundColor: Color.praimary,
      },
      parentFlexBox: {
        justifyContent: "flex-end",
        flexDirection: "row",
      },
      menu2: {
        marginLeft: "2%",
        alignItems: "center",
        flex: 1,
      },
      iphoneIndicator: {
        width: "100%",
        height: 30,
        backgroundColor: Color.whait,
        right: 0,
      },
      line: {
        bottom: 8,
        backgroundColor: Color.colorGray_200,
        width: "40%",
        borderRadius: Border.br_81xl,
        height: 5,
        position: "absolute",
        left:"33%"
      },


});

export default AfterLoginFooter;
