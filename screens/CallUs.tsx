import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, Border, Color, Padding, FontSize } from "../GlobalStyles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import WebServer from "../Utils/WebServer";

const CallUs = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact1, setContact1] = useState('');
  const [contact2, setContact2] = useState('');
  const [website, setWebsite] = useState('');
  const [unifiedNumber, setUnifiedNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  
  const getContactData = async () => {
    WebServer.getDataWithOutToken('FomMobDashboardContents/getContactUs','', getContactCallback);
  };
  const getContactCallback = response => {
    setTitle(response.titleEng);
    setDescription(response.messageEng);
    setContact1(response.contact1);
    setContact2(response.contact2);
    setWebsite(response.website);
    setUnifiedNumber(response.unifiedNumber);
    setEmailId(response.emailId);
  }

  useEffect(() => {
    getContactData()
  }, []);

  return (
    <View style={styles.callUs}>

     {/* <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Pressable
              style={styles.arrow213}
              onPress={() => navigation.navigate("Home1")}
            >
            <Image
                      style={[styles.arrow21, styles.arrow21Position]}
                      resizeMode="cover"
                      source={require("../assets/arrow-2-1.png")}
                    />
            </Pressable>
        <Text style={[styles.contactUs, styles.contactUsFlexBox]}>
          Contact us
        </Text>
        <View style={styles.groupParent}>
          <View style={styles.rectanglePosition}>
            <View style={[styles.rectangleView, styles.rectanglePosition]} />
          </View>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View> */}

      
      {/* <View style={[styles.navBar, styles.groupPosition]}>
        <View style={[styles.webViewbottom, styles.groupPosition]}>
          <View style={[styles.homeIndicator, styles.homeIndicatorFlexBox]}>
            <View style={styles.homeIndicator1} />
          </View>
        </View>
      </View> */}

      <Image
        style={[styles.callUsChild, styles.callUsChildPosition]}
        resizeMode="cover"
        source={require("../assets/group-238648.png")}
      />

      
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />

        <Text style={[styles.doYouNeed, styles.doYouNeedTypo]}>
         {title}
        </Text>
        <Text style={styles.ourExpertsAre} numberOfLines={3}>
          {description}
        </Text>

        <Text style={[styles.contactUsOn, styles.orSendYourTypo]}>
          Contact us on:
        </Text>

        <View style={styles.frameParent}>
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame21.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{contact1}</Text>
          </View>
          <View style={[styles.frameContainer, styles.parentSpaceBlock]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame21.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>{contact2}</Text>
          </View>
          <View style={[styles.frameContainer, styles.parentSpaceBlock]}>
            <Image
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/svgexport17-18-1.png")}
            />
            <Text style={[styles.wwwprofmcomsa, styles.textTypo]}>
             {website}
            </Text>
          </View>
          <View style={[styles.unifiedNumberParent, styles.contactUsFlexBox]}>
            <Text style={styles.unifiedNumber}>Unified number :</Text>
            <Text style={[styles.text2, styles.textTypo]}>{unifiedNumber}</Text>
          </View>
        </View>

        <View style={styles.groupItem} />

        <Text style={[styles.orSendYour, styles.orSendYourTypo]}>
          Or send your inquiry to:
        </Text>
        <View style={[styles.svgexport17171Parent, styles.frameGroupFlexBox]}>
          <Image
            style={styles.map3IconLayout}
            resizeMode="cover"
            source={require("../assets/svgexport17-17-1.png")}
          />
          <Text style={[styles.infoprofmco, styles.textTypo]}>
            {emailId}
          </Text>
        </View>
       
        
      </View>
      
     
    </View>
  );
};

const styles = StyleSheet.create({
  map3IconLayout: {
    height: 15,
    width: 15,
    overflow: "hidden",
    top:5
  },
  groupPosition: {
    width: "100%",
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  homeIndicatorFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  doYouNeedTypo: {
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    height: 40,
    position: "absolute",
  },
  groupChildLayout: {
    width: "100%",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  arrow21Position: {
    top: 20,
    height: 25,
    position: "absolute",
  },
  orSendYourTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    height: 30,
    display: "flex",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    alignItems: "center",
    position: "absolute",
    left:"5%"
  },
  frameGroupFlexBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textTypo: {
    marginLeft: 8,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginTop: 16,
    flexDirection: "row",
  },
  contactUsFlexBox: {
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  callUsChildPosition: {
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Layout: {
    width: 24,
    position: "absolute",
  },
  rectanglePosition: {
    height: 48,
    width: "100%",
    top: 0,
    left: "2%",
    position: "absolute",
  },
  map3Icon: {
    top: -229,
    right: 90,
    position: "absolute",
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
    height: 34,
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    top: 0,
    height: 34,
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    top: 778,
    height: 34,
    position: "absolute",
  },
  doYouNeed: {
    top: "50%",
    textTransform: "capitalize",
    width: "100%",
    height: 40,
    textAlign: "left",
    lineHeight: 40,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: 18,
    left:"2%"
  },
  ourExpertsAre: {
    top: 22,
    color: Color.ternary,
    width: "90%",
    height: 40,
    fontSize: 13,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 40,
    alignItems: "flex-start",
    position: "absolute",
    left:"5%",
    flexWrap:'wrap',
    flexDirection:'row'
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: Color.whait,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    position: "absolute",
    right: 0,
    height: "50%",
    width: "100%",
  },
  contactUsOn: {
    top: 60,
    width: "100%",
    height: 30,
  },
  orSendYour: {
    top: 270,
    width: "100%",
    height: 40,
  },
  infoprofmco: {
    width: "90%",
    height: 30,
  },
  svgexport17171Parent: {
    top: 295,
    left: "2%",
    position: "absolute",
  },
  groupItem: {
    top: 260,
    borderStyle: "solid",
    borderColor: Color.color2,
    borderTopWidth: 0.5,
    width: "100%",
    height: 1,
    opacity: 0.5,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  text: {
    width: "90%",
    height: 25,
  },
  frameGroup: {
    alignItems: "flex-start",
    left:"25%"
  },
  frameContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width:"100%",
    left:"30%"
  },
  wwwprofmcomsa: {
    width: 200,
    height: 30,
  },
  svgexport17181Parent: {
    alignItems: "center",
  },
  unifiedNumber: {
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
  },
  text2: {
    width: "60%",
    height: 25,
  },
  unifiedNumberParent: {
    flexDirection: "row",
    width:"100%",
    left:"30%"
  },
  frameParent: {
    left: 5,
    top: 100,
    position: "absolute",
  },
  rectangleParent: {
    top: "45%",
    left: "2%",
    position: "absolute",
  },
  groupInner: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    height: 70,
    backgroundColor: Color.whait,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 0,
    position: "absolute",
    width: "100%",
  },
  notchIcon: {
    top: -2,
    right: 76,
    bottom: 7,
    left: 76,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    height: 11,
    right: 0,
    top: 0,
  },
  wifiIcon: {
    height: 11,
    width: 15,
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
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    overflow: "hidden",
  },
  arrow21: {
    left: "5%",
    width: 24,
    overflow: "hidden",
  },
  arrow213: {
    left: "5%",
    width: 25,
    top:"5%",
    height: 25,
    zIndex:2
  },
  contactUs: {
    lineHeight: 30,
    textAlign: "center",
    justifyContent: "center",
    width: "95%",
    top: 20,
    height: 30,
    left:"5%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  rectangleView: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  icon: {
    top: 3,
    left: 40,
    width: 100,
    height: 42,
    position: "absolute",
  },
  groupParent: {
    top: 50,
    height: 48,
    width: "50%",
    left:"25%",
    position: "absolute",
  },
  rectangleGroup: {
    height: 50,
    width: "100%",
    top: 0,
  },
  callUsChild: {
    top: 80,
    width: 200,
    height: 200,
    left:"25%"
  },
  callUs: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
});

export default CallUs;
