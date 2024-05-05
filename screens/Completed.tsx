import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal, ScrollView, Dimensions, Alert, TouchableOpacity, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import AfterLoginFooter from "../components/AfterLoginFooter";
import { RadioButton } from 'react-native-paper';

import AsyncStorage from "@react-native-async-storage/async-storage";
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import { format } from 'date-fns';
import CheckBox from 'react-native-check-box';



const ListItem = ({ item,surveyPopup,deletePopup }) => {
  // State to manage modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  // Function to toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const showHideNotes = () => {
    //setModalVisible(!modalVisible);
  };
  const deletePopupS=(number:any)=>{
    deletePopup(number);
  };
  const surveyPopupS=(ticketNumber:any,isServeyValue:boolean)=>{
    surveyPopup(ticketNumber,isServeyValue);
  };
  
  

  return (
        <View style={styles.groupChildLayout1}>
          <View style={[styles.groupView, styles.groupParentLayout]}>
              <View style={[styles.groupChild5, styles.groupChild5Position]} />
              
              {!item.isInScope?<View
                  style={[styles.rectangleParent5, styles.rectangleParentPosition]}>
                <View style={styles.groupChild7} />
                <Text style={[styles.outOfScope1, styles.unattendedTypo]}>
                  Out Of Scope
                </Text>
              </View>:null}

              <View style={[styles.frameParent7, styles.frameParentPosition2]}>
              <View style={styles.projectNameParent}>
                <Text style={[styles.projectName, styles.nameLayout]}>
                    Project name :
                </Text>
                <Text numberOfLines={1} style={[styles.jeddahYachtClub, styles.textSpaceBlock]}>
                    {item.projectNameEng}
                </Text>
              </View>
              <View style={styles.dateOfRequestParent}>
                <Text style={[styles.dateOfRequest, styles.nameLayout]}>
                  Date of request :
                </Text>
                <Text style={[styles.text10, styles.text10Layout]}>
                  {format(item.joDate, 'dd/MM/yyyy')}
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent8, styles.frameParentPosition2]}>
              <View style={styles.projectNameParent}>
                <Text style={[styles.projectName, styles.nameLayout]}>
                  Name the sender :
                </Text>
                <Text numberOfLines={1} style={[styles.jeddahYachtClub, styles.textSpaceBlock]}>
                {item.customerNameEng}
                </Text>
              </View>
              <View style={styles.dateOfRequestParent}>
                <Text style={[styles.dateOfRequest, styles.nameLayout]}>
                      Ticket number :
                </Text>
                <Text style={[styles.text11, styles.nameLayout]}>{item.ticketNumber}</Text>
              </View>
            </View>
            <View style={styles.disciplineTypeParent}>
              <Text style={[styles.disciplineType, styles.nameLayout]}>
                Discipline type :
              </Text>
              <Text style={[styles.electricalMaintenance, styles.textSpaceBlock]}>
                  {item.depNameEng}
              </Text>
            </View>


            <View style={[styles.frameParent5, styles.frameParentPosition3]}>
                <Pressable
                  style={[styles.framePressable, styles.menuSpaceBlock]}
                  onPress={showHideNotes}
                >
                  <Image
                    style={styles.frameIcon}
                    resizeMode="cover"
                    source={require("../assets/frameFront8.png")}
                  />
                  <View style={styles.ellipseParent5}>
                    <Image
                      style={styles.groupChild6}
                      resizeMode="cover"
                      source={require("../assets/ellipse-203.png")}
                    />
                    <Text style={[styles.text9, styles.textTypo]}>{item.logNotesCount}</Text>
                  </View>
                </Pressable>
              </View>

              <View style={[styles.lineView, styles.lineViewLayout]} />

              <Pressable style={styles.mediumLayout}  onPress={() => navigation.navigate("ClosedTicket",{ticketNumber:item.ticketNumber,})}>
                  <Text style={[styles.survey, styles.approveTypo]}>Mark As Closed  </Text>
              </Pressable>

              <Pressable
                style={[styles.mediumButtonNotes, styles.buttonBorderNotes]}
                onPress={()=>console.log('Add notes')}
              >
                <Text style={[styles.notesText, styles.notesTypoText]}>Notes</Text>
              </Pressable>

              {/* <View style={[styles.moreActions4, styles.morePosition]}>
                <Pressable
                    style={styles.moreActionsParent}
                    onPress={toggleModal}>   

                <View style={{width:"100%",padding:20}}>
                  <Text style={[styles.moreActions, styles.approveTypo]}>
                    More Actions
                  </Text>
                    <Image
                      style={styles.groupIcon}
                      resizeMode="cover"
                      source={modalVisible?require("../assets/groupUp3.png"):require("../assets/groupFront3.png")}
                    />
                </View>

                <View style={styles.moreActions4Child} />
                </Pressable>
              </View>
              <Pressable
                  style={[styles.mediumButton4, styles.mediumBorder]}
                  onPress={() =>deletePopupS(item.ticketNumber)}>
                  <Text style={styles.closeTicket}>Cancel Ticket</Text>
              </Pressable> */}


            </View>
                
        </View>
          
  );
};
const Completed = () => {
  const [frameContainer17Visible, setFrameContainer17Visible] = useState(false);
  const [mediumButton2Visible, setMediumButton2Visible] = useState(false);
  const [mediumButton4Visible, setMediumButton4Visible] = useState(false);
  const [mediumButton21Visible, setMediumButton21Visible] = useState(false);
  const [mediumButton41Visible, setMediumButton41Visible] = useState(false);
  const [frameContainer34Visible, setFrameContainer34Visible] = useState(false);
  const [mediumButton22Visible, setMediumButton22Visible] = useState(false);
  const [mediumButton42Visible, setMediumButton42Visible] = useState(false);
  const [frameContainer44Visible, setFrameContainer44Visible] = useState(false);
  const [frameContainer46Visible, setFrameContainer46Visible] = useState(false);
  const [mediumButton23Visible, setMediumButton23Visible] = useState(false);
  const [mediumButton43Visible, setMediumButton43Visible] = useState(false);
  const [frameContainer54Visible, setFrameContainer54Visible] = useState(false);
  const [mediumButton24Visible, setMediumButton24Visible] = useState(false);
  const [mediumButton44Visible, setMediumButton44Visible] = useState(false);
  const [mediumButton25Visible, setMediumButton25Visible] = useState(false);
  const [mediumButton45Visible, setMediumButton45Visible] = useState(false);
  const [frameContainer69Visible, setFrameContainer69Visible] = useState(false);
  const [frameContainer70Visible, setFrameContainer70Visible] = useState(false);
  const [mediumButton26Visible, setMediumButton26Visible] = useState(false);
  const [mediumButton46Visible, setMediumButton46Visible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const windowHeight = Dimensions.get('screen').height;
  const [pageHeight, setPageHeight] = useState(250);

  const [ticketType, setTicketType] = useState('all');

  const openFrameContainer17 = useCallback(() => {
    setFrameContainer17Visible(true);
  }, []);

  const closeFrameContainer17 = useCallback(() => {
    setFrameContainer17Visible(false);
  }, []);

  const openMediumButton2 = useCallback(() => {
    setMediumButton2Visible(true);
  }, []);

  const closeMediumButton2 = useCallback(() => {
    setMediumButton2Visible(false);
  }, []);

  const openMediumButton4 = useCallback(() => {
    setMediumButton4Visible(true);
  }, []);

  const closeMediumButton4 = useCallback(() => {
    setMediumButton4Visible(false);
  }, []);

  const openMediumButton21 = useCallback(() => {
    setMediumButton21Visible(true);
  }, []);

  const closeMediumButton21 = useCallback(() => {
    setMediumButton21Visible(false);
  }, []);

  const openMediumButton41 = useCallback(() => {
    setMediumButton41Visible(true);
  }, []);

  const closeMediumButton41 = useCallback(() => {
    setMediumButton41Visible(false);
  }, []);

  const openFrameContainer34 = useCallback(() => {
    setFrameContainer34Visible(true);
  }, []);

  const closeFrameContainer34 = useCallback(() => {
    setFrameContainer34Visible(false);
  }, []);

  const openMediumButton22 = useCallback(() => {
    setMediumButton22Visible(true);
  }, []);

  const closeMediumButton22 = useCallback(() => {
    setMediumButton22Visible(false);
  }, []);

  const openMediumButton42 = useCallback(() => {
    setMediumButton42Visible(true);
  }, []);

  const closeMediumButton42 = useCallback(() => {
    setMediumButton42Visible(false);
  }, []);

  const openFrameContainer44 = useCallback(() => {
    setFrameContainer44Visible(true);
  }, []);

  const closeFrameContainer44 = useCallback(() => {
    setFrameContainer44Visible(false);
  }, []);

  const openFrameContainer46 = useCallback(() => {
    setFrameContainer46Visible(true);
  }, []);

  const closeFrameContainer46 = useCallback(() => {
    setFrameContainer46Visible(false);
  }, []);

  const openMediumButton23 = useCallback(() => {
    setMediumButton23Visible(true);
  }, []);

  const closeMediumButton23 = useCallback(() => {
    setMediumButton23Visible(false);
  }, []);

  const openMediumButton43 = useCallback(() => {
    setMediumButton43Visible(true);
  }, []);

  const closeMediumButton43 = useCallback(() => {
    setMediumButton43Visible(false);
  }, []);

  const openFrameContainer54 = useCallback(() => {
    setFrameContainer54Visible(true);
  }, []);

  const closeFrameContainer54 = useCallback(() => {
    setFrameContainer54Visible(false);
  }, []);

  const openMediumButton24 = useCallback(() => {
    setMediumButton24Visible(true);
  }, []);

  const closeMediumButton24 = useCallback(() => {
    setMediumButton24Visible(false);
  }, []);

  const openMediumButton44 = useCallback(() => {
    setMediumButton44Visible(true);
  }, []);

  const closeMediumButton44 = useCallback(() => {
    setMediumButton44Visible(false);
  }, []);

  const openMediumButton25 = useCallback(() => {
    setMediumButton25Visible(true);
  }, []);

  const closeMediumButton25 = useCallback(() => {
    setMediumButton25Visible(false);
  }, []);

  const openMediumButton45 = useCallback(() => {
    setMediumButton45Visible(true);
  }, []);

  const closeMediumButton45 = useCallback(() => {
    setMediumButton45Visible(false);
  }, []);

  const openFrameContainer69 = useCallback(() => {
    setFrameContainer69Visible(true);
  }, []);

  const closeFrameContainer69 = useCallback(() => {
    setFrameContainer69Visible(false);
  }, []);

  const openFrameContainer70 = useCallback(() => {
    setFrameContainer70Visible(true);
  }, []);

  const closeFrameContainer70 = useCallback(() => {
    setFrameContainer70Visible(false);
  }, []);

  const openMediumButton26 = useCallback(() => {
    setMediumButton26Visible(true);
  }, []);

  const closeMediumButton26 = useCallback(() => {
    setMediumButton26Visible(false);
  }, []);

  const openMediumButton46 = useCallback(() => {
    setMediumButton46Visible(true);
  }, []);

  const closeMediumButton46 = useCallback(() => {
    setMediumButton46Visible(false);
  }, []);

 

  const [loginType, setLoginType] = useState("");
  const [loginRole, setLoginRole] = useState("");
  const [token, setLoginToken] = useState("");
  const [statusDataList, setStatusDataList] = useState([]);
  const [requestList, setRequestList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const [deleteTicketNumber, setDeleteTicketNumber] = useState("");
  const [showDeleteReason, setShowDeleteReason] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  const [showSurveyPopup, setShowSurveyPopup] = useState(false);
  const [isServey, setIsServey] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  

  const [arrivedCount, setArrivedCount] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);
  const [workInProgressCount, setWorkInProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);
  const [onHoldCount, setOnHoldCount] = useState(0);
  const [outOfScopeCount, setOutOfScopeCount] = useState(0);
  const [inTransitCount, setInTransitCount] = useState(0);
  const [allCount, setAllCount] = useState(0);
  const [inscopeCount, setInscopeCount] = useState(0);
  const [outscopeCount, setOutscopeCount] = useState(0);

  
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    // Simulating API call to fetch data
    console.log('page changed. isFirst is :  '+isFirst);
    const fetchData = async () => {
      setLoading(true);
      // Replace the following with your actual API call
      try {
        if(!isFirst){
          setLoading(true);
          getRequestList(token);
        }else{
          //setRequestList([]);
          setIsFirst(false);
          checkLoginDetails();
        }
      } catch (error) {
          console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page]);
  
  useEffect(() => {
    console.log('ticketType changed : '+ ticketType)
    if(page===0){
        getRequestList(token);
    }else{
      setPage(0);
    }
 }, [ticketType]);
 
 const handleRadioChange = (typeValue:any) => {
     setTicketType(typeValue);
 };
 
 useEffect(() => {
    if(requestList.length<2)
    {
      setPageHeight(windowHeight);
    }else{
      setPageHeight(260+(requestList.length*270));
    }
}, [requestList]);

  const hideMessage=async () =>{
     setShowDeleteReason(false);
     setDeleteReason("");
     setDeleteTicketNumber("");
     setIsServey(false);
     setShowSurveyPopup(false);
  };
  
  
  const surveyPopup = async (ticketNumber:any,isServeyValue:boolean) =>{
    setDeleteReason("");
    setDeleteTicketNumber(ticketNumber);
    setIsServey(isServeyValue);
    setShowSurveyPopup(true);
 };
 const serveyTicket = async () => {
  console.log('serveyTicket : '+ deleteTicketNumber);
  if(!isServey){
    WebServer.postDataWithToken('FomMobJobTicketHead/markSurveyDoneForJobTicket',token,deleteTicketNumber, serveyTicketCallback);
  }else{
    WebServer.postDataWithToken('FomMobJobTicketHead/approveAndReleaseForWorkorderByTicketNumber',token,deleteTicketNumber, serveyTicketCallback);
  }  
};
const serveyTicketCallback = serveyReponse => {
  if(serveyReponse && serveyReponse.message!=undefined){
    if(serveyReponse.message==="Successful."){
       setPage(0);
       setDeleteReason("");
       setDeleteTicketNumber("");
       //setRequestList([]);
      // setPageHeight(windowHeight);
       setShowSurveyPopup(false);
       if(page===0){
         getRequestList(token);
       }
       if(!isServey){
        Alert.alert("Successfully completed the ticket survey.");
       }else{
        Alert.alert("Successfully completed the ticket approve and release.");
       }
       setIsServey(false);
    }else{
      Alert.alert(serveyReponse.message);
    }
  }
}

  const deletePopup = async (ticketNumber:any) =>{
      setDeleteReason("");
      setDeleteTicketNumber(ticketNumber);
      setShowDeleteReason(true);
  };

  const deleteTicket = async () => {
    var data={
      ticketNumber:deleteTicketNumber,
      reasonCode:deleteReason
    }
    console.log('deleteTicket : '+JSON.stringify(data));
    WebServer.postDataWithToken('FomMobJobTicketHead/voidJobTicket',token,data, deleteTicketCallback);
  };
  const deleteTicketCallback = deleteReponse => {
    if(deleteReponse && deleteReponse.message!=undefined){
      if(deleteReponse.message==="Successful."){
         setPage(0);
         setDeleteReason("");
         setDeleteTicketNumber("");
         //setRequestList([]);
        // setPageHeight(windowHeight);
         setShowDeleteReason(false);
         if(page===0){
           getRequestList(token);
         }
         Alert.alert("Successfully cancelled the ticket");
      }else{
        Alert.alert(deleteReponse.message);
      }
    }
  }


  const handleScroll = (event:any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 500;
    console.log('left : '+ (layoutMeasurement.height + contentOffset.y));
    console.log('right : '+ (contentSize.height - 500));
    console.log('isAtBottom : '+ isAtBottom);
    if (isAtBottom && !loading) {
      // Load more data when reaching the bottom
      setPage((prevPage) => prevPage + 1);
      console.log('page changed');
    }
  };
  const handleItemPress = (item:any) => {
    const isAlreadySelected = selectedItems.some((selected) => selected.id === item.id);
    if (!isAlreadySelected) {
      setSelectedItems(prevSelectedItems => [...prevSelectedItems, item]);
    }
  };
  const renderData = () => {
    return requestList.map((item:any) => (
      <ListItem key={item.id} item={item} surveyPopup={surveyPopup} deletePopup={deletePopup}  />
      
    ));
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ paddingVertical: 20 }}>
        <Text style={{textAlign:"center"}}>Loading...</Text>
      </View>
    );
  };
  
  

