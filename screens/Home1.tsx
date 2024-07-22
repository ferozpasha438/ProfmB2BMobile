import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { Image, StyleSheet, View, Text, Pressable, ScrollView, Dimensions, TextInput, Alert, Platform } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AfterLoginFooter from '../components/AfterLoginFooter';
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import { format } from 'date-fns';
import { RadioButton } from 'react-native-paper';
import PieChart from 'react-native-pie-chart';

const Home1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const focus = useIsFocused(); 
  const [isShowPopUp, setShowPopUp] = useState(false);
  const [logUserName, setLogUserName] = useState('');
  const [loginType, setLoginType] = useState("");
  const [loginRole, setLoginRole] = useState("");
  const [token, setLoginToken] = useState("");
  const [requestList, setRequestList] = useState([]);
 
  const windowHeight = Dimensions.get('screen').height;


  const [deleteTicketNumber, setDeleteTicketNumber] = useState("");
  const [showDeleteReason, setShowDeleteReason] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  const [showFeedback, setshowFeedback] = useState(false);
  

  const [projectData, setProjectData] = useState([]);
  const [isCustomer, setIsCustomer] = useState(true);

  const [projectCode, setProjectCode] = useState('');

  const [depWiseUnfinishedServices, setDepWiseUnfinishedServices] = useState([]);
  const [statusWiseTickets, setStatusWiseTickets] = useState([]);

  const [dept1Name, setDept1Name] = useState('');
  const [dept1Count, setDept1Count] = useState('0');

  const [dept2Name, setDept2Name] = useState('');
  const [dept2Count, setDept2Count] = useState('0');

  const [dept3Name, setDept3Name] = useState('');
  const [dept3Count, setDept3Count] = useState('0');

  const [dept4Name, setDept4Name] = useState('');
  const [dept4Count, setDept4Count] = useState('0');

  const [deptOtherName, setDeptOtherName] = useState('');
  const [deptOtherCount, setDeptOtherCount] = useState('0');

  const [sum, setSum] = useState(0);
  const [ticketsum, setTicketSum] = useState(0);

  const widthAndHeight = 120
  // const series = [12, 32, 7, 8, 16]
  // const sliceColor = ['#356a7e', '#ffc000', '#57aaa9', '#95c099', '#ed7d31'];
  const [series, setSeries] = useState<number[]>([]);
  const [sliceColor, setSliceColor] = useState<string[]>([]);


  const [completedCount, setCompletedCount] = useState('0');
  const [completedPercentage, setCompletedPercentage] = useState('0%');
  const [completedLeftPercentage, setCompletedLeftPercentage] = useState('0%');

  const [inCompleteCount, setInCompleteCount] = useState('0');
  const [inCompletePercentage, setInCompletePercentage] = useState('0%');
  const [inCompleteLeftPercentage, setInCompleteLeftPercentage] = useState('0%');

  const [outOfScopeCount, setOutOfScopeCount] = useState('0');
  const [outOfScopePercentage, setOutOfScopePercentage] = useState('0%');
  const [outOfScopeLeftPercentage, setOutOfScopeLeftPercentage] = useState('0%');

  const [inTransitCount, setInTransitCount] = useState('0');
  const [inTransitPercentage, setInTransitPercentage] = useState('0%');
  const [inTransitLeftPercentage, setInTransitLeftPercentage] = useState('0%');

  const [onHoldCount, setOnHoldCount] = useState('0');
  const [onHoldPercentage, setOnHoldPercentage] = useState('0%');
  const [onHoldLeftPercentage, setOnHoldLeftPercentage] = useState('0%');


  const [selectedFilterValue, setSelectedFilterValue] = useState('');
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

 const getDashBoardData = async () => {
  var data={
    siteCode:projectCode
  }
  WebServer.postDataWithToken('FomMobDashboard/getDashBoardDataForClient',token,data, getDashBoardDataCallback);
};
const getDashBoardDataCallback = getDashBoardDataReponse => {
   if(getDashBoardDataReponse!=null && getDashBoardDataReponse!=undefined){
        let total=0;
        let total2=0;
        const seriesData = [];
        const sliceColorData = [];
        for(let i=0;i<getDashBoardDataReponse.depWiseUnfinishedServices.length;i++){
            if(i===0){
                setDept1Name(getDashBoardDataReponse.depWiseUnfinishedServices[i].departmentName); 
                setDept1Count(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                seriesData.push(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                sliceColorData.push('#356a7e');
            }else if(i===1){
                setDept2Name(getDashBoardDataReponse.depWiseUnfinishedServices[i].departmentName); 
                setDept2Count(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                seriesData.push(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                sliceColorData.push('#ffc000');
            }else if(i===2){
                setDept3Name(getDashBoardDataReponse.depWiseUnfinishedServices[i].departmentName); 
                setDept3Count(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                seriesData.push(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                sliceColorData.push('#57aaa9');
            }else if(i===3){
                setDept4Name(getDashBoardDataReponse.depWiseUnfinishedServices[i].departmentName); 
                setDept4Count(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                seriesData.push(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                sliceColorData.push('#95c099');
            }else if(i===4){
                setDeptOtherName(getDashBoardDataReponse.depWiseUnfinishedServices[i].departmentName); 
                setDeptOtherCount(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                seriesData.push(getDashBoardDataReponse.depWiseUnfinishedServices[i].count);
                sliceColorData.push('#ed7d31');
            }
            total += getDashBoardDataReponse.depWiseUnfinishedServices[i].count;
        }
        setSeries(seriesData);
        setSliceColor(sliceColorData);
        for(let i=0;i<getDashBoardDataReponse.statusWiseTickets.length;i++){
            if(getDashBoardDataReponse.statusWiseTickets[i].satatusStr==='Completed'){
                  setCompletedCount(getDashBoardDataReponse.statusWiseTickets[i].count);
                  setCompletedPercentage(Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage)+'%');
                  setCompletedLeftPercentage((100-Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage))+'%');
            }else if(getDashBoardDataReponse.statusWiseTickets[i].satatusStr==='Incomplete'){
              setInCompleteCount(getDashBoardDataReponse.statusWiseTickets[i].count);
              setInCompletePercentage(Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage)+'%');
              setInCompleteLeftPercentage((100-Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage))+'%');
            }else if(getDashBoardDataReponse.statusWiseTickets[i].satatusStr==='Out of scope'){
              setOutOfScopeCount(getDashBoardDataReponse.statusWiseTickets[i].count);
              setOutOfScopePercentage(Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage)+'%');
              setOutOfScopeLeftPercentage((100-Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage))+'%');
            }else if(getDashBoardDataReponse.statusWiseTickets[i].satatusStr==='In transit'){
              setInTransitCount(getDashBoardDataReponse.statusWiseTickets[i].count);
              setInTransitPercentage(Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage)+'%');
              setInTransitLeftPercentage((100-Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage))+'%');
            }else if(getDashBoardDataReponse.statusWiseTickets[i].satatusStr==='On hold'){
              setOnHoldCount(getDashBoardDataReponse.statusWiseTickets[i].count);
              setOnHoldPercentage(Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage)+'%');
              setOnHoldLeftPercentage((100-Math.round(getDashBoardDataReponse.statusWiseTickets[i].percentage))+'%');
            }
            total2 += getDashBoardDataReponse.statusWiseTickets[i].count;
        }
        setSum(total);
        setTicketSum(total2);
   }   
}

 useEffect(() => {
   if(projectCode!=''){
    getDashBoardData();
   }
 }, [projectCode]);

 const searchFilter=async () =>{
      setProjectCode(selectedFilterValue);
      setIsShowFilter(false);
 };

 const renderData = () => {
  return (<RadioButton.Group onValueChange={handleRadioChange} value={selectedFilterValue}>
           {projectData.map((item:any) => (
               <View key={item.value} style={styles.filter1}>
                    <Text style={[styles.allRequests, styles.requestTypo]}>
                        {item.label} 
                    </Text>
                    <RadioButton.Android value={item.value} color="#356a7e" uncheckedColor="#356a7e"
                              status={selectedFilterValue === item.value ? 'checked' : 'unchecked'}/>
              </View>
    
        ))}
  </RadioButton.Group>);
};

  const hideMessage=async () =>{
     setShowDeleteReason(false);
     setDeleteReason("");
     setDeleteTicketNumber("");
  };
  const deletePopup = async (ticketNumber) =>{
      setDeleteReason("");
      setDeleteTicketNumber(ticketNumber);
      setShowDeleteReason(true);
  };
  const feedBackPopup = async (ticketNumber) =>{
    setDeleteReason("");
    setDeleteTicketNumber(ticketNumber);
    setshowFeedback(true);
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
         setDeleteReason("");
         setDeleteTicketNumber("");
         getRequestList(token);
         setShowDeleteReason(false);
         Alert.alert("Successfully cancelled the ticket");
      }else{
        Alert.alert(deleteReponse.message);
      }
    }
  }

  const hideMessage2 = async () => {
    setShowPopUp(false);
  };
  const getRequestList = async (jwttoken:string) => {
    console.log('getRequestList jwttoken: '+jwttoken);
    WebServer.getDataWithToken('FomMobJobTicketHead/getRecentTicketsList',jwttoken,'', requestListCallback);
  };
  const requestListCallback = response => {
    if(response && response!=null && response.length>0){
      setRequestList(response);
    }
  }

  const checkLoginDetails = async () => {
    try {
      
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
        setLogUserName(userInfo.userName);
        setLoginType(userInfo.loginType);
        setLoginRole(userInfo.role);
        setLoginToken(userInfo.token);
        getRequestList(userInfo.token);
        if(userInfo.loginType!=='client'){
          setIsCustomer(false);
          getProjectDataListForSupervisor(userInfo.token);
        }else{
          getProjectDataList(userInfo.customerCode,userInfo.token);
          setIsCustomer(true);
        }
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };
  const getProjectDataList = async (custCode:string,jwttoken:string) => {
    WebServer.getDataWithToken('FomMobsite/getSelectSitesListByCustomerCode/'+custCode,jwttoken,'', projectDataCallback);
 };
 const projectDataCallback = projectResponse => {
   var count = projectResponse.length;
   var data=[];
   for (var i = 0; i < count; ++i) {
     data.push({label:projectResponse[i].textTwo,value:projectResponse[i].text});
     if(i===0){
       setProjectCode(projectResponse[i].text);
       setSelectedFilterValue(projectResponse[i].text);
     }
   }
   setProjectData(data);
 }
 const getProjectDataListForSupervisor = async (jwttoken:string) => {
  WebServer.getDataWithToken('FomMobsite/getSelectSitesListForUser',jwttoken,'', projectDataForSupervisorCallback);
};
const projectDataForSupervisorCallback = projectListResponse => {
 var count = projectListResponse.length;
 var data=[];
 for (var i = 0; i < count; ++i) {
   data.push({label:projectListResponse[i].textTwo,value:projectListResponse[i].text});
   if(i===0){
     setProjectCode(projectListResponse[i].text);
     setSelectedFilterValue(projectListResponse[i].text);
   }
 }
 setProjectData(data);
}
 
  useEffect(() => {
    if(focus){
      checkLoginDetails()
    }
  }, [focus]);

  const checkAlreadyLoggedIn= async () =>{
    let isAlreadyLoggedIn : any =await AsyncStorage.getItem('isAlreadyLoggedIn');
    if(isAlreadyLoggedIn==='false'){
        setShowPopUp(true);
    }else{
        setShowPopUp(false);
    }
  };
  useEffect(() => {
    checkAlreadyLoggedIn()
  }, []);
  

  return (
    <View style={styles.home}>
      
    <ScrollView style={{ flex: 1 }}
      contentContainerStyle={{ height:windowHeight + 900 }}
      alwaysBounceVertical={false}>
    <View style={{ flex: 1,width:"96%",left:"2%" }}>
      <Image
        style={[(Platform.OS=='ios'?styles.iconIOS:styles.icon), styles.iconLayout2]}
        resizeMode="cover"
        source={require("../assets/3-1-1.png")}
      />
      <View style={styles.frameParent}>
        <Pressable
          style={styles.frame}
          onPress={() => navigation.navigate("SideMenu2")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/frame10.png")}
          />
        </Pressable>
        {/* <Pressable
              style={styles.frame1}
              onPress={() => navigation.navigate("Notifications")}>
              <Image
                style={[styles.icon1, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../assets/frame68.png")}
              />
        </Pressable> */}
        <Pressable
          style={[styles.frameGroup, styles.parentFlexBox]}
          onPress={() => navigation.navigate("Profile1")}
        >
          <View style={[styles.welcomeParent, styles.menuListFlexBox]}>
            <Text style={styles.welcome}>Welcome</Text>
            <View style={styles.assemAlMohammadiWrapper}>
              <Text style={[styles.assemAlMohammadi, styles.textTypo3]}>
                {logUserName}
              </Text>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse-167.png")}
          />
        </Pressable>
      </View>
      


      <View style={[styles.rectangleParent4, styles.groupChild28Layout]}>
        <View style={[styles.groupChild28, styles.groupChild28Layout]} />
        <View style={[styles.frameParent2, styles.framePosition]}>
          <View style={styles.rectangleParent7}>
            <Text style={[styles.unfinishedServices, styles.text5Layout]}>
                {projectData.find(item => item.value === projectCode)?.label}
            </Text>
            <Text style={[styles.text22, styles.textTypo1]}>( {sum} )</Text>
          </View>
          <Text numberOfLines={2} style={[styles.jeddahYachtClub2, styles.textTypo1]}>
                Unfinished services  
          </Text>
          
        </View>
        <Pressable onPress={showFilters}>
            <Image
              style={[styles.frameIcon8, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame2.png")}
            />
        </Pressable>
        
        <View style={[styles.frameContainer, styles.framePosition]}>
          <View style={styles.frameView}>
          {dept1Name!=''?<View style={styles.rectangleParent5}>
                            <View style={[styles.frameItem, styles.frameChildLayout]} />
                            <Text style={[styles.electricalWork, styles.workTypo]}>
                              {dept1Name} ({dept1Count})
                            </Text>
                          </View>:null}
            
            
            {dept2Name!=''?<View style={styles.rectangleParent6}>
                            <View style={[styles.frameInner, styles.frameChildLayout]} />
                            <Text style={[styles.janitorialWork, styles.workTypo]}>
                              {dept2Name} ({dept2Count})
                            </Text>
                          </View>:null}
          </View>
          <View style={styles.frameParent1}>
            {dept3Name!=''?<View style={styles.rectangleParent7}>
                              <View style={[styles.frameChild1, styles.frameChildLayout]} />
                              <Text style={[styles.janitorialWork, styles.workTypo]}>
                                {dept3Name} ({dept3Count})
                              </Text>
                            </View>:null}
            
            {dept4Name!=''?<View style={styles.rectangleParent8}>
                              <View style={[styles.frameChild2, styles.frameChildLayout]} />
                              <Text style={[styles.airConditioningWork, styles.workTypo]}>
                                {dept4Name} ({dept4Count})
                              </Text>
                            </View>:null}
          </View>
          {deptOtherName!=''?<View style={styles.rectangleParent9}>
                          <View style={[styles.frameChild3, styles.frameChildLayout]} />
                          <Text style={[styles.janitorialWork, styles.workTypo]}>{deptOtherName} ({deptOtherCount})</Text>
                        </View>:null}
          
        </View>

        <View style={[styles.vectorParent, styles.vectorIconPosition]}>
            {series.length>0 && (series.length===sliceColor.length)?<PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.6}
              />:null}
        </View>
        {/* <View style={[styles.vectorParent, styles.vectorIconPosition]}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector7.png")}
          />

          <View style={[styles.polygonParent2, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-14.png")}
            />
            <View style={styles.groupChild29} />
            <Text style={[styles.text18, styles.textTypo]}>{dept1Count}</Text>
          </View>

          <View
            style={[styles.polygonContainer, styles.polygonParentShadowBox]}
          >
            <Image
              style={[styles.polygonIcon, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-12.png")}
            />
            <View style={styles.groupChild29} />
            <Text style={[styles.text18, styles.textTypo]}>{dept2Count}</Text>
          </View>

          <View style={[styles.polygonGroup, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-11.png")}
            />
            <View style={styles.groupChild29} />
            <Text style={[styles.text18, styles.textTypo]}>{dept3Count}</Text>
          </View>

          <View style={[styles.polygonParent, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-1.png")}
            />
            <View style={styles.groupChild29} />
            <Text style={[styles.text17, styles.textTypo]}>{dept4Count}</Text>
          </View>
          
          
          <View style={[styles.polygonParent1, styles.polygonParentShadowBox]}>
            <Image
              style={[styles.polygonIcon, styles.vectorIconPosition]}
              resizeMode="cover"
              source={require("../assets/polygon-13.png")}
            />
            <View style={styles.groupChild29} />
            <Text style={[styles.text18, styles.textTypo]}>{deptOtherCount}</Text>
          </View>
          
        </View> */}
        
      </View>

      

      <View style={styles.homeChild} />
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildShadowBox1]} />

        <Text style={[styles.allServicesProvidedContainer, styles.allLayout]}>
          <Text
            style={styles.allServicesProvided}
          >{`All services provided since the beginning of the contract `}</Text>
          <Text style={styles.text4}>({ticketsum})</Text>
        </Text>
       

        <Text style={[styles.completed, styles.text5Layout]}>Completed</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]}>{completedCount}</Text>
          <View
            style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.groupBg]} />
              <View style={[styles.groupInner, styles.groupChildPosition2,{left:completedLeftPercentage,width: completedPercentage}]} />
            </View>
          </View>
          <Text style={[styles.text1, styles.textLayout]}>{completedPercentage}</Text>
        </View>

        <Text style={[styles.incomplete, styles.text5Layout]}>Incomplete</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]}>{inCompleteCount}</Text>
          <View
            style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.groupBg]} />
              <View style={[styles.groupInner, styles.groupChildPosition2,{left:inCompleteLeftPercentage ,width:inCompletePercentage }]} />
            </View>
          </View>
          <Text style={[styles.text1, styles.textLayout]}>{inCompletePercentage}</Text>
        </View>

        <Text style={[styles.Outofscope, styles.text5Layout]}>Out of scope</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]}>{outOfScopeCount}</Text>
          <View
            style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.groupBg]} />
              <View style={[styles.groupInner, styles.groupChildPosition2,{left: outOfScopeLeftPercentage,width: outOfScopePercentage}]} />
            </View>
          </View>
          <Text style={[styles.text1, styles.textLayout]}>{outOfScopePercentage}</Text>
        </View>

        <Text style={[styles.InTransit, styles.text5Layout]}>In transit</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]}>{inTransitCount}</Text>
          <View
            style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.groupBg]} />
              <View style={[styles.groupInner, styles.groupChildPosition2,{left: inTransitLeftPercentage,width: inTransitPercentage}]} />
            </View>
          </View>
          <Text style={[styles.text1, styles.textLayout]}>{inTransitPercentage}</Text>
        </View>

        <Text style={[styles.OnHold, styles.text5Layout]}>On Hold</Text>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textFlexBox]}>{onHoldCount}</Text>
          <View
            style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.groupBg]} />
              <View style={[styles.groupInner, styles.groupChildPosition2,{left: onHoldLeftPercentage,width: onHoldPercentage}]} />
            </View>
          </View>
          <Text style={[styles.text1, styles.textLayout]}>{onHoldPercentage}</Text>
        </View>
        
        {/* <Text style={[styles.incomplete, styles.text5Layout]}>Incomplete</Text>
        <View style={[styles.parent2, styles.parentFlexBox]}>
              <Text style={[styles.text, styles.textFlexBox]}>65</Text>
              <View
                   style={[styles.encapsulatedGroup, styles.encapsulatedGroupLayout]}>
             <View style={[styles.rectangleGroup, styles.groupPosition]}>
                <View style={[styles.groupItem, styles.groupBg]} />
                <View style={[styles.groupChild1, styles.groupChildPosition2]} />
              </View>
            </View>
            <Text style={[styles.text1, styles.textPosition]}>65%</Text>
        </View> */}
        
        <Image
          style={[styles.groupIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/groupHome1.png")}
        />
      </View>


      <Text style={[styles.recentRequests, styles.seeAllPosition]}>
        Recent requests
      </Text>
      <Pressable
            style={styles.seeAllPressable}
            onPress={() => navigation.navigate("Requests5")}
          >
             <Text style={[styles.seeAll, styles.allLayout]}>See all</Text>
          </Pressable>
      

      <View style={styles.groupParent}>
        
        
        
      {requestList.map((item, index) => (
        
        <View style={styles.groupViewLayout} key={index}>
          <View style={styles.groupChildShadowBox} />
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
              
              <Text style={[(Platform.OS=='ios'?styles.orderNumberIOS:styles.orderNumber), styles.textTypo1]}>
                Order number :
              </Text>

              <Text style={[styles.text5, styles.textTypo1]}>{item.ticketNumber}</Text>

          </View>

          <View style={{position: "absolute",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",width:"100%",left:"3%",height:20,top:50}}>

                <Text style={[styles.dateOfRequest, styles.text6Typo]}>
                  Date of request :
                </Text>
                <Text style={[styles.text6, styles.text6Typo]}>{format(item.joDate, 'dd/MM/yyyy')}</Text>


                <Text style={[styles.maintenanceType, styles.text6Typo]}>
                  Maintenance type :
                </Text>
                <Text
                  style={[styles.preventive, styles.text6Typo]}
                >{item.jobMaintenanceType}</Text>

          </View>
          
          <View style={styles.lineView} />
          
          <View style={styles.lineParent}>
            <View style={[item.isCompleted?styles.groupChild4 : styles.groupChild3, (Platform.OS=='ios'?styles.groupChildPosition1IOS:styles.groupChildPosition1)]} />
            <View style={[item.isCompleted?styles.groupChild4 : (item.isWorkInProgress?styles.groupChild4 : styles.groupChild3), (Platform.OS=='ios'?styles.groupChildPositionIOS:styles.groupChildPosition)]} />
            <Image
              style={[styles.ellipseIcon, styles.groupChildLayout]}
              resizeMode="cover"
              source={item.isCompleted?require("../assets/ellipse-195.png"):require("../assets/ellipse-1951.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
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
            style={[styles.mediumButton, styles.mediumPosition]}
            onPress={() => navigation.navigate("ViewTicket",{ticketId:item.id,})}
          >
            <Text style={[styles.text7, styles.text7Typo]}>
              Ticket Details
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame.png")}
            />
          </Pressable>
         
          {!item.isCompleted && <Pressable style={[styles.mediumButton1, styles.mediumPosition]}
               onPress={() =>deletePopup(item.ticketNumber)}>
            <Text style={[styles.deleteTicket, styles.text7Typo]}>
              Cancel Ticket
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/frame11.png")}
            />
          </Pressable>}
          {item.isCompleted && <Pressable style={[styles.feedbackButton, styles.mediumPosition]}
               onPress={() =>feedBackPopup(item.ticketNumber)}>
            <Text style={[styles.feedback, styles.text7Typo]}>
               feedback
            </Text>
            <Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              resizeMode="cover"
              source={require("../assets/framefeedback.png")}
            />
          </Pressable>}
          
        </View>
        ))}

      </View>
    </View>
  </ScrollView>
      
      <AfterLoginFooter currentRoute='Home'/>
       
      {isShowPopUp?
      <View style={{backgroundColor: Color.colorGray_400,
           width: "100%",
           height: windowHeight,
           position: "absolute",}} />:null}
      {isShowPopUp?<View style={[styles.loginWithFaceId, styles.homeItemPosition]} >
        <View style={[styles.faceId, styles.groupChildShadowBox1]}>
          <View style={[styles.attendanceSuccessful, styles.homeItemPosition]}>
            <Image
              style={{width:150,height:150,}}
              resizeMode="cover"
              source={require("../assets/36479ec6-798e-4205-9430-693c34fdb06b.gif")}
            />
            <View style={styles.successfulLoginParent}>
              <Text style={[styles.successfulLogin, styles.youCanNowTypo]}>
                Successful login
              </Text>
              <Text style={[styles.youCanNow, styles.youCanNowTypo]}>
                You can now view and control all statistics and requests in
                addition to... Possibility of requesting a new service
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.vector}
            onPress={hideMessage2 }
          >
            <Image
              style={[styles.icon2, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector8.png")}
            />
          </Pressable>
        </View>
        


      </View>
      : null
    }





{showDeleteReason?<View style={{backgroundColor: Color.colorGray_600,
                        width: "100%",
                        position: "absolute",
                        height: windowHeight,}} />:null}
        {showDeleteReason?<View style={[styles.rectangleParent2, styles.groupInnerPosition]}>
           <View style={[styles.groupInnerp, styles.groupInnerPosition]} />
            <Pressable
                style={styles.vectorp}
                onPress={hideMessage }
              >
                <Image
                          style={styles.vectorIconp}
                          contentFit="cover"
                          source={require("../assets/vector2.png")}
                        />
              </Pressable>
       
            <Text style={[styles.determineClosureReason, styles.closeTypo]}>
              Determine closure reason
            </Text>
        
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
              <View style={[styles.frameGroupp, styles.frameGroupPosition]}>
                <View style={styles.frameContainerp}>
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
                      style={styles.vectorIconp3}
                      resizeMode="cover"
                      source={require("../assets/vector9.png")}
                    />
                 </Pressable>
              </View>
              <View style={[styles.groupChild24, styles.groupPosition2]} />

              <Text style={[styles.status, styles.filterTypo]}>Status</Text>


              <View style={[styles.filterParent, styles.frameGroupPosition]}>

                      {renderData()}
                     
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
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: 86,
    position: "absolute",
  },
  seeAllPosition: {
    top: 520,
    fontFamily: FontFamily.dGBaysan,
  },
  allLayout: {
    fontSize: FontSize.size_xs,
    height: 24,
    lineHeight: 25,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout3: {
    height: "100%",
    width: "100%",
    left:0
  },
  parentFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  menuListFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textTypo3: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChildLayout1: {
    height: 165,
    width: "100%",
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  text5Layout: {
    height: 25,
    display: "flex",
    alignItems: "center",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  encapsulatedGroupLayout: {
    width: 190,
    overflow: "hidden",
  },
  groupPosition: {
    left: 0,
    width: 190,
    height: 8,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorHoneydew,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  groupChildPosition2: {
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    width: 32,
    fontWeight: "700",
  },
  textPosition: {
    top: 90,
    height: 20,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
  },
  text6Typo: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.dGBaysan,
  },
  mediumPosition: {
    top: 140,
    borderRadius: Border.br_3xs,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  text7Typo: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 25,
  },
  frameIconLayout: {
    width: 16,
    height: 16,
    overflow: "hidden",
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
  groupChildPosition: {
    left: "13%",
    width: 90,
    borderTopWidth: 1,
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition1IOS: {
    width: 100,
    borderTopWidth: 1,
    left: "52%",
    top: 5,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPositionIOS: {
    left: "12%",
    width: 100,
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
    width: 70,
    right: 99,
  },
  groupViewLayout: {
    height: 190,
    width: "100%",
    marginBottom:"5%"
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
  groupChild28Layout: {
    height: 180,
    width: "100%",
    position: "absolute",
  },
  framePosition: {
    left: "3%",
    position: "absolute",
  },
  frameChildLayout: {
    height: 15,
    borderRadius: Border.br_8xs,
    width: 15,
  },
  workTypo: {
    marginLeft: "5%",
    fontSize: FontSize.size_3xs,
    color: Color.black,
    fontWeight: "300",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
  },
  vectorIconPosition: {
    right: "3%",
    position: "absolute",
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
  textTypo: {
    lineHeight: 6,
    fontSize: FontSize.size_6xs_1,
    right: 7,
    top: 3,
    fontWeight: "600",
    display: "flex",
    color: Color.black,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  bottomNavPosition: {
    bottom: 0,
    width: "100%",
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
  homeItemPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  youCanNowTypo: {
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  icon: {
    top: 15,
    height: 31,
    left: "38%",
  },
  iconIOS: {
    top: 40,
    height: 31,
    left: "38%",
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
    height: 6,
    position: "absolute",
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
    left: 21,
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
    left: "1%"  ,
    width: "50%",
    height: 24,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 25,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  seeAllPressable:{
    width: "45%",
    left: "85%",
    top: 520,
    zIndex:1    
   
  },
  seeAll: {
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontFamily: FontFamily.dGBaysan,
  },
  frame1: {
    height: 24,
    width: 24,
    left:-40
  },
  icon1: {
    overflow: "hidden",
  },
  frame: {
    width: 28,
    height: 28,
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
    fontWeight: "300",
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
    marginLeft: "5%",
  },
  frameGroup: {
    alignItems: "center",
  },
  frameParent: {
    top: 65,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    position: "absolute",
  },
  homeChild: {
    top: 1440,
    width: "100%",
    height: 63,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    elevation: 5,
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    right: 0,
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
    height: 185,
    width: "100%",
  },
  completed: {
    top: 55,
    width: "25%",
    left: "2%",
    height: 25,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text: {
    height: 20,
    width: 20,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    color: Color.praimary,
    fontWeight: "700",
    lineHeight: 20,
  },
  groupItem: {
    left: 0,
    width: 190,
    height: 8,
    position: "absolute",
  },
  
  rectangleGroup: {
    top: 0,
  },
  encapsulatedGroup: {
    marginLeft: 6,
    height: 8,
  },
  text1: {
    lineHeight: 20,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    marginLeft: 6,
    height: 20,
  },
  parent: {
    top: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  parent2: {
    top: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width:"89%"
  },
  incomplete: {
    top: 75,
    width: "25%",
    left: "2%",
    height: 25,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  Outofscope: {
    top: 95,
    width: "25%",
    left: "2%",
    height: 25,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  InTransit: {
    top: 115,
    width: "25%",
    left: "2%",
    height: 25,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  OnHold: {
    top: 135,
    width: "25%",
    left: "2%",
    height: 25,
    color: Color.black,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  text2: {
    left: 90,
    width: "20%",
    display: "flex",
    alignItems: "flex-start",
    textAlign: "center",
    flexDirection: "row",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    color: Color.praimary,
    fontWeight: "700",
  },
  groupInner: {
    backgroundColor: Color.praimary,
    height: 8,
  },
  groupChild1: {
    left: "35%",
    width: "65%",
    backgroundColor: Color.praimary,
    height: 8,
  },
  encapsulatedGroup1: {
    left: 118,
    width: 190,
    overflow: "hidden",
  },
  text3: {
    width: 26,
    lineHeight: 12,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    right: "2%",
    fontWeight: "700",
    height: 20,
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
    width: "100%",
    top: 15,
    textAlign: "center",
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
    top: 320,
    position: "absolute",
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
    width: "100%",
    position: "absolute",
    right:0,
    left:0
  },
  text5: {
    width: "25%",
    fontWeight: "300",
    color: Color.praimary,
  },
  orderNumber: {
    width: "20%",
    color: Color.black,
    fontWeight: "700",
  },
  orderNumberIOS: {
    width: "22%",
    color: Color.black,
    fontWeight: "700",
  },
  maintenanceType: {
    width: "30%",
    color: Color.black,
    fontWeight: "700",
  },
  preventive: {
    width: "20%",
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
    fontWeight: "700",
  },
  text6: {
    width: "25%",
    fontWeight: "300",
    color: Color.praimary,
  },
  dateOfRequest: {
    width: "25%",
    color: Color.black,
    fontWeight: "700",
  },
  lineView: {
    top: 80,
    borderTopWidth: 0.5,
    width: "100%",
    height: 1,
    borderColor: Color.gray,
    borderStyle: "solid",
    position: "absolute",
  },
  text7: {
    color: Color.whait,
    textAlign: "right",
  },
  frameIcon: {
    marginLeft: 6,
  },
  mediumButton: {
    left: "5%",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_7xs_5,
    backgroundColor: Color.praimary,
  },
  groupChild3: {
    borderColor: Color.gray,
  },
  groupChild4: {
    borderColor: Color.colorMediumseagreen,
  },
  ellipseIcon: {
    left: "90%",
  },
  groupChild5: {
    left: "49%",
  },
  groupChild6: {
    left: "10%",
  },
  incomplete1: {
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
  completed1: {
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
  deleteTicket: {
    color: Color.colorRed_100,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  feedback: {
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    lineHeight: 25,
  },
  mediumButton1: {
    right: "5%",
    borderColor: Color.colorRed_100,
    borderWidth: 1,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    borderStyle: "solid",
  },
  feedbackButton: {
    right: "5%",
    borderColor: Color.praimary,
    borderWidth: 1,
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_7xs_5,
    paddingRight: Padding.p_sm,
    paddingBottom: Padding.p_7xs_5,
    borderStyle: "solid",
  },
  groupChild9: {
    borderColor: Color.gray,
  },
  groupChild10: {
    borderColor: Color.gray,
  },
  inProgress1: {
    width: "25%",
    left: "5%",
  },
  completed2: {
    width: 53,
    right: 0,
  },
  rectangleParent1: {
    marginTop: 24,
  },
  groupParent: {
    top: 560,
  },
  groupChild28: {
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
  },
  frameItem: {
    backgroundColor: Color.praimary,
  },
  electricalWork: {
  },
  rectangleParent5: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  frameInner: {
    backgroundColor: Color.colorGold,
  },
  janitorialWork: {
  },
  rectangleParent6: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  frameView: {
    flexDirection: "row",
  },
  frameChild1: {
    backgroundColor: Color.binary,
  },
  rectangleParent7: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  frameChild2: {
    backgroundColor: Color.ternary,
  },
  airConditioningWork: {
  },
  rectangleParent8: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  frameParent1: {
    marginTop: 15,
    flexDirection: "row",
  },
  frameChild3: {
    backgroundColor: Color.colorChocolate,
  },
  rectangleParent9: {
    marginTop: 15,
    alignItems: "flex-start",
    flexDirection: "row",
  },
  frameContainer: {
    top: 80,
  },
  vectorIcon: {
    top: 8,
    width: 76,
    height: 76,
  },
  polygonIcon: {
    top: 9,
    width: 5,
    height: 5,
  },
  groupChild29: {
    borderRadius: 1,
    width: 20,
    backgroundColor: Color.whait,
    right: 0,
    height: 11,
    top: 0,
    position: "absolute",
  },
  text17: {
    width: 8,
    height: 6,
  },
  polygonParent: {
    top: 22,
    right: 69,
  },
  text18: {
    width: 7,
    height: 5,
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
    top: 48,
    height: 85,
    width: "35%",
  },
  unfinishedServices: {
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 30,
    fontSize: FontSize.size_base,
  },
  text22: {
    textAlign: "left",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    lineHeight: 30,
    fontSize: FontSize.size_base,
    left:20
  },
  jeddahYachtClub2: {
    width: "70%",
    color: Color.black,
    marginTop: 4,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  frameParent2: {
    top: 15,
  },
  frameIcon8: {
    right: "5%",
    top: 20,
    position: "absolute",
  },
  rectangleParent4: {
    top: 130,
  },
  frameIcon9: {
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
    width: "100%",
    backgroundColor: Color.whait,
    justifyContent: "center",
    flexDirection: "row",
    right: 0,
    position: "absolute",
  },
  line: {
    bottom: 8,
    backgroundColor: Color.colorGray_200,
    width: "40%",
    borderRadius: Border.br_81xl,
    height: 5,
    position: "absolute",
    left:"33%"
  },
  iphoneIndicator: {
    width: "100%",
    height: 30,
    backgroundColor: Color.whait,
    right: 0,
  },
  bottomNav: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 90,
    width: "100%",
    overflow: "hidden",
  },
  homeItem: {
    marginTop: -406,
    backgroundColor: Color.colorGray_400,
    width: "100%",
    height: 812,
  },
  httpslottiefilescomanimatIcon: {
    width: 150,
    height: 150,
  },
  successfulLogin: {
    fontSize: FontSize.size_2xl,
    color: Color.colorMediumseagreen,
    width: 256,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    textTransform: "capitalize",
    height: 35,
  },
  youCanNow: {
    width: 292,
    height: 87,
    marginTop: 8,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_base,
  },
  successfulLoginParent: {
    marginTop: 16,
    alignItems: "center",
  },
  attendanceSuccessful: {
    marginTop: -138,
    marginLeft: -146.5,
    height: 276,
    justifyContent: "center",
    alignItems: "center",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.34%",
    top: "5.99%",
    right: "5.83%",
    bottom: "88.02%",
    width: "5.83%",
    height: "5.99%",
    position: "absolute",
  },
  faceId: {
    borderRadius: Border.br_mini,
    shadowRadius: 10,
    elevation: 10,
    height: 334,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    width: 343,
    overflow: "hidden",
  },
  loginWithFaceId: {
    marginTop: -167,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -171.5,
  },
  home: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    maxHeight:"100%",
  },
  homeIOS: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    maxHeight:"100%",
    top:'3%'
  },








  rectangleParent2: {
    top: "25%",
  },
groupInnerPosition: {
    height: 410,
    width: "96%",
    left:"2%",
    position: "absolute",
  },
groupInnerp: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.whait,
  },
  vectorp:{
    height: "5%",
    width: "6%",
    top: "6%",
    right: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    zIndex:1
  },
vectorIconp: {
    height: "100%",
    width: "100%",
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
  },
closeTypo: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
button: {
    top: 340,
    height: 48,
  },
buttonPosition: {
    width: "90%",
    left:"4%",
    position: "absolute",
  },
buttonChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.red,
    borderRadius: Border.br_3xs,
  },
buttonPositionp: {
    marginLeft: -155.5,
    width: 311,
    left: "50%",
    position: "absolute",
  },
close: {
    height: "50%",
    marginLeft: -144.5,
    top: "22.92%",
    color: Color.whait,
    textAlign: "center",
    width: 288,
    justifyContent: "center",
    lineHeight: 30,
    left: "50%",
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
  groupChildp: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 190,
    width: "90%",
    borderWidth: 0.5,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    borderColor: Color.gray,
    borderStyle: "solid",
    shadowRadius: 20,
  },
  groupIcon2: {
    height: "15%",
    width: "5%",
    top: "95%",
    left:"48%",
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
frameGroupp: {
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
frameContainerp: {
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
vectorIconp3: {
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
  height: 25,
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

export default Home1;
