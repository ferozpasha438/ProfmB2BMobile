import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Image, Text, Pressable, Modal,ScrollView, Dimensions, TextInput, FlatList, TouchableOpacity, Alert  } from "react-native";
import Requests2 from "../components/Requests2";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import Requests1 from "../components/Requests1";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";
import AfterLoginFooter from "../components/AfterLoginFooter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import { format } from 'date-fns';
import { RadioButton } from 'react-native-paper';

const Requests5 = () => {
  const [frameIconVisible, setFrameIconVisible] = useState(false);
  const focus = useIsFocused(); 
  const [mediumButtonContainer5Visible, setMediumButtonContainer5Visible] =useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const windowHeight = Dimensions.get('screen').height;

  const openFrameIcon = useCallback(() => {
    setFrameIconVisible(true);
  }, []);

  const closeFrameIcon = useCallback(() => {
    setFrameIconVisible(false);
  }, []);

  const openMediumButtonContainer5 = useCallback(() => {
    setMediumButtonContainer5Visible(true);
  }, []);

  const closeMediumButtonContainer5 = useCallback(() => {
    setMediumButtonContainer5Visible(false);
  }, []);
  
  const [searchText, setSearchText] = useState("");

  const [logUserName, setLogUserName] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginUserMobile, setLoginUseMobile] = useState("");
  const [loginType, setLoginType] = useState("");
  const [loginRole, setLoginRole] = useState("");
  const [token, setLoginToken] = useState("");
  const [statusDataList, setStatusDataList] = useState([]);
  const [requestList, setRequestList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const [userQuery, setUserQuery] = useState("");
  const [status, setStatus] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isNeedStatus, setIsNeedStatus] = useState(false);
  const [pageHeight, setPageHeight] = useState(windowHeight);
  const [itemData, setItemData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [page, setPage] = useState(0);

  const [deleteTicketNumber, setDeleteTicketNumber] = useState("");
  const [showDeleteReason, setShowDeleteReason] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  
  
  const [selectedFilterValue, setSelectedFilterValue] = useState("0");
  const handleRadioChange = (value:any) => {
     setSelectedFilterValue(value);
  };

  const [isShowFilter, setIsShowFilter] = useState(false);
  
  const hideFilters=async () =>{
    setIsShowFilter(false);
 };
  const showFilters=async () =>{
    setIsShowFilter(true);
 };

 useEffect(() => {
      if(requestList.length<3)
      {
        setPageHeight(windowHeight);
      }else{
        setPageHeight(80 + (requestList.length*210) + 70);
      }
  }, [requestList]);

 const searchFilter=async () =>{
    console.log('selectedFilterValue '+ selectedFilterValue);
    setRequestList([]);
    if(selectedFilterValue==='0'){
       setIsNeedStatus(false);
    }else{
      setIsNeedStatus(true);
    }
     setIsShowFilter(false);
     setPage(0);
     setPageHeight(windowHeight);
     getRequestList(token);
 };
 
  
  const hideMessage=async () =>{
     setShowDeleteReason(false);
     setDeleteReason("");
     setDeleteTicketNumber("");
  };
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
         setRequestList([]);
         setPage(0);
         setDeleteReason("");
         setDeleteTicketNumber("");
         setPageHeight(windowHeight);
         setShowDeleteReason(false);
         getRequestList(token);
         Alert.alert("Successfully cancelled the ticket");
      }else{
        Alert.alert(deleteReponse.message);
      }
    }
  }

  const handleScroll = (event:any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 320;

    console.log('left : '+ (layoutMeasurement.height + contentOffset.y));
    console.log('right : '+ (contentSize.height - 320));
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
      <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)}>
           <View style={styles.groupChildLayout1}>
            <View style={[styles.groupChild, styles.childGroupShadowBox]} />
 
            <View style={{position: "absolute",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",width:"100%",left:"3%",height:50,top:15}}>
                  
                  <Text style={[styles.projectName, styles.textTypo1]}>
                    Project name :
                  </Text>
                  <Text numberOfLines={2} style={[styles.jeddahYachtClub, styles.textTypo1]}>
                    {item.projectNameEng}
                  </Text>

           
                  <Text style={[styles.orderNumber, styles.textTypo1]}>
                    Order number :
                  </Text>
                  <Text style={[styles.text,styles.textTypo1]}>{item.ticketNumber}</Text>

            </View>
            <View style={{position: "absolute",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",width:"100%",left:"3%",height:50,top:50}}>
                  
                  <Text style={[styles.dateOfRequest, styles.textTypo1]}>
                    Date of request :
                  </Text>
                  <Text style={[styles.text1, styles.textTypo1]}>{format(item.joDate, 'dd/MM/yyyy')}</Text>

                  <Text style={[styles.maintenanceType, styles.textTypo1]}>
                    Maintenance type :
                  </Text>
                  <Text
                    style={[styles.preventive, styles.textTypo1]}>{item.jobMaintenanceType}</Text>
            </View>
           
            <View style={styles.groupItem} />
            <View style={styles.lineParent}>
                  <View style={[item.isCompleted?styles.groupChild4c : styles.groupChild3c, styles.groupChildPosition1c]} />
                  <View style={[item.isCompleted?styles.groupChild4c : (item.isWorkInProgress?styles.groupChild4c : styles.groupChild3c), styles.groupChildPositionc]} />
                  <Image
                    style={[styles.ellipseIcon, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={item.isCompleted?require("../assets/ellipse-195.png"):require("../assets/ellipse-1951.png")}
                  />
                  <Image
                    style={[styles.groupChild5c, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={item.isCompleted?require("../assets/ellipse-195.png") : (item.isWorkInProgress?require("../assets/ellipse-195.png"):require("../assets/ellipse-1951.png"))}
                  />
                  <Image
                    style={[styles.groupChild6, styles.groupChildLayout]}
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
            
            <Pressable
              style={[styles.mediumButton1, styles.mediumBg]}
              onPress={() => navigation.navigate("ViewTicket",{ticketId:item.id,})}
            >
              <Text style={[styles.text2, styles.textTypo]}>Ticket Details</Text>
              {/* <Image
                style={[styles.frameIcon1, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame36.png")}
              /> */}
              <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
            </Pressable>

            {/* <Pressable
              style={[styles.mediumButton, styles.mediumPosition]}
              onPress={() => navigation.navigate("Reports")}
            >
              <Text style={[styles.feedback, styles.feedbackTypo]}>
                feedback
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame35.png")}
              />
            </Pressable> */}

          <Pressable
              style={[styles.mediumButton3, styles.mediumPosition]}
              onPress={() =>deletePopup(item.ticketNumber)}>
              <Text style={[styles.deleteTicket, styles.textTypo]}>
                   Cancel Ticket
              </Text>
              <Image
                style={[styles.frameIcon, styles.frameIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame11.png")}
              />
            </Pressable>
          </View>
      </TouchableOpacity>
      
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
  
  const getRequestList = async (jwttoken:string) => {
    setLoading(true);
    if(isNeedStatus){
        if(selectedFilterValue==='15' || selectedFilterValue==='16'){
          var params3={
            page:page,
            pageCount:10,
            query:searchText,
            orderBy:'id desc',
            statusStr:selectedFilterValue=='15'?'incomplete':'outofscope' 
          }
          WebServer.postDataWithToken('FomMobJobTicketHead/getTicketsListPaginationWithFilter',jwttoken,params3, requestListCallback);
        }else{
           var params={
              page:page,
              pageCount:10,
              query:searchText,
              orderBy:'id desc',
              status:selectedFilterValue
            }
            WebServer.postDataWithToken('FomMobJobTicketHead/getTicketsListPaginationWithFilter',jwttoken,params, requestListCallback);
        }
      
    }else{
      var params2={
        page:page,
        pageCount:10,
        query:searchText,
        orderBy:'id desc'
       }
      WebServer.postDataWithToken('FomMobJobTicketHead/getTicketsListPaginationWithFilter',jwttoken,params2, requestListCallback);
    }    
  };
  const requestListCallback = response => {
    if(response.items.length>0)
    {
      const uniqueIds = new Set(requestList.map((item) => item.id));
      const filteredNewData = response.items.filter((item) => !uniqueIds.has(item.id));
      setRequestList(old => [...old, ...filteredNewData]);
      // if((requestList.length+filteredNewData.length)<3)
      // {
      //   setPageHeight(windowHeight);
      // }else{
      //   setPageHeight(80 + ((requestList.length+filteredNewData.length)*210) + 70);
      // }
    }
    setTotalPages(response.totalPages);
    setTotalCount(response.totalCount);
    setLoading(false);
  }

  const getStatusList = async (jwttoken:string) => {
    WebServer.getDataWithToken('FomMobMetaData/getSelectJobStatusesEnum',jwttoken,'', statusListCallback);
  };
  const statusListCallback = response => {
    var count = response.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:response[i].textTwo,value:response[i].text});
    }
    setStatusDataList(data);
  }

  const checkLoginDetails = async () => {
    try {
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
          setLoginToken(userInfo.token);
          setLogUserName(userInfo.userName);
          setLoginUserEmail(userInfo.email);
          setLoginUseMobile(userInfo.mobile);
          setLoginType(userInfo.loginType);
          setLoginRole(userInfo.role);
          getStatusList(userInfo.token);
          getRequestList(userInfo.token);
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };

  // useEffect(() => {
  //   if(focus){
      
  //   }
  // }, [focus]);

  useEffect(() => {
    // Simulating API call to fetch data
    const fetchData = async () => {
      setLoading(true);
      // Replace the following with your actual API call
      try {
        if(!isFirst){
          setLoading(true);
          getRequestList(token);
        }else{
          setIsFirst(false);
          checkLoginDetails();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    // if(focus){
    //   setSelectedItems([]);
    // }
    
    fetchData();
    
  }, [page]);

  // useEffect(() => {
  //    getRequestList(token);
  //    console.log('isNeedStatus logged');
  // }, [isNeedStatus]);
  

  return (
    <>
      <View style={styles.requests}>
          <View style={styles.tapPosition}>
            <View style={[styles.tapChild, styles.tapPosition]} />
            <Pressable
              style={styles.arrow21}
              onPress={() => navigation.navigate("Home1")}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/arrow-2-1.png")}
              />
            </Pressable>
            <Text style={[styles.requests2, styles.completedHeaderFlexBox]}>
              Requests
            </Text>
          </View>

          

        {/* scrolling starts */}
        <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:pageHeight}}
            alwaysBounceVertical={false}
            onScroll={handleScroll}
      scrollEventThrottle={400}>

          <View style={[styles.rectangleParent, styles.menuListFlexBox]}>
            <View style={[styles.frameChild, styles.childGroupBorder]} />
            <View style={styles.frameParent}>
              <View style={styles.fiRrZoomOutParent}>
               <Pressable style={styles.fiRrZoomOutIcon} onPress={searchFilter}>
                  <Image
                    style={[styles.fiRrZoomOutIcon, styles.frameIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/firrzoomout1.png")}
                  />
                </Pressable>
                <TextInput value={searchText} onChangeText={(text) => setSearchText(text)} onBlur={searchFilter}
                    autoCapitalize={'none'} style={styles.searchForThe} placeholder="Search for the order number, project name, company name..."
                        placeholderTextColor="#000"/>
              </View>
              <Pressable style={[styles.frameIconLayout,styles.frameIconLayout5]} onPress={showFilters}>
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/frame24.png")}
                />
              </Pressable>
            </View>
          </View>

        {/* <View style={styles.requestsChild} /> */}
        <View style={styles.groupParent}>


        {renderData()}
        {renderFooter()}
          

        </View>
        </ScrollView>
        {/* Scrolling End */}



        <AfterLoginFooter currentRoute='Requests'/>

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



      
      {isShowFilter?<View style={{backgroundColor: Color.colorGray_600,
                        width: "100%",
                        position: "absolute",zIndex:1,
                        height: windowHeight}} />:null}
      {isShowFilter ? <View style={styles.groupPositionp}>
            <View style={styles.groupPositionp}>
              <View style={[styles.groupChild23, styles.groupPositionp]} />
              <View style={[styles.frameGroup, styles.frameGroupPosition]}>
                <View style={styles.frameContainer}>
                  <Image
                    style={styles.frameIcon12}
                    resizeMode="cover"
                    source={require("../assets/frame15.png")}
                  />
                  <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
                </View>
                <Pressable
                    style={styles.vectorIconp2}
                    onPress={hideFilters}>
                    <Image
                      style={styles.vectorIconp}
                      resizeMode="cover"
                      source={require("../assets/vector9.png")}
                    />
                 </Pressable>
              </View>
              <View style={[styles.groupChild24, styles.groupPosition2]} />

              <Text style={[styles.status, styles.filterTypo]}>Status</Text>


              <View style={[styles.filterParent, styles.frameGroupPosition]}>
                  <RadioButton.Group onValueChange={handleRadioChange} value={selectedFilterValue}>
                      <View style={styles.filter1}>
                        <Text style={[styles.allRequests, styles.requestTypo]}>
                          All Ticket
                        </Text>
                        <RadioButton value="0" color="#356a7e" uncheckedColor="#356a7e"
                                  status={selectedFilterValue === '0' ? 'checked' : 'unchecked'}/>
                      </View>
                      <View style={[styles.filter2, styles.filterSpaceBlock]}>
                        <Text style={[styles.completedRequest, styles.requestTypo]}>
                          Completed Ticket
                        </Text>
                        <RadioButton value="11" color="#356a7e" uncheckedColor="#356a7e"
                                  status={selectedFilterValue === '11' ? 'checked' : 'unchecked'}/>
                      </View>
                      <View style={[styles.filter2, styles.filterSpaceBlock]}>
                        <Text style={[styles.completedRequest, styles.requestTypo]}>
                          Ticket in progress
                        </Text>
                        <RadioButton value="7" color="#356a7e" uncheckedColor="#356a7e"
                                  status={selectedFilterValue === '7' ? 'checked' : 'unchecked'}/>
                      </View>
                      <View style={[styles.filter4, styles.filterSpaceBlock]}>
                        <Text style={[styles.incompleteRequest, styles.requestTypo]}>
                          Incomplete Ticket
                        </Text>
                        <RadioButton value="15" color="#356a7e" uncheckedColor="#356a7e"
                                  status={selectedFilterValue === '15' ? 'checked' : 'unchecked'}/>
                      </View>
                      <View style={[styles.filter4, styles.filterSpaceBlock]}>
                        <Text style={[styles.incompleteRequest, styles.requestTypo]}>
                          Tickets are out of scope
                        </Text>
                        <RadioButton value="16" color="#356a7e" uncheckedColor="#356a7e"
                                  status={selectedFilterValue === '16' ? 'checked' : 'unchecked'}/>
                      </View>

                      <View style={[styles.filter4, styles.filterSpaceBlock]}>
                        <Text style={[styles.incompleteRequest, styles.requestTypo]}>
                          Tickets In Trasit
                        </Text>
                        <RadioButton value="12" color="#356a7e" uncheckedColor="#356a7e"
                                  status={selectedFilterValue === '12' ? 'checked' : 'unchecked'}/>
                      </View>

                      <View style={[styles.filter4, styles.filterSpaceBlock]}>
                        <Text style={[styles.incompleteRequest, styles.requestTypo]}>
                          Tickets On Hold
                        </Text>
                        <RadioButton value="13" color="#356a7e" uncheckedColor="#356a7e"
                                  status={selectedFilterValue === '13' ? 'checked' : 'unchecked'}/>
                      </View>
                    
                  </RadioButton.Group>
                </View>
            </View>
            <Pressable
              style={[styles.buttonp, styles.buttonFlexBox]}
              onPress={searchFilter}>
                <Text style={[styles.text12, styles.requestTypo]}>
                  Apply filter
                </Text>
            </Pressable>
          </View>:null}

        
      </View>
     

      <Modal animationType="fade" transparent visible={frameIconVisible}>
        <View style={styles.frameIconOverlay}>
          <Pressable style={styles.frameIconBg} onPress={closeFrameIcon} />
          <Requests2 onClose={closeFrameIcon} />
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
          <Requests1 onClose={closeMediumButtonContainer5} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  menuListFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  childGroupBorder: {
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
  },
  frameIconLayout: {
    height: 12,
    width: 12,
  },
  frameIconLayout5:{
    right:0,
    zIndex:1,
    position:'absolute'
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
  orderNumberTypo: {
    color: Color.black,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.size_3xs,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    height: 20,
    alignItems: "center",
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
  },
  groupPosition: {
    width: 90,
    borderTopWidth: 1,
    left: "53%",
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewPosition: {
    left: "13%",
    width: 90,
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
  groupChild6: {
    left: "10%",
  },
  incomplete1: {
    left: "3%",
    width: "25%",
  },
  groupChild2Position: {
    left: 21,
    position: "absolute",
  },
  completedHeaderFlexBox: {
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
  completedFlexBox: {
    top: 14,
    fontSize: 10,
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
  progressLayout: {
    width: 52,
    right: 99,
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
  mediumPosition: {
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  feedbackTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
  },
  mediumBg: {
    backgroundColor: Color.praimary,
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "right",
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    lineHeight: 25,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChildLayout1: {
    height: 190,
    width: "100%",
    marginBottom:"5%"
  },
  completed1Typo: {
    color: Color.gray,
    textAlign: "center",
    top: 14,
    fontSize: FontSize.size_3xs,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  menuListLayout: {
    width: 375,
    position: "absolute",
  },
  homeTypo: {
    marginTop: 6,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "right",
    fontFamily: FontFamily.dGBaysan,
  },
  tapPosition: {
    height: 50,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex:1
  },
  groupChildPosition: {
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  frameChild: {
    shadowRadius: 10,
    elevation: 10,
    height: 48,
    zIndex: 0,
    left:"2%",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  fiRrZoomOutIcon: {
    overflow: "hidden",
    left:"20%",
    width:16
  },
  searchForThe: {
    fontSize: 11,
    width: "100%",
    marginLeft: "3%",
    height: 50,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    color: Color.black,
    fontWeight: "300",
    lineHeight: 30,
    alignItems: "center",
  },
  fiRrZoomOutParent: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  frameIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    overflow: "hidden",
    width: "100%",
  },
  frameParent: {
    width: "100%",
    justifyContent: "space-between",
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    top: 60,
    position: "absolute",
    width:"96%"
  },
  requestsChild: {
    top: 1068,
    height: 54,
    overflow: "hidden",
    width: "100%",
    right: 16,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: "100%",
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
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
  text: {
    width: "25%",
    fontWeight: "300",
    color: Color.praimary,
  },
  orderNumber: {
    width: "20%",
    color: Color.black,
    fontWeight: "700",
  },
  maintenanceType: {
    width: "25%",
    color: Color.black,
    fontWeight: "700",
  },
  preventive: {
    width: "25%",
    fontWeight: "300",
    color: Color.praimary,
  },
  projectName: {
    width: "20%",
    color: Color.black,
    fontWeight: "700",
  },
  jeddahYachtClub: {
    width: "30%",
    color: Color.praimary,
  },
  text1: {
    width: "25%",
    fontWeight: "300",
    color: Color.praimary,
  },
  dateOfRequest: {
    width: "25%",
    color: Color.black,
    fontWeight: "700",
  },
  groupItem: {
    top: 80,
    borderTopWidth: 0.5,
    width: "100%",
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorMediumseagreen,
  },
  lineView: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: "90%",
  },
  groupChild1: {
    left: "49%",
  },
  groupChild2: {
    left: "10%",
  },
  incomplete: {
    left: "3%",
    width: "25%",
  },
  inProgress: {
    top: 14,
    left:"40%",
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
  completed: {
    width: "25%",
    left: "80%",
  },
  lineParent: {
    top: 95,
    left: "15%",
    width: "70%",
    height: 30,
    position: "absolute",
  },
  feedback: {
    width: 63,
    textTransform: "capitalize",
    color: Color.praimary,
  },
  deleteTicket: {
    color: Color.colorRed_100,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  frameIcon: {
    marginLeft: 4,
    overflow: "hidden",
  },
  mediumButton: {
    borderColor: Color.praimary,
    paddingHorizontal: Padding.p_sm,
    width: "40%",
    borderWidth: 2,
    right: "5%",
    paddingVertical: Padding.p_7xs_5,
    top: 145,
    flexDirection: "row",
    borderStyle: "solid",
    justifyContent: "center",
  },
  mediumButton4: {
    right: "5%",
    borderColor: Color.colorRed_100,
    borderWidth: 1,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    borderStyle: "solid",
  },
  text2: {
    textTransform: "capitalize",
    color: Color.whait,
  },
  frameIcon1: {
    marginLeft: 6,
    overflow: "hidden",
  },
  mediumButton1: {
    paddingHorizontal: Padding.p_5xl_5,
    paddingVertical: Padding.p_7xs_5,
    top: 145,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.praimary,
    left: "5%",
    width: "40%",
  },
  rectangleView: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
  },
  mediumButton2: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    alignItems: "center",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.praimary,
    left: 16,
  },
  groupChild4: {
    borderColor: Color.gray,
  },
  groupChild4c: {
    borderColor: Color.colorMediumseagreen,
  },
  groupChild3c: {
    borderColor: Color.gray,
  },
  groupChildPosition1c: {
    width: 90,
    borderTopWidth: 1,
    left: "53%",
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPositionc: {
    left: "13%",
    width: 90,
    borderTopWidth: 1,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild5: {
    borderColor: Color.gray,
  },
  groupChild5c: {
    left: "49%",
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
  },
  mediumButton3: {
    borderColor: Color.colorRed_100,
    paddingHorizontal: Padding.p_sm,
    width: 149,
    borderWidth: 2,
    left: 178,
    paddingVertical: Padding.p_7xs_5,
    top: 142,
    flexDirection: "row",
    borderStyle: "solid",
    justifyContent: "center",
  },
  rectangleContainer: {
    marginTop: 24,
  },
  groupChild9: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
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
  groupChild16: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: 343,
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
  },
  groupParent: {
    top: 120,
    left: "2%",
    width:"96%",
    position: "absolute",
  },
  frameIcon8: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    marginTop: 6,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  requests1: {
    fontWeight: "700",
    marginTop: 6,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    color: Color.praimary,
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
    justifyContent: "flex-end",
    backgroundColor: Color.praimary,
    borderStyle: "solid",
  },
  menu31: {
    width: 74,
    height: 52,
    alignItems: "center",
  },
  menuList: {
    bottom: 30,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_5xs,
    right: 0,
    flexDirection: "row",
    backgroundColor: Color.whait,
    justifyContent: "center",
    alignItems: "flex-end",
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
    bottom: 0,
    width: 375,
    height: 30,
    right: 0,
    backgroundColor: Color.whait,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    bottom: 0,
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    overflow: "hidden",
  },
  tapChild: {
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
    height: 11,
    width: 24,
    right: 0,
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
    width: 54,
    height: 21,
    top: 12,
    left: 21,
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    overflow: "hidden",
  },
  arrow21: {
    left: "5%",
    width: 25,
    top:"30%",
    height: 25,
    zIndex:2
  },
  requests2: {
    fontSize: 20,
    width: "100%",
    top: 15,
    color: Color.praimary,
    height: 25,
    textAlign: "center",
    lineHeight: 25,
    zIndex:1
  },
  requests: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    flex: 1,
  },


  rectangleParent1: {
    top: "25%",
  },
groupInnerPosition: {
    height: 410,
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
  groupIcon: {
    height: "14.29%",
    width: "4.5%",
    top: "42.86%",
    right: "5.14%",
    bottom: "42.86%",
    left: "90.35%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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


 groupPositionp: {
  height: 480,
  bottom: 0,
  position: "absolute",
  width: "100%",
  zIndex:1
},
groupChild23: {
  borderTopLeftRadius: Border.br_xl,
  borderTopRightRadius: Border.br_xl,
  backgroundColor: Color.whait,
},
frameGroup: {
  top: 24,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
},
frameGroupPosition: {
  left: "5%",
  position: "absolute",
  zIndex:1
},
frameContainer: {
  alignItems: "center",
  flexDirection: "row",
},
frameIcon12: {
  width: 18,
  height: 18,
  overflow: "hidden",
},
filter: {
  width: "90%",
  color: Color.praimary,
  lineHeight: 25,
  display: "flex",
  textAlign: "left",
  fontFamily: FontFamily.dGBaysan,
  height: 25,
  alignItems: "center",
  marginLeft: "3%",
},
filterTypo: {
  fontSize: FontSize.size_base,
  fontWeight: "700",
},
vectorIconp: {
  width: 20,
  height: 20,
},
vectorIconp2: {
  position:'absolute',
  width:"10%",
  right:"5%",
  zIndex:1
},
status: {
  top: 76,
  left: "8%",
  width: "100%",
  color: Color.black,
  lineHeight: 25,
  display: "flex",
  textAlign: "left",
  fontFamily: FontFamily.dGBaysan,
  height: 25,
  alignItems: "center",
  position: "absolute",
  zIndex:1
},
groupChild24: {
  top: 60,
  borderColor: Color.colorLightsteelblue_100,
  width: "100%",
  zIndex:1
},
groupPosition2: {
  height: 1,
  borderTopWidth: 0.5,
  right: 0,
  borderStyle: "solid",
  position: "absolute",
},
filterParent: {
  top: 108,
  width: "100%",
},
filter1: {
  width: "100%",
  height: 18,
},
allRequests: {
  width: "80%",
  left: "3%",
  top:-5,
  textTransform: "capitalize",
  fontSize: FontSize.size_xs,
  display: "flex",
  textAlign: "left",
  alignItems: "center",
  position: "absolute",
  fontWeight: "600",
  color: Color.praimary,
},
requestTypo: {
  textTransform: "capitalize",
  fontFamily: FontFamily.dGBaysan,
  margin:"4%",
  marginLeft:"8%"
},
frameIcon13: {
  width: "18.02%",
  right: "82.88%",
  left: "-0.9%",
},
frameIconPosition: {
  bottom: "8.33%",
  top: "8.33%",
  height: "83.33%",
  overflow: "hidden",
  position: "absolute",
  maxHeight: "100%",
  maxWidth: "100%",
},
filter2: {
  width: 152,
},
filterSpaceBlock: {
  marginTop: 16,
  height: 24,
},
completedRequest: {
  width: "83.55%",
  left: "16.45%",
  top: "16.67%",
  height: "66.67%",
  textTransform: "capitalize",
  fontSize: FontSize.size_xs,
  display: "flex",
  textAlign: "left",
  alignItems: "center",
  position: "absolute",
  color: Color.black,
  fontWeight: "300",
},
frameIcon14: {
  width: "13.16%",
  right: "87.5%",
  left: "-0.66%",
},
filter4: {
  width: 145,
},
incompleteRequest: {
  width: "93.1%",
  left: "17.24%",
  top: "16.67%",
  height: "66.67%",
  textTransform: "capitalize",
  fontSize: FontSize.size_xs,
  display: "flex",
  textAlign: "left",
  alignItems: "center",
  position: "absolute",
  color: Color.black,
  fontWeight: "300",
},
frameIcon16: {
  width: "13.79%",
  right: "86.9%",
  left: "-0.69%",
},
buttonp: {
  bottom: 12,
  height: 56,
  paddingHorizontal: Padding.p_111xl,
  paddingVertical: Padding.p_sm,
  width: "96%",
  justifyContent: "center",
  left:"2%"
},
buttonFlexBox: {
  backgroundColor: Color.praimary,
  alignItems: "center",
  flexDirection: "row",
  borderRadius: Border.br_3xs,
  position: "absolute",
  zIndex:1
},
text12: {
  width: "100%",
  fontSize: FontSize.size_base,
  fontWeight: "700",
  textAlign: "center",
  textTransform: "capitalize",
  color: Color.whait,
},

});

export default Requests5;