const getStatusCountData = async (jwttoken:string) => {
  WebServer.getDataWithToken('FomMobJobTicketHead/getScopeWiseStatusStrWiseTicketsCount',jwttoken,'', getStatusCountDataCallback);
};
const getStatusCountDataCallback = statusCountDataReponse => {
   if(statusCountDataReponse!=null && statusCountDataReponse!=undefined){
       setArrivedCount(statusCountDataReponse.arrivedCount);
       setApprovedCount(statusCountDataReponse.approvedCount);
       setWorkInProgressCount(statusCountDataReponse.workInProgressCount);
       setCompletedCount(statusCountDataReponse.completedCount);
       setClosedCount(statusCountDataReponse.closedCount);
       setOnHoldCount(statusCountDataReponse.onHoldCount);
       setOutOfScopeCount(statusCountDataReponse.outOfScopeCount);
       setInTransitCount(statusCountDataReponse.inTransitCount);
       setAllCount(statusCountDataReponse.allCount);
       setInscopeCount(statusCountDataReponse.inscopeCount);
       setOutscopeCount(statusCountDataReponse.outscopeCount); 
   }   
}


const getRequestList = async (jwttoken:string) => {
    setLoading(true);
    getStatusCountData(jwttoken);
    var params={
      page:page,
      pageCount:10,
      orderBy:'id desc'
    }
    WebServer.postDataWithToken('FomMobJobTicketHead/getCompletedTicketsListPagination',jwttoken,params, requestListCallback);
  };
  const requestListCallback = response => {
    if(response.items!=null && response.items!=undefined && response.items.length>0)
    {
       const uniqueIds = new Set(requestList.map((item) => item.id));
       const filteredNewData = response.items.filter((item) => !uniqueIds.has(item.id));
      if(page===0){
        setRequestList(response.items);
      }else{
        setRequestList(old => [...old, ...filteredNewData]);
      }      
    }
    setTotalPages(response.totalPages);
    setTotalCount(response.totalCount);
    setLoading(false);
  }
  
  const checkLoginDetails = async () => {
    try {
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
          setLoginToken(userInfo.token);
          setLoginType(userInfo.loginType);
          setLoginRole(userInfo.role);
          getRequestList(userInfo.token);
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };

  

  

  return (
    <>
      <View style={styles.arrived}>
        {/* <View style={styles.arrivedChild} />
        <View style={styles.arrivedItem} /> */}
        
        <View style={styles.groupChild32Position}>
          <View style={[styles.groupChild32, styles.groupChild32Position]} />
          <Pressable
            style={styles.arrow21}
            onPress={() => navigation.navigate("Home1")}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrow-2-1.png")}
            />
          </Pressable>
          <Text style={[styles.frontOffice, styles.linePosition]}>
            Front Office
          </Text>
        </View>

        <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:pageHeight}}
            alwaysBounceVertical={false}
            onScroll={handleScroll}
            scrollEventThrottle={400}>

          <View style={styles.groupParent}>

                      <ScrollView  horizontal={true}
                              contentContainerStyle={{ paddingHorizontal: 20 }} >

                              
                              <Pressable
                                style={[styles.rectangleGroup, styles.rectangleLayout]}
                                onPress={() => navigation.navigate("FrontOffice")}
                              >
                                <View style={styles.groupChildShadowBox1} />
                                <View style={styles.frameGroup}>
                                  <View style={styles.ellipseGroup}>
                                    <Image
                                      style={styles.frameChild}
                                      resizeMode="cover"
                                      source={require("../assets/ellipse-1999.png")}
                                    />
                                    <Text style={[styles.approved, styles.approvedLayout]}>
                                      Arrived
                                    </Text>
                                  </View>
                                  <Text
                                    style={[styles.text1, styles.textSpaceBlock]}
                                  >({arrivedCount})</Text>
                                </View>
                              </Pressable>
                              <Pressable
                                style={[styles.rectangleGroup, styles.rectangleLayout]}
                                onPress={() => navigation.navigate("Approved")}
                              >
                                <View style={styles.groupChildShadowBox1} />
                                <View style={styles.frameContainer}>
                                  <View style={styles.ellipseParent}>
                                    <Image
                                      style={styles.frameChild}
                                      resizeMode="cover"
                                      source={require("../assets/ellipse-19910.png")}
                                    />
                                    <Text style={[styles.arrived1, styles.textTypo1]}>Approved</Text>
                                  </View>
                                  <Text style={[styles.text1, styles.textSpaceBlock]}>({approvedCount})</Text>
                                </View>
                              </Pressable>


                              <Pressable
                                style={[styles.rectangleGroup, styles.rectangleLayout]}
                                onPress={() => navigation.navigate("WorkInProgress")}
                              >
                                <View style={styles.groupChildShadowBox1} />
                                <View style={styles.ellipseContainer}>
                                  <Image
                                    style={styles.frameChild}
                                    resizeMode="cover"
                                    source={require("../assets/ellipse-19911.png")}
                                  />
                                  <Text style={[styles.workInProgress, styles.textTypo1]}>
                                    Work in progress
                                  </Text>
                                </View>
                                <Text style={[styles.text2, styles.textLayout]}>({workInProgressCount})</Text>
                              </Pressable>

                              <View style={styles.rectangleLayout}>
                                  <View style={styles.groupChild} />
                                  <View style={[styles.frameParent, styles.frameParentPosition4]}>
                                    <View style={styles.ellipseParent}>
                                      <Image
                                        style={styles.frameChild}
                                        resizeMode="cover"
                                        source={require("../assets/ellipse-19912.png")}
                                      />
                                      <Text style={[styles.completed, styles.textTypo1]}>
                                      Completed
                                    </Text>
                                      
                                    </View>
                                    <Text style={[styles.text, styles.textSpaceBlock]}>({completedCount})</Text>
                                  </View>
                              </View>
                              
                              <Pressable
                                style={[styles.rectangleGroup, styles.rectangleLayout]}
                                onPress={() => navigation.navigate("Closed")}
                              >
                                <View style={styles.groupChildShadowBox1} />
                                <View style={styles.frameParent1}>
                                  <View style={[styles.ellipseParent1, styles.text10Layout]}>
                                    <Image
                                      style={styles.frameChild}
                                      resizeMode="cover"
                                      source={require("../assets/ellipse-19913.png")}
                                    />
                                    <Text style={[styles.closed, styles.closedLayout]}>Closed</Text>
                                  </View>
                                  <Text style={[styles.text1, styles.textSpaceBlock]}>({closedCount})</Text>
                                </View>
                              </Pressable>
                              <Pressable
                                style={[styles.rectangleGroup, styles.rectangleLayout]}
                                onPress={() => navigation.navigate("OnHold")}
                              >
                                <View style={styles.groupChildShadowBox1} />
                                <View style={styles.frameParentPosition4}>
                                  <View style={[styles.ellipseParent2, styles.approvedLayout]}>
                                    <Image
                                      style={styles.frameChild}
                                      resizeMode="cover"
                                      source={require("../assets/ellipse-19914.png")}
                                    />
                                    <Text style={[styles.onHold, styles.textTypo1]}>On hold</Text>
                                  </View>
                                  <Text style={[styles.text5, styles.textSpaceBlock]}>({onHoldCount})</Text>
                                </View>
                              </Pressable>
                              <Pressable
                                style={[styles.rectangleGroup, styles.rectangleLayout]}
                                onPress={() => navigation.navigate("OutOfScope")}
                              >
                                <View style={styles.groupChildShadowBox1} />
                                <View style={[styles.frameParent3, styles.frameParent3Position]}>
                                  <View style={styles.ellipseParent3}>
                                    <Image
                                      style={styles.frameChild}
                                      resizeMode="cover"
                                      source={require("../assets/ellipse-19915.png")}
                                    />
                                    <Text style={[styles.outOfScope, styles.nameLayout]}>
                                      out of scope
                                    </Text>
                                  </View>
                                  <Text style={[styles.text6, styles.textSpaceBlock]}>({outOfScopeCount})</Text>
                                </View>
                              </Pressable>
                              <Pressable
                                style={[styles.rectangleGroup, styles.rectangleLayout]}
                                onPress={() => navigation.navigate("InTransit")}
                              >
                                <View style={styles.groupChildShadowBox1} />
                                <View style={styles.frameParent4}>
                                  <View style={[styles.ellipseParent4, styles.closedLayout]}>
                                    <Image
                                      style={styles.frameChild}
                                      resizeMode="cover"
                                      source={require("../assets/ellipse-19916.png")}
                                    />
                                    <Text style={[styles.inTransit, styles.textTypo1]}>
                                      In transit
                                    </Text>
                                  </View>
                                  <Text style={[styles.text7, styles.textSpaceBlock]}>({inTransitCount})</Text>
                                </View>
                              </Pressable>
                          </ScrollView>
                 </View>

                 <View style={[styles.serviceClass, styles.servicePosition]}>
                    <Text>There are {totalCount} verified tickets</Text>
                 </View>
     
     <View style={styles.groupParentFrontOffice}>
        {renderData()}
        {renderFooter()}
     </View>

            
        </ScrollView>

        



        

        <AfterLoginFooter currentRoute='FrontOffice'/>

            {showDeleteReason?<View style={{backgroundColor: Color.colorGray_600,
                        width: "100%",
                        position: "absolute",zIndex:1,
                        height: windowHeight}} />:null}
            {showDeleteReason?<View style={[styles.rectangleParent1, styles.groupInnerPosition]}>
              <View style={[styles.groupInnerp, styles.groupInnerPosition]} />
              <Text style={[styles.determineClosureReason, styles.closeTypo]}>
                  Determine closure reason
                </Text>
                <Pressable
                    style={styles.vector}
                    onPress={hideMessage }
                  >
                    <Image
                              style={styles.vectorIcon}
                              contentFit="cover"
                              source={require("../assets/vector2.png")}
                            />
                  </Pressable>
            
              <View style={[styles.lineViewp, styles.viewGroupPosition]} />
              <View style={[styles.reasonForClosure, styles.reasonForClosureStyle]}>
                <Text style={[styles.reasonForClosure1, styles.reasonTypo]}>
                    Reason for closure
                </Text>
                <View style={[styles.rectangleParent3, styles.groupChildLayoutp]}>
                  <View style={[styles.groupChildp, styles.childGroupShadowBox]} />
                  <TextInput
                        multiline
                        numberOfLines={4}
                        maxLength={300}
                        onChangeText={text => setDeleteReason(text)}
                        value={deleteReason}
                        style={styles.pleaseSelectReason}
                      />
                  {/* <Text style={[styles.pleaseSelectReason, styles.reasonTypo]}>
                            Please select reason
                  </Text> */}
                </View>
              </View>
              <Pressable
                  style={[styles.button, styles.buttonPosition]}
                  onPress={deleteTicket}>
                  <View style={[styles.buttonChild, styles.buttonPosition]} />
                  <Text style={[styles.close, styles.closeTypo]}>Cancel Ticket</Text>
                </Pressable>

          </View>:null}




          {showSurveyPopup?<View style={{backgroundColor: Color.colorGray_600,
                        width: "100%",
                        position: "absolute",zIndex:1,
                        height: windowHeight}} />:null}
            {showSurveyPopup?<View style={[styles.rectangleParentS, styles.groupInnerPosition5]}>
              <View style={[styles.groupInnerp, styles.groupInnerPosition5]} />
              <Text style={[styles.determineClosureReason, styles.closeTypo]}>
                  {isServey?'Approve & Release':'Servey'}
                </Text>
                <Pressable
                    style={styles.vector}
                    onPress={hideMessage }
                  >
                    <Image
                              style={styles.vectorIcon}
                              contentFit="cover"
                              source={require("../assets/vector2.png")}
                            />
                  </Pressable>
            
              <View style={[styles.lineViewp, styles.viewGroupPosition]} />
              <View style={[styles.reasonForClosure, styles.reasonForClosureStyle]}>
                <View style={[styles.rectangleParent150, styles.groupChildLayoutp]}>

                <CheckBox 
                     style={{flex: 1, padding: 10}}
                     onClick={toggleCheckbox}
                     isChecked={isChecked}
                     rightText={"Servey Done"}/>
                 
                </View>
              </View>
              <Pressable
                  style={[styles.button5, styles.buttonPosition]}
                  onPress={serveyTicket}>
                  <View style={[styles.buttonChildForComplete, styles.buttonPosition]} />
                  <Text style={[styles.close, styles.closeTypo]}>Complete</Text>
                </Pressable>

          </View>:null}






      </View>

      
    </>
  );
};

