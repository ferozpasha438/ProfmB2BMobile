import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, Switch, ScrollView, Dimensions, FlatList, Alert, Keyboard } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import RNFS from 'react-native-fs';
import { format } from 'date-fns';

const ViewTicket = ({route}) => {
  const {ticketId}=route.params;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [pageHieght, setPageHieght] = useState(0);
  const [photoListHieght, setPhotoListHieght] = useState(0);
  const windowHeight = Dimensions.get('screen').height;
  const windowWidth = Dimensions.get('screen').width;
  const [loginType, setLoginType] = useState("");
  const [loginRole, setLoginRole] = useState("");
  const [token, setLoginToken] = useState("");
  const [isCustomer, setIsCustomer] = useState(true);

  const [requester, setRequester] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [projectName, setProjectName] = useState("");
  const [requestDate, setRequestDate] = useState(new Date());
  const [requestNumber, setRequestNumber] = useState("");
  const [requestStatus, setRequestStatus] = useState("");

  const [maintenanceType, setMaintenanceType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [problem, setProblem] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [image1Url, setImage1Url] = useState('');
  const [image2Url, setImage2Url] = useState('');
  const [image3Url, setImage3Url] = useState('');


 
  const getTicketData = async (jwttoken:string) => {
    WebServer.getDataWithToken('FomMobJobTicketHead/viewTicketById/' + ticketId,jwttoken,'', getTicketDataCallback);
  };
  const getTicketDataCallback = ticketDataResponse => {
    if (ticketDataResponse && ticketDataResponse.message === undefined) {
        setRequester(ticketDataResponse.requester) ;
        setMobileNumber(ticketDataResponse.mobileNumber) ;
        setProjectName(ticketDataResponse.projectName) ;
        setRequestDate(ticketDataResponse.joDate) ;
        setRequestNumber(ticketDataResponse.ticketNumber) ;
        setRequestStatus(ticketDataResponse.requestStatus) ;

        setMaintenanceType(ticketDataResponse.jobMaintenanceType) ;
        setServiceType(ticketDataResponse.serviceType) ;
        setServiceCategory(ticketDataResponse.serviceCategory) ;
        setProblem(ticketDataResponse.joSubject) ;
        setProblemDescription(ticketDataResponse.joDescription) ;

        //setPhotosList
        if(ticketDataResponse.image1WithFullPath!='' || ticketDataResponse.image2WithFullPath!=''
              || ticketDataResponse.image3WithFullPath!=''){
                setImage1Url(ticketDataResponse.image1WithFullPath);
                setImage2Url(ticketDataResponse.image2WithFullPath);
                setImage3Url(ticketDataResponse.image3WithFullPath);
                if(ticketDataResponse.image3WithFullPath!=''){
                   setPageHieght(windowHeight+400);
                   setPhotoListHieght(380);
                }else{
                    setPageHieght(windowHeight+220);
                    setPhotoListHieght(200);
                }
        }
        

        if(!ticketDataResponse.isRead){
            WebServer.postDataWithToken('FomMobJobTicketHead/markReadJobTicket',token,ticketDataResponse.ticketNumber, markReadJobTicketCallback);
        }
        console.log('requester : '+ticketDataResponse.joDate)
    }else{
        Alert.alert(ticketDataResponse.message);
    }
  }
  const markReadJobTicketCallback = markTicketData => {
    console.log(' Mark as Read Response : '+JSON.stringify(markTicketData));
  }

  const checkLoginDetails = async () => {
    try {
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
          setLoginType(userInfo.loginType);
          setLoginRole(userInfo.role);
          setLoginToken(userInfo.token);
          if(userInfo.loginType!=='client'){
            setIsCustomer(false);
          }else{
            setIsCustomer(true);
          }
          getTicketData(userInfo.token);           
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };

  useEffect(() => {
    setPageHieght(windowHeight);
    checkLoginDetails()
  }, []);

  return (
    <View style={styles.verificationCode}>

      {/* <View style={styles.verificationCodeChild} /> */}
      <View style={styles.viewPosition}>
            <View style={[styles.rectangleView, styles.viewPosition]} />
            <Pressable
            style={styles.arrow21}
            onPress={() => navigation.navigate("Home1")}>
            <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrow-2-1.png")}
            />
            </Pressable>
            <Text style={[styles.requestDetails1, styles.arrow21Position]}>
                Ticket Details
            </Text>
       </View>

       <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:pageHieght }}
            alwaysBounceVertical={false}>
            <Text style={styles.requestDetails}>Request details</Text>
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
                    <View style={[styles.groupChild, styles.groupShadowBox]} />

                    <View style={[styles.requesterParent, styles.parentPosition]}>
                        <Text style={[styles.requester, styles.requesterLayout]}>
                            Requester 
                        </Text>
                        <Text style={[styles.mobileNumber, styles.requesterClr]}>
                            Mobile number 
                        </Text>
                        <Text style={[styles.projectName, styles.requesterLayout]}>
                            Project name
                        </Text>
                        <Text style={[styles.requestDate, styles.requesterClr]}>
                            Request date
                        </Text>
                        <Text
                            style={[styles.requestDate, styles.requesterClr]}
                        >{`Request number `}</Text>
                        <Text style={[styles.requestDate, styles.requesterClr]}>
                            Request status
                        </Text>
                    </View>
                    <View style={[styles.abdulRahmanAlGhamdiParent, styles.parentPosition]}>
                            <Text style={[styles.abdulRahmanAlGhamdi, styles.makeSureAllTypo]}>
                                {requester}
                            </Text>
                            <Text style={[styles.text, styles.textLayout]}>{mobileNumber}</Text>
                            <Text
                                style={[styles.text, styles.textLayout]}
                            >{projectName}</Text>
                            <Text style={[styles.text, styles.textLayout]}>{format(requestDate, 'dd/MM/yyyy')}</Text>
                            <Text style={[styles.text2, styles.text2Typo]}>{requestNumber}</Text>
                            <Text style={[styles.incomplete, styles.text2Typo]}>{requestStatus}</Text>
                    </View>
                    
                </View>
                
                <Text style={[styles.maintenanceDetails, styles.photosFromTheTypo]}>
                    Maintenance details
                </Text>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                    <View style={[styles.groupItem, styles.groupLayout3]} />
                    <View style={[styles.frameParent, styles.parentPosition]}>
                        <View>
                            <Text style={styles.problemrequestTypo}>{`Maintenance type `}</Text>
                            <Text style={[styles.projectName, styles.requesterLayout]}>
                               Service type
                            </Text>
                            <Text style={[styles.serviceCategory, styles.requesterClr]}>
                               Service category
                            </Text>
                            <Text style={[styles.problemrequest, styles.problemrequestTypo]}>
                               Problem/request
                            </Text>
                            <Text style={[styles.problemDescription, styles.requesterClr]}>
                               Problem description
                            </Text>
                        </View>
                        <View style={styles.routineMaintenanceParent}>
                            <Text style={[styles.abdulRahmanAlGhamdi, styles.makeSureAllTypo]}>
                               {maintenanceType}
                            </Text>
                            <Text style={[styles.electrical, styles.requesterLayout]}>
                                {serviceType}
                            </Text>
                            <Text style={[styles.electrical, styles.requesterLayout]}>
                               {serviceCategory}
                            </Text>
                            <Text style={[styles.makeSureAll, styles.makeSureAllTypo]}>
                               {problem}
                            </Text>
                            <Text style={[styles.highVoltage, styles.makeSureAllTypo]}>
                                {problemDescription}
                            </Text>
                        </View>
                    </View>
                </View>
                {(image1Url!='' || image2Url!='' || image3Url !='')?
                    <View style={styles.photosFromTheProjectParent}>
                    <Text style={styles.photosFromTheTypo}>Photos from the project</Text>
                    <View style={[styles.rectangleContainer, styles.groupLayout4,{height: photoListHieght}]}>
                    <View style={[styles.groupItem4, styles.groupLayout5,{height: photoListHieght}]} />
                    {
                        image1Url!=''?
                                <Image
                                style={styles.wrapperRectangle4315}
                                resizeMode="cover"
                                source={{ uri: image1Url }}
                                />: null
                    }

                    {
                        image2Url!=''?
                                        <Image
                                        style={styles.wrapperRectangle4316}
                                        resizeMode="cover"
                                        source={{ uri: image2Url }}
                                        />:null
                    }

                    {
                        image3Url !=''? <Image
                                            style={styles.wrapperRectangle4317}
                                            resizeMode="cover"
                                            source={{ uri: image3Url }}
                                            />: null
                    }
                    </View>
                </View>:null
                }
                

       </ScrollView>




      
      
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 280,
    width: "100%",
  },
  groupShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 15,
    position: "absolute",
  },
  makeSureAllTypo: {
    height: 20,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: 12,
    alignItems: "center",
    lineHeight: 20,
  },
  textLayout: {
    width: "50%",
    marginTop: 24,
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  text2Typo: {
    width: "100%",
    marginTop: 24,
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  requesterLayout: {
    width: "100%",
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  requesterClr: {
    color: Color.praimary,
    fontWeight: "700",
  },
  photosFromTheTypo: {
    width: "100%",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    height: 30,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    left:"3%"
  },
  groupLayout: {
    height: 240,
    width: "100%",
  },
  groupLayout4: {
    width: "96%",
  },
  groupLayout5:{
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout3: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  problemrequestTypo: {
    width: "100%",
    color: Color.praimary,
    fontWeight: "700",
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    position:'absolute'
  },
  viewPosition: {
    height: 50,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex:1
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Position: {
    top: 14,
    fontSize: 18,
    height: 25,
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    height: 280,
    width: "94%",
    left:"3%"
  },
  abdulRahmanAlGhamdi: {
    color: Color.color,
    width: "100%",
  },
  text: {
    marginTop: 24,
    color: Color.color,
  },
  text2: {
    lineHeight: 20,
    color: Color.color,
  },
  incomplete: {
    color: Color.color,
    lineHeight: 20,
    width: "100%",
  },
  abdulRahmanAlGhamdiParent: {
    width: "50%",
    right: "5%",
  },
  requester: {
    color: Color.praimary,
    fontWeight: "700",
  },
  mobileNumber: {
    width: "100%",
    marginTop: 24,
    height: 20,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    lineHeight: 20,
  },
  projectName: {
    color: Color.praimary,
    fontWeight: "700",
    marginTop: 24,
  },
  requestDate: {
    width: "100%",
    marginTop: 24,
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    lineHeight: 20,
  },
  requesterParent: {
    left: "10%",
    height: 280,
    width:"50%"
  },
  rectangleParent: {
    top: 100,
    position: "absolute",
  },
  requestDetails: {
    top: 60,
    width: "100%",
    color: Color.black,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    left: "3%",
    fontWeight: "700",
    height: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    position: "absolute",
  },
  maintenanceDetails: {
    top: 400,
    left: "3%",
    position: "absolute",
  },
  groupItem: {
    height: 240,
    width: "94%",
    left:"3%"
  },
  groupItem4: {
    height: 240,
    width: "98%",
    left:"3%"
  },
  serviceCategory: {
    marginTop: 24,
    width: "100%",
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  problemrequest: {
    marginTop: 24,
  },
  problemDescription: {
    width: "50%",
    marginTop: 24,
    height: 20,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    lineHeight: 20,
  },
  electrical: {
    marginTop: 24,
    color: Color.color,
  },
  makeSureAll: {
    width: 143,
    marginTop: 24,
    color: Color.color,
  },
  highVoltage: {
    marginTop: 24,
    color: Color.color,
    width: 142,
  },
  routineMaintenanceParent: {
    marginLeft: 52,
    width: 142,
  },
  frameParent: {
    flexDirection: "row",
    left: "10%",
    width:"100%"
  },
  rectangleGroup: {
    top: 440,
    position: "absolute",
  },
  groupInner: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderStyle: "solid",
    elevation: 6,
    shadowRadius: 6,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.03)",
    backgroundColor: Color.whait,
    right: 0,
    top: 0,
    position: "absolute",
  },
  wrapperChildPosition: {
    transform: [
      {
        scale: 1.326,
      },
    ],
    left: 0,
    objectFit: "contain",
    height: "100%",
    top: 0,
    position: "absolute",
    width: "100%",
  },
  wrapperRectangle4315: {
    height: 160,
    width: "43%",
    borderRadius: Border.br_8xs,
    top: 20,
    justifyContent: "center",
    position: "absolute",
    left:"5%"
  },
  wrapperRectangle4316: {
    right: "5%",
    height: 160,
    width: "43%",
    borderRadius: Border.br_8xs,
    top: 20,
    justifyContent: "center",
    position: "absolute",
  },
  wrapperRectangle4317:{
    left: "5%",
    height: 160,
    width: "43%",
    borderRadius: Border.br_8xs,
    top: 200,
  },
  rectangleContainer: {
    marginTop: 16,
  },
  photosFromTheProjectParent: {
    width:"100%",
    top: 710,
    position: "absolute",
  },
  verificationCodeChild: {
    top: 950,
    height: 54,
    overflow: "hidden",
    left: 16,
    width: 343,
    position: "absolute",
  },
  rectangleView: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
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
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    overflow: "hidden",
    left: "50%",
    top: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    left: "5%",
    width: 25,
    top:"30%",
    height: 25,
    zIndex:2
  },
  requestDetails1: {
    fontSize: 20,
    width: "100%",
    top: 15,
    color: Color.praimary,
    height: 25,
    textAlign: "center",
    lineHeight: 25,
    zIndex:1
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
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  verificationCode: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
});

export default ViewTicket;
