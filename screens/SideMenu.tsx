import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const SideMenu = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sideMenu}>
      <View style={[styles.welcomeParent, styles.groupChildLayout1]}>
        <Text style={[styles.welcome, styles.welcomeTypo]}>Welcome</Text>
        <Text style={[styles.assemAlMohammadi, styles.welcomeTypo1]}>
          Assem Al-Mohammadi
        </Text>
        <Image
          style={[styles.groupChild, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/ellipse-1671.png")}
        />
      </View>
      <View style={[styles.sideMenuChild, styles.sideLayout]} />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.rectangleWrapper, styles.groupParentPosition]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
        </View>
        <Pressable
          style={styles.menu1}
          onPress={() => navigation.navigate("Home9")}
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
      <View style={[styles.sideMenuItem, styles.sideLayout]} />
      <View style={[styles.sideMenuInner, styles.sideLayout]} />
      <View style={styles.encapsulatedGroupParent}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/encapsulated-group7.png")}
        />
        <Text style={[styles.logOut, styles.homeTypo]}>Log Out</Text>
      </View>
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
      <View style={styles.menu31}>
        <Image
          style={[styles.frameIcon3, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/frame40.png")}
        />
        <Text style={[styles.aboutUs, styles.homeTypo]}>Change Language</Text>
      </View>
      <View style={styles.home1}>
        <Image
          style={[styles.icon, styles.homePosition]}
          resizeMode="cover"
          source={require("../assets/3-1-13.png")}
        />
        <Text style={[styles.recentRequests, styles.allLayout]}>
          Recent requests
        </Text>
        <Text style={[styles.seeAll, styles.allLayout]}>See all</Text>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <Pressable
            style={styles.frameLayout}
            onPress={() => navigation.navigate("SideMenu")}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/frame41.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.frameGroup, styles.parentFlexBox]}
            onPress={() => navigation.navigate("Profile")}
          >
            <View style={styles.welcomeGroup}>
              <Text style={[styles.welcome1, styles.text12Typo]}>Welcome</Text>
              <View style={styles.assemAlMohammadiWrapper}>
                <Text style={[styles.assemAlMohammadi1, styles.welcomeTypo]}>
                  Assem Al-Mohammadi
                </Text>
              </View>
            </View>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1672.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.homeChild, styles.childShadowBox]} />
        <Text style={[styles.completed, styles.completedTypo]}>Completed</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo2]}>35</Text>
          <View style={[styles.encapsulatedGroup1, styles.text1SpaceBlock]}>
            <View style={[styles.rectangleParent, styles.groupParentPosition]}>
              <View style={[styles.groupInner, styles.groupBg]} />
              <View style={styles.rectangleView} />
            </View>
          </View>
          <Text style={[styles.text1, styles.textTypo1]}>35%</Text>
        </View>
        <Text style={[styles.incomplete, styles.completedTypo]}>
          Incomplete
        </Text>
        <Text style={[styles.text2, styles.textPosition]}>65</Text>
        <View style={[styles.encapsulatedGroup2, styles.textPosition]}>
          <View style={[styles.rectangleParent, styles.groupParentPosition]}>
            <View style={[styles.groupInner, styles.groupBg]} />
            <View style={[styles.groupChild2, styles.childLayout]} />
          </View>
        </View>
        <Text style={[styles.text3, styles.textPosition]}>65%</Text>
        <Text style={[styles.allServicesProvidedContainer, styles.allLayout]}>
          <Text
            style={styles.allServicesProvided}
          >{`All services provided since the beginning of the contract `}</Text>
          <Text style={styles.text4}>(100)</Text>
        </Text>
        <View style={[styles.homeItem, styles.homePosition]} />
        <View style={[styles.rectangleContainer, styles.groupChild3Layout]}>
          <View style={[styles.groupChild3, styles.groupChild3Layout]} />
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
              <Text style={[styles.other, styles.workTypo]}>
                Janitorial work
              </Text>
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
            source={require("../assets/vector13.png")}
          />
          <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-15.png")}
            />
            <View style={styles.groupChild4} />
            <Text style={styles.text5}>20</Text>
          </View>
          <View style={[styles.polygonGroup, styles.groupShadowBox]}>
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-16.png")}
            />
            <View style={styles.groupChild4} />
            <Text style={[styles.text6, styles.textTypo]}>6</Text>
          </View>
          <View
            style={[styles.polygonContainer, styles.polygonParentShadowBox]}
          >
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-15.png")}
            />
            <View style={styles.groupChild4} />
            <Text style={[styles.text6, styles.textTypo]}>8</Text>
          </View>
          <View style={[styles.groupView, styles.groupShadowBox]}>
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-15.png")}
            />
            <View style={styles.groupChild4} />
            <Text style={[styles.text6, styles.textTypo]}>3</Text>
          </View>
          <View style={[styles.polygonParent1, styles.polygonParentShadowBox]}>
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-17.png")}
            />
            <View style={styles.groupChild4} />
            <Text style={[styles.text6, styles.textTypo]}>16</Text>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.frameParentPosition]}>
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
              <Text style={[styles.text12, styles.textTypo]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon4, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame42.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumPosition]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={[styles.modifyRequest, styles.textTypo]}>
                Modify request
              </Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group9.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild14, styles.groupChildPosition1]} />
              <View style={[styles.groupChild15, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1952.png")}
              />
              <Image
                style={[styles.groupChild16, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1961.png")}
              />
              <Image
                style={[styles.groupChild17, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1952.png")}
              />
              <Text
                style={[styles.incomplete1, styles.inProgressTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.inProgressTypo]}>
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
              <Text style={[styles.text12, styles.textTypo]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon4, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame43.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumPosition]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={[styles.modifyRequest, styles.textTypo]}>
                Modify request
              </Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group10.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild20, styles.groupChildPosition1]} />
              <View style={[styles.groupChild21, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1953.png")}
              />
              <Image
                style={[styles.groupChild16, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1962.png")}
              />
              <Image
                style={[styles.groupChild17, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1971.png")}
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
              <Text style={[styles.text12, styles.textTypo]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon4, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame44.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumPosition]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={[styles.modifyRequest, styles.textTypo]}>
                Modify request
              </Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group11.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild20, styles.groupChildPosition1]} />
              <View style={[styles.groupChild21, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1954.png")}
              />
              <Image
                style={[styles.groupChild16, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1963.png")}
              />
              <Image
                style={[styles.groupChild17, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1972.png")}
              />
              <Text
                style={[styles.incomplete1, styles.inProgressTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.inProgressTypo]}>
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
              <Text style={[styles.text12, styles.textTypo]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon4, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame45.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumPosition]}
              onPress={() => navigation.navigate("MOREInformaion6")}
            >
              <Text style={[styles.modifyRequest, styles.textTypo]}>
                Modify request
              </Text>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("../assets/group12.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild20, styles.groupChildPosition1]} />
              <View style={[styles.groupChild21, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1955.png")}
              />
              <Image
                style={[styles.groupChild16, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1964.png")}
              />
              <Image
                style={[styles.groupChild17, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1973.png")}
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
      </View>
      <View style={styles.sideMenuChild1} />
      <View style={[styles.webViewbottomParent, styles.webPosition]}>
        <View style={[styles.webViewbottom, styles.webPosition]}>
          <View style={[styles.homeIndicator, styles.parentFlexBox]}>
            <View style={[styles.homeIndicator1, styles.homeLayout]} />
          </View>
        </View>
        <View style={styles.groupChild39Position}>
          <View style={[styles.groupChild39, styles.groupChild39Position]} />
          <View style={styles.frameParent1}>
            <Pressable
              style={styles.framePressable}
              onPress={() => navigation.navigate("SideMenu5")}
            >
              <View style={styles.frameView}>
                <Image
                  style={styles.frameIconLayout}
                  resizeMode="cover"
                  source={require("../assets/frame46.png")}
                />
                <Text style={[styles.text22, styles.text22Typo]}>عربي</Text>
              </View>
              <Image
                style={[styles.frameIcon9, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame47.png")}
              />
            </Pressable>
            <Pressable
              style={styles.frameParent3}
              onPress={() => navigation.navigate("SideMenu2")}
            >
              <View style={[styles.frameGroup, styles.parentFlexBox]}>
                <Image
                  style={styles.frameIconLayout}
                  resizeMode="cover"
                  source={require("../assets/frame48.png")}
                />
                <Text style={[styles.english, styles.text22Typo]}>English</Text>
              </View>
              <Image
                style={[styles.frameIcon11, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame49.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.homeIndicator2, styles.homeLayout]} />
        </View>
      </View>
      <View style={[styles.iphoneXOrNewer, styles.homePosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={styles.rightSide}>
          <Image
            style={styles.batteryIcon}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={[styles.recordingIndicatorIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          resizeMode="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 45,
    position: "absolute",
  },
  welcomeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  welcomeTypo1: {
    fontSize: FontSize.size_sm,
    color: Color.whait,
    position: "absolute",
  },
  sideLayout: {
    height: 1,
    width: 181,
    borderTopWidth: 0.5,
    borderColor: Color.whait,
    right: 179,
    borderStyle: "solid",
    position: "absolute",
  },
  groupParentPosition: {
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.whait,
  },
  homeTypo: {
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_sm,
  },
  logoLayout: {
    height: 29,
    width: 100,
  },
  frameLayout: {
    height: 22,
    width: 22,
  },
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  allLayout: {
    height: 19,
    lineHeight: 20,
  },
  frameParentPosition: {
    marginLeft: -29.2,
    left: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text12Typo: {
    fontSize: FontSize.size_xs_2,
    textAlign: "right",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  completedTypo: {
    height: 13,
    width: 48,
    display: "flex",
    color: Color.black,
    right: 15,
    fontSize: FontSize.size_3xs_6,
    lineHeight: 20,
    textAlign: "left",
    alignItems: "center",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  textTypo2: {
    width: 16,
    display: "flex",
    justifyContent: "center",
    fontSize: FontSize.size_3xs_6,
    lineHeight: 20,
    color: Color.praimary,
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  text1SpaceBlock: {
    marginLeft: 4.8,
    height: 6,
  },
  groupBg: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_5xs,
    top: 0,
  },
  textTypo1: {
    lineHeight: 7,
    display: "flex",
    fontSize: FontSize.size_3xs_6,
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  textPosition: {
    top: 354,
    height: 6,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 138,
    width: 274,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 19,
    position: "absolute",
  },
  frameChildLayout: {
    height: 12,
    width: 12,
    borderRadius: Border.br_9xs,
  },
  workTypo: {
    marginLeft: 3.2,
    fontSize: FontSize.size_5xs,
    color: Color.black,
    textAlign: "left",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  polygonParentShadowBox: {
    height: 14,
    elevation: 2.7,
    shadowRadius: 2.7,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 22,
    position: "absolute",
  },
  groupShadowBox: {
    right: 30,
    height: 14,
    elevation: 2.7,
    shadowRadius: 2.7,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 22,
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.dGBaysan,
  },
  text10Typo: {
    top: 13,
    fontSize: FontSize.size_5xs,
    height: 13,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text11Typo: {
    top: 38,
    fontSize: FontSize.size_5xs,
    height: 13,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  mediumPosition: {
    top: 114,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    width: 13,
    marginLeft: 4.8,
    height: 13,
  },
  groupChildPosition1: {
    width: 73,
    borderTopWidth: 0.8,
    left: 101,
    height: 1,
    borderStyle: "solid",
    top: 4,
    position: "absolute",
  },
  groupChildPosition: {
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
  inProgressTypo: {
    width: 42,
    top: 11,
    fontSize: FontSize.size_5xs,
    height: 13,
    display: "flex",
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 152,
    width: 274,
  },
  completed2Typo: {
    color: Color.gray,
    width: 42,
    top: 11,
    fontSize: FontSize.size_5xs,
    height: 13,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "300",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  webPosition: {
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  homeLayout: {
    borderRadius: Border.br_81xl,
    height: 5,
  },
  groupChild39Position: {
    height: 153,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  text22Typo: {
    marginLeft: 12,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  welcome: {
    right: 83,
    color: Color.whait,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
    top: 4,
    textAlign: "center",
  },
  assemAlMohammadi: {
    top: 25,
    textAlign: "right",
    fontWeight: "300",
    right: 0,
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    right: 151,
    width: 45,
    top: 0,
  },
  welcomeParent: {
    top: 104,
    right: 157,
    width: 196,
  },
  sideMenuChild: {
    top: 181,
  },
  groupItem: {
    borderBottomRightRadius: Border.br_11xl,
    backgroundColor: Color.whait,
    height: 36,
    left: 0,
    position: "absolute",
    top: 0,
    width: 196,
  },
  rectangleWrapper: {
    height: 36,
    top: 0,
    width: 196,
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.praimary,
    lineHeight: 16,
    marginLeft: 8,
    textAlign: "right",
    fontWeight: "700",
  },
  menu1: {
    top: 6,
    right: 99,
    width: 81,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupParent: {
    top: 229,
    height: 36,
    width: 196,
  },
  aboutUs: {
    lineHeight: 16,
    marginLeft: 8,
    textAlign: "right",
    fontWeight: "700",
    color: Color.whait,
  },
  menu2: {
    top: 297,
    right: 267,
    width: 92,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  menu3: {
    top: 359,
    right: 251,
    width: 108,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  sideMenuItem: {
    top: 499,
  },
  sideMenuInner: {
    top: 631,
  },
  logOut: {
    textAlign: "left",
    color: Color.whait,
  },
  encapsulatedGroupParent: {
    top: 553,
    right: 277,
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
    top: 653,
    right: 219,
    alignItems: "center",
    position: "absolute",
  },
  frameIcon3: {
    overflow: "hidden",
  },
  menu31: {
    top: 421,
    right: 210,
    width: 149,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  icon: {
    marginLeft: 73.2,
    top: 32,
    height: 25,
    width: 69,
  },
  recentRequests: {
    right: -30,
    textTransform: "capitalize",
    width: 102,
    fontSize: FontSize.size_smi_8,
    height: 19,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    top: 402,
    position: "absolute",
  },
  seeAll: {
    color: Color.colorLightsteelblue_100,
    width: 37,
    fontSize: FontSize.size_3xs_6,
    right: -203,
    top: 402,
    position: "absolute",
    textAlign: "right",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  welcome1: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  assemAlMohammadi1: {
    color: Color.ternary,
    fontSize: FontSize.size_3xs_6,
    fontWeight: "300",
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
  frameGroup: {
    flexDirection: "row",
  },
  frameParent: {
    top: 63,
    justifyContent: "space-between",
    width: 274,
    alignItems: "center",
    flexDirection: "row",
  },
  homeChild: {
    top: 280,
    height: 96,
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: 274,
    right: -203,
    backgroundColor: Color.whait,
  },
  completed: {
    top: 325,
  },
  text: {
    height: 6,
  },
  groupInner: {
    width: 152,
    height: 6,
    left: 0,
    position: "absolute",
  },
  rectangleView: {
    width: 51,
    left: 101,
    height: 6,
    borderRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
    backgroundColor: Color.praimary,
  },
  rectangleParent: {
    width: 152,
    height: 6,
    top: 0,
  },
  encapsulatedGroup1: {
    width: 152,
    overflow: "hidden",
  },
  text1: {
    width: 26,
    marginLeft: 4.8,
    height: 6,
  },
  parent: {
    top: 328,
    right: -196,
    flexDirection: "row",
    position: "absolute",
  },
  incomplete: {
    top: 350,
  },
  text2: {
    right: -9,
    width: 16,
    display: "flex",
    justifyContent: "center",
    fontSize: FontSize.size_3xs_6,
    lineHeight: 20,
    color: Color.praimary,
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  groupChild2: {
    left: 43,
    width: 109,
    height: 6,
    top: 0,
    backgroundColor: Color.praimary,
  },
  encapsulatedGroup2: {
    left: 98,
    width: 152,
    overflow: "hidden",
  },
  text3: {
    width: 21,
    lineHeight: 7,
    display: "flex",
    fontSize: FontSize.size_3xs_6,
    color: Color.praimary,
    alignItems: "center",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    right: -196,
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
    marginLeft: -21.2,
    top: 293,
    width: 261,
    fontSize: FontSize.size_3xs_6,
    left: "50%",
    position: "absolute",
    textAlign: "left",
  },
  homeItem: {
    marginLeft: -25.2,
    top: 1146,
    width: 266,
    height: 50,
    overflow: "hidden",
  },
  groupChild3: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_5xs,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    right: 0,
  },
  unfinishedServices: {
    right: 124,
    width: 138,
    height: 19,
    lineHeight: 20,
    fontSize: FontSize.size_smi_8,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  frameItem: {
    backgroundColor: Color.colorChocolate,
  },
  other: {
    width: 53,
  },
  frameView: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameInner: {
    backgroundColor: Color.ternary,
  },
  airConditioningWork: {
    width: 76,
  },
  rectangleParent1: {
    marginLeft: 6.4,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.colorGold,
  },
  rectangleParent2: {
    marginLeft: 6.4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild2: {
    backgroundColor: Color.praimary,
  },
  electricalWork: {
    width: 59,
  },
  frameChild3: {
    backgroundColor: Color.binary,
  },
  frameContainer: {
    top: 58,
    right: 96,
    width: 166,
    flexWrap: "wrap",
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    width: 80,
    height: 80,
    right: 13,
  },
  polygonIcon: {
    top: 14,
    right: 2,
    height: 5,
    width: 6,
    position: "absolute",
  },
  groupChild4: {
    borderRadius: 1,
    height: 11,
    width: 22,
    backgroundColor: Color.whait,
    top: 0,
    right: 0,
    position: "absolute",
  },
  text5: {
    width: 8,
    fontWeight: "600",
    lineHeight: 6,
    fontSize: FontSize.size_6xs_4,
    right: 7,
    top: 3,
    height: 6,
    display: "flex",
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  polygonParent: {
    top: 34,
    right: 78,
  },
  text6: {
    width: 7,
    lineHeight: 6,
    fontSize: FontSize.size_6xs_4,
    right: 7,
    top: 3,
    fontWeight: "600",
    height: 6,
    display: "flex",
    color: Color.black,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  polygonGroup: {
    top: 82,
  },
  polygonContainer: {
    top: 70,
    right: 58,
  },
  groupView: {
    top: 10,
  },
  polygonParent1: {
    top: 45,
    right: 5,
  },
  rectangleContainer: {
    top: 122,
    right: -203,
  },
  groupChildShadowBox: {
    borderWidth: 0.4,
    elevation: 16,
    shadowRadius: 16,
    borderColor: Color.gray,
    height: 152,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    width: 274,
    backgroundColor: Color.whait,
    borderStyle: "solid",
    top: 0,
    right: 0,
    position: "absolute",
  },
  text10: {
    right: 42,
    width: 25,
    lineHeight: 20,
    color: Color.praimary,
    fontWeight: "300",
  },
  orderNumber: {
    right: 68,
    width: 56,
    color: Color.black,
    lineHeight: 20,
    fontWeight: "700",
  },
  maintenanceType: {
    right: 53,
    width: 71,
    color: Color.black,
    lineHeight: 20,
    fontWeight: "700",
  },
  preventive: {
    width: 38,
    right: 13,
    color: Color.praimary,
    fontWeight: "300",
  },
  projectName: {
    right: 209,
    width: 53,
    color: Color.black,
    lineHeight: 20,
    fontWeight: "700",
  },
  jeddahYachtClub: {
    right: 138,
    width: 69,
    color: Color.praimary,
    fontWeight: "300",
  },
  text11: {
    right: 158,
    width: 41,
    color: Color.praimary,
    fontWeight: "300",
  },
  dateOfRequest: {
    right: 200,
    width: 62,
    color: Color.black,
    lineHeight: 20,
    fontWeight: "700",
  },
  lineView: {
    top: 64,
    borderTopWidth: 0.4,
    width: 275,
    height: 0,
    borderColor: Color.gray,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  text12: {
    fontSize: FontSize.size_xs_2,
    textAlign: "right",
    lineHeight: 20,
    color: Color.whait,
  },
  frameIcon4: {
    overflow: "hidden",
  },
  mediumButton: {
    left: 13,
    paddingHorizontal: 11,
    paddingVertical: 4,
    backgroundColor: Color.praimary,
  },
  modifyRequest: {
    width: 78,
    display: "flex",
    fontWeight: "600",
    fontSize: FontSize.size_xs_2,
    lineHeight: 20,
    textAlign: "left",
    color: Color.praimary,
    alignItems: "center",
  },
  mediumButton1: {
    left: 150,
    borderColor: Color.praimary,
    borderWidth: 1.6,
    width: 112,
    paddingLeft: Padding.p_5xs,
    paddingTop: 4,
    paddingRight: 11,
    paddingBottom: 4,
    borderStyle: "solid",
  },
  groupChild14: {
    borderColor: Color.colorMediumseagreen,
  },
  groupChild15: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: 173,
  },
  groupChild16: {
    left: 94,
  },
  groupChild17: {
    left: 17,
  },
  incomplete1: {
    right: 156,
  },
  inProgress: {
    right: 79,
  },
  completed1: {
    right: 0,
  },
  lineParent: {
    top: 77,
    left: 38,
    width: 198,
    height: 24,
    position: "absolute",
  },
  groupChild20: {
    borderColor: Color.gray,
  },
  groupChild21: {
    borderColor: Color.gray,
  },
  inProgress1: {
    right: 79,
  },
  completed2: {
    right: 0,
  },
  rectangleParent6: {
    marginTop: 19.2,
  },
  groupContainer: {
    top: 440,
    height: 210,
  },
  home1: {
    marginTop: -325,
    left: 289,
    borderTopLeftRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    width: 84,
    height: 650,
    backgroundColor: Color.colorGray_100,
    top: "50%",
    position: "absolute",
  },
  sideMenuChild1: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    top: "50%",
    position: "absolute",
    height: 812,
  },
  homeIndicator1: {
    backgroundColor: Color.colorGray_200,
    width: 134,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    height: 34,
    backgroundColor: Color.colorGray_100,
  },
  groupChild39: {
    borderTopLeftRadius: Border.br_11xl,
    backgroundColor: Color.whait,
    borderTopRightRadius: Border.br_11xl,
  },
  text22: {
    textAlign: "right",
  },
  frameIcon9: {
    marginLeft: 254,
  },
  framePressable: {
    flexDirection: "row",
  },
  english: {
    textAlign: "left",
  },
  frameIcon11: {
    marginLeft: 237,
  },
  frameParent3: {
    marginTop: 32,
    flexDirection: "row",
  },
  frameParent1: {
    top: 48,
    left: 16,
    position: "absolute",
  },
  homeIndicator2: {
    marginLeft: -23.5,
    bottom: 140,
    backgroundColor: Color.colorGray_300,
    width: 47,
    left: "50%",
    position: "absolute",
  },
  webViewbottomParent: {
    height: 186,
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
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    display: "none",
    height: 6,
  },
  rightSide: {
    top: 17,
    width: 67,
    height: 11,
    right: 15,
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
  sideMenu: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.praimary,
  },
});

export default SideMenu;
