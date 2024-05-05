import React, { useState, useCallback } from "react";
import { Image, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Home6 from "../components/Home6";
// import Home from "../components/Home";
import Home7 from "../components/Home7";
import { FontSize, Color, Border, FontFamily, Padding } from "../GlobalStyles";

const Home8 = () => {
  const [mediumButtonContainer1Visible, setMediumButtonContainer1Visible] =
    useState(false);
  const [mediumButtonContainer3Visible, setMediumButtonContainer3Visible] =
    useState(false);
  const [mediumButtonContainer5Visible, setMediumButtonContainer5Visible] =
    useState(false);
  const [mediumButtonContainer7Visible, setMediumButtonContainer7Visible] =
    useState(false);
  const [frameIcon8Visible, setFrameIcon8Visible] = useState(false);
  const [buttonContainerVisible, setButtonContainerVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const openMediumButtonContainer1 = useCallback(() => {
    setMediumButtonContainer1Visible(true);
  }, []);

  const closeMediumButtonContainer1 = useCallback(() => {
    setMediumButtonContainer1Visible(false);
  }, []);

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

  const openFrameIcon8 = useCallback(() => {
    setFrameIcon8Visible(true);
  }, []);

  const closeFrameIcon8 = useCallback(() => {
    setFrameIcon8Visible(false);
  }, []);

  const openButtonContainer = useCallback(() => {
    setButtonContainerVisible(true);
  }, []);

  const closeButtonContainer = useCallback(() => {
    setButtonContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <Image
          style={[styles.icon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/3-1-1.png")}
        />
        <Text style={[styles.recentRequests, styles.recentRequestsTypo]}>
          Recent requests
        </Text>
        <Text style={[styles.seeAll, styles.seeAllClr]}>See all</Text>
        <View style={styles.homeChild} />
        <View style={[styles.rectangleParent, styles.groupChildLayout2]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox1]} />
          <Text style={[styles.completed, styles.text5Layout1]}>Completed</Text>
          <View style={[styles.parent, styles.parentFlexBox]}>
            <Text style={[styles.text, styles.textParentFlexBox]}>35</Text>
            <View
              style={[styles.encapsulatedGroup, styles.frameIconSpaceBlock]}
            >
              <View style={styles.rectangleGroup}>
                <View style={[styles.groupItem, styles.groupBg]} />
                <View style={[styles.groupInner, styles.groupChildLayout1]} />
              </View>
            </View>
            <Text style={styles.text1}>35%</Text>
          </View>
          <Text style={[styles.incomplete, styles.text5Layout1]}>
            Incomplete
          </Text>
          <Text style={[styles.text2, styles.textPosition]}>65</Text>
          <View style={[styles.encapsulatedGroup1, styles.textPosition]}>
            <View style={styles.rectangleGroup}>
              <View style={[styles.groupItem, styles.groupBg]} />
              <View style={[styles.groupChild1, styles.groupChildLayout1]} />
            </View>
          </View>
          <Text style={[styles.text3, styles.textPosition]}>65%</Text>
          <Text style={styles.allServicesProvidedContainer}>
            <Text
              style={styles.allServicesProvided}
            >{`All services provided since contract inception `}</Text>
            <Text style={styles.text4}>(100)</Text>
          </Text>
          <Image
            style={[styles.groupIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupPosition]}>
          <View style={styles.groupViewLayout}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text5, styles.text5Layout]}>21584</Text>
            <Text style={[styles.orderNumber, styles.workTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text6Typo]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.workTypo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text6, styles.text6Typo]}>10/10/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text6Typo]}>
              Date of request :
            </Text>
            <View style={[styles.lineView, styles.lineViewBorder]} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={[styles.text7, styles.text7Clr]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild3, styles.groupChildPosition1]} />
              <View style={[styles.groupChild4, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Image
                style={[styles.groupChild5, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Image
                style={[styles.groupChild6, styles.groupChild6Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-195.png")}
              />
              <Text
                style={[styles.incomplete1, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed1, styles.completedLayout]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton1, styles.mediumLayout]}
              onPress={openMediumButtonContainer1}
            >
              <Text style={[styles.review, styles.text7Typo]}>review</Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame1.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text5, styles.text5Layout]}>23655</Text>
            <Text style={[styles.orderNumber, styles.workTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
              Maintenance type :
            </Text>
            <Text style={[styles.preventive, styles.text6Typo]}>Routine</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.workTypo]}>
              Jeddah Yacht Club
            </Text>
            <Text style={[styles.text6, styles.text6Typo]}>01/11/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text6Typo]}>
              Date of request :
            </Text>
            <View style={[styles.lineView, styles.lineViewBorder]} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={[styles.text7, styles.text7Clr]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild9, styles.groupChildPosition1]} />
              <View style={[styles.groupChild10, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild5, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild6, styles.groupChild6Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-197.png")}
              />
              <Text
                style={[styles.incomplete1, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed2Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed2, styles.completed2Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer3}
            >
              <Text style={[styles.closeTicket, styles.text7Typo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text5, styles.text5Layout]}>25416</Text>
            <Text style={[styles.orderNumber, styles.workTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text6Typo]}
            >{`Preventive `}</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.workTypo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text6, styles.text6Typo]}>10/31/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text6Typo]}>
              Date of request :
            </Text>
            <View style={[styles.lineView, styles.lineViewBorder]} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={[styles.text7, styles.text7Clr]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild9, styles.groupChildPosition1]} />
              <View style={[styles.groupChild10, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild5, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-196.png")}
              />
              <Image
                style={[styles.groupChild6, styles.groupChild6Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-196.png")}
              />
              <Text
                style={[styles.incomplete1, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress, styles.progressLayout]}>
                In progress
              </Text>
              <Text style={[styles.completed2, styles.completed2Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer5}
            >
              <Text style={[styles.closeTicket, styles.text7Typo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.rectangleParent1, styles.groupViewLayout]}>
            <View style={styles.groupChildShadowBox} />
            <Text style={[styles.text5, styles.text5Layout]}>26890</Text>
            <Text style={[styles.orderNumber, styles.workTypo]}>
              Order number :
            </Text>
            <Text style={[styles.maintenanceType, styles.vectorParentLayout]}>
              Maintenance type :
            </Text>
            <Text
              style={[styles.preventive, styles.text6Typo]}
            >{`Routine `}</Text>
            <Text style={[styles.projectName, styles.projectNameTypo]}>
              Project name :
            </Text>
            <Text style={[styles.jeddahYachtClub, styles.workTypo]}>
              Jeddah Promenade
            </Text>
            <Text style={[styles.text6, styles.text6Typo]}>10/15/2023</Text>
            <Text style={[styles.dateOfRequest, styles.text6Typo]}>
              Date of request :
            </Text>
            <View style={[styles.lineView, styles.lineViewBorder]} />
            <Pressable
              style={styles.mediumButton}
              onPress={() => navigation.navigate("VerificationCode4")}
            >
              <Text style={[styles.text7, styles.text7Clr]}>
                Request details
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame.png")}
              />
            </Pressable>
            <View style={styles.lineParent}>
              <View style={[styles.groupChild9, styles.groupChildPosition1]} />
              <View style={[styles.groupChild10, styles.groupChildPosition]} />
              <Image
                style={[styles.ellipseIcon, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild5, styles.groupChildLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1951.png")}
              />
              <Image
                style={[styles.groupChild6, styles.groupChild6Position]}
                resizeMode="cover"
                source={require("../assets/ellipse-197.png")}
              />
              <Text
                style={[styles.incomplete1, styles.completedLayout]}
              >{`Incomplete `}</Text>
              <Text style={[styles.inProgress1, styles.completed2Typo]}>
                In progress
              </Text>
              <Text style={[styles.completed2, styles.completed2Typo]}>
                Completed
              </Text>
            </View>
            <Pressable
              style={[styles.mediumButton3, styles.mediumLayout]}
              onPress={openMediumButtonContainer7}
            >
              <Text style={[styles.closeTicket, styles.text7Typo]}>
                Close Ticket
              </Text>
              <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.rectangleParent4, styles.groupChild28Layout]}>
          <View style={[styles.groupChild28, styles.groupChild28Layout]} />
          <View style={[styles.frameParent, styles.frameParentPosition1]}>
            <View style={styles.frameGroup}>
              <View style={styles.frameView}>
                <View style={[styles.frameChild, styles.frameChildLayout]} />
                <Text style={[styles.electricalWork, styles.workTypo]}>
                  Electrical work
                </Text>
              </View>
              <View style={[styles.rectangleParent5, styles.textParentFlexBox]}>
                <View style={[styles.frameItem, styles.frameChildLayout]} />
                <Text style={[styles.janitorialWork, styles.projectNameTypo]}>
                  Janitorial work
                </Text>
              </View>
            </View>
            <View style={styles.vectorGroupSpaceBlock}>
              <View style={[styles.rectangleParent6, styles.textParentFlexBox]}>
                <View style={[styles.frameInner, styles.frameChildLayout]} />
                <Text style={[styles.janitorialWork, styles.projectNameTypo]}>
                  Plumbing work
                </Text>
              </View>
              <View style={styles.rectangleParent7}>
                <View style={[styles.frameChild1, styles.frameChildLayout]} />
                <Text style={[styles.airConditioningWork, styles.workTypo]}>
                  Air conditioning work
                </Text>
              </View>
            </View>
            <View
              style={[styles.rectangleParent8, styles.vectorGroupSpaceBlock]}
            >
              <View style={[styles.frameChild2, styles.frameChildLayout]} />
              <Text style={[styles.janitorialWork, styles.projectNameTypo]}>
                Other
              </Text>
            </View>
          </View>
          <View style={[styles.vectorParent, styles.vectorParentLayout]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector7.png")}
            />
            <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-1.png")}
              />
              <View style={styles.groupChild29} />
              <Text style={[styles.text17, styles.text17Layout]}>20</Text>
            </View>
            <View style={[styles.polygonGroup, styles.polygonParentShadowBox]}>
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-11.png")}
              />
              <View style={styles.groupChild29} />
              <Text style={[styles.text18, styles.textTypo]}>6</Text>
            </View>
            <View
              style={[styles.polygonContainer, styles.polygonParentShadowBox]}
            >
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-12.png")}
              />
              <View style={styles.groupChild29} />
              <Text style={[styles.text18, styles.textTypo]}>8</Text>
            </View>
            <View
              style={[styles.polygonParent1, styles.polygonParentShadowBox]}
            >
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-13.png")}
              />
              <View style={styles.groupChild29} />
              <Text style={[styles.text18, styles.textTypo]}>3</Text>
            </View>
            <View
              style={[styles.polygonParent2, styles.polygonParentShadowBox]}
            >
              <Image
                style={[styles.polygonIcon, styles.lineLayout]}
                resizeMode="cover"
                source={require("../assets/polygon-14.png")}
              />
              <View style={styles.groupChild29} />
              <Text style={[styles.text18, styles.textTypo]}>16</Text>
            </View>
          </View>
          <View style={[styles.frameParent1, styles.frameParentPosition1]}>
            <View style={[styles.rectangleParent6, styles.textParentFlexBox]}>
              <Text style={[styles.unfinishedServices, styles.text5Layout1]}>
                Unfinished services
              </Text>
              <Text style={styles.text22}>( 53 )</Text>
            </View>
            <Text style={[styles.jeddahYachtClub2, styles.workTypo]}>
              Jeddah Yacht Club
            </Text>
          </View>
          <Pressable
            style={[styles.frame, styles.frameIconLayout]}
            onPress={openFrameIcon8}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/frame2.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frameParent2}>
          <View style={[styles.rectangleParent6, styles.textParentFlexBox]}>
            <Image
              style={styles.frameIcon8}
              resizeMode="cover"
              source={require("../assets/frame10.png")}
            />
            <Pressable
              style={styles.frame1}
              onPress={() => navigation.navigate("Notifications")}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/frame68.png")}
              />
            </Pressable>
          </View>
          <Pressable
            style={[styles.framePressable, styles.parentFlexBox]}
            onPress={() => navigation.navigate("Profile1")}
          >
            <View style={styles.menuListFlexBox}>
              <Text style={styles.welcome}>Welcome</Text>
              <View
                style={[
                  styles.assemAlMohammadiWrapper,
                  styles.textParentFlexBox,
                ]}
              >
                <Text style={styles.assemAlMohammadi}>Assem Al-Mohammadi</Text>
              </View>
            </View>
            <Image
              style={styles.frameChild3}
              resizeMode="cover"
              source={require("../assets/ellipse-167.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.bottomNav, styles.menuListLayout]}>
          <View style={[styles.menuList, styles.menuListLayout]}>
            <View style={styles.menuLayout}>
              <Image
                style={styles.frameIcon9}
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
                style={styles.frameIcon9}
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
                <View style={[styles.container, styles.parentFlexBox]}>
                  <Image
                    style={styles.frameIcon9}
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
                style={styles.frameIcon9}
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
                style={styles.frameIcon9}
                resizeMode="cover"
                source={require("../assets/frame14.png")}
              />
              <Text style={[styles.requests, styles.home1Typo]}>Reports</Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          style={[styles.homeItem, styles.faceIdPosition]}
          onPress={() => navigation.navigate("Requests5")}
        />
        <View style={[styles.iphoneIndicator, styles.menuListLayout]}>
          <View style={[styles.line, styles.lineLayout]} />
        </View>
        <View style={[styles.faceId, styles.faceIdPosition]}>
          <View style={styles.customerFeedbackWrapper}>
            <Text style={[styles.customerFeedback, styles.textParentFlexBox]}>
              {" "}
              Customer feedback
            </Text>
          </View>
          <View style={[styles.faceIdChild, styles.lineViewBorder]} />
          <View style={[styles.frameParent4, styles.frameParentPosition]}>
            <View style={styles.groupContainer}>
              <View style={styles.groupChild38Layout}>
                <Image
                  style={[styles.groupChild38, styles.groupChild38Layout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-170.png")}
                />
                <Image
                  style={[
                    styles.httpslottiefilescomanimatIcon,
                    styles.text5Layout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/httpslottiefilescomanimationslikeectl6iwnk0.png")}
                />
              </View>
              <View style={styles.teamworkRateParent}>
                <Text style={[styles.teamworkRate, styles.rateTypo]}>
                  teamwork rate
                </Text>
                <Text style={styles.team2Layout}>
                  <Text style={styles.team}>Team</Text>
                  <Text style={styles.text23}>{` `}</Text>
                  <Text style={styles.team}>2</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.vectorGroup, styles.vectorGroupSpaceBlock]}>
              <Image
                style={styles.vectorIconLayout}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </View>
          </View>
          <View style={[styles.frameParent5, styles.frameParentPosition]}>
            <View style={styles.textParentFlexBox}>
              <View style={styles.groupChild38Layout}>
                <Image
                  style={[styles.groupChild38, styles.groupChild38Layout]}
                  resizeMode="cover"
                  source={require("../assets/ellipse-170.png")}
                />
                <Image
                  style={[
                    styles.httpslottiefilescomanimatIcon,
                    styles.text5Layout,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/httpslottiefilescomanimationslikeectl6iwnk0.png")}
                />
              </View>
              <View style={styles.teamworkRateParent}>
                <Text style={[styles.companyRate, styles.rateTypo]}>
                  Company rate
                </Text>
                <Text style={[styles.profm, styles.team2Layout]}>PROFM</Text>
              </View>
            </View>
            <View style={[styles.vectorGroup, styles.vectorGroupSpaceBlock]}>
              <Image
                style={styles.vectorIconLayout}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector5.png")}
              />
            </View>
          </View>
          <View style={[styles.encapsulatedGroup2, styles.groupLayout]}>
            <View style={[styles.rectangleParent9, styles.groupLayout]}>
              <View style={[styles.groupChild40, styles.groupLayout]} />
              <Text style={[styles.youCanWrite, styles.completed2Typo]}>
                You can write additional comments here
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.button, styles.groupPosition]}
            onPress={openButtonContainer}
          >
            <View style={[styles.buttonChild, styles.iconLayout]} />
            <Text style={[styles.submitFeedback, styles.text7Clr]}>
              Submit Feedback
            </Text>
          </Pressable>
          <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("Home9")}
          >
            <Image
              style={[styles.icon3, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </Pressable>
        </View>
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
              style={[styles.recordingIndicatorIcon, styles.text17Layout]}
              resizeMode="cover"
              source={require("../assets/recording-indicator.png")}
            />
          </View>
          <Image
            style={[styles.leftSideIcon, styles.groupChild6Position]}
            resizeMode="cover"
            source={require("../assets/left-side2.png")}
          />
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={mediumButtonContainer1Visible}
      >
        <View style={styles.mediumButtonContainer1Overlay}>
          <Pressable
            style={styles.mediumButtonContainer1Bg}
            onPress={closeMediumButtonContainer1}
          />
          <Home6 onClose={closeMediumButtonContainer1} />
        </View>
      </Modal>

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

      {/* <Modal animationType="fade" transparent visible={frameIcon8Visible}>
        <View style={styles.frameIcon8Overlay}>
          <Pressable style={styles.frameIcon8Bg} onPress={closeFrameIcon8} />
          <Home onClose={closeFrameIcon8} />
        </View>
      </Modal> */}

      <Modal animationType="fade" transparent visible={buttonContainerVisible}>
        <View style={styles.buttonContainerOverlay}>
          <Pressable
            style={styles.buttonContainerBg}
            onPress={closeButtonContainer}
          />
          <Home7 onClose={closeButtonContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: 86,
    position: "absolute",
  },
  recentRequestsTypo: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
  },
  seeAllClr: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  groupChildLayout2: {
    height: 135,
    width: 343,
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    right: 0,
  },
  text5Layout1: {
    height: 16,
    alignItems: "center",
    display: "flex",
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  textParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameIconSpaceBlock: {
    marginLeft: 6,
    overflow: "hidden",
  },
  groupBg: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupChildLayout1: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textPosition: {
    top: 92,
    height: 8,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    marginLeft: -171.5,
    left: "50%",
  },
  text5Layout: {
    width: 31,
    position: "absolute",
  },
  workTypo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
  },
  vectorParentLayout: {
    width: 89,
    position: "absolute",
  },
  text6Typo: {
    top: 48,
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  projectNameTypo: {
    width: 66,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  lineViewBorder: {
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    position: "absolute",
  },
  text7Clr: {
    color: Color.whait,
    fontFamily: FontFamily.dGBaysan,
  },
  frameIconLayout: {
    width: 16,
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
  },
  groupChild6Position: {
    left: 21,
    position: "absolute",
  },
  completedLayout: {
    width: 53,
    top: 14,
    justifyContent: "center",
    textAlign: "center",
    height: 16,
  },
  progressLayout: {
    width: 52,
    right: 99,
    top: 14,
    justifyContent: "center",
    textAlign: "center",
    height: 16,
  },
  mediumLayout: {
    width: 149,
    borderWidth: 2,
    left: 178,
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text7Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
  },
  groupViewLayout: {
    height: 190,
    width: 343,
  },
  completed2Typo: {
    color: Color.gray,
    fontSize: FontSize.size_3xs,
    alignItems: "center",
    display: "flex",
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChild28Layout: {
    height: 173,
    width: 343,
    position: "absolute",
  },
  frameParentPosition1: {
    left: 8,
    position: "absolute",
  },
  frameChildLayout: {
    height: 15,
    borderRadius: Border.br_8xs,
    width: 15,
  },
  vectorGroupSpaceBlock: {
    marginTop: 16,
    flexDirection: "row",
  },
  polygonParentShadowBox: {
    height: 14,
    elevation: 2.55,
    shadowRadius: 2.55,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  lineLayout: {
    height: 5,
    position: "absolute",
  },
  text17Layout: {
    height: 6,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 6,
    fontSize: FontSize.size_6xs_1,
    right: 7,
    top: 3,
    fontWeight: "600",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
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
  faceIdPosition: {
    top: "50%",
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  frameParentPosition: {
    marginLeft: -74.5,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  groupChild38Layout: {
    height: 60,
    width: 60,
  },
  rateTypo: {
    lineHeight: 16,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    height: 16,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  vectorIconLayout: {
    width: 23,
    height: 21,
  },
  team2Layout: {
    width: 72,
    marginTop: 8,
    lineHeight: 16,
    color: Color.color,
    textAlign: "center",
    height: 16,
    fontSize: FontSize.size_xs,
  },
  groupLayout: {
    height: 143,
    width: 343,
    position: "absolute",
  },
  icon: {
    marginLeft: -43.5,
    top: 40,
    height: 31,
    left: "50%",
  },
  recentRequests: {
    right: 232,
    width: 127,
    height: 24,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 25,
    top: 509,
    position: "absolute",
  },
  seeAll: {
    width: 46,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    right: 16,
    height: 24,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    top: 509,
    position: "absolute",
  },
  homeChild: {
    marginLeft: -166.5,
    top: 1440,
    width: 333,
    height: 63,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    position: "absolute",
    top: 0,
    height: 135,
    width: 343,
  },
  completed: {
    top: 56,
    width: 60,
    right: 273,
    height: 16,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    position: "absolute",
  },
  text: {
    height: 8,
    width: 20,
    textAlign: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupItem: {
    left: 0,
    width: 190,
    height: 8,
    position: "absolute",
  },
  groupInner: {
    left: 126,
    width: 64,
    backgroundColor: Color.praimary,
    height: 8,
    top: 0,
  },
  rectangleGroup: {
    left: 0,
    width: 190,
    height: 8,
    top: 0,
    position: "absolute",
  },
  encapsulatedGroup: {
    width: 190,
    height: 8,
  },
  text1: {
    width: 32,
    lineHeight: 9,
    marginLeft: 6,
    height: 8,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
  },
  parent: {
    top: 60,
    right: 9,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
  },
  incomplete: {
    top: 88,
    width: 60,
    right: 273,
    height: 16,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
    position: "absolute",
  },
  text2: {
    right: 243,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    lineHeight: 25,
  },
  groupChild1: {
    left: 54,
    width: 136,
    backgroundColor: Color.praimary,
    height: 8,
    top: 0,
  },
  encapsulatedGroup1: {
    left: 106,
    width: 190,
    overflow: "hidden",
  },
  text3: {
    width: 26,
    lineHeight: 9,
    top: 92,
    right: 9,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
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
    width: 326,
    top: 16,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    height: 24,
    lineHeight: 25,
    left: "50%",
    position: "absolute",
  },
  groupIcon: {
    height: "6.67%",
    width: "4.66%",
    top: "87.41%",
    right: "47.52%",
    bottom: "5.93%",
    left: "47.81%",
    position: "absolute",
  },
  rectangleParent: {
    top: 350,
    right: 16,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    height: 190,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    right: 0,
    top: 0,
    width: 343,
    position: "absolute",
  },
  text5: {
    right: 52,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    top: 16,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "300",
    textAlign: "left",
    color: Color.praimary,
    lineHeight: 25,
  },
  orderNumber: {
    right: 85,
    width: 70,
    top: 16,
    height: 16,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  maintenanceType: {
    right: 66,
    top: 48,
    fontSize: FontSize.size_3xs,
    height: 16,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
  },
  preventive: {
    width: 48,
    fontWeight: "300",
    right: 16,
    color: Color.praimary,
    position: "absolute",
  },
  projectName: {
    right: 261,
    top: 16,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  jeddahYachtClub: {
    right: 173,
    top: 16,
    height: 16,
    alignItems: "center",
    display: "flex",
    fontWeight: "300",
    textAlign: "left",
    color: Color.praimary,
    width: 86,
    position: "absolute",
  },
  text6: {
    right: 197,
    width: 51,
    fontWeight: "300",
    color: Color.praimary,
    position: "absolute",
  },
  dateOfRequest: {
    right: 250,
    width: 77,
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    position: "absolute",
  },
  lineView: {
    top: 80,
    width: 344,
    right: 0,
  },
  text7: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    textAlign: "right",
  },
  frameIcon: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_sm,
    top: 142,
    left: 16,
    backgroundColor: Color.praimary,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChild3: {
    borderColor: Color.colorMediumseagreen,
  },
  groupChild4: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: 216,
    position: "absolute",
  },
  groupChild5: {
    left: 118,
    position: "absolute",
  },
  groupChild6: {
    height: 10,
    width: 10,
    top: 0,
  },
  incomplete1: {
    right: 195,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  inProgress: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  completed1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    right: 0,
    fontWeight: "700",
    position: "absolute",
  },
  lineParent: {
    top: 96,
    left: 48,
    width: 248,
    height: 30,
    position: "absolute",
  },
  mediumButtonContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButtonContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  review: {
    width: 47,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  frameIcon1: {
    marginLeft: 4,
    overflow: "hidden",
  },
  mediumButton1: {
    borderColor: Color.praimary,
  },
  groupChild9: {
    borderColor: Color.gray,
  },
  groupChild10: {
    borderColor: Color.gray,
  },
  inProgress1: {
    width: 52,
    right: 99,
    top: 14,
    justifyContent: "center",
    textAlign: "center",
    height: 16,
  },
  completed2: {
    width: 53,
    top: 14,
    justifyContent: "center",
    textAlign: "center",
    height: 16,
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
    width: 79,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  mediumButton3: {
    borderColor: Color.colorRed_100,
  },
  rectangleParent1: {
    marginTop: 24,
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
  groupParent: {
    top: 557,
    height: 255,
    position: "absolute",
  },
  groupChild28: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    right: 0,
  },
  frameChild: {
    backgroundColor: Color.praimary,
  },
  electricalWork: {
    width: 74,
    marginLeft: 4,
    color: Color.black,
    fontWeight: "300",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameItem: {
    backgroundColor: Color.colorGold,
  },
  janitorialWork: {
    marginLeft: 4,
    fontWeight: "300",
  },
  rectangleParent5: {
    marginLeft: 8,
    flexDirection: "row",
  },
  frameGroup: {
    flexDirection: "row",
  },
  frameInner: {
    backgroundColor: Color.binary,
  },
  rectangleParent6: {
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.ternary,
  },
  airConditioningWork: {
    width: 95,
    marginLeft: 4,
    color: Color.black,
    fontWeight: "300",
    textAlign: "left",
  },
  rectangleParent7: {
    marginLeft: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild2: {
    backgroundColor: Color.colorChocolate,
  },
  rectangleParent8: {
    alignItems: "center",
  },
  frameParent: {
    top: 73,
  },
  vectorIcon: {
    top: 8,
    width: 76,
    height: 76,
    right: 8,
    position: "absolute",
  },
  polygonIcon: {
    top: 9,
    width: 5,
    right: 8,
  },
  groupChild29: {
    borderRadius: 1,
    height: 11,
    width: 20,
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  text17: {
    width: 8,
    lineHeight: 6,
    fontSize: FontSize.size_6xs_1,
    right: 7,
    top: 3,
    fontWeight: "600",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
  },
  polygonParent: {
    top: 22,
    right: 69,
  },
  text18: {
    width: 7,
    height: 5,
    position: "absolute",
  },
  polygonGroup: {
    top: 63,
    right: 14,
  },
  polygonContainer: {
    top: 66,
    right: 49,
  },
  polygonParent1: {
    right: 23,
    top: 0,
  },
  polygonParent2: {
    top: 32,
    right: 0,
  },
  vectorParent: {
    top: 67,
    height: 84,
    right: 8,
  },
  unfinishedServices: {
    width: 150,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 25,
    fontSize: FontSize.size_base,
  },
  text22: {
    color: Color.color,
    marginLeft: 8,
    fontSize: FontSize.size_3xs,
    width: 32,
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
    textAlign: "left",
    textTransform: "capitalize",
  },
  frameParent1: {
    top: 16,
  },
  frameIcon8Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameIcon8Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon1: {
    overflow: "hidden",
  },
  frame: {
    left: 319,
    top: 16,
    position: "absolute",
  },
  rectangleParent4: {
    top: 153,
    right: 16,
  },
  frameIcon8: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  frame1: {
    marginLeft: 20,
    width: 24,
    height: 24,
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
    flexDirection: "row",
  },
  menuListFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameChild3: {
    width: 45,
    height: 45,
    marginLeft: 8,
  },
  framePressable: {
    marginLeft: 95,
    alignItems: "center",
  },
  frameParent2: {
    top: 79,
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  frameIcon9: {
    width: 24,
    overflow: "hidden",
    height: 24,
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
    borderStyle: "solid",
    backgroundColor: Color.praimary,
  },
  menu31: {
    height: 52,
    width: 74,
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
    flexDirection: "row",
    backgroundColor: Color.whait,
    right: 0,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    overflow: "hidden",
    left: "50%",
  },
  homeItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_600,
    height: 812,
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
  customerFeedback: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 0.4,
    lineHeight: 20,
    width: 256,
    height: 30,
    textAlign: "center",
    display: "flex",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  customerFeedbackWrapper: {
    marginLeft: -128.5,
    top: 16,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  faceIdChild: {
    top: 62,
    width: 376,
    left: 0,
  },
  groupChild38: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  httpslottiefilescomanimatIcon: {
    top: 15,
    left: 15,
    height: 30,
  },
  teamworkRate: {
    width: 100,
  },
  team: {
    fontFamily: FontFamily.dGBaysan,
  },
  text23: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
  },
  teamworkRateParent: {
    marginTop: 8,
    alignItems: "center",
  },
  groupContainer: {
    alignItems: "center",
  },
  vectorIcon2: {
    marginLeft: 9.09,
  },
  vectorGroup: {
    height: 21,
    width: 150,
  },
  frameParent4: {
    top: 78,
  },
  companyRate: {
    width: 94,
  },
  profm: {
    fontFamily: FontFamily.dGBaysan,
  },
  frameParent5: {
    top: 255,
  },
  groupChild40: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    borderColor: Color.color,
    borderWidth: 1,
    borderStyle: "solid",
    elevation: 20,
    shadowRadius: 20,
    height: 143,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    right: 0,
    top: 0,
  },
  youCanWrite: {
    marginLeft: -155.4,
    width: 177,
    top: 16,
    textAlign: "left",
    left: "50%",
  },
  rectangleParent9: {
    right: 0,
    top: 0,
  },
  encapsulatedGroup2: {
    top: 424,
    marginLeft: -171.5,
    left: "50%",
    overflow: "hidden",
  },
  buttonContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  submitFeedback: {
    height: "50%",
    marginLeft: -69.5,
    top: "25%",
    letterSpacing: 0.6,
    lineHeight: 44,
    width: 139,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    display: "flex",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    left: "50%",
    position: "absolute",
  },
  button: {
    top: 591,
    height: 48,
    width: 343,
    marginLeft: -171.5,
    position: "absolute",
  },
  icon3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "89.33%",
    top: "3.02%",
    right: "5.33%",
    bottom: "93.92%",
    width: "5.33%",
    height: "3.06%",
    position: "absolute",
  },
  faceId: {
    marginTop: -287,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    height: 663,
    backgroundColor: Color.whait,
    overflow: "hidden",
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
    height: 11,
    right: 0,
    top: 0,
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
    top: 12,
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    top: 0,
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  home: {
    backgroundColor: Color.colorGray_100,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default Home8;