const styles = StyleSheet.create({
  frameParentPosition4: {
    left: 36,
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  textTypo1: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  textSpaceBlock: {
    marginLeft: 1,
    textAlign: "left",
  },
  rectangleLayout: {
    height: 32,
    width: 135,
  },
  approvedLayout: {
    width: 55,
    alignItems: "center",
  },
  textLayout: {
    width: 23,
    color: Color.grayDark,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  text10Layout: {
    width: 51,
    alignItems: "center",
  },
  closedLayout: {
    width: 65,
    alignItems: "center",
  },
  frameParent3Position: {
    left: 21,
    position: "absolute",
  },
  nameLayout: {
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  groupParentLayout: {
    height: 250,
    width: "100%",
    position: "absolute",
  },
  groupChild5Position: {
    height: 250,
    top: 10,
    right: 0,
    width: "100%",
    position: "absolute",
  },
  frameParentPosition3: {
    right: "8%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  approveFlexBox: {
    textAlign: "center",
    justifyContent: "center",
  },
  menuSpaceBlock: {
    marginLeft: 15,
    alignItems: "center",
  },
  textTypo: {
    width: 15,
    lineHeight: 20,
    top: 0,
    left: 1,
    textAlign: "center",
    fontSize: FontSize.size_4xs,
    textTransform: "capitalize",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    height: 20,
    alignItems: "center",
    position: "absolute",
  },
  frameParentPosition2: {
    top: 25,
    position: "absolute",
  },
  moreActionsLayout: {
    textAlign: "left",
  },
  lineViewLayout: {
    height: 1,
    width: "100%",
    borderTopWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  approveTypo: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    lineHeight: 25,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  mediumBorder: {
    height: 40,
    width: "45%",
    right: "3%",
    borderWidth: 2,
    borderColor: Color.red,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParentPosition: {
    height: 20,
    top: 0,
    position: "absolute",
  },
  unattendedTypo: {
    height: 20,
    fontSize: FontSize.size_3xs_2,
    top: 2,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  groupChildShadowBox: {
    borderColor: Color.color,
    height: 228,
    borderWidth: 0.5,
    elevation: 20,
    shadowRadius: 20,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    right: 0,
    width: 343,
    position: "absolute",
  },
  frameParentPosition1: {
    top: 16,
    position: "absolute",
  },
  groupChildLayout: {
    borderWidth: 1.2,
    borderRadius: 4,
    height: 19,
    left: 0,
    top: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  newTypo: {
    width: 41,
    height: 13,
    fontSize: FontSize.size_3xs_2,
    top: 3,
    fontWeight: "600",
    lineHeight: 19,
    left: 3,
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  frameParentPosition: {
    left: 298,
    width: 29,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  mediumPosition: {
    top: 130,
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_91xl,
    height: 36,
    width: 311,
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  mediumLayout: {
    paddingVertical: Padding.p_7xs_5,
    paddingHorizontal: Padding.p_91xl,
    height: 40,
    width: "98%",
    backgroundColor: Color.praimary,
    top: 140,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    left: "1%",
    position: "absolute",
  },
  morePosition: {
    left: "3%",
    width: "40%",
    height: 40,
    position: "absolute",
  },
  servicePosition: {
    top: 130,
    height: 24,
    position: "absolute",
  },
  serviceTypo: {
    top: "45%",
    textTransform: "capitalize",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  iconFrameLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild32Position: {
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
    top: 48,
    height: 24,
  },
  linePosition: {
    top: 14,
    height: 25,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    position: "absolute",
  },
  lineLayout: {
    height: 5,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_81xl,
  },
  bottomNavPosition: {
    height: 90,
    bottom: 0,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  homeTypo: {
    marginTop: 6,
    lineHeight: 16,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
  },
  arrivedChild: {
    top: 116,
    right: 40,
    backgroundColor: Color.colorGainsboro_200,
    width: 125,
    height: 38,
    position: "absolute",
  },
  arrivedItem: {
    top: 1776,
    height: 44,
    overflow: "hidden",
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupChild: {
    borderWidth: 1,
    borderColor: Color.praimary,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    width: 8,
    height: 8,
  },
  arrived1: {
    width: 60,
    marginLeft: 4,
    height: 16,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  ellipseParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    width: 23,
    color: Color.grayDark,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    fontWeight: "700",
  },
  frameParent: {
    alignItems: "center",
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_mini,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.whait,
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  approved: {
    fontWeight: "300",
    textTransform: "capitalize",
    marginLeft: 4,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
  },
  ellipseGroup: {
    alignItems: "center",
    backgroundColor: Color.whait,
    flexDirection: "row",
  },
  text1: {
    fontWeight: "300",
    textTransform: "capitalize",
    width: 23,
    color: Color.grayDark,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  frameGroup: {
    left: 29,
    justifyContent: "center",
    alignItems: "center",
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  rectangleGroup: {
    opacity: 0.5,
    marginLeft: 12,
    backgroundColor:Color.whait
  },
  workInProgress: {
    width: 96,
    fontWeight: "300",
    textTransform: "capitalize",
    marginLeft: 4,
    height: 16,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  ellipseContainer: {
    left: 9,
    alignItems: "center",
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  text2: {
    left: 119,
    fontWeight: "300",
    textTransform: "capitalize",
    textAlign: "left",
    top: 8,
    position: "absolute",
  },
  completed: {
    width: 62,
    fontWeight: "300",
    textTransform: "capitalize",
    marginLeft: 4,
    height: 16,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  frameContainer: {
    left: 25,
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  closed: {
    fontWeight: "300",
    textTransform: "capitalize",
    marginLeft: 4,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
  },
  ellipseParent1: {
    flexDirection: "row",
  },
  frameParent1: {
    left: 37,
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  onHold: {
    width: 43,
    fontWeight: "300",
    textTransform: "capitalize",
    marginLeft: 4,
    height: 16,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  ellipseParent2: {
    flexDirection: "row",
  },
  text5: {
    width: 21,
    fontWeight: "300",
    textTransform: "capitalize",
    color: Color.grayDark,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  outOfScope: {
    width: 100,
    fontWeight: "300",
    textTransform: "capitalize",
    marginLeft: 4,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  ellipseParent3: {
    width: 88,
    alignItems: "center",
    flexDirection: "row",
  },
  text6: {
    width: 19,
    fontWeight: "300",
    textTransform: "capitalize",
    color: Color.grayDark,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  frameParent3: {
    top: 8,
    flexDirection: "row",
  },
  inTransit: {
    width: 53,
    fontWeight: "300",
    textTransform: "capitalize",
    marginLeft: 4,
    height: 16,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  ellipseParent4: {
    flexDirection: "row",
  },
  text7: {
    width: 22,
    fontWeight: "300",
    textTransform: "capitalize",
    color: Color.grayDark,
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  frameParent4: {
    left: 31,
    top: 8,
    flexDirection: "row",
    position: "absolute",
  },
  groupParent: {
    top: 70,
    width: "100%",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  groupParentFrontOffice:{
    top: 160,
    left: "2%",
    width:"96%",
    position: "absolute",
  },
  groupChild5: {
    borderWidth: 0.5,
    borderColor: Color.gray,
    borderRadius: Border.br_3xs,
    height: 228,
    elevation: 20,
    shadowRadius: 20,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
  },
  frameIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text8: {
    width: 50,
    color: Color.red,
    fontSize: FontSize.size_4xs,
    textAlign: "center",
    textTransform: "capitalize",
    marginLeft: 4,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    height: 10,
    alignItems: "center",
  },
  frameParent6: {
    borderRadius: Border.br_8xs,
    alignItems: "center",
    flexDirection: "row",
  },
  frameContainer17Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer17Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild6: {
    left: 0,
    top: 0,
    height: 12,
    width: 12,
    position: "absolute",
  },
  text9: {
    color: Color.red,
  },
  ellipseParent5: {
    height: 15,
    width: 15,
    marginLeft: 2,
  },
  framePressable: {
    width: 40,
    marginLeft: 15,
    flexDirection: "row",
  },
  frameParent5: {
    top: 90,
  },
  projectName: {
    width: "30%",
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontWeight: "700",
    display: "flex",
  },
  jeddahYachtClub: {
    width: "36%",
    paddingRight:"5%",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    height: 20,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  projectNameParent: {
    flexDirection: "row",
  },
  dateOfRequest: {
    width: "33%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  text10: {
    width:"50%",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    marginLeft: 2,
    textAlign: "left",
    height: 20,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
  },
  dateOfRequestParent: {
    marginTop: 12,
    flexDirection: "row",
  },
  frameParent7: {
    left: "3%",
  },
  nameTheSender: {
    fontSize: FontSize.size_3xs,
    lineHeight: 20,
    height: 20,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    color: Color.black,
    fontWeight: "700",
    width:"35%"
  },
  assemEmara: {
    width: "35%",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    height: 20,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  ticket: {
    textTransform: "capitalize",
  },
  ticketNumberContainer1: {
    width: "100%",
  },
  ticketNumberContainer: {
    width: 82,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  text11: {
    width: "50%",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    marginLeft: 2,
    textAlign: "left",
  },
  frameParent8: {
    left: "50%",
  },
  lineView: {
    top: 125,
  },
  mediumButton2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  survey: {
    width: "100%",
    color: Color.whait,
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
  },
  mediumButton4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  closeTicket: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.red,
    lineHeight: 20,
    fontFamily: FontFamily.dGBaysan,
    width:"100%"
  },
  mediumButton4: {
    top: 200,
  },
  disciplineType: {
    width: "30%",
    fontSize: FontSize.size_3xs,
    textTransform: "capitalize",
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
  },
  electricalMaintenance: {
    width: "40%",
    color: Color.praimary,
    fontSize: FontSize.size_3xs,
    fontWeight: "300",
    textTransform: "capitalize",
    height: 16,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  disciplineTypeParent: {
    top: 90,
    flexDirection: "row",
    left: "3%",
    position: "absolute",
  },
  groupChild7: {
    borderWidth: 1.5,
    borderRadius: 4,
    height: 20,
    width: "80%",
    left: 0,
    top: 0,
    borderColor: Color.gray,
    borderStyle: "solid",
    backgroundColor: Color.whait,
    position: "absolute",
  },
  outOfScope1: {
    width: 80,
    left: 0,
    fontSize: FontSize.size_3xs_2,
    top: 0,
    textTransform: "capitalize",
    color: Color.black,
  },
  rectangleParent5: {
    right: "5%",
    width: "30%",
    height: 20,
  },
  groupView: {
    height: 250,
    marginBottom:"5%"
  },
  groupChildLayout1: {
    height: 250,
    width: "100%",
    marginBottom:"5%"
  },
  groupChild8: {
    top: 0,
  },
  frameParent9: {
    left: 16,
  },
  frameParent10: {
    left: 179,
  },
  groupChild9: {
    top: 114,
  },
  mediumButton21Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton21Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mediumButton41Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton41Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mediumButton41: {
    top: 176,
  },
  disciplineTypeGroup: {
    top: 80,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  frame: {
    left: 307,
    width: 20,
    height: 20,
    top: 80,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild10: {
    borderColor: Color.colorNavy,
    width: 48,
    backgroundColor: Color.whait,
  },
  new: {
    color: Color.colorNavy,
  },
  rectangleParent7: {
    left: 295,
    width: 48,
  },
  frameContainer34Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer34Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text15: {
    color: Color.grayDark,
  },
  groupContainer: {
    top: 477,
    right: 16,
    height: 238,
  },
  groupChild12: {
    top: 0,
  },
  mediumButton22Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton22Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mediumButton42Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton42Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameContainer44Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer44Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  text19: {
    color: Color.black,
  },
  frameParent16: {
    top: 80,
  },
  groupParent1: {
    top: 731,
    right: 16,
    height: 238,
  },
  groupChild16: {
    top: 0,
  },
  frameContainer46Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer46Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent19: {
    top: 80,
  },
  mediumButton23Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton23Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  approveRelease: {
    width: 123,
    color: Color.whait,
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
  },
  mediumButton23: {
    justifyContent: "center",
  },
  mediumButton43Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton43Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild19: {
    borderColor: Color.colorDarkgreen,
    width: 48,
    backgroundColor: Color.whait,
  },
  survey3: {
    color: Color.colorDarkgreen,
  },
  groupParent2: {
    top: 985,
    right: 16,
    height: 238,
  },
  groupChild20: {
    top: 0,
  },
  frameContainer54Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer54Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mediumButton24Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton24Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  approveRelease1: {
    width: 126,
    color: Color.whait,
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
  },
  mediumButton44Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton44Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupParent3: {
    top: 1239,
    right: 16,
    height: 238,
  },
  groupChild24: {
    top: 0,
  },
  mediumButton25Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton25Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  mediumButton45Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton45Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameContainer69Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer69Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild27: {
    backgroundColor: Color.red,
    width: 58,
    borderColor: Color.red,
    borderWidth: 1.2,
  },
  unattended: {
    width: 52,
    color: Color.whait,
    left: 3,
    fontSize: FontSize.size_3xs_2,
    top: 3,
  },
  rectangleParent15: {
    left: 285,
    width: 58,
  },
  groupParent4: {
    top: 1493,
    right: 16,
    height: 238,
  },
  groupChild28: {
    top: 10,
    borderColor: Color.color,
  },
  frameContainer70Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer70Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  frameParent28: {
    top: 90,
  },
  groupChild30: {
    backgroundColor: Color.colorDarkorange,
    borderColor: Color.colorDarkorange,
    width: 74,
  },
  respondedLate: {
    left: 4,
    color: Color.whait,
    width: 66,
  },
  rectangleParent17: {
    left: 269,
    width: 74,
  },
  mediumButton26Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton26Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  approveRelease2: {
    width: 121,
    color: Color.whait,
    fontWeight: "600",
    textAlign: "center",
    justifyContent: "center",
  },
  mediumButton26: {
    justifyContent: "center",
  },
  mediumButton46Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mediumButton46Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleParent16: {
    top: 0,
    right: 0,
  },
  arrivedInner: {
    top: 1747,
    right: 16,
    height: 238,
  },
  moreActions: {
    fontWeight: "600",
    width: "88%",
    textAlign: "center",
    color: Color.praimary,
    flexDirection: "row",
    position: "absolute",
    alignItems:"flex-start",
    top:8
  },
  groupIcon: {
    width: "12%",
    height: 6,
    right:10,
    flexDirection: "row",
    position: "absolute",
    alignItems:"flex-end",
    top:15

  },
  moreActionsParent: {
    left: "5%",
    top: "3%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  moreActions4Child: {
    borderWidth: 2,
    borderRadius: Border.br_3xs,
    borderColor: Color.praimary,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  moreActions4: {
    top: 200,
  },
  moreActions41: {
    top: 917,
  },
  moreActions5: {
    top: 1171,
  },
  moreActions6: {
    top: 1425,
  },
  moreActions7: {
    top: 1679,
  },
  moreActions81: {
    top: 1933,
  },
  moreActions91: {
    top: 409,
  },
  allTickets: {
    color: Color.praimary,
    fontSize: FontSize.size_xs,
  },
  text32: {
    fontSize: FontSize.size_3xs,
    color: Color.grayDark,
  },
  serviceRequest: {
    width: "90%",
    left: "5%",
    fontWeight: "600",
  },
  frameIcon10: {
    width: "20%",
    right: "81%",
    bottom: "9%",
    top: "9%",
    height: "9%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  serviceClass: {
    width: "100%",
    height: 20,
    left: "5%",
  },
  inScope: {
    color: Color.black,
    fontSize: FontSize.size_xs,
  },
  inScopeContainer: {
    width: "85%",
    fontWeight: "300",
  },
  frameIcon11: {
    width: "21.98%",
    right: "78.02%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  serviceClass1: {
    width: "30%",
    height: 30,
    left: "35%",
  },
  plannedService: {
    width: "100%",
    left: "5%",
    fontWeight: "300",
  },
  frameIcon12: {
    width: "17.09%",
    right: "82.91%",
    bottom: "8.33%",
    top: "8.33%",
    height: "83.33%",
    maxWidth: "100%",
    left: "0%",
    position: "absolute",
  },
  serviceClass2: {
    width: "30%",
    height: 30,
    right: "5%",
  },
  groupChild32: {
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  batteryIcon: {
    width: 24,
    height: 11,
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
    width: 54,
    height: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    top: 0,
    overflow: "hidden",
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
  frontOffice: {
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    fontWeight: "700",
    width: "100%",
    top: 15,
    color: Color.praimary,
    height: 25,
    textAlign: "center",
    lineHeight: 25,
    zIndex:1
  },
  homeIndicator1: {
    width: 134,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    justifyContent: "flex-end",
    height: 34,
    alignItems: "center",
  },
  webViewbottom: {
    height: 34,
    bottom: 0,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    backgroundColor: Color.whait,
    position: "absolute",
  },
  frameIcon13: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu1: {
    width: 57,
    alignItems: "center",
  },
  menu5: {
    width: 58,
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    justifyContent: "flex-end",
    backgroundColor: Color.praimary,
    borderStyle: "solid",
    flexDirection: "row",
  },
  menu31: {
    height: 52,
    width: 74,
    alignItems: "center",
  },
  menu3: {
    width: 57,
  },
  frontOffice1: {
    color: Color.praimary,
    fontWeight: "700",
  },
  menu2: {
    flex: 1,
  },
  menuList: {
    bottom: 30,
    alignItems: "flex-end",
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    width: 375,
    justifyContent: "center",
    backgroundColor: Color.whait,
    flexDirection: "row",
    right: 0,
    position: "absolute",
  },
  line: {
    bottom: 8,
    width: 135,
    marginLeft: -67.5,
    left: "50%",
    position: "absolute",
  },
  iphoneIndicator: {
    height: 30,
    bottom: 0,
    width: 375,
    backgroundColor: Color.whait,
    right: 0,
    position: "absolute",
  },
  bottomNav: {
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  arrived: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    flex: 1,
  },




  rectangleParent1: {
    top: "25%",
  },
  rectangleParentS: {
    top: "30%",
  },
groupInnerPosition: {
    height: 410,
    width: "96%",
    left:"2%",
    position: "absolute",
    zIndex:1,
  },
  groupInnerPosition5: {
    height: 250,
    width: "96%",
    left:"2%",
    position: "absolute",
    zIndex:1,
  },
groupInnerp: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.whait,
  },
  vector:{
    height: "5%",
    width: "10%",
    top: "6%",
    right: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    zIndex:1
  },
vectorIcon: {
    height: 20,
    width: 20,
  },
determineClosureReason: {
    top: 24,
    left: "8%",
    lineHeight: 25,
    width: "90%",
    color: Color.praimary,
    textAlign: "left",
    height: 25,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    zIndex:1,
  },
closeTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    zIndex:1,
  },
  button: {
    top: 340,
    height: 48,
  },
  button5: {
    top: 160,
    height: 48,
  },
buttonPosition: {
    width: "90%",
    left:"4%",
    position: "absolute",
    zIndex:1,
  },
buttonChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.red,
    borderRadius: Border.br_3xs,
  },
  buttonChildForComplete: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
  },
  
buttonPositionp: {
    width: "100%",
    position: "absolute",
  },
close: {
    height: "50%",
    top: "23%",
    color: Color.whait,
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    lineHeight: 30,
  },
lineViewp: {
    top: 60,
    borderTopWidth: 0.5,
    width: "96%",
    height: 1,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    left: "2%",
  },
viewGroupPosition: {
    right: 0,
    position: "absolute",
    zIndex:1,
  },
reasonTypo: {
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  groupChildLayoutp: {
    height: 200,
    width: "90%",
    position: "absolute",
    zIndex:1
  },
  reasonForClosure1: {
    height: 25,
    width: "100%",
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    color: Color.black,
    display: "flex",
    alignItems: "center",
  },
  groupChild3: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.gray,
    borderWidth: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  groupChildPosition1: {
    width: 90,
    borderTopWidth: 1,
    left: "53%",
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  
  pleaseSelectReason: {
    top: 0,
    fontWeight: "300",
    color: Color.black,
    left: "2%",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontSize: 15,
  },
  rectangleParent3: {
    top: 30,
    left: 0,
  },
  rectangleParent150: {
    top: 0,
    left: 0,
  },
  reasonForClosure: {
    top: 90,
    height: 85,
    width: "100%",
    left: "8%",
    position: "absolute",
    zIndex:1,
  },
  reasonForClosureStyle:{
    top:90,
 },
 groupChildp: {
  left: 0,
  top: 0,
  position: "absolute",
  height: 190,
  width: "94%",
  borderWidth: 0.5,
  shadowColor: "rgba(0, 0, 0, 0.05)",
  borderRadius: Border.br_3xs,
  borderColor: Color.gray,
  borderStyle: "solid",
  shadowRadius: 20,
},
childGroupShadowBox: {
  elevation: 20,
  shadowRadius: 20,
  shadowOpacity: 1,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  backgroundColor: Color.whait,
},

checkbox: {
  alignSelf: 'center',
},





containerO: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
},
moreActionsO: {
  color: 'blue',
},
modalContainer: {
  backgroundColor: '#fff',
  zIndex:1,
  width:"40%",
  height:100,
  top:245,
  left:"5%",
  borderWidth: 0.5,
  borderRadius: Border.br_8xs,
  borderColor: Color.praimary,
  borderStyle: "solid",
},
modalContent: {
  width:"100%"
},
listItemStyle:{

},
listItemStyleLink:{
  width:"100%",
  padding:10,
  left:"10%"
},
mediumButtonNotes: {
  top: 200,
  borderColor: Color.praimary,
  paddingVertical: Padding.p_7xs_5,
  paddingHorizontal: Padding.p_91xl,
  height: 36,
  width: "98%",
  flexDirection: "row",
  borderRadius: Border.br_3xs,
  alignItems: "center",
  left: "1%",
  position: "absolute",
},
buttonBorderNotes: {
  borderWidth: 2,
  borderStyle: "solid",
},
notesText: {
  width: "100%",
  fontSize: FontSize.size_sm,
  fontWeight: "600",
  lineHeight: 25,
  color: Color.praimary,
},
notesTypoText: {
  fontWeight: "600",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  display: "flex",
  fontFamily: FontFamily.dGBaysan,
},



});

export default Completed;
