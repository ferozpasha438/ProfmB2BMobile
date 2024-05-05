import React, { useState, useCallback } from "react";
import { Image, StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
// import Home from "../components/Home";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Home9 = () => {
  const [frameIcon10Visible, setFrameIcon10Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openFrameIcon10 = useCallback(() => {
    setFrameIcon10Visible(true);
  }, []);

  const closeFrameIcon10 = useCallback(() => {
    setFrameIcon10Visible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/3-1-1.png")}
        />
        <View style={[styles.recentTicketsParent, styles.parentPosition]}>
          <Text style={[styles.recentTickets, styles.feedbackFlexBox]}>
            Recent Tickets
          </Text>
          <Pressable
            style={styles.seeAll}
            onPress={() => navigation.navigate("Requests5")}
          >
            <Text style={[styles.seeAll1, styles.seeAll1Typo]}>See all</Text>
          </Pressable>
        </View>
        <View style={styles.homeChild} />
        <View style={styles.groupParent}>
          <View style={styles.rectangleLayout}>
            <View style={styles.groupChildShadowBox1} />
            <Text style={[styles.text, styles.textFlexBox]}>21584</Text>
            <Text style={[styles.orderNumber, styles.textFlexBox]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Typo]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Typo]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textFlexBox]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Typo]}>10/10/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Typo]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <View style={styles.lineParent}>
              <View style={[styles.groupInner, styles.groupPosition]} />
              <View style={[styles.lineView, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed, styles.completedTypo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton, styles.mediumPosition]}
              onPress={() => navigation.navigate("Home8")}
            >
              <Text style={[styles.feedback, styles.text18Typo]}>feedback</Text>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame69.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.mediumButton1, styles.mediumPosition]}
              onPress={() => navigation.navigate("Reports14")}
            >
              <Text style={[styles.text2, styles.textTypo3]}>view report</Text>
              <Image
                style={styles.frameIcon1}
                resizeMode="cover"
                source={require("../assets/frame70.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox1} />
            <Text style={[styles.text, styles.textFlexBox]}>23655</Text>
            <Text style={[styles.orderNumber, styles.textFlexBox]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Typo]}>
              Maintenance type :
            </Text>
            <Text style={[styles.preventive, styles.text1Typo]}>Routine</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textFlexBox]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text1, styles.text1Typo]}>01/11/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Typo]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={[styles.mediumButton2, styles.mediumPosition]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.textTypo3}>Ticket Details</Text>
              <Image
                style={styles.frameIcon1}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild4, styles.groupPosition]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-197.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed1Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumPosition]}
              onPress={() => navigation.navigate("CloseTicket")}
            >
              <Text style={[styles.closeTicket, styles.text18Typo]}>
                Close Ticket
              </Text>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame71.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox1} />
            <Text style={[styles.text, styles.textFlexBox]}>25416</Text>
            <Text style={[styles.orderNumber, styles.textFlexBox]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Typo]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Typo]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textFlexBox]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Typo]}>10/31/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Typo]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={[styles.mediumButton2, styles.mediumPosition]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.textTypo3}>Ticket Details</Text>
              <Image
                style={styles.frameIcon1}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild4, styles.groupPosition]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-196.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-196.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumPosition]}
              onPress={() => navigation.navigate("CloseTicket")}
            >
              <Text style={[styles.closeTicket, styles.text18Typo]}>
                Close Ticket
              </Text>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame71.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChildShadowBox1} />
            <Text style={[styles.text, styles.textFlexBox]}>26890</Text>
            <Text style={[styles.orderNumber, styles.textFlexBox]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.text1Typo]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text1Typo]}
            >{`Routine `}</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.textFlexBox]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text1, styles.text1Typo]}>10/15/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text1Typo]}>
              Date of request :
            </Text>
            <View style={styles.groupItem} />
            <Pressable
              style={[styles.mediumButton2, styles.mediumPosition]}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={styles.textTypo3}>Ticket Details</Text>
              <Image
                style={styles.frameIcon1}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild4, styles.groupPosition]} />
              <View style={[styles.groupChild5, styles.lineViewPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild1, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild2, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-197.png")}
              />
              <Text
                style={[styles.incomplete, styles.completedTypo]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed1Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completed1Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumPosition]}
              onPress={() => navigation.navigate("CloseTicket")}
            >
              <Text style={[styles.closeTicket, styles.text18Typo]}>
                Close Ticket
              </Text>
              <Image
                style={styles.frameIcon}
                resizeMode="cover"
                source={require("../assets/frame71.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentPosition]}>
          <View style={styles.frameGroup}>
            <Pressable
              style={styles.frame}
              onPress={() => navigation.navigate("SideMenu2")}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/frame10.png")}
              />
            </Pressable>
            <Pressable
              style={styles.frame1}
              onPress={() => navigation.navigate("Notifications")}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/frame68.png")}
              />
            </Pressable>
          </View>
          <Pressable
            style={[styles.frameContainer, styles.containerFlexBox]}
            onPress={() => navigation.navigate("Profile1")}
          >
            <View style={styles.menuListFlexBox}>
              <Text style={[styles.welcome, styles.seeAll1Typo]}>Welcome</Text>
              <View style={styles.assemAlMohammadiWrapper}>
                <Text style={styles.assemAlMohammadi}>Assem Al-Mohammadi</Text>
              </View>
            </View>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-167.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleParent1, styles.groupChild23Layout]}>
          <View style={[styles.groupChild23, styles.groupChildShadowBox]} />
          <View style={[styles.frameView, styles.framePosition]}>
            <View style={styles.frameGroup}>
              <Text style={[styles.unfinishedServices, styles.textFlexBox]}>
                Unfinished services
              </Text>
              <Text style={styles.text12}>( 53 )</Text>
            </View>
            <Text style={[styles.jeddahYachtClub2, styles.workTypo]}>
              Jeddah Yacht Club
            </Text>
          </View>
          <View style={[styles.frameParent1, styles.framePosition]}>
            <View>
              <View style={styles.frameParent3}>
                <View style={styles.frameParent3}>
                  <View style={styles.frameParent3}>
                    <View style={[styles.frameItem, styles.frameChildLayout]} />
                    <Text style={[styles.electricalWork, styles.workTypo]}>
                      Electrical Work
                    </Text>
                  </View>
                </View>
                <Text style={[styles.text13, styles.textTypo1]}>( 16 )</Text>
              </View>
              <View style={styles.frameParent4}>
                <View style={styles.frameGroup}>
                  <View style={[styles.frameInner, styles.frameChildLayout]} />
                  <Text style={[styles.plumbingWork, styles.projectNameTypo]}>
                    Plumbing Work
                  </Text>
                </View>
                <Text style={[styles.text14, styles.textTypo1]}>( 6 )</Text>
              </View>
              <View style={styles.frameParent4}>
                <View style={styles.rectangleParent4}>
                  <View style={[styles.frameChild1, styles.frameChildLayout]} />
                  <Text style={[styles.other, styles.workTypo]}>Other</Text>
                </View>
                <Text style={[styles.text15, styles.textTypo2]}>( 3 )</Text>
              </View>
            </View>
            <View style={styles.frameParent6}>
              <View style={styles.frameParent3}>
                <View style={styles.frameGroup}>
                  <View style={[styles.frameChild2, styles.frameChildLayout]} />
                  <Text style={[styles.janitorialWork, styles.workTypo]}>
                    Janitorial Work
                  </Text>
                </View>
                <Text style={[styles.text16, styles.textTypo2]}>( 7 )</Text>
              </View>
              <View style={styles.frameParent4}>
                <View style={styles.frameParent3}>
                  <View style={[styles.frameChild3, styles.frameChildLayout]} />
                  <Text style={[styles.hvacWork, styles.workTypo]}>
                    HVAC Work
                  </Text>
                </View>
                <Text style={[styles.text17, styles.textTypo2]}>( 20 )</Text>
              </View>
            </View>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector16.png")}
            />
            <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-114.png")}
              />
              <View style={[styles.groupChild24, styles.groupChildPosition]} />
              <Text style={[styles.text18, styles.textPosition]}>3</Text>
            </View>
            <View style={[styles.polygonGroup, styles.polygonParentShadowBox]}>
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-114.png")}
              />
              <View style={[styles.groupChild24, styles.groupChildPosition]} />
              <Text style={[styles.text18, styles.textPosition]}>16</Text>
            </View>
            <View
              style={[styles.polygonContainer, styles.polygonParentShadowBox]}
            >
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-114.png")}
              />
              <View style={[styles.groupChild24, styles.groupChildPosition]} />
              <Text style={[styles.text18, styles.textPosition]}>6</Text>
            </View>
            <View
              style={[styles.polygonParent1, styles.polygonParentShadowBox]}
            >
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-114.png")}
              />
              <View style={[styles.groupChild24, styles.groupChildPosition]} />
              <Text style={[styles.text18, styles.textPosition]}>7</Text>
            </View>
            <View style={[styles.polygonParent2, styles.groupChildPosition]}>
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-114.png")}
              />
              <View style={[styles.groupChild24, styles.groupChildPosition]} />
              <Text style={[styles.text18, styles.textPosition]}>20</Text>
            </View>
          </View>
          <Pressable style={styles.frame2} onPress={openFrameIcon10}>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/frame2.png")}
            />
          </Pressable>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupLayout1]}
          onPress={() => navigation.navigate("ServicesProvided4")}
        >
          <View style={[styles.groupChild33, styles.groupLayout1]} />
          <View style={[styles.completedParent, styles.parentLayout]}>
            <Text style={[styles.completed4, styles.textFlexBox]}>
              Completed
            </Text>
            <View style={[styles.parent, styles.textPosition]}>
              <Text style={[styles.text23, styles.textFlexBox]}>35</Text>
              <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
                <View style={[styles.rectangleParent7, styles.groupLayout]}>
                  <View style={[styles.groupChild34, styles.groupLayout]} />
                  <View
                    style={[styles.groupChild35, styles.groupChildLayout1]}
                  />
                </View>
              </View>
              <Text style={[styles.text24, styles.textTypo]}>35%</Text>
            </View>
          </View>
          <View style={[styles.incompleteParent, styles.parentLayout]}>
            <Text style={[styles.completed4, styles.textFlexBox]}>
              Incomplete
            </Text>
            <Text style={[styles.text25, styles.textPosition]}>62</Text>
            <View style={[styles.encapsulatedGroup1, styles.groupLayout]}>
              <View style={[styles.rectangleParent7, styles.groupLayout]}>
                <View style={[styles.groupChild34, styles.groupLayout]} />
                <View style={[styles.groupChild37, styles.groupChildLayout1]} />
              </View>
            </View>
            <Text style={[styles.text26, styles.textTypo]}>62%</Text>
          </View>
          <View style={[styles.outOfScopeParent, styles.parentLayout]}>
            <Text style={[styles.outOfScopeContainer, styles.textFlexBox]}>
              <Text style={styles.outOfScopeContainer1}>
                <Text style={styles.out}>out</Text> of scope
              </Text>
            </Text>
            <Text style={[styles.text25, styles.textPosition]}>2</Text>
            <View style={[styles.encapsulatedGroup1, styles.groupLayout]}>
              <View style={[styles.rectangleParent7, styles.groupLayout]}>
                <View style={[styles.groupChild34, styles.groupLayout]} />
                <View style={[styles.groupChild39, styles.groupChildLayout1]} />
              </View>
            </View>
            <Text style={[styles.text26, styles.textTypo]}>2%</Text>
          </View>
          <View style={[styles.inTransitParent, styles.parentLayout]}>
            <Text style={[styles.outOfScopeContainer, styles.textFlexBox]}>
              In transit
            </Text>
            <Text style={[styles.text25, styles.textPosition]}>1</Text>
            <View style={[styles.encapsulatedGroup1, styles.groupLayout]}>
              <View style={[styles.rectangleParent7, styles.groupLayout]}>
                <View style={[styles.groupChild34, styles.groupLayout]} />
                <View style={[styles.groupChild41, styles.groupChildLayout1]} />
              </View>
            </View>
            <Text style={[styles.text26, styles.textTypo]}>1%</Text>
          </View>
          <Text style={styles.allServicesProvidedContainer}>
            <Text
              style={styles.allServicesProvided}
            >{`All services provided since contract inception `}</Text>
            <Text style={styles.text31}>(100)</Text>
          </Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
        </Pressable>
        <View style={[styles.bottomNav, styles.menuListLayout]}>
          <View style={[styles.menuList, styles.menuListLayout]}>
            <View style={styles.menuLayout}>
              <Image
                style={styles.frameIcon8}
                resizeMode="cover"
                source={require("../assets/frame12.png")}
              />
              <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
            </View>
            <Pressable
              style={styles.menu5}
              onPress={() => navigation.navigate("Requests5")}
            >
              <Image
                style={styles.frameIcon8}
                resizeMode="cover"
                source={require("../assets/frame13.png")}
              />
              <Text style={[styles.requests, styles.home1Typo]}>Requests</Text>
            </Pressable>
            <Pressable
              style={[styles.menu3, styles.menuLayout]}
              onPress={() => navigation.navigate("MOREInformaion11")}
            >
              <View style={styles.menu31}>
                <View style={[styles.container, styles.containerFlexBox]}>
                  <Image
                    style={styles.frameIcon8}
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
                style={styles.frameIcon8}
                resizeMode="cover"
                source={require("../assets/liuser.png")}
              />
              <Text style={[styles.requests, styles.home1Typo]}>
                My Account
              </Text>
            </Pressable>
            <Pressable
              style={styles.menu2}
              onPress={() => navigation.navigate("Reports")}
            >
              <Image
                style={styles.frameIcon8}
                resizeMode="cover"
                source={require("../assets/frame14.png")}
              />
              <Text style={[styles.requests, styles.home1Typo]}>Reports</Text>
            </Pressable>
          </View>
          <View style={[styles.iphoneIndicator, styles.menuListLayout]}>
            <View style={[styles.line, styles.lineLayout]} />
          </View>
        </View>
      </View>

      {/* <Modal animationType="fade" transparent visible={frameIcon10Visible}>
        <View style={styles.frameIcon10Overlay}>
          <Pressable style={styles.frameIcon10Bg} onPress={closeFrameIcon10} />
          <Home onClose={closeFrameIcon10} />
        </View>
      </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: 86,
    position: "absolute",
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  feedbackFlexBox: {
    textAlign: "left",
    lineHeight: 25,
  },
  seeAll1Typo: {
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  text1Typo: {
    top: 48,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  projectNameTypo: {
    width: 66,
    color: Color.black,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  groupPosition: {
    width: 91,
    borderTopWidth: 1,
    left: 127,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewPosition: {
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
  completedTypo: {
    top: 14,
    justifyContent: "center",
    textAlign: "center",
    color: Color.black,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  progressLayout: {
    width: 52,
    right: 99,
  },
  mediumPosition: {
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  text18Typo: {
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  textTypo3: {
    color: Color.whait,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  rectangleLayout: {
    height: 190,
    width: 343,
  },
  completed1Typo: {
    color: Color.gray,
    justifyContent: "center",
    textAlign: "center",
    top: 14,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  frameParentPosition: {
    top: 79,
    flexDirection: "row",
  },
  containerFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  groupChild23Layout: {
    height: 173,
    width: 343,
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    right: 0,
    top: 0,
  },
  framePosition: {
    left: 8,
    position: "absolute",
  },
  workTypo: {
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  frameChildLayout: {
    height: 15,
    borderRadius: Border.br_8xs,
    width: 15,
  },
  textTypo1: {
    marginLeft: 1,
    fontSize: FontSize.size_4xs,
    color: Color.color,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  textTypo2: {
    fontSize: FontSize.size_4xs,
    color: Color.color,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  polygonParentShadowBox: {
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 24,
  },
  lineLayout: {
    height: 5,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  textPosition: {
    top: 4,
    position: "absolute",
  },
  groupLayout1: {
    height: 205,
    width: 343,
    position: "absolute",
  },
  parentLayout: {
    width: 324,
    right: 9,
    height: 16,
    position: "absolute",
  },
  groupLayout: {
    width: 190,
    height: 8,
  },
  groupChildLayout1: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  textTypo: {
    lineHeight: 9,
    height: 8,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  menuListLayout: {
    width: 375,
    position: "absolute",
  },
  home1Typo: {
    marginTop: 6,
    lineHeight: 16,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menuLayout: {
    width: 57,
    alignItems: "center",
  },
  icon: {
    marginLeft: -43.5,
    top: 40,
    height: 31,
    left: "50%",
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
    display: "none",
    height: 6,
    width: 6,
    position: "absolute",
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
    height: 21,
    width: 54,
    left: 21,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    overflow: "hidden",
    top: 0,
    left: "50%",
    position: "absolute",
  },
  recentTickets: {
    width: 127,
    height: 24,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  seeAll1: {
    width: 46,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    height: 24,
    lineHeight: 25,
  },
  seeAll: {
    marginLeft: 170,
  },
  recentTicketsParent: {
    top: 571,
    flexDirection: "row",
  },
  homeChild: {
    marginLeft: -166.5,
    top: 1520,
    width: 333,
    height: 63,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  groupChildShadowBox1: {
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    height: 190,
    width: 343,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    right: 52,
    width: 31,
    height: 16,
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    fontWeight: "300",
    color: Color.praimary,
    lineHeight: 25,
    position: "absolute",
  },
  orderNumber: {
    right: 85,
    width: 70,
    color: Color.black,
    height: 16,
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
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
    right: 16,
    fontWeight: "300",
    color: Color.praimary,
  },
  projectName: {
    right: 261,
    height: 16,
    alignItems: "center",
    display: "flex",
    top: 16,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    height: 16,
    alignItems: "center",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    fontWeight: "300",
    color: Color.praimary,
    width: 86,
    position: "absolute",
  },
  text1: {
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
  groupItem: {
    top: 80,
    borderTopWidth: 0.5,
    width: 344,
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorMediumseagreen,
  },
  lineView: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: 216,
  },
  groupChild1: {
    left: 118,
  },
  groupChild2: {
    left: 21,
  },
  incomplete: {
    right: 195,
    width: 53,
    justifyContent: "center",
    textAlign: "center",
  },
  inProgress: {
    justifyContent: "center",
    textAlign: "center",
    top: 14,
    color: Color.black,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  completed: {
    width: 53,
    justifyContent: "center",
    textAlign: "center",
    right: 0,
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
    height: 30,
    position: "absolute",
  },
  feedback: {
    width: 63,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 25,
    color: Color.praimary,
    textTransform: "capitalize",
  },
  frameIcon: {
    marginLeft: 4,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  mediumButton: {
    borderColor: Color.praimary,
    paddingHorizontal: Padding.p_sm,
    width: 149,
    borderWidth: 2,
    left: 178,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    justifyContent: "center",
    borderStyle: "solid",
  },
  text2: {
    textTransform: "capitalize",
  },
  frameIcon1: {
    marginLeft: 6,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  mediumButton1: {
    paddingHorizontal: Padding.p_5xl_5,
    backgroundColor: Color.praimary,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    left: 16,
  },
  mediumButton2: {
    paddingHorizontal: Padding.p_xl,
    backgroundColor: Color.praimary,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    left: 16,
  },
  groupChild4: {
    borderColor: Color.gray,
  },
  groupChild5: {
    borderColor: Color.gray,
  },
  inProgress1: {
    width: 52,
    right: 99,
  },
  completed1: {
    width: 53,
    right: 0,
  },
  closeTicket: {
    color: Color.colorRed_100,
    width: 79,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 25,
  },
  mediumButton3: {
    borderColor: Color.colorRed_100,
    paddingHorizontal: Padding.p_sm,
    width: 149,
    borderWidth: 2,
    left: 178,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    justifyContent: "center",
    borderStyle: "solid",
  },
  rectangleGroup: {
    marginTop: 24,
  },
  groupParent: {
    marginLeft: -171.5,
    top: 619,
    height: 193,
    left: "50%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  frame: {
    width: 28,
    height: 28,
  },
  frame1: {
    marginLeft: 20,
    height: 24,
    width: 24,
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  welcome: {
    fontSize: FontSize.size_sm,
    color: Color.praimary,
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
  menuListFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameChild: {
    width: 45,
    height: 45,
    marginLeft: 8,
  },
  frameContainer: {
    marginLeft: 95,
    alignItems: "center",
  },
  frameParent: {
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  groupChild23: {
    backgroundColor: Color.colorHoneydew,
    height: 173,
    width: 343,
    position: "absolute",
  },
  unfinishedServices: {
    width: 150,
    height: 16,
    alignItems: "center",
    textAlign: "left",
    lineHeight: 25,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  text12: {
    width: 32,
    color: Color.color,
    marginLeft: 8,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  jeddahYachtClub2: {
    width: 118,
    marginTop: 4,
    color: Color.black,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  frameView: {
    top: 16,
  },
  frameItem: {
    backgroundColor: Color.praimary,
  },
  electricalWork: {
    width: 65,
    marginLeft: 4,
    color: Color.black,
    fontWeight: "300",
  },
  frameParent3: {
    alignItems: "center",
    flexDirection: "row",
  },
  text13: {
    width: 20,
  },
  frameInner: {
    backgroundColor: Color.binary,
  },
  plumbingWork: {
    marginLeft: 4,
    fontWeight: "300",
  },
  text14: {
    width: 17,
  },
  frameParent4: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.colorChocolate,
  },
  other: {
    width: 27,
    marginLeft: 4,
    color: Color.black,
    fontWeight: "300",
  },
  rectangleParent4: {
    alignItems: "center",
    width: 46,
    flexDirection: "row",
  },
  text15: {
    width: 17,
  },
  frameChild2: {
    backgroundColor: Color.colorGold,
  },
  janitorialWork: {
    marginLeft: 4,
    color: Color.black,
    fontWeight: "300",
    width: 67,
  },
  text16: {
    width: 20,
  },
  frameChild3: {
    backgroundColor: Color.ternary,
  },
  hvacWork: {
    marginLeft: 4,
    color: Color.black,
    fontWeight: "300",
    width: 54,
  },
  text17: {
    width: 21,
  },
  frameParent6: {
    marginLeft: 16,
  },
  frameParent1: {
    top: 79,
    flexDirection: "row",
  },
  vectorIcon: {
    top: 8,
    right: 1,
    width: 90,
    height: 90,
    position: "absolute",
  },
  polygonIcon: {
    top: 11,
    left: 9,
    width: 6,
  },
  groupChild24: {
    borderRadius: Border.br_11xs_5,
    height: 12,
    backgroundColor: Color.whait,
    width: 24,
    top: 0,
  },
  text18: {
    left: 6,
    fontSize: FontSize.size_5xs_1,
    lineHeight: 7,
    width: 12,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    textAlign: "center",
    color: Color.black,
    height: 6,
  },
  polygonParent: {
    left: 26,
    top: 0,
    position: "absolute",
  },
  polygonGroup: {
    top: 25,
    left: 72,
    position: "absolute",
  },
  polygonContainer: {
    top: 76,
    left: 60,
    position: "absolute",
  },
  polygonParent1: {
    top: 73,
    left: 24,
    position: "absolute",
  },
  polygonParent2: {
    top: 45,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    height: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    width: 24,
  },
  vectorParent: {
    top: 64,
    right: 7,
    width: 96,
    height: 98,
    position: "absolute",
  },
  frameIcon10Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameIcon10Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frame2: {
    left: 319,
    width: 16,
    height: 16,
    top: 16,
    position: "absolute",
  },
  rectangleParent1: {
    top: 153,
    right: 16,
  },
  groupChild33: {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    right: 0,
    top: 0,
    backgroundColor: Color.whait,
  },
  completed4: {
    right: 264,
    width: 60,
    color: Color.black,
    height: 16,
    alignItems: "center",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
    top: 0,
    position: "absolute",
  },
  text23: {
    height: 8,
    width: 20,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupChild34: {
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupChild35: {
    left: 126,
    width: 64,
    height: 8,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  rectangleParent7: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  encapsulatedGroup: {
    marginLeft: 6,
    overflow: "hidden",
  },
  text24: {
    width: 32,
    marginLeft: 6,
  },
  parent: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    right: 0,
  },
  completedParent: {
    top: 56,
  },
  text25: {
    right: 234,
    height: 8,
    width: 20,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupChild37: {
    left: 54,
    width: 136,
    height: 8,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  encapsulatedGroup1: {
    left: 96,
    top: 4,
    position: "absolute",
    overflow: "hidden",
  },
  text26: {
    width: 26,
    top: 4,
    position: "absolute",
    right: 0,
  },
  incompleteParent: {
    top: 88,
  },
  out: {
    textTransform: "capitalize",
  },
  outOfScopeContainer1: {
    width: "100%",
  },
  outOfScopeContainer: {
    right: 256,
    width: 68,
    color: Color.black,
    height: 16,
    alignItems: "center",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
    top: 0,
    position: "absolute",
  },
  groupChild39: {
    left: 174,
    height: 8,
    backgroundColor: Color.praimary,
    width: 16,
    position: "absolute",
  },
  outOfScopeParent: {
    top: 120,
  },
  groupChild41: {
    left: 182,
    width: 8,
    height: 8,
    backgroundColor: Color.praimary,
    position: "absolute",
  },
  inTransitParent: {
    top: 152,
  },
  allServicesProvided: {
    color: Color.black,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  text31: {
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  allServicesProvidedContainer: {
    marginLeft: -161.5,
    width: 326,
    textAlign: "center",
    top: 16,
    fontSize: FontSize.size_xs,
    height: 24,
    lineHeight: 25,
    left: "50%",
    position: "absolute",
  },
  groupIcon: {
    height: "4.39%",
    width: "4.66%",
    top: "89.76%",
    right: "47.52%",
    bottom: "5.85%",
    left: "47.81%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  groupPressable: {
    top: 342,
    right: 16,
  },
  frameIcon8: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home1: {
    color: Color.praimary,
    fontWeight: "700",
  },
  requests: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu5: {
    width: 58,
    marginLeft: 16,
    alignItems: "center",
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.praimary,
    borderStyle: "solid",
    justifyContent: "flex-end",
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menu3: {
    marginLeft: 16,
  },
  menu2: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: Color.whait,
    flexDirection: "row",
    right: 0,
  },
  line: {
    marginLeft: -67.5,
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: 135,
    borderRadius: Border.br_81xl,
    left: "50%",
  },
  iphoneIndicator: {
    bottom: 0,
    width: 375,
    height: 30,
    backgroundColor: Color.whait,
    right: 0,
  },
  bottomNav: {
    marginLeft: -187.5,
    backgroundColor: Color.colorWhitesmoke_200,
    bottom: 0,
    width: 375,
    height: 90,
    overflow: "hidden",
    left: "50%",
  },
  home: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Home9;
