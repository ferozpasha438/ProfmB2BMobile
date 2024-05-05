import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Home3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
      <View style={styles.iphoneXOrNewer}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch2.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery2.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi5.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal2.png")}
          />
          <Image
            style={[styles.recordingIndicatorIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side2.png")}
        />
      </View>
      <Text style={[styles.recentRequests, styles.seeAllPosition]}>
        Recent requests
      </Text>
      <Text style={[styles.seeAll, styles.allLayout]}>See all</Text>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame10.png")}
        />
        <View style={[styles.frameGroup, styles.parentFlexBox]}>
          <View style={[styles.welcomeParent, styles.menuListFlexBox]}>
            <Text style={styles.welcome}>Welcome</Text>
            <View style={styles.assemAlMohammadiWrapper}>
              <Text style={styles.assemAlMohammadi}>Assem Al-Mohammadi</Text>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-167.png")}
          />
        </View>
      </View>
      <View style={[styles.homeChild, styles.childShadowBox]} />
      <Text style={[styles.completed, styles.completedTypo]}>Completed</Text>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.textTypo2]}>35</Text>
        <View style={[styles.encapsulatedGroup, styles.text1SpaceBlock]}>
          <View style={[styles.rectangleParent, styles.groupChildPosition2]}>
            <View style={[styles.groupChild, styles.groupChildBg]} />
            <View style={[styles.groupItem, styles.homeChildLayout]} />
          </View>
        </View>
        <Text style={[styles.text1, styles.textTypo1]}>35%</Text>
      </View>
      <Text style={[styles.incomplete, styles.completedTypo]}>Incomplete</Text>
      <Text style={[styles.text2, styles.textPosition]}>65</Text>
      <View style={[styles.encapsulatedGroup1, styles.textPosition]}>
        <View style={[styles.rectangleParent, styles.groupChildPosition2]}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
          <View style={[styles.rectangleView, styles.homeChildLayout]} />
        </View>
      </View>
      <Text style={[styles.text3, styles.textPosition]}>65%</Text>
      <Text style={[styles.allServicesProvidedContainer, styles.allLayout]}>
        <Text
          style={styles.allServicesProvided}
        >{`All services provided since the beginning of the contract `}</Text>
        <Text style={styles.text4}>(100)</Text>
      </Text>
      <View style={styles.homeItem} />
      <View style={[styles.rectangleContainer, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Text style={[styles.unfinishedServices, styles.vectorIconPosition]}>
          Unfinished services
        </Text>
        <View style={styles.frameContainer}>
          <View style={styles.frameView}>
            <View style={[styles.frameItem, styles.frameChildLayout]} />
            <Text style={[styles.other, styles.workTypo]}>Other</Text>
          </View>
          <View style={styles.rectangleParent1}>
            <View style={[styles.frameInner, styles.frameChildLayout]} />
            <Text style={[styles.airConditioningWork, styles.workTypo]}>
              Air conditioning work
            </Text>
          </View>
          <View style={styles.rectangleParent2}>
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
            <Text style={[styles.other, styles.workTypo]}>Janitorial work</Text>
          </View>
          <View style={styles.rectangleParent1}>
            <View style={[styles.frameChild2, styles.frameChildLayout]} />
            <Text style={[styles.electricalWork, styles.workTypo]}>
              Electrical work
            </Text>
          </View>
          <View style={styles.rectangleParent2}>
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
            <Text style={[styles.other, styles.workTypo]}>Plumbing work</Text>
          </View>
        </View>
        <Image
          style={[styles.vectorIcon, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
        <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild2} />
          <Text style={[styles.text5, styles.textTypo]}>20</Text>
        </View>
        <View style={[styles.polygonGroup, styles.groupShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild2} />
          <Text style={[styles.text6, styles.textTypo]}>6</Text>
        </View>
        <View style={[styles.polygonContainer, styles.polygonParentShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild2} />
          <Text style={[styles.text6, styles.textTypo]}>8</Text>
        </View>
        <View style={[styles.groupView, styles.groupShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild2} />
          <Text style={[styles.text6, styles.textTypo]}>3</Text>
        </View>
        <View style={[styles.polygonParent1, styles.polygonParentShadowBox]}>
          <Image
            style={[styles.polygonIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/polygon-113.png")}
          />
          <View style={styles.groupChild2} />
          <Text style={[styles.text6, styles.textTypo]}>16</Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentPosition]}>
        <View style={styles.rectangleParentLayout}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text10, styles.text10Typo]}>21584</Text>
          <Text style={[styles.orderNumber, styles.text10Typo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text11Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text11Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.text10Typo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.text10Typo]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text11, styles.text11Typo]}>10/10/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text11Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text12, styles.text12Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("MOREInformaion6")}
          >
            <Text style={[styles.modifyRequest, styles.text12Typo]}>
              Modify request
            </Text>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild12, styles.groupChildPosition1]} />
            <View style={[styles.groupChild13, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild14, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-195.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.progressLayout]}>
              In progress
            </Text>
            <Text style={[styles.completed1, styles.inProgressTypo]}>
              Completed
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text10, styles.text10Typo]}>23655</Text>
          <Text style={[styles.orderNumber, styles.text10Typo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text11Typo]}>
            Maintenance type :
          </Text>
          <Text style={[styles.preventive, styles.text11Typo]}>Routine</Text>
          <Text style={[styles.projectName, styles.text10Typo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.text10Typo]}>
            Jeddah Yacht Club
          </Text>
          <Text style={[styles.text11, styles.text11Typo]}>01/11/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text11Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text12, styles.text12Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("MOREInformaion6")}
          >
            <Text style={[styles.modifyRequest, styles.text12Typo]}>
              Modify request
            </Text>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild18, styles.groupChildPosition1]} />
            <View style={[styles.groupChild19, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild14, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-197.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress1, styles.completed2Typo]}>
              In progress
            </Text>
            <Text style={[styles.completed2, styles.completed2Typo]}>
              Completed
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text10, styles.text10Typo]}>25416</Text>
          <Text style={[styles.orderNumber, styles.text10Typo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text11Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text11Typo]}
          >{`Preventive `}</Text>
          <Text style={[styles.projectName, styles.text10Typo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.text10Typo]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text11, styles.text11Typo]}>10/31/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text11Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text12, styles.text12Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("MOREInformaion6")}
          >
            <Text style={[styles.modifyRequest, styles.text12Typo]}>
              Modify request
            </Text>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild18, styles.groupChildPosition1]} />
            <View style={[styles.groupChild19, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild14, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-196.png")}
            />
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-196.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress, styles.progressLayout]}>
              In progress
            </Text>
            <Text style={[styles.completed2, styles.completed2Typo]}>
              Completed
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.text10, styles.text10Typo]}>26890</Text>
          <Text style={[styles.orderNumber, styles.text10Typo]}>
            Order number :
          </Text>
          <Text style={[styles.maintenanceType, styles.text11Typo]}>
            Maintenance type :
          </Text>
          <Text
            style={[styles.preventive, styles.text11Typo]}
          >{`Routine `}</Text>
          <Text style={[styles.projectName, styles.text10Typo]}>
            Project name :
          </Text>
          <Text style={[styles.jeddahYachtClub, styles.text10Typo]}>
            Jeddah Promenade
          </Text>
          <Text style={[styles.text11, styles.text11Typo]}>10/15/2023</Text>
          <Text style={[styles.dateOfRequest, styles.text11Typo]}>
            Date of request :
          </Text>
          <View style={styles.lineView} />
          <Pressable
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("VerificationCode4")}
          >
            <Text style={[styles.text12, styles.text12Typo]}>
              Request details
            </Text>
            <Image
              style={[styles.frameIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.mediumButton1, styles.mediumPosition]}
            onPress={() => navigation.navigate("MOREInformaion6")}
          >
            <Text style={[styles.modifyRequest, styles.text12Typo]}>
              Modify request
            </Text>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/group14.png")}
            />
          </Pressable>
          <View style={styles.lineParent}>
            <View style={[styles.groupChild18, styles.groupChildPosition1]} />
            <View style={[styles.groupChild19, styles.groupChildPosition]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild14, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-197.png")}
            />
            <Text
              style={[styles.incomplete1, styles.inProgressTypo]}
            >{`Incomplete `}</Text>
            <Text style={[styles.inProgress1, styles.completed2Typo]}>
              In progress
            </Text>
            <Text style={[styles.completed2, styles.completed2Typo]}>
              Completed
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomNav, styles.bottomNavLayout]}>
        <View style={[styles.menuList, styles.menuListFlexBox]}>
          <View style={styles.menu1}>
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame63.png")}
            />
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame64.png")}
            />
            <Text style={[styles.requests, styles.home1Typo]}>Requests</Text>
          </Pressable>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("MOREInformaion11")}
          >
            <View style={styles.menu31}>
              <View style={[styles.container, styles.parentFlexBox]}>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/svgexport17-15-1.png")}
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Profile1")}
          >
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/liuser3.png")}
            />
            <Text style={[styles.requests, styles.home1Typo]}>My Account</Text>
          </Pressable>
          <Pressable
            style={styles.menu5}
            onPress={() => navigation.navigate("Reports")}
          >
            <Image
              style={styles.frameIcon5}
              resizeMode="cover"
              source={require("../assets/frame65.png")}
            />
            <Text style={[styles.requests, styles.home1Typo]}>Reports</Text>
          </Pressable>
        </View>
        <View style={[styles.iphoneIndicator, styles.bottomNavPosition]}>
          <View style={styles.line} />
        </View>
      </View>
      <View style={[styles.homeInner, styles.faceIdPosition]} />
      <View style={[styles.faceId, styles.faceIdPosition]}>
        <View style={[styles.attendanceSuccessful, styles.faceIdPosition]}>
          <Image
            style={[styles.frameIcon8, styles.bottomNavLayout]}
            resizeMode="cover"
            source={require("../assets/frame66.png")}
          />
          <View style={styles.yourRequestIsCurrentlyBeinParent}>
            <Text style={[styles.yourRequestIs, styles.yourRequestIsTypo]}>
              Your request is currently being executed
            </Text>
            <Text style={[styles.weApologizeNo, styles.yourRequestIsTypo]}>
              We apologize No The request can be modified after it is executed.
              You can request a new service
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Home9")}
        >
          <Image
            style={[styles.icon1, styles.homeLayout]}
            resizeMode="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 6,
    position: "absolute",
  },
  seeAllPosition: {
    top: 502,
    fontFamily: FontFamily.dGBaysan,
  },
  allLayout: {
    fontSize: FontSize.size_xs,
    height: 24,
    lineHeight: 25,
    position: "absolute",
  },
  parentPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  menuListFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  completedTypo: {
    height: 16,
    width: 60,
    right: 289,
    display: "flex",
    color: Color.black,
    alignItems: "center",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    position: "absolute",
  },
  textTypo2: {
    width: 20,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
  },
  text1SpaceBlock: {
    marginLeft: 6,
    height: 8,
  },
  groupChildPosition2: {
    left: 0,
    width: 190,
    height: 8,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  homeChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 9,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  textPosition: {
    top: 442,
    height: 8,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 173,
    width: 343,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 24,
    position: "absolute",
  },
  frameChildLayout: {
    height: 15,
    borderRadius: Border.br_8xs,
    width: 15,
  },
  workTypo: {
    marginLeft: 4,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  polygonParentShadowBox: {
    height: 18,
    elevation: 3.38,
    shadowRadius: 3.38,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 27,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  textTypo: {
    height: 7,
    lineHeight: 7,
    fontSize: FontSize.size_5xs,
    right: 9,
    top: 4,
    fontWeight: "600",
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupShadowBox: {
    right: 38,
    height: 18,
    width: 27,
    elevation: 3.38,
    shadowRadius: 3.38,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  text10Typo: {
    top: 16,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text11Typo: {
    top: 48,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  mediumPosition: {
    top: 142,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text12Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  iconLayout: {
    width: 16,
    marginLeft: 6,
    height: 16,
  },
  groupChildPosition1: {
    width: 91,
    borderTopWidth: 1,
    left: 127,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition: {
    left: 29,
    width: 91,
    borderTopWidth: 1,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout: {
    height: 10,
    width: 10,
    top: 0,
    position: "absolute",
  },
  inProgressTypo: {
    top: 14,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  progressLayout: {
    width: 52,
    right: 99,
  },
  rectangleParentLayout: {
    height: 190,
    width: 343,
  },
  completed2Typo: {
    color: Color.gray,
    top: 14,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  bottomNavLayout: {
    height: 90,
    overflow: "hidden",
  },
  home1Typo: {
    marginTop: 6,
    lineHeight: 16,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  bottomNavPosition: {
    bottom: 0,
    width: 375,
    position: "absolute",
  },
  faceIdPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  yourRequestIsTypo: {
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  icon: {
    marginLeft: -43.5,
    top: 40,
    height: 31,
    width: 86,
    left: "50%",
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
    width: 24,
    right: 0,
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
    display: "none",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    width: 54,
    height: 21,
    left: 21,
    top: 12,
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
  recentRequests: {
    right: 232,
    textTransform: "capitalize",
    width: 127,
    height: 24,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  seeAll: {
    width: 46,
    textAlign: "right",
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    right: 16,
    fontFamily: FontFamily.dGBaysan,
    top: 502,
  },
  frameIcon: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  welcome: {
    fontSize: FontSize.size_sm,
    textAlign: "right",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  assemAlMohammadi: {
    color: Color.ternary,
    textAlign: "center",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  assemAlMohammadiWrapper: {
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcomeParent: {
    justifyContent: "center",
  },
  frameChild: {
    width: 45,
    height: 45,
    marginLeft: 8,
  },
  frameGroup: {
    alignItems: "center",
  },
  frameParent: {
    top: 79,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 343,
  },
  homeChild: {
    top: 350,
    height: 120,
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: 343,
    right: 16,
  },
  completed: {
    top: 406,
  },
  text: {
    height: 8,
  },
  groupChild: {
    left: 0,
    width: 190,
    height: 8,
    position: "absolute",
  },
  groupItem: {
    left: 126,
    width: 64,
    backgroundColor: Color.praimary,
    height: 8,
    top: 0,
  },
  rectangleParent: {
    top: 0,
  },
  encapsulatedGroup: {
    width: 190,
    overflow: "hidden",
  },
  text1: {
    width: 32,
    marginLeft: 6,
    height: 8,
  },
  parent: {
    top: 410,
    right: 25,
    alignItems: "center",
    position: "absolute",
  },
  incomplete: {
    top: 438,
  },
  text2: {
    right: 259,
    width: 20,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
  },
  rectangleView: {
    left: 54,
    width: 136,
    backgroundColor: Color.praimary,
    height: 8,
    top: 0,
  },
  encapsulatedGroup1: {
    left: 122,
    width: 190,
    overflow: "hidden",
  },
  text3: {
    width: 26,
    lineHeight: 9,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    right: 25,
  },
  allServicesProvided: {
    color: Color.black,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  text4: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  allServicesProvidedContainer: {
    marginLeft: -161.5,
    top: 366,
    width: 326,
    textAlign: "left",
    left: "50%",
  },
  homeItem: {
    marginLeft: -166.5,
    top: 1433,
    width: 333,
    height: 63,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild1: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    elevation: 5,
    shadowRadius: 5,
    right: 0,
  },
  unfinishedServices: {
    right: 155,
    width: 172,
    height: 24,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_base,
  },
  frameItem: {
    backgroundColor: Color.colorChocolate,
  },
  other: {
    width: 66,
  },
  frameView: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameInner: {
    backgroundColor: Color.ternary,
  },
  airConditioningWork: {
    width: 95,
  },
  rectangleParent1: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.colorGold,
  },
  rectangleParent2: {
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild2: {
    backgroundColor: Color.praimary,
  },
  electricalWork: {
    width: 74,
  },
  frameChild3: {
    backgroundColor: Color.binary,
  },
  frameContainer: {
    top: 72,
    right: 120,
    width: 207,
    flexWrap: "wrap",
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    width: 100,
    height: 100,
    right: 16,
  },
  polygonIcon: {
    right: 10,
    width: 7,
    top: 12,
  },
  groupChild2: {
    borderRadius: 2,
    height: 14,
    width: 27,
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text5: {
    width: 10,
    height: 7,
    lineHeight: 7,
    fontSize: FontSize.size_5xs,
    right: 9,
    top: 4,
  },
  polygonParent: {
    top: 42,
    right: 98,
  },
  text6: {
    width: 9,
    height: 7,
    lineHeight: 7,
    fontSize: FontSize.size_5xs,
    right: 9,
    top: 4,
  },
  polygonGroup: {
    top: 103,
  },
  polygonContainer: {
    top: 87,
    right: 73,
  },
  groupView: {
    top: 12,
  },
  polygonParent1: {
    top: 56,
    right: 6,
  },
  rectangleContainer: {
    top: 153,
    right: 16,
  },
  groupChildShadowBox: {
    borderWidth: 0.5,
    elevation: 20,
    shadowRadius: 20,
    borderColor: Color.gray,
    borderStyle: "solid",
    height: 190,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    width: 343,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text10: {
    right: 52,
    width: 31,
    fontWeight: "300",
    color: Color.praimary,
    lineHeight: 25,
  },
  orderNumber: {
    right: 85,
    width: 70,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  maintenanceType: {
    right: 66,
    width: 89,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  preventive: {
    width: 48,
    fontWeight: "300",
    right: 16,
    color: Color.praimary,
  },
  projectName: {
    right: 261,
    width: 66,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  jeddahYachtClub: {
    right: 173,
    fontWeight: "300",
    color: Color.praimary,
    width: 86,
  },
  text11: {
    right: 197,
    width: 51,
    fontWeight: "300",
    color: Color.praimary,
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  lineView: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  text12: {
    color: Color.whait,
    textAlign: "right",
  },
  frameIcon1: {
    overflow: "hidden",
  },
  mediumButton: {
    left: 16,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs_5,
    backgroundColor: Color.praimary,
  },
  modifyRequest: {
    width: 97,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    textAlign: "left",
  },
  mediumButton1: {
    left: 187,
    borderColor: Color.praimary,
    borderWidth: 2,
    width: 140,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    borderStyle: "solid",
  },
  groupChild12: {
    borderColor: Color.colorMediumseagreen,
  },
  groupChild13: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: 216,
  },
  groupChild14: {
    left: 118,
  },
  groupChild15: {
    left: 21,
  },
  incomplete1: {
    right: 195,
    width: 53,
  },
  inProgress: {
    top: 14,
    fontSize: FontSize.size_3xs,
    height: 16,
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  completed1: {
    width: 53,
    right: 0,
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
    height: 30,
    position: "absolute",
  },
  groupChild18: {
    borderColor: Color.gray,
  },
  groupChild19: {
    borderColor: Color.gray,
  },
  inProgress1: {
    width: 52,
    right: 99,
  },
  completed2: {
    width: 53,
    right: 0,
  },
  rectangleParent6: {
    marginTop: 24,
  },
  groupParent: {
    top: 550,
    height: 262,
  },
  frameIcon5: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home1: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  requests: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu5: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    backgroundColor: Color.praimary,
  },
  menu31: {
    height: 52,
    width: 74,
    alignItems: "center",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    width: 375,
    backgroundColor: Color.whait,
    justifyContent: "center",
    flexDirection: "row",
    right: 0,
    position: "absolute",
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: 135,
    height: 5,
    borderRadius: Border.br_81xl,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    width: 375,
    height: 30,
    backgroundColor: Color.whait,
    right: 0,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    width: 375,
    bottom: 0,
    position: "absolute",
    marginLeft: -187.5,
    left: "50%",
  },
  homeInner: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    height: 812,
  },
  frameIcon8: {
    width: 90,
  },
  yourRequestIs: {
    fontSize: FontSize.size_2xl,
    width: 256,
    height: 53,
    display: "flex",
    alignItems: "center",
    color: Color.praimary,
    justifyContent: "center",
    fontWeight: "700",
  },
  weApologizeNo: {
    width: 315,
    height: 87,
    marginTop: 16,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_base,
  },
  yourRequestIsCurrentlyBeinParent: {
    height: 149,
    marginTop: 16,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -128,
    marginLeft: -157.5,
    height: 256,
    justifyContent: "center",
    alignItems: "center",
  },
  icon1: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "88.34%",
    top: "5.43%",
    right: "5.83%",
    bottom: "89.13%",
    width: "5.83%",
    height: "5.43%",
    position: "absolute",
  },
  faceId: {
    marginTop: -184,
    borderRadius: Border.br_mini,
    shadowRadius: 10,
    elevation: 10,
    height: 368,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    top: "50%",
    backgroundColor: Color.whait,
    width: 343,
    marginLeft: -171.5,
    overflow: "hidden",
  },
  home: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
    height: 812,
    flex: 1,
  },
});

export default Home3;
