import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, Switch, ScrollView, Dimensions, FlatList, Alert, Keyboard, Platform, DatePickerIOS, DatePickerAndroid, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { Dropdown } from 'react-native-element-dropdown';
import AfterLoginFooter from '../components/AfterLoginFooter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import RNFS from 'react-native-fs';
import { RadioButton } from 'react-native-paper';
import { tokens } from 'react-native-paper/lib/typescript/styles/themes/v3/tokens.js';
import { format } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateWorkOrder = ({route}) => {
  const {ticketNumber}=route.params;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const focus = useIsFocused(); 
  const [pagesActivityData, setPagesActivityData] = useState<any[]>([]);
  const [pageHieght, setPageHieght] = useState(1550);
  const [photoListHieght, setPhotoListHieght] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const windowHeight = Dimensions.get('screen').height;
  const windowWidth = Dimensions.get('screen').width;
  const [token, setLoginToken] = useState("");
  const [siteCode, setSiteCode] = useState("");
  const [tNumber, setTnumber] = useState("");
  const [isShowRelease, setIsShowRelease] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [nameOfTheSender, setNameOfTheSender] = useState("");
  const [location, setLocation] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [requestedDate, setRequestedDate] = useState((new Date()).toLocaleDateString());
  const [serviceType, setServiceType] = useState("");
  const [maintenanceType, setMaintenanceType] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [maintenanceStartDate, setMaintenanceStartDate] = useState((new Date()).toLocaleDateString());
  const [estimatedEndDate, setEstimatedEndDate] = useState((new Date()).toLocaleDateString());
  const [maintenanceStartDateP, setMaintenanceStartDateP] = useState(new Date());
  const [estimatedEndDateP, setEstimatedEndDateP] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [image1Data, setImage1Data] = useState("");
  const [image2Data, setImage2Data] = useState("");
  const [image3Data, setImage3Data] = useState("");
  const [activitiesCount, setActivitiesCount] = useState(0);
  const [superVisorData, setSuperVisorData] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const [showPicker, setShowPicker] = useState(false);
  const [showPickerForEndDate, setShowPickerForEndDate] = useState(false);
  
  
  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setMaintenanceStartDate(date.toLocaleDateString());
      setMaintenanceStartDateP(date);
      setShowPicker(false);
    } 
  };

  const showDatePickerAndroid =async () => {
     setShowPicker(true);
  };

  const handleDateChangeForEndDate = (event, date) => {
    if (date !== undefined) {
      setEstimatedEndDate(date.toLocaleDateString());
      setEstimatedEndDateP(date);
      setShowPickerForEndDate(false);
    } 
  };

  const showDatePickerAndroidForEndDate =async () => {
    setShowPickerForEndDate(true);
  };
  
  
  useEffect(() => {
    if(siteCode!=''){
      getSuperVisorData(siteCode);
    }
  }, [siteCode]);
  useEffect(() => {
    if(tNumber!=''){
      getWordOrderDetails(tNumber);
    }
  }, [tNumber]);
  const releaseWorkOrder = async () => {
    try {
        Keyboard.dismiss();
        WebServer.postDataWithToken('FomMobJobWorkorder/releaseWorkorderByTicketNumber',token,ticketNumber, releaseWorkOrderCallback);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  const releaseWorkOrderCallback = response => {
    if (response && response.message === undefined) {
       Alert.alert("error");
    }else{
        if(response.type===0 && response.message ==='Successful.'){
          navigation.pop();
          Alert.alert("Work order released.");
          navigation.navigate("WorkInProgress");
        }else{
           Alert.alert(response.message);
        }
    }
  };
  const submitRequest = async () => {
    try {
      if(pagesActivityData.length>0 && supervisorName!='' && location!=''){
        Keyboard.dismiss();
        const parts = maintenanceStartDate.split('/');
        const parts2 = estimatedEndDate.split('/');
        var param1={
            ticketNumber: ticketNumber,
            joSupervisor: supervisorName,
            workStartDate: `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`,
            expWorkEndDate: `${parts2[2]}-${parts2[1].padStart(2, '0')}-${parts2[0].padStart(2, '0')}`,
            woLocation: location,
            woNote: workDescription,
            activitiesList: pagesActivityData
          };
        WebServer.postDataWithToken('FomMobJobWorkorder/createUpdateWorkorder',token,param1, requestSubmitCallback);
        //console.log(JSON.stringify(param1));
      }else{
        Alert.alert("Please enter all fields");
      }
     
      
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const requestSubmitCallback = response => {
    if (response && response.message === undefined) {
       Alert.alert("error");
    }else{
        if(response.type===0 && response.message ==='Successful.'){
          var items = ['activityData'+ticketNumber];
          AsyncStorage.multiRemove(items);
          navigation.pop();
          Alert.alert("Work order created successfully.");
          navigation.navigate("FrontOffice");
        }else{
           Alert.alert(response.message);
        }
    }
  };
  
  const getSuperVisorData = async (siteCode:string) => {
    WebServer.getDataWithToken('FomMobRoles/getSelectSupervisorsForSite/'+siteCode ,token,'', getSuperVisorDataCallback);
  };
  const getSuperVisorDataCallback = supervisorDataResponse => {
    setSuperVisorData([]);
    var count = supervisorDataResponse.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:supervisorDataResponse[i].textTwo,value:supervisorDataResponse[i].text});
    }
    setSuperVisorData(data);
  };

  const getTicketData = async (jwttoken:string) => {
    WebServer.getDataWithToken('FomMobJobTicketHead/viewTicketByTicketNumber/'+ticketNumber,jwttoken,'', getTicketDataCallback);
  };
  const getTicketDataCallback = ticketDataResponse => {
    if (ticketDataResponse && ticketDataResponse.message === undefined) {
      setProjectName(ticketDataResponse.projectName);
      setNameOfTheSender(ticketDataResponse.requester);
      setServiceType(ticketDataResponse.serviceType);
      setMaintenanceType(ticketDataResponse.jobMaintenanceType);
      setWorkDescription(ticketDataResponse.joDescription);
      setImage1Data(ticketDataResponse.image1WithFullPath);
      setImage2Data(ticketDataResponse.image2WithFullPath);
      setImage3Data(ticketDataResponse.image3WithFullPath);
      var imageData=[];
      if(ticketDataResponse.image1WithFullPath!=undefined && ticketDataResponse.image1WithFullPath!=null
           && ticketDataResponse.image1WithFullPath!=''){
            imageData.push(ticketDataResponse.image1WithFullPath);
      }
      if(ticketDataResponse.image2WithFullPath!=undefined && ticketDataResponse.image2WithFullPath!=null
        && ticketDataResponse.image2WithFullPath!=''){
         imageData.push(ticketDataResponse.image2WithFullPath);
      }
      if(ticketDataResponse.image3WithFullPath!=undefined && ticketDataResponse.image3WithFullPath!=null
        && ticketDataResponse.image3WithFullPath!=''){
        imageData.push(ticketDataResponse.image3WithFullPath);
      }
      setSelectedImages(imageData);
      setActivitiesCount(0);
      if(imageData.length>0){
        setPageHieght(1550+120);
      }
      setSiteCode(ticketDataResponse.siteCode);
      setTnumber(ticketDataResponse.ticketNumber);
      setRequestedDate(format(ticketDataResponse.joDate as Date, 'dd/MM/yyyy'));
    }else{
        //Alert.alert(ticketDataResponse.message);
    }
  }
  
  const getWordOrderDetails = async (ticketNumber:string) => {
    WebServer.getDataWithToken('FomMobJobWorkorder/getWorkorderWithActivitiesByTicketNumber/'+ticketNumber,token,'', wordOrderDetailsCallback);
  };
  const wordOrderDetailsCallback = workOrderResponse => {
    if (workOrderResponse && workOrderResponse.message === undefined) {
      setProjectName(workOrderResponse.woHead.projectName);
      setNameOfTheSender(workOrderResponse.woHead.joBookedBy);
      setLocation(workOrderResponse.woHead.woLocation);
      setSupervisorName(workOrderResponse.woHead.joSupervisor);
      setRequestedDate(format(workOrderResponse.woHead.joDate as Date, 'dd/MM/yyyy'));
      setServiceType(workOrderResponse.woHead.serviceType);
      //setMaintenanceType(workOrderResponse.woHead.jobMaintenanceType);
      //setWorkDescription(workOrderResponse.woHead.joDescription);
      setMaintenanceStartDate(format(workOrderResponse.woHead.workStartDate as Date, 'dd/MM/yyyy'));
      setEstimatedEndDate(format(workOrderResponse.woHead.expWorkEndDate as Date, 'dd/MM/yyyy'));
      setMaintenanceStartDateP(workOrderResponse.woHead.workStartDate);
      setEstimatedEndDateP(workOrderResponse.woHead.expWorkEndDate);
      setNotes(workOrderResponse.woHead.woNote);
      setImage1Data(workOrderResponse.woHead.tcktImage1FullPath);
      setImage2Data(workOrderResponse.woHead.tcktImage2FullPath);
      setImage3Data(workOrderResponse.woHead.tcktImage3FullPath);
      setIsShowRelease(true);
      var imageData=[];
      if(workOrderResponse.woHead.tcktImage1FullPath!=undefined && workOrderResponse.woHead.tcktImage1FullPath!=null
           && workOrderResponse.woHead.tcktImage1FullPath!=''){
            imageData.push(workOrderResponse.woHead.tcktImage1FullPath);
      }
      if(workOrderResponse.woHead.tcktImage2FullPath!=undefined && workOrderResponse.woHead.tcktImage2FullPath!=null
        && workOrderResponse.woHead.tcktImage2FullPath!=''){
         imageData.push(workOrderResponse.woHead.tcktImage2FullPath);
      }
      if(workOrderResponse.woHead.tcktImage3FullPath!=undefined && workOrderResponse.woHead.tcktImage3FullPath!=null
        && workOrderResponse.woHead.tcktImage3FullPath!=''){
        imageData.push(workOrderResponse.woHead.tcktImage3FullPath);
      }
      setSelectedImages(imageData);
      if(imageData.length>0){
        setPageHieght(1650+120)
      }
      if(workOrderResponse && workOrderResponse.activitiesList.length>0){
        setPagesActivityData(workOrderResponse.activitiesList);
        setActivitiesCount(workOrderResponse.activitiesList.length);
      }      
    }
  }

  

  const checkLoginDetails = async () => {
    try {
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
          setPageHieght(1550);
          setLoginToken(userInfo.token);
          getTicketData(userInfo.token);
      }

      let activityDataListAsync : any =await AsyncStorage.getItem('activityData'+ticketNumber);
      var activityDataListInfo = JSON.parse(activityDataListAsync);
      if (activityDataListInfo !== null && activityDataListInfo !== undefined) {
         setPagesActivityData(activityDataListInfo);
      }

    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };

  useEffect(() => {
    checkLoginDetails();
  }, [focus]);
 
  return (
    <View style={styles.moreInformaion}>
      <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={styles.arrow21}
          onPress={() => navigation.navigate("Approved")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.serviceRequest, styles.arrow21Position]}>
          Work Order
        </Text>
      </View>






  <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:pageHieght  }}
            alwaysBounceVertical={false}>
      
      
      <View style={styles.frameParent}>
       
       <View style={styles.nameOfTheApplicantParent}>
          <Text style={[styles.nameOfThe, styles.requestFlexBox]}>
            Ticket Number
          </Text>
          <View style={[styles.rectangleParent, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View
              style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={ticketNumber} 
                  autoCapitalize={'none'}  style={styles.text1Clr}
                      placeholderTextColor="#000" editable = {false}/>
            </View>
          </View>
        </View>
        

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Project Name
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={projectName} 
                    autoCapitalize={'none'} style={styles.text1Clr}
                        placeholderTextColor="#000"
                        editable = {false}/>
            </View>
          </View>
        </View>

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Name Of The Sender
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={nameOfTheSender} 
                    autoCapitalize={'none'} style={styles.text1Clr}
                        placeholderTextColor="#000"
                        editable = {false}/>
            </View>
          </View>
        </View>

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
             Location
             <Text style={styles.text2}>*</Text>
          </Text>
          <TextInput value={location} onChangeText={(text) => setLocation(text)} 
                    autoCapitalize={'none'} style={[styles.text1Clr,styles.frameShadowBox]} placeholder='Type the exact location'
                        placeholderTextColor="#000" editable={true}/>
          {/* <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              
            </View>
          </View> */}
        </View>


        <View style={styles.filterProjectName}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>Supervisor Name</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <Dropdown
              activeColor='#fafdff'
              itemTextStyle={{color:'#030303'}}
              itemContainerStyle={{backgroundColor:'#fff'}}
              style={[styles.dropdown, isFocus]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={superVisorData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Supervisor Name' : '...'}
              searchPlaceholder="Search..."
              value={supervisorName}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setSupervisorName(item.value);
                setIsFocus(false);
              }}
            />
        </View>
        
        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Requested Date
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={requestedDate} 
                    autoCapitalize={'none'} style={styles.text1Clr}
                        placeholderTextColor="#000"
                        editable = {false}/>
            </View>
          </View>
        </View>

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Service Type
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={serviceType} 
                    autoCapitalize={'none'} style={styles.text1Clr}
                        placeholderTextColor="#000"
                        editable = {false}/>
            </View>
          </View>
        </View>

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Maintenance Type
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <View style={styles.frameShadowBox} />
            <View style={[styles.wrapper, styles.wrapperPosition]}>
              <TextInput value={maintenanceType} 
                    autoCapitalize={'none'} style={styles.text1Clr}
                        placeholderTextColor="#000"
                        editable = {false}/>
            </View>
          </View>
        </View>
        
        
        <View style={styles.problemOrRequestParent}>
          <Text
            style={[styles.problemOrRequestContainer, styles.requestFlexBox]}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>Work Description</Text>
            </Text>
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
              <View style={[styles.groupChild, styles.childGroupShadowBox]} />
              <TextInput
                  multiline
                  numberOfLines={4}
                  maxLength={300}
                  onChangeText={text => setWorkDescription(text)}
                  value={workDescription}
                  style={styles.pleaseTypo} editable={false}
                />
            </View>
          </View>
        </View>
        
        

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Maintenance Start Date
            <Text style={styles.text2}>*</Text>
          </Text>
          <TextInput value={maintenanceStartDate} 
                    autoCapitalize={'none'} style={[styles.text1Clr,styles.frameShadowBox]}
                        placeholderTextColor="#000" editable={false}/>
                {showPicker && (
                      <DateTimePicker
                        value={maintenanceStartDateP}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                        onChange={handleDateChange}
                      />
                    )}
              
                 <TouchableOpacity  onPress={showDatePickerAndroid} style={styles.androidButton}>
                    <Image
                            style={[styles.groupIconLayout,{right:20}]}
                            resizeMode="cover"
                            source={require("../assets/group5cal.png")}
                          />
                 </TouchableOpacity >
        </View>

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Estimated End Date
            <Text style={styles.text2}>*</Text>
          </Text>
          
          <TextInput value={estimatedEndDate} 
                    autoCapitalize={'none'} style={[styles.text1Clr,styles.frameShadowBox]}
                        placeholderTextColor="#000"
                        editable = {false}/>

                 {showPickerForEndDate && (
                      <DateTimePicker
                          value={estimatedEndDateP}
                          mode="date"
                          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                          onChange={handleDateChangeForEndDate}
                        />
                  )}
              
                 <TouchableOpacity onPress={showDatePickerAndroidForEndDate} style={styles.androidButton}>
                    <Image
                            style={[styles.groupIconLayout,{right:20}]}
                            resizeMode="cover"
                            source={require("../assets/group5cal.png")}
                          />
                 </TouchableOpacity>
        </View>

        <View style={styles.problemOrRequestParent}>
          <Text
            style={[styles.problemOrRequestContainer, styles.requestFlexBox]}
          >
            <Text style={styles.serviceTypeTxtContainer}>
              <Text
                style={styles.serviceType2}
              >Notes</Text>
            </Text>
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
              <View style={[styles.groupItem, styles.childGroupShadowBox]} />
              
              <TextInput
                  multiline
                  numberOfLines={4}
                  maxLength={300}
                  onChangeText={text => setNotes(text)}
                  value={notes}
                  style={styles.pleaseTypo}
                />
            </View>
          </View>
        </View>

        {selectedImages.length>0?
        <View style={styles.addPhotosParent}>
          <Text style={[styles.addPhotos, styles.requestFlexBox]}>
            Photos
          </Text>
        <ScrollView horizontal={true} style={{height:150,width:"100%"}}>
             <Image source={{ uri: image1Data }} style={{ width: 100, height: 100, marginRight:10 }} />
             <Image source={{ uri: image2Data }} style={{ width: 100, height: 100, marginRight:10 }} />
             <Image source={{ uri: image3Data }} style={{ width: 100, height: 100, marginRight:10 }} />
        </ScrollView>
            
         
        </View>:null}


        <View style={[styles.frameContainer,{top:(isShowRelease?pageHieght-380:pageHieght-280)}]}>
          <Image
            style={styles.frameIcon2}
            resizeMode="cover"
            source={require("../assets/frame27w.png")}
          />
          <Text
            style={[
              styles.registeredActivities2Container,
              styles.addActivityTypo,
            ]}
          >
            <Text style={styles.registeredActivities2Container1}>
              <Text
                style={styles.registeredActivities}
              >{`Registered activities `}</Text>
              <Text style={styles.text3}>{pagesActivityData.length}</Text>
            </Text>
          </Text>
        </View>
        
        {/* <View style={styles.moreInformaionChild} /> */}
        <Pressable
          style={[styles.button,{top:selectedImages.length>0?'5%':'10%'}]}
          onPress={submitRequest}>
          <Text style={[styles.text, styles.textTypo]}>Save Work Order</Text>
        </Pressable>

        {isShowRelease && (<Pressable
          style={[styles.button,{top:selectedImages.length>0?'10%':'15%'}]}
          onPress={releaseWorkOrder}>
          <Text style={[styles.text, styles.textTypo]}>Release Work Order</Text>
        </Pressable>)}

        <Pressable
          style={[styles.frameGroup, styles.frameGroupBorder,{top:pageHieght-150}]}
          onPress={() => navigation.navigate("Activities",{ticketNumber:ticketNumber,})}
        >
          <Image
            style={[styles.frameIcon1, styles.groupIconLayoutw]}
            resizeMode="cover"
            source={require("../assets/frame15workorder.png")}
          />
          <Text style={[styles.addActivity, styles.addActivityTypow]}>
            Add Activity
          </Text>
        </Pressable>

      </View>


      

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 55,
    borderColor: Color.colorLightsteelblue_100,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop:25,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color:'#030303'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  text: {
    color: Color.whait,
    width: "100%",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
  },
  button: {
    paddingVertical: Padding.p_sm,
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
    width: "100%",
    top:"10%"
  },
  textTypo: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 15,
    width: "100%",
  },
  requestFlexBox: {
    display: "flex",
    alignItems: "center",
    fontWeight:'700'
  },
  rectangleSpaceBlock: {
    width: "100%",
  },
  wrapperPosition: {
    top: 0,
    position: "absolute",
    left:0
  },
  text1Clr: {
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    fontSize:15
  },
  projectNameTypo: {
    left: "0%",
    width: "100%",
    height: "50%",
    top: "0%",
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  notchIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupLayout: {
    height: 143,
    width: "100%",
  },
  groupPosition: {
    top: 0,
    position: "absolute",
  },
  childGroupShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  pleaseTypo: {
    fontSize: 15,
    color: Color.black,
    fontFamily: FontFamily.dGBaysan,
    padding:"2%"
  },
  tapLayout: {
    width: "100%",
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
  moreInformaionChild: {
    right: 16,
    overflow: "hidden",
    height: 56,
    width: "100%",
    position: "absolute",
  },
  
  
  nameOfThe: {
    width: "100%",
    height: 20,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: FontFamily.dGBaysan,
  },
  frameShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.colorLightsteelblue_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_3xs,
    height: 56,
    width: "100%",
  },
  assemAlMohammadi: {
    width: "100%",
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.black,
    textAlign: "left",
    height: 16,
  },
  assemAlMohammadiWrapper: {
    left: 0,
  },
  rectangleParent: {
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    borderRadius: Border.br_3xs,
  },
  nameOfTheApplicantParent: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom:"3%"
  },
  mobileNumber: {
    width: "100%",
    height: 20,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: 15,
    fontFamily: FontFamily.dGBaysan,
  },
  text1: {
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    textAlign: "left",
  },
  wrapper: {
  },
  rectangleGroup: {
    backgroundColor: Color.whait,
    borderRadius: Border.br_3xs,
  },
  mobileNumberParent: {
    alignItems: "flex-end",
    width: "100%",
    marginBottom:"3%"
  },
  projectName: {
    color: Color.black,
  },
  filterProjectNameChild: {
    top: 26,
    borderColor: Color.gray,
    borderWidth: 0.5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    height: 56,
    width: "100%",
    position: "absolute",
  },
  filterProjectNameItem: {
    top: 47,
    left: 16,
    width: "100%",
    height: 14,
    position: "absolute",
  },
  filterProjectName: {
    height: 82,
    width: "100%",
    marginBottom:"3%"
  },
  filterProjectName1: {
    height: 60,
    width: "100%",
    marginBottom:"3%"
  },
  serviceType2: {
    color: Color.black,
    fontWeight:'700'
  },
  text2: {
    color: Color.colorRed_100,
  },
  serviceTypeTxtContainer: {
    width: "100%",
  },
  serviceTypeChild: {
    height: "68.29%",
    top: "31.71%",
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  otherServices: {
    color: Color.black,
    width: "100%",
    height: 16,
    textAlign: "left",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    fontWeight:'700'
  },
  instanceChild: {
    borderRadius: 26,
    bottom: "0%",
    right: "0%",
    left: "0%",
    position: "absolute",
    top: "0%",
    height: "100%",
  },
  instanceItem: {
    height: "76.33%",
    width: "34.59%",
    top: "11.67%",
    right: "60.12%",
    bottom: "12%",
    left: "5.29%",
    position: "absolute",
  },
  yes: {
    height: "46.67%",
    width: "33.23%",
    top: "26.67%",
    left: "55.89%",
    fontSize: FontSize.size_smi_4,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  rectangleContainer: {
    width: "100%",
    height: 30,
    top:20
  },
  otherServicesParent: {
    marginBottom:"3%",
    alignItems: "center",
    flexDirection: "row",
    height:40
  },
  problemOrRequestContainer: {
    width: "100%",
    height: 16,
    textAlign: "left",
    display: "flex",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  groupChild: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 143,
    width: "100%",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  groupView: {
    width: "100%",
  },
  encapsulatedGroup: {
    marginTop: 16,
    overflow: "hidden",
  },
  problemOrRequestParent: {
    marginBottom:"3%",
    justifyContent: "center",
  },
  groupItem: {
    right: 0,
    top: 0,
    position: "absolute",
    height: 143,
    width: "100%",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    borderColor: Color.colorLightsteelblue_100,
    shadowRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
  },
  pleaseWriteA: {
    lineHeight: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  addPhotos: {
    width: "100%",
    height: 25,
    textAlign: "left",
    display: "flex",
    color: Color.black,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
  },
  frameInner: {
    height: 110,
  },
  addPhotosParent: {
    marginBottom:"3%"
  },
  frameParent: {
    top: 70,
    height: 700,
    width:"94%",
    left:"3%",
    position: "absolute",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  home: {
    lineHeight: 16,
    textAlign: "right",
    marginTop: 6,
    color: Color.colorLightsteelblue_100,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dGBaysan,
  },
  menu1: {
    alignItems: "center",
    flex: 1,
  },
  menu5: {
    marginLeft: 16,
    alignItems: "center",
    flex: 1,
  },
  container: {
    borderColor: Color.whait,
    borderWidth: 4,
    justifyContent: "flex-end",
    padding: Padding.p_sm,
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    flexDirection: "row",
    backgroundColor: Color.praimary,
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
    backgroundColor: Color.whait,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
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
    width: "100%",
    right: 0,
    height: 30,
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
    maxHeight: "100%",
    maxWidth: "100%",
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
    top: 12,
    left: 21,
    width: 54,
    height: 21,
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
  serviceRequest: {
    fontSize: 20,
    width: "100%",
    top: 15,
    color: Color.praimary,
    height: 25,
    textAlign: "center",
    lineHeight: 25,
    zIndex:1
  },
  tapPosition: {
    height: 50,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex:1
  },
  moreInformaion: {
    backgroundColor: Color.colorGray_100,
    width: "100%",
    flex: 1,
  },
  loginWithFaceId: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeItemPosition: {
    top: "30%",
    position: "absolute",
    zIndex:2
  },
  faceId: {
    borderRadius: Border.br_mini,
    shadowRadius: 10,
    elevation: 10,
    height: 400,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    overflow: "hidden",
  },
  groupChildShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
  },
  attendanceSuccessful: {
    height: 100,
    justifyContent: "center",
    width:"100%",
  },
  successfulLoginParent: {
    marginTop: 16,
    alignItems: "center",
  },
  successfulLogin: {
    fontSize: FontSize.size_2xl,
    color: Color.colorMediumseagreen,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    textTransform: "capitalize",
    height: 70,
  },
  youCanNowTypo: {
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  youCanNow: {
    width: 292,
    height: 100,
    marginTop: 8,
    color: Color.colorLightsteelblue_100,
    fontSize: FontSize.size_base,
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
  icon2: {
    height: 15,
    width: 15,
  },
  iconLayout3: {
    maxHeight: 15,
    maxWidth: 15,
    overflow: "hidden",
  },


  filter1: {
    width: "35%",
    textAlign:'left',
    display: "flex",
    alignItems: "flex-start",
    position: "absolute",
    height:40
  },
  allRequests: {
    width: "70%",
    top:25,
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    textAlign:'right',
    fontWeight: "600",
    color: Color.praimary,
  },
  requestTypo: {
    textTransform: "capitalize",
    fontFamily: FontFamily.dGBaysan,
    marginTop:"4%",
  },
  filter2: {
    width: "35%",
    textAlign:'left',
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
    height:40,
    left:"10%"
  },
  completedRequest: {
    width: "70%",
    top:25,
    left:"55%",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    textAlign:'right',
    fontWeight: "600",
    color: Color.praimary,
  },



  frameContainer: {
    left: 2,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
frameIcon2: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
registeredActivities2Container: {
    fontWeight: "600",
    width: "100%",
    fontSize: FontSize.size_xs,
    marginLeft: 8,
    height: 25,
    display: "flex",
    textAlign: "left",
    lineHeight: 25,
    alignItems: "center",
  },
addActivityTypo: {
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
registeredActivities2Container1: {
    width: "100%",
  },
registeredActivities: {
    color: Color.praimary,
  },
text3: {
    color: Color.red,
  },


groupIconLayout: {
    width: 20,
    height: 20,
  },
  androidButton:{
    position:'absolute',
    zIndex:1,
    top:"50%",
  },


  frameGroup: {
    borderColor: Color.praimary,
    paddingHorizontal: 100,
    paddingVertical: 15,
    left: "1%",
    flexDirection: "row",
    alignItems: "center",
    width:"98%"
  },
frameGroupBorder: {
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
frameIcon1: {
    overflow: "hidden",
  },
groupIconLayoutw: {
    width: 14,
    height: 14,
  },
addActivity: {
    width: "100%",
    textAlign: "center",
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.praimary,
  },
addActivityTypow: {
    marginLeft: 8,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },

});

export default CreateWorkOrder;
