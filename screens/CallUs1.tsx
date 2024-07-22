import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, Border, Color, Padding, FontSize } from "../GlobalStyles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import WebServer from "../Utils/WebServer";

const CallUs1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const getAboutUsData = async () => {
    WebServer.getDataWithOutToken('FomMobDashboardContents/getAboutUs','', getAboutUsCallback);
  };
  const getAboutUsCallback = response => {
    setTitle(response.titleEng);
    setDescription(response.messageEng);
  }

  useEffect(() => {
    getAboutUsData()
  }, []);
  return (
    <View style={styles.callUs}>
      
      {/* <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
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
       
        <Text style={[styles.whoWeAre, styles.profmTypo]}>Who we are</Text>
        <View style={styles.groupParent}>
          <View style={styles.groupItemPosition}>
            <View style={[styles.groupItem, styles.groupItemPosition]} />
          </View>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/3-1-12.png")}
          />
        </View>
      </View> */}

      <Image
        style={[styles.callUsChild, styles.navBarPosition]}
        resizeMode="cover"
        source={require("../assets/group-238649.png")}
      />


      

      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={styles.someInformationAbout}>{title}</Text>
        <Text style={[styles.profmAimsToContainer, styles.whoWeAreFlexBox]}>
          <Text style={styles.profmAimsToContainer1}>
            {description}
            {/* <Text style={[styles.profm, styles.profmTypo]}>ProFM</Text> */}
            {/* <Text style={styles.aimsToMeet}>{` ProFM aims to meet the administrative and operational needs of the public and private sectors in the Kingdom, keep pace with growth and excellence in providing service to customers, continue developing logistical services, and care for its human cadres.Based on our national role in the logistics services sector, and to strengthen our leading position, we have accompanied with confident developmental steps the Kingdom’s march in the National Transformation Program 2020. We have established our internal program for comprehensive modernization and strategic expansion, and we have set future goals to keep pace with the Kingdom’s Vision 2030 and achieve its aspirations at all levels.`}</Text> */}
           </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarLayout: {
    height: 34,
    width: 375,
    marginLeft: -187.5,
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  groupInnerPosition: {
    right: 0,
    top: 0,
  },
  arrow21Position: {
    top: 20,
    height: 25,
    position: "absolute",
  },
  profmTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.dGBaysan,
  },
  groupItemPosition: {
    height: 48,
    width: "100%",
    top: 0,
    left: "2%",
    position: "absolute",
  },
  navBarPosition: {
    position: "absolute",
  },
  groupLayout: {
    height: "50%",
    width: "96%",
    position: "absolute",
    left:"2%"
  },
  whoWeAreFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  map3Icon: {
    top: -229,
    right: 90,
    height: 15,
    width: 15,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
    height: 34,
  },
  webViewbottom: {
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    backgroundColor: Color.colorGray_100,
  },
  navBar: {
    position: "absolute",
  },
  someInformationAbout: {
    top: "2%",
    lineHeight: 40,
    textTransform: "capitalize",
    width: "100%",
    height: 40,
    display: "flex",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontSize: 18,
    alignItems: "center",
    position: "absolute",
    left:"2%"
  },
  groupChild: {
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
    width: 24,
    height: 11,
    position: "absolute",
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
  whoWeAre: {
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
  groupItem: {
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
  rectangleParent: {
    height: 50,
    width: "100%",
    top: 0,
  },
  callUsChild: {
    top: 140,
    width: 200,
    height: 200,
    left:"25%"
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 5,
    elevation: 5,
    right: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  profm: {
    textTransform: "uppercase",
  },
  aimsToMeet: {
    fontFamily: FontFamily.dGBaysan,
    fontSize:13,
  },
  profmAimsToContainer1: {
    width: "96%",
  },
  profmAimsToContainer: {
    top: "15%",
    fontSize: FontSize.size_xs,
    lineHeight: 20,
    color: Color.colorLightsteelblue_100,
    width: "96%",
    height: "90%",
    textAlign: "left",
    display: "flex",
    position: "absolute",
    left:"3%"
  },
  rectangleGroup: {
    top: "50%",
    right: 16,
  },
  callUs: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default CallUs1;

