import React, { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, Image, View, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Home6 from "../components/Home6";
// import Home from "../components/Home";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from '@react-navigation/native';

const SideMenu2 = () => {
  const [mediumButtonContainer3Visible, setMediumButtonContainer3Visible] =
    useState(false);
  const [mediumButtonContainer5Visible, setMediumButtonContainer5Visible] =
    useState(false);
  const [mediumButtonContainer7Visible, setMediumButtonContainer7Visible] =
    useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [frameIcon14Visible, setFrameIcon14Visible] = useState(false);

  const openMediumButtonContainer3 = useCallback(() => {
    setMediumButtonContainer3Visible(true);
  }, []);

  const closeMediumButtonContainer3 = useCallback(() => {
    setMediumButtonContainer3Visible(false);
  }, []);

  const openMediumButtonContainer5 = useCallback(() => {
    setMediumButtonContainer5Visible(true);
  }, []);

  const closeMediumButtonContainer5 = useCallback(() => {
    setMediumButtonContainer5Visible(false);
  }, []);

  const openMediumButtonContainer7 = useCallback(() => {
    setMediumButtonContainer7Visible(true);
  }, []);

  const closeMediumButtonContainer7 = useCallback(() => {
    setMediumButtonContainer7Visible(false);
  }, []);

  const openFrameIcon14 = useCallback(() => {
    setFrameIcon14Visible(true);
  }, []);

  const closeFrameIcon14 = useCallback(() => {
    setFrameIcon14Visible(false);
  }, []);
  
  const [logUserName, setLogUserName] = useState('');
  const checkLoginDetails = async () => {
    try {
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
        setLogUserName(userInfo.userName);
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };
  useEffect(() => {
    checkLoginDetails()
  }, []);
  const onPressLogout = async () => {
    AsyncStorage.setItem('isAlreadyLoggedIn', 'false');
    var items = ['userInfo'];
    AsyncStorage.multiRemove(items);
    //navigation.navigate("Login");
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }], // 'Login' is the name of your login screen
      })
    );
  };

  return (
    <>
      <View style={styles.sideMenu}>

        <Pressable
          style={[styles.welcomeParent, styles.groupChildLayout1]}
          onPress={() => navigation.navigate("Profile1")}
        >
          <Text style={[styles.welcome, styles.logOutTypo]}>Welcome</Text>
          <Text style={[styles.assemAlMohammadi, styles.logOutTypo]}>
            {logUserName}
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1671.png")}
          />
        </Pressable>

        <View style={[styles.sideMenuChild, styles.sideLayout]} />

        <View style={[styles.groupParent, styles.groupLayout1]}>
          <View style={[styles.rectangleWrapper, styles.groupLayout1]}>
            <View style={[styles.groupItem, styles.groupLayout1]} />
          </View>
          <Pressable
            style={styles.menu1}
            onPress={() => navigation.navigate("Home1")}
          >
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame37.png")}
            />
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.menu2}
          onPress={() => navigation.navigate("CallUs1")}
        >
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame38.png")}
          />
          <Text style={[styles.aboutUs, styles.homeTypo]}>About Us</Text>
        </Pressable>
        <Pressable
          style={styles.menu3}
          onPress={() => navigation.navigate("CallUs")}
        >
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame39.png")}
          />
          <Text style={[styles.aboutUs, styles.homeTypo]}>Contact Us</Text>
        </Pressable>

        <Pressable
          style={styles.menu31}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={styles.frameIcon3}
            resizeMode="cover"
            source={require("../assets/frame51.png")}
          />
          <Text style={[styles.aboutUs, styles.homeTypo]}>Change Language</Text>
        </Pressable>

        <View style={[styles.sideMenuItem, styles.sideLayout]} />
        <View style={[styles.sideMenuInner, styles.sideLayout]} />
        <Pressable
          style={styles.encapsulatedGroupParent}
          onPress={onPressLogout}
        >
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/encapsulated-group7.png")}
          />
          <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
        </Pressable>

        <View style={styles.poweredByParent}>
          <Text style={styles.poweredBy}>Powered by</Text>
          <View style={[styles.encapsulatedGroup, styles.logoLayout]}>
            <View style={[styles.logo, styles.logoLayout]}>
              <Image
                style={[styles.logo, styles.logoLayout]}
                resizeMode="cover"
                source={require("../assets/logo-1.png")}
              />
            </View>
          </View>
        </View>
        
        
        
        <Pressable
          style={{width:150,height:150,position:'absolute',zIndex:1,left:260,top:100}}
          onPress={() => navigation.navigate("Home1")}>                                         
          {/* <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-238694.png")}/> */}
            <Text style={{fontSize:30,color:"#fff"}}>X</Text>
        </Pressable>
        
        
        
        
        {/* <View style={[styles.webViewbottom, styles.containerPosition]}>
          <View style={[styles.homeIndicator, styles.parentFlexBox]}>
            <View style={styles.homeIndicator1} />
          </View>
        </View> */}
      </View>
      
      <Pressable
          style={styles.home1}
          onPress={() => navigation.navigate("Home1")}
        >
          
          
          
        </Pressable>

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer3Visible}
      >
        <View style={styles.mediumButtonContainer3Overlay}>
          <Pressable
            style={styles.mediumButtonContainer3Bg}
            onPress={closeMediumButtonContainer3}
          />
          <Home6 onClose={closeMediumButtonContainer3} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer5Visible}
      >
        <View style={styles.mediumButtonContainer5Overlay}>
          <Pressable
            style={styles.mediumButtonContainer5Bg}
            onPress={closeMediumButtonContainer5}
          />
          <Home6 onClose={closeMediumButtonContainer5} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer7Visible}
      >
        <View style={styles.mediumButtonContainer7Overlay}>
          <Pressable
            style={styles.mediumButtonContainer7Bg}
            onPress={closeMediumButtonContainer7}
          />
          <Home6 onClose={closeMediumButtonContainer7} />
        </View>
      </Modal>

      {/* <Modal animationType="fade" transparent visible={frameIcon14Visible}>
        <View style={styles.frameIcon14Overlay}>
          <Pressable style={styles.frameIcon14Bg} onPress={closeFrameIcon14} />
          <Home onClose={closeFrameIcon14} />
        </View>
      </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 45,
    position: "absolute",
  },
  logOutTypo: {
    fontSize: FontSize.size_sm,
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  sideLayout: {
    height: 1,
    width: "50%",
    borderTopWidth: 0.5,
    borderColor: Color.whait,
    borderStyle: "solid",
    right: 179,
    position: "absolute",
  },
  groupLayout1: {
    height: 36,
    left: 0,
    width: 196,
    position: "absolute",
  },
  homeTypo: {
    lineHeight: 16,
    marginLeft: 8,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  logoLayout: {
    height: 29,
    width: 100,
  },
  containerPosition: {
    left: "30%",
    position: "absolute",
  },
  parentPosition1: {
    left: 13,
    flexDirection: "row",
    position: "absolute",
  },
  recentTicketsTypo: {
    fontSize: FontSize.size_smi_8,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  textLayout: {
    height: 13,
    display: "flex",
    alignItems: "center",
  },
  text1Typo: {
    top: 38,
    height: 13,
    display: "flex",
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  projectNameTypo: {
    width: 53,
    color: Color.black,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  text2Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_xs_2,
    lineHeight: 20,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIcon4SpaceBlock: {
    marginLeft: 4.8,
    overflow: "hidden",
  },
  groupChildPosition2: {
    width: 73,
    borderTopWidth: 0.8,
    left: 101,
    height: 1,
    borderStyle: "solid",
    top: 4,
    position: "absolute",
  },
  groupChildPosition1: {
    left: 23,
    width: 73,
    borderTopWidth: 0.8,
    height: 1,
    borderStyle: "solid",
    top: 4,
    position: "absolute",
  },
  groupChildLayout: {
    height: 8,
    width: 8,
    top: 0,
    position: "absolute",
  },
  completedTypo: {
    width: 42,
    justifyContent: "center",
    top: 11,
    color: Color.black,
    height: 13,
    display: "flex",
    fontSize: FontSize.size_5xs,
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  mediumLayout: {
    paddingHorizontal: 11,
    width: "100%",
    borderWidth: 1.6,
    left: 143,
    justifyContent: "center",
    paddingVertical: 4,
    top: 114,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    borderStyle: "solid",
    position: "absolute",
  },
  frameIconLayout: {
    width: 13,
    height: 13,
  },
  rectangleLayout: {
    height: 152,
    width: "100%",
  },
  completed1Typo: {
    color: Color.gray,
    width: 42,
    justifyContent: "center",
    top: 11,
    height: 13,
    display: "flex",
    fontSize: FontSize.size_5xs,
    alignItems: "center",
    fontWeight: "300",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  parentFlexBox: {
  },
  rectangleParentLayout: {
    height: 139,
    width: "100%",
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    height: 139,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: "100%",
    right: 0,
  },
  parentLayout: {
    width: "100%",
    right: 7,
    height: 13,
    position: "absolute",
  },
  parentPosition: {
    top: 3,
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  groupLayout: {
    width: "100%",
    height: 6,
  },
  groupChildPosition: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
  },
  groupChildPosition3: {
    borderRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  framePosition: {
    left: 6,
    position: "absolute",
  },
  workTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 12,
    width: 12,
    borderRadius: Border.br_9xs,
  },
  textTypo2: {
    fontSize: FontSize.size_5xs_2,
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo1: {
    width: 14,
    fontSize: FontSize.size_5xs_2,
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  welcomePosition: {
    top: 4,
    position: "absolute",
  },
  polygonParentShadowBox: {
    elevation: 2.04,
    shadowRadius: 2.04,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 11,
    width: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  textTypo: {
    lineHeight: 5,
    fontSize: FontSize.size_8xs_8,
    right: 6,
    top: 2,
    justifyContent: "center",
    fontWeight: "600",
    color: Color.black,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  welcome: {
    left: "30%",
    textAlign: "center",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    top: 4,
    position: "absolute",
  },
  assemAlMohammadi: {
    textAlign: "left",
    fontWeight: "300",
    left: "30%",
    top: 25,
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChild: {
    width: 45,
    top: 0,
  },
  welcomeParent: {
    left: "5%",
    width: "55%",
    height: 45,
    top: 104,
  },
  sideMenuChild: {
    top: 180,
    left:"5%"
  },
  groupItem: {
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    backgroundColor: Color.whait,
    top: 0,
  },
  rectangleWrapper: {
    top: 0,
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home: {
    marginLeft: 8,
    color: Color.praimary,
  },
  menu1: {
    top: 5,
    right: 99,
    width: 81,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupParent: {
    top: 220,
  },
  aboutUs: {
    marginLeft: 8,
    color: Color.whait,
  },
  menu2: {
    top: 290,
    left:"5%",
    width: 92,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  menu3: {
    top: 350,
    left:"5%",
    width: 108,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  sideMenuItem: {
    top: 470,
    left:"5%"
  },
  sideMenuInner: {
    top: 580,
    left:"5%"
  },
  logOut: {
    textAlign: "left",
    marginLeft: 8,
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  encapsulatedGroupParent: {
    top: 510,
    left:"5%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  poweredBy: {
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontWeight: "300",
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  logo: {
    top: 0,
    right: 0,
    position: "absolute",
  },
  encapsulatedGroup: {
    marginTop: 12,
    overflow: "hidden",
  },
  poweredByParent: {
    top: 600,
    left: "15%",
    alignItems: "center",
    position: "absolute",
  },
  frameIcon3: {
    height: 22,
    width: 22,
    overflow: "hidden",
  },
  menu31: {
    top: 410,
    left:"5%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupIcon: {
    left: 252,
    width: 18,
    height: 18,
    top: 104,
    position: "absolute",
  },
  icon: {
    top: 32,
    height: 25,
    width: 69,
  },
  recentTickets: {
    width: 102,
    height: 19,
    textTransform: "capitalize",
    lineHeight: 20,
  },
  
  
 
  
 
  lineView: {
    top: 64,
    borderTopWidth: 0.4,
    height: 0,
    borderColor: Color.gray,
    width: 275,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  text2: {
    textAlign: "right",
    color: Color.whait,
  },
  frameIcon4: {
    width: 13,
    height: 13,
  },
  mediumButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    top: 114,
    borderRadius: Border.br_5xs,
    left: 13,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.praimary,
  },
  groupChild1: {
    borderColor: Color.colorMediumseagreen,
  },
  groupChild2: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: 173,
  },
  groupChild3: {
    left: 95,
  },
  groupChild4: {
    left: 17,
  },
  incomplete: {
    right: 156,
  },
  inProgress: {
    right: 79,
  },
  completed: {
    right: 0,
  },
  lineParent: {
    top: 77,
    left: 38,
    width: 199,
    height: 24,
    position: "absolute",
  },
  feedback: {
    width: 50,
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.praimary,
  },
  frameIcon5: {
    marginLeft: 3.2,
    overflow: "hidden",
  },
  mediumButton1: {
    borderColor: Color.praimary,
  },
  groupChild6: {
    borderColor: Color.gray,
  },
  groupChild7: {
    borderColor: Color.gray,
  },
  inProgress1: {
    right: 79,
  },
  completed1: {
    right: 0,
  },
  mediumButtonContainer3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  closeTicket: {
    color: Color.colorRed_100,
    width: 63,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  mediumButton3: {
    borderColor: Color.colorRed_100,
  },
  rectangleGroup: {
    marginTop: 19.21,
  },
  mediumButtonContainer5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mediumButtonContainer7Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer7Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupContainer: {
    marginLeft: -30.2,
    top: 470,
    height: 204,
  },
  frameIcon13: {
    width: 19,
    marginLeft: 16.01,
    height: 19,
    overflow: "hidden",
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcome1: {
    fontSize: FontSize.size_xs_2,
    color: Color.praimary,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  assemAlMohammadi1: {
    color: Color.ternary,
    fontSize: FontSize.size_3xs_6,
    fontWeight: "300",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  assemAlMohammadiWrapper: {
    marginTop: 3.2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcomeGroup: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameChild: {
    width: 36,
    marginLeft: 6.4,
    height: 36,
  },
  frameContainer: {
    marginLeft: 76.05,
    flexDirection: "row",
  },
  frameParent: {
    top: 63,
    alignItems: "center",
  },
  groupChild25: {
    borderRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.whait,
  },
  completed4: {
    right: 211,
    width: 48,
    color: Color.black,
    fontSize: FontSize.size_3xs_6,
    lineHeight: 20,
    textAlign: "left",
    top: 0,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text12: {
    height: 6,
    width: 16,
    justifyContent: "center",
    fontSize: FontSize.size_3xs_6,
    lineHeight: 20,
    color: Color.praimary,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  groupChild26: {
    width: 152,
    height: 6,
    left: 0,
  },
  groupChild27: {
    width: 51,
    height: 6,
    left: 101,
    borderRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.praimary,
  },
  rectangleParent2: {
    left: 0,
    width: 152,
    top: 0,
    position: "absolute",
  },
  encapsulatedGroup1: {
    marginLeft: 4.8,
    overflow: "hidden",
  },
  text13: {
    width: 26,
    lineHeight: 7,
    height: 6,
    marginLeft: 4.8,
    display: "flex",
    fontSize: FontSize.size_3xs_6,
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  parent: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    right: 0,
  },
  completedParent: {
    top: 45,
  },
  text14: {
    right: 187,
    height: 6,
    width: 16,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_3xs_6,
    lineHeight: 20,
    color: Color.praimary,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  groupChild29: {
    left: 43,
    width: 109,
    height: 6,
    backgroundColor: Color.praimary,
  },
  encapsulatedGroup2: {
    left: 77,
    top: 3,
    position: "absolute",
    overflow: "hidden",
  },
  text15: {
    width: 21,
    lineHeight: 7,
    height: 6,
    top: 3,
    display: "flex",
    fontSize: FontSize.size_3xs_6,
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    right: 0,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  incompleteParent: {
    top: 70,
  },
  out: {
    textTransform: "capitalize",
  },
  outOfScopeContainer1: {
    width: "100%",
  },
  outOfScopeContainer: {
    right: 205,
    width: 54,
    color: Color.black,
    fontSize: FontSize.size_3xs_6,
    lineHeight: 20,
    textAlign: "left",
    top: 0,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChild31: {
    left: 142,
    width: 10,
    height: 6,
    backgroundColor: Color.praimary,
  },
  outOfScopeParent: {
    top: 96,
  },
  allServicesProvided: {
    color: Color.black,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  text18: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  allServicesProvidedContainer: {
    marginLeft: -129.3,
    width: 261,
    top: 13,
    fontSize: FontSize.size_3xs_6,
    height: 19,
    lineHeight: 20,
    textAlign: "center",
  },
  groupIcon1: {
    height: "5.2%",
    width: "4.66%",
    top: "87.87%",
    right: "47.52%",
    bottom: "6.93%",
    left: "47.82%",
    position: "absolute",
  },
  rectangleParent1: {
    top: 274,
  },
  groupChild32: {
    elevation: 4,
    shadowRadius: 4,
    height: 139,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    width: 275,
    right: 0,
  },
  unfinishedServices: {
    width: 120,
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_smi_8,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  text19: {
    color: Color.color,
    width: 26,
    marginLeft: 6.4,
    fontSize: FontSize.size_5xs,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  jeddahYachtClub2: {
    width: 95,
    marginTop: 3.2,
    color: Color.black,
    textTransform: "capitalize",
    fontWeight: "300",
  },
  frameView: {
    top: 13,
  },
  frameItem: {
    backgroundColor: Color.praimary,
  },
  electricalWork: {
    width: 52,
    marginLeft: 3.2,
    color: Color.black,
    fontWeight: "300",
  },
  frameParent4: {
    alignItems: "center",
    flexDirection: "row",
  },
  text20: {
    marginLeft: 0.8,
    width: 16,
  },
  frameInner: {
    backgroundColor: Color.binary,
  },
  plumbingWork: {
    marginLeft: 3.2,
    fontWeight: "300",
  },
  text21: {
    marginLeft: 0.8,
  },
  frameParent5: {
    marginTop: 12.81,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.colorChocolate,
  },
  other: {
    marginLeft: 3.2,
    color: Color.black,
    width: 22,
    fontWeight: "300",
  },
  rectangleParent8: {
    width: 37,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild2: {
    backgroundColor: Color.colorGold,
  },
  janitorialWork: {
    width: 54,
    marginLeft: 3.2,
    color: Color.black,
    fontWeight: "300",
  },
  text23: {
    width: 16,
  },
  frameChild3: {
    backgroundColor: Color.ternary,
  },
  hvacWork: {
    width: 43,
    marginLeft: 3.2,
    color: Color.black,
    fontWeight: "300",
  },
  text24: {
    width: 17,
  },
  frameParent7: {
    marginLeft: 12.81,
  },
  frameParent2: {
    flexDirection: "row",
  },
  vectorIcon: {
    right: 3,
    width: 61,
    height: 61,
  },
  polygonIcon: {
    right: 2,
    width: 4,
    height: 4,
    top: 11,
    position: "absolute",
  },
  groupChild33: {
    borderRadius: 1,
    height: 9,
    width: 16,
    backgroundColor: Color.whait,
    top: 0,
    right: 0,
    position: "absolute",
  },
  text25: {
    height: 5,
    width: 6,
  },
  polygonParent: {
    height: 11,
    right: 53,
    top: 25,
  },
  text26: {
    width: 5,
    height: 4,
  },
  polygonGroup: {
    top: 48,
    right: 8,
    height: 11,
  },
  polygonContainer: {
    top: 50,
    right: 37,
    height: 11,
  },
  polygonParent1: {
    right: 31,
    height: 11,
    top: 0,
  },
  polygonParent2: {
    top: 16,
    height: 11,
    right: 0,
  },
  vectorParent: {
    height: 64,
    width: 69,
    marginLeft: 8,
  },
  frameParent1: {
    top: 58,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameIcon14Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameIcon14Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    left: 255,
    top: 13,
    position: "absolute",
  },
  rectangleParent5: {
    top: 123,
  },
  home1: {
    marginTop: -325,
    top: "50%",
    left: 289,
    borderTopLeftRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: Color.colorGray_100,
    width: 86,
    height: 650,
    position: "absolute",
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
    height: 11,
    width: 24,
    top: 0,
    right: 0,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    height: 11,
    width: 17,
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
    height: 21,
    width: 54,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    overflow: "hidden",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    bottom: 0,
    width: "100%",
    height: 34,
    backgroundColor: Color.praimary,
  },
  sideMenu: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.praimary,
  },
});

export default SideMenu2;
