import React, {FC, ReactElement, useEffect, useState, Component, useCallback} from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, Switch, ScrollView, Dimensions, FlatList, Alert, Keyboard, Modal,PermissionsAndroid, Platform, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { Dropdown } from 'react-native-element-dropdown';
import AfterLoginFooter from '../components/AfterLoginFooter';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WebServer from "../Utils/WebServer";
import CONSTANTS from "../Config/Constants.js";
import AlertMessage from "../Alert/index";
import { RadioButton } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import base64 from 'base-64';
import DateTimePicker from '@react-native-community/datetimepicker';


export type SchedulesType = {
  onClose?: () => void;
};


const ListItem = ({ item }) => {
  // State to manage modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [frameContainer13Visible, setFrameContainer13Visible] = useState(false);

  const openFrameContainer13 = useCallback(() => {
    setFrameContainer13Visible(true);
  }, []);
  return (
    <View style={styles.rectangleLayout}>
    <View style={styles.groupItemShadowBox} />
    <Pressable
      style={[styles.framePressable, styles.groupInnerPosition]}
      onPress={openFrameContainer13}
    >
      <Image
        style={styles.frameIcon1}
        resizeMode="cover"
        source={require("../assets/notesicon.png")}
      />
      <View style={[styles.ellipseParent, styles.groupInnerLayout]}>
        <Text style={[styles.text10, styles.text10Clr]}>0</Text>
      </View>
    </Pressable>
    <View style={styles.frameView}>
      <View style={styles.frameParent1}>
        <View style={styles.frameParent1}>
          <Text style={[styles.contractId, styles.timeLayout]}>
            Contract id :
          </Text>
          <Text style={[styles.text11, styles.textTypo]}>{item.contractId}</Text>
        </View>
        <View style={styles.transcationNumberParent}>
          <Text style={[styles.transcationNumber, styles.timeLayout]}>
            Transcation Number :
          </Text>
          <Text style={[styles.text12, styles.textTypo]}>{item.tranNumber}</Text>
        </View>
      </View>
      <View style={styles.frameParent2}>
        <View style={styles.frameParent1}>
          <Text style={[styles.department, styles.timeLayout]}>
            Department :
          </Text>
          <Text style={[styles.caprenty, styles.textTypo]}>
            {item.department}
          </Text>
        </View>
        <View style={styles.serviceTypeParent}>
          <Text style={[styles.serviceType, styles.timeLayout]}>
            Site Name :
          </Text>
          <Text
            style={[styles.preventive, styles.textTypo]}
          >{item.siteName}</Text>
        </View>
      </View>
      <View style={styles.frameParent2}>
        <View style={styles.frameParent1}>
          <Text style={[styles.time, styles.timeLayout]}>Time :</Text>
          <Text style={[styles.text13, styles.textTypo]}>{item.time}</Text>
        </View>
        <View style={styles.scheduleDateParent}>
          <Text style={[styles.scheduleDate, styles.menu31Layout]}>
            Schedule Date :
          </Text>
          <Text style={[styles.text14, styles.textTypo]}>
          {format(item.schDate, 'dd/MM/yyyy')}
          </Text>
        </View>
      </View>
    </View>
  </View>
          
  );
};

const Schedules  = ({ onClose }: SchedulesType) => {
    const [frameContainer24Visible, setFrameContainer24Visible] = useState(false);
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [selected, setSelected] = useState('');
    const [requestList, setRequestList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [isFirst, setIsFirst] = useState(true);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const windowHeight = Dimensions.get('screen').height;
    const [pageHeight, setPageHeight] = useState(windowHeight);
    const [loginType, setLoginType] = useState("");
    const [loginRole, setLoginRole] = useState("");
    const [token, setLoginToken] = useState("");
    const [currentDateString, setCurrentDateString] = useState("");
    const [currentWeekString, setCurrentWeekString] = useState("");
    const [isShowFilter, setIsShowFilter] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [customerContractData, setCustomerContractDataData] = useState([]);
    const [contractCode, setContractCode] = useState("");

    const [currentRequestList, setCurrentRequestList] = useState<any[]>([]);
    const [markedDates, setMarkedDates] = useState<{[key: string]: object }>({});
    const [markedTotalDates, setMarkedTotalDates] = useState<{[key: string]: object }>({});
    
    let todayDate = new Date();
    todayDate.setHours(0);
    todayDate.setMinutes(0);
    todayDate.setSeconds(0);
    todayDate.setMilliseconds(0);
    const [filterStartDate, setFilterStartDate] = useState(todayDate.toLocaleDateString());
    const [filterEndDate, setFilterEndDate] = useState(todayDate.toLocaleDateString());
    const [filterStartDateP, setFilterStartDateP] = useState(todayDate);
    const [filterEndDateP, setFilterEndDateP] = useState(todayDate);

    const [showPicker, setShowPicker] = useState(false);
    const [showPickerForEndDate, setShowPickerForEndDate] = useState(false);
    
    
    const getCustomerContractList = async (jwttoken:string) => {
      WebServer.getDataWithToken('FomMobCutomerSiteContract/getSelectAllContractList',jwttoken,'', getCustomerContractListCallback);
   };
   const getCustomerContractListCallback = response => {
     var count = response.length;
     var data=[];
     for (var i = 0; i < count; ++i) {
       data.push({label:response[i].textTwo,value:response[i].text});
     }
     setCustomerContractDataData(data);
   }
    const handleDateChange = (event, date) => {
      if (date !== undefined) {
        setShowPicker(false);
        setFilterStartDate(date.toLocaleDateString());
        setFilterStartDateP(date);
        
      } 
    };
  
    const showDatePickerAndroid =async () => {
       setShowPicker(true);
    };
  
    const handleDateChangeForEndDate = (event, date) => {
      if (date !== undefined) {
        setShowPickerForEndDate(false);
        setFilterEndDate(date.toLocaleDateString());
        setFilterEndDateP(date);
      } 
    };
  
    const showDatePickerAndroidForEndDate =async () => {
      setShowPickerForEndDate(true);
    };
 
    const showFliter= async () => {
      setIsShowFilter(true);
    }
    const hideMessage=async () =>{
      setIsShowFilter(false);
   };
   const searchFilterData= async () => {
          const selectedDate= filterStartDateP;
          const weekday = format(selectedDate, 'EEEE'); // Full weekday name
          setCurrentWeekString(weekday);
          const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }).format(selectedDate);
          setCurrentDateString(formattedDate);
       console.log('start date '+format(filterStartDateP, 'dd/MM/yyyy'))
       console.log('end date '+format(filterEndDateP, 'dd/MM/yyyy'))
        
        const filteredNewData = requestList.filter(item => new Date(item.schDate)>=filterStartDateP
                                                      && new Date(item.schDate)<=filterEndDateP
                                                    && (item.contractId==contractCode || contractCode==''));
                                                   
        if(filteredNewData.length<2)
        {
            setPageHeight(windowHeight);
        }else{
            setPageHeight(260+(filteredNewData.length*300));
        }
        setCurrentRequestList(filteredNewData);
        setRequestList(filteredNewData);
        setIsShowFilter(false);
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
            getCustomerContractList(userInfo.token);
        }
      } catch (error) {
        console.error('AsyncStorage Error:', error);
      }
  };

  useEffect(() => {
    console.log('page changed. isFirst is :  '+ isFirst);
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
    fetchData();
  }, [page]);

 useEffect(() => {
    const uniqueDates = Array.from(new Set(requestList));
    let markedData: { [key: string]: object } = {};
    let markedTotalData: { [key: string]: object } = {};
    for(var i=0;i<uniqueDates.length;i++){
      //markedData[format(uniqueDates[i].schDate, 'yyyy-MM-dd')] = {selected: true, marked: true, selectedColor: Color.praimary}
      markedData[format(uniqueDates[i].schDate, 'yyyy-MM-dd')] = {marked: true,};
      markedTotalData[format(uniqueDates[i].schDate, 'yyyy-MM-dd')] = {marked: true,};
    }
    setMarkedDates(markedData);
    const date =  filterStartDateP;
    getCurrentData(date);
    markedTotalData[format(date, 'yyyy-MM-dd')] = {selected: true, marked: true, selectedColor: Color.praimary};
    setMarkedTotalDates(markedTotalData);

}, [requestList]);

const changeCurrentDate= async (selectedDate:Date) =>{
   const uniqueDates = Array.from(new Set(requestList));
    let markedData: { [key: string]: object } = {};
    let markedTotalData: { [key: string]: object } = {};
    for(var i=0;i<uniqueDates.length;i++){
      //markedData[format(uniqueDates[i].schDate, 'yyyy-MM-dd')] = {selected: true, marked: true, selectedColor: Color.praimary}
      markedData[format(uniqueDates[i].schDate, 'yyyy-MM-dd')] = {marked: true,};
      markedTotalData[format(uniqueDates[i].schDate, 'yyyy-MM-dd')] = {marked: true,};
    }
    setMarkedDates(markedData);
    getCurrentData(selectedDate);
    markedTotalData[format(selectedDate, 'yyyy-MM-dd')] = {selected: true, marked: true, selectedColor: Color.praimary};
    setMarkedTotalDates(markedTotalData);
}

const getCurrentData = async (selectedDate:Date) => {
  const weekday = format(selectedDate, 'EEEE'); // Full weekday name
    setCurrentWeekString(weekday);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(selectedDate);
    setCurrentDateString(formattedDate);
  const filteredNewData = requestList.filter((item) => format(item.schDate, 'dd/MM/yyyy')===format(selectedDate, 'dd/MM/yyyy'));
  if(filteredNewData.length<2)
  {
      setPageHeight(windowHeight);
  }else{
      setPageHeight(260+(filteredNewData.length*300));
  }
  setCurrentRequestList(filteredNewData);
};
  const getRequestList = async (jwttoken:string) => {
    setLoading(true);
    WebServer.getDataWithToken('FomMobCutomerSiteContract/GetAllSchedulingList',jwttoken,'', requestListCallback);
  };
  const requestListCallback = response => {
    if(response!=null && response!=undefined && response.length>0)
    {
       const uniqueIds = new Set(requestList.map((item) => item.id));
       const filteredNewData = response.filter((item) => !uniqueIds.has(item.id));
      if(page===0){
        setRequestList(response);
      }else{
        setRequestList(old => [...old, ...filteredNewData]);
      }      
    }
    //setTotalPages(response.totalPages);
    //setTotalCount(response.totalCount);
    setLoading(false);
  }
  
  const exportDataToExcel = () => {
    // const header = ["ContractId", "TransactionNumber", "Department","SiteName","CustomerName","ScheduleDate","Time"];

    let sample_data_to_export: Array<any>=[];
    for(var i=0;i<currentRequestList.length;i++){
      sample_data_to_export.push({ContractId: currentRequestList[i].contractId, TransactionNumber: currentRequestList[i].tranNumber,Department:currentRequestList[i].department ,SiteName: currentRequestList[i].siteName, CustomerName: currentRequestList[i].customerName,ScheduleDate:format(currentRequestList[i].schDate, 'yyyy-MM-dd') ,Time:currentRequestList[i].time});
    }


    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(sample_data_to_export)  ;  
    XLSX.utils.book_append_sheet(wb,ws,"Schedules");
    const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});
      
    // Write generated excel to Storage
    let filePath=RNFS.DocumentDirectoryPath + '/ProfmSchedulesData'+format(new Date(), 'yyyy-MM-ddHHmmss')+'.xlsx';
    RNFS.writeFile(filePath, wbout, 'ascii').then((r)=>{
        const shareOptions = {
          title: 'Open File',
          url: `file://${filePath}`, // Specify the file path with the 'file://' prefix
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel MIME type
          saveToFiles:true
        };
        Share.open(shareOptions).then((r)=>{
            console.log('Success');
        }).catch((e)=>{
            console.log('Error', e);
        });
    }).catch((e)=>{
      console.log('Error', e); 
    });

  }
  const exportData= async () => {
    

    if (Platform.OS === 'android') {
      try {
        const sdkVersion = Platform.Version;
        if (sdkVersion >= 33) { // Android 13 and later
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO
          ]);
  
          const grantedPermissions = Object.values(granted).every(
            (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
          );
  
          if (grantedPermissions) {
            console.log('Storage permissions granted');
            exportDataToExcel();
            return true;
          } else {
            console.log('Storage permissions denied');
            return false;
          }
        } else if (sdkVersion >= 30) { // Android 11 and 12
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          ]);
  
          const grantedPermissions = Object.values(granted).every(
            (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
          );
  
          if (grantedPermissions) {
            console.log('Storage permissions granted');
            return true;
          } else {
            console.log('Storage permissions denied');
            return false;
          }
        } else { // Android 10 and below
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'This app needs access to your storage to save PDFs',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
  
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Storage permission granted');
            return true;
          } else {
            console.log('Storage permission denied');
            return false;
          }
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };
  const renderData = () => {
    return currentRequestList.map((item:any) => (
      <ListItem key={item.id} item={item} />
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
  
    return (
      <>
        <View style={styles.schedules}>
           
           {/* <View style={styles.groupPosition}>
             <View style={[styles.groupChild2, styles.groupPosition]} />
                <Pressable
                style={[styles.arrow21, styles.arrow21Position]}
                onPress={() => navigation.navigate("Home1")}
                >
                <Image
                    style={styles.icon}
                    resizeMode="cover"
                    source={require("../assets/arrow-2-1.png")}
                />
                </Pressable>

                <Text style={[styles.schedules2, styles.arrow21Position]}>
                Schedules
                </Text>
                <Pressable
                  style={[styles.frameIcon7,styles.arrow21Position]}
                  onPress={showFliter}>
                  <Image
                      style={styles.filterIcon7}
                      resizeMode="cover"
                      source={require("../assets/filter40.png")}/>
                </Pressable>
                
          </View> */}
          
          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ height:pageHeight  }}
            alwaysBounceVertical={false}>
                  <View style={styles.frameParent}>
                      <View style={styles.component6Parent}>
                        <View style={styles.component6}>
                          <View style={styles.component6Child} />

                          <Calendar
                                  current={currentDateString}
                                  // Customize the appearance of the calendar
                                  theme={{
                                    backgroundColor: '#ffffff',
                                    calendarBackground: '#ffffff',
                                    textSectionTitleColor: '#b6c1cd',
                                    selectedDayBackgroundColor: '#00adf5',
                                    selectedDayTextColor: '#ffffff',
                                    todayTextColor: '#00adf5',
                                    dayTextColor: '#2d4150',
                                    textDisabledColor: '#d9e'
                                  }}
                                  // Callback that gets called when the user selects a day
                                  onDayPress={day => {
                                    changeCurrentDate(new Date(day.dateString));
                                  }}
                                  // Mark specific dates as marked
                                  markedDates={markedTotalDates}
                              />

                        </View>
                        <View style={styles.frameContainer}>
                          <View>
                            <Text style={[styles.aug012024, styles.sundayFlexBox]}>
                              {currentDateString}
                            </Text>
                            <Text style={[styles.sunday, styles.sundayFlexBox]}>
                              {currentWeekString}
                            </Text>
                          </View>
                          <Pressable
                            style={styles.exportExcelWrapper}
                            onPress={exportData}
                          >
                             <Text style={styles.exportExcel}>export Excel</Text>
                          </Pressable>
                        </View>
                      </View>
                      <View style={styles.groupParent}>
                            {renderData()}
                            {renderFooter()}
                      </View>
                    </View>
          </ScrollView>

          <AfterLoginFooter currentRoute='Schedules'/>
        </View> 


        {isShowFilter?<View style={{backgroundColor: Color.colorGray_600,
                        width: "100%",
                        position: "absolute",zIndex:1,
                        height: windowHeight}} />:null}
        {isShowFilter?<View style={[styles.rectangleParentS, styles.groupInnerPosition5]}>
              <View style={[styles.groupInnerp, styles.groupInnerPosition5]} />
              <Text style={[styles.determineClosureReason, styles.closeTypo]}>
                   Filter
                </Text>
                <Pressable
                    style={styles.vector}
                    onPress={hideMessage }
                  >
                    <Image
                              style={styles.vectorIconS}
                              contentFit="cover"
                              source={require("../assets/vector2.png")}
                            />
                  </Pressable>
            
              <View style={[styles.lineViewp, styles.viewGroupPosition]} />
              <View style={[styles.reasonForClosure, styles.reasonForClosureStyle]}>
                <View style={styles.frameChild}>
                     
                        <View style={[styles.startDate, styles.datePosition]}>
                          <Text style={[styles.startDate1, styles.dateTypo]}>Start Date</Text>
                          <View style={styles.innerShadowBoxSDate}>
                            <View style={styles.stickynoteParent}>
                             
                                {showPicker && (
                                        <DateTimePicker
                                          value={filterStartDateP}
                                          mode="date"
                                          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                                          onChange={handleDateChange}
                                        />
                                      )}
                                
                                  <TouchableOpacity  onPress={showDatePickerAndroid}>
                                      <Image
                                                      style={styles.stickynoteIcon}
                                                      resizeMode="cover"
                                                      source={require("../assets/calendar.png")}
                                                    />
                                  </TouchableOpacity >

                              <TextInput value={filterStartDate} 
                                autoCapitalize={'none'} style={styles.startDate2}
                                    placeholderTextColor="#000" editable={false}/>
                            </View>
                          </View>
                        </View>
                        <View style={[styles.endDate1, styles.datePosition]}>
                          <Text style={[styles.endDate, styles.dateTypo]}>End Date</Text>
                          <View style={[styles.endDate1Inner, styles.innerShadowBoxSDate]}>
                            <View style={styles.calendarGroup}>
                              
                              {showPickerForEndDate && (
                                    <DateTimePicker
                                        value={filterEndDateP}
                                        mode="date"
                                        display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
                                        onChange={handleDateChangeForEndDate}
                                      />
                                )}
                            
                              <TouchableOpacity onPress={showDatePickerAndroidForEndDate}>
                                        <Image
                                              style={styles.stickynoteIcon}
                                              resizeMode="cover"
                                              source={require("../assets/calendar.png")}
                                            />
                              </TouchableOpacity>

                               <TextInput value={filterEndDate} 
                                  autoCapitalize={'none'} style={styles.startDate2}
                                      placeholderTextColor="#000"
                                      editable = {false}/>
                              {/* <Text style={[styles.chooseCustomerContract, styles.text10Clr]}>
                                <Text style={styles.enter}>Enter</Text>
                                <Text style={styles.startDate2}> END Date</Text>
                              </Text> */}
                            </View>
                          </View>
                        </View>

                        <View style={styles.customerContractParent}>
                          <Text style={[styles.customerContract, styles.dateTypo]}>
                            Customer Contract
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
                              data={customerContractData}
                              search
                              maxHeight={200}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select Contract' : '...'}
                              searchPlaceholder="Search..."
                              value={contractCode}
                              onFocus={() => setIsFocus(true)}
                              onBlur={() => setIsFocus(false)}
                              onChange={item => {
                                setContractCode(item.value);
                                setIsFocus(false);
                              }}
                            />
                          
                        </View>


                
                </View>
              </View>
              <Pressable
                  style={[styles.button5, styles.buttonPositionS]}
                  onPress={searchFilterData}>
                  <View style={[styles.buttonChildForComplete, styles.buttonPositionS]} />
                  <Text style={[styles.close, styles.closeTypoS]}>Search</Text>
                </Pressable>

          </View>:null}




      </>
    );
  };
  
  const styles = StyleSheet.create({
    frameGroupPosition: {
      left: "4.27%",
      right: "4.27%",
      width: "91.47%",
      position: "absolute",
    },
    augustTypo: {
      color: Color.black,
      fontSize: FontSize.size_sm,
      fontWeight: "700",
    },
    vectorIconLayout: {
      width: 9,
      height: 15,
    },
    parentPosition: {
      width: "7%",
      bottom: "0%",
      top: "0%",
      height: "100%",
      position: "absolute",
    },
    suTypo: {
      opacity: 0.5,
      letterSpacing: 0.1,
      textAlign: "center",
      color: Color.colorBlack,
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: "600",
      fontSize: FontSize.size_sm,
    },
    text3Typo: {
      color: Color.whait,
      fontSize: FontSize.size_base,
      textAlign: "center",
    },
    sundayFlexBox: {
      display: "flex",
      alignItems: "center",
    },
    groupInnerPosition: {
      top: 0,
      position: "absolute",
    },
    groupInnerLayout: {
      height: 15,
      width: 15,
    },
    text10Clr: {
      color: Color.gray,
      fontFamily: FontFamily.dGBaysan,
    },
    timeLayout: {
      height: 25,
      lineHeight: 25,
      display: "flex",
      textAlign: "left",
      fontFamily: FontFamily.dGBaysan,
    },
    textTypo: {
      color: Color.praimary,
      fontSize: FontSize.size_3xs,
      height: 25,
      lineHeight: 25,
      display: "flex",
      textAlign: "left",
      fontFamily: FontFamily.dGBaysan,
    },
    menu31Layout: {
      width: 90,
      alignItems: "center",
    },
    rectangleLayout: {
      height: 125,
      width: "100%",
      marginBottom:15
    },
    homeTypo: {
      marginTop: 6,
      lineHeight: 16,
      fontSize: FontSize.size_xs,
      fontFamily: FontFamily.dGBaysan,
      textAlign: "right",
    },
    menuFlexBox: {
      flex: 1,
      alignItems: "center",
    },
    groupPosition: {
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
      top: "30%",
      height: 25,
      position: "absolute",
      zIndex:2
    },
    frameParent9Position: {
      top: "50%",
      left: "50%",
      position: "absolute",
    },
    schedulesTypo: {
      color: Color.praimary,
      textTransform: "capitalize",
      fontWeight: "700",
    },
    buttonPosition: {
      width: 311,
      marginLeft: -155.5,
      left: "50%",
      position: "absolute",
    },
    dateTypo: {
      color: Color.colorDimgray_200,
      height: 25,
      display: "flex",
      textAlign: "left",
      textTransform: "capitalize",
      fontFamily: FontFamily.dGBaysan,
      fontSize: FontSize.size_sm,
      alignItems: "center",
    },
    datePosition: {
      top: 0,
      position: "absolute",
      width:"40%",
    },
    innerShadowBoxSDate: {
      paddingVertical: 0,
      paddingHorizontal: 10,
      elevation: 10,
      shadowRadius: 10,
      borderWidth: 0.5,
      borderColor: Color.gray,
      borderStyle: "solid",
      borderRadius: Border.br_3xs,
      shadowColor: "rgba(0, 0, 0, 0.05)",
      marginTop: 16,
      overflow: "hidden",
      backgroundColor: Color.whait,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
    innerShadowBox: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      elevation: 10,
      shadowRadius: 10,
      borderWidth: 0.5,
      borderColor: Color.gray,
      borderStyle: "solid",
      borderRadius: Border.br_3xs,
      shadowColor: "rgba(0, 0, 0, 0.05)",
      marginTop: 16,
      overflow: "hidden",
      backgroundColor: Color.whait,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 4,
      },
    },
    component6Child: {
      shadowColor: "rgba(0, 0, 0, 0.03)",
      borderBottomRightRadius: Border.br_mini,
      borderBottomLeftRadius: Border.br_mini,
      backgroundColor: Color.whait,
      shadowOpacity: 1,
      elevation: 20,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      left: "0%",
      bottom: "0%",
      right: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    groupChild: {
      backgroundColor: Color.colorAliceblue_200,
      left: "0%",
      bottom: "0%",
      right: "0%",
      top: "0%",
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    august: {
      fontFamily: FontFamily.dGBaysan,
      color: Color.black,
      fontSize: FontSize.size_sm,
    },
    text1: {
      fontFamily: FontFamily.poppinsBold,
      fontWeight: "700",
    },
    textTypo1: {
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: "600",
    },
    textClr: {
      color: Color.color1,
      fontSize: FontSize.size_xs,
    },
    august2024: {
      textAlign: "right",
    },
    vectorIcon: {
      height: 15,
    },
    vectorIcon1: {
      marginLeft: 24,
      height: 15,
    },
    vectorParent: {
      marginLeft: 217,
      flexDirection: "row",
    },
    august2024Parent: {
      height: "39.13%",
      top: "30.43%",
      bottom: "30.43%",
      flexDirection: "row",
      alignItems: "center",
    },
    rectangleParent: {
      height: "28.57%",
      bottom: "71.43%",
      left: "0%",
      right: "0%",
      top: "0%",
      width: "100%",
      position: "absolute",
    },
    su: {
      width: 24,
    },
    text3: {
      letterSpacing: 0.2,
      fontFamily: FontFamily.poppinsSemiBold,
      fontWeight: "600",
    },
    namber: {
      borderRadius: Border.br_5xs,
      padding: Padding.p_11xs,
      justifyContent: "center",
      overflow: "hidden",
      height: 24,
      backgroundColor: Color.praimary,
      width: 24,
      alignItems: "center",
    },
    component5Child: {
      width: 4,
      height: 4,
      marginTop: 4,
    },
    component5: {
      marginTop: 12,
      alignItems: "center",
    },
    suParent: {
      right: "93%",
      left: "0%",
    },
    text4: {
      fontFamily: FontFamily.poppinsRegular,
      letterSpacing: 0.2,
      fontSize: FontSize.size_base,
      textAlign: "center",
      color: Color.colorBlack,
    },
    namber1: {
      paddingHorizontal: Padding.p_9xs,
      paddingVertical: Padding.p_11xs,
      justifyContent: "center",
      height: 24,
      width: 24,
      alignItems: "center",
    },
    saParent: {
      right: "77.55%",
      left: "15.45%",
    },
    erParent: {
      right: "62.1%",
      left: "30.9%",
    },
    thParent: {
      right: "46.65%",
      left: "46.36%",
    },
    weParent: {
      right: "31.2%",
      left: "61.81%",
    },
    tuParent: {
      right: "15.74%",
      left: "77.26%",
    },
    moParent: {
      left: "93%",
      right: "0%",
    },
    frameGroup: {
      height: "40.37%",
      top: "38.51%",
      bottom: "21.12%",
    },
    frameIcon: {
      height: "8.7%",
      marginLeft: -6.5,
      top: "85.09%",
      bottom: "6.21%",
      width: 14,
      left: "50%",
      overflow: "hidden",
      position: "absolute",
      maxHeight: "100%",
    },
    component6: {
      height: 330,
      width: "100%",
    },
    aug012024: {
      width: 100,
      textAlign: "left",
      fontWeight: "300",
      textTransform: "capitalize",
      lineHeight: 30,
      display: "flex",
      fontFamily: FontFamily.dGBaysan,
      height: 30,
      color: Color.color1,
      fontSize: FontSize.size_xs,
    },
    sunday: {
      width: 100,
      textAlign: "left",
      textTransform: "capitalize",
      lineHeight: 30,
      display: "flex",
      fontFamily: FontFamily.dGBaysan,
      height: 30,
      color: Color.black,
      fontSize: FontSize.size_sm,
      fontWeight: "700",
    },
    exportExcel: {
      lineHeight: 25,
      textTransform: "capitalize",
      color: Color.whait,
      fontWeight: "600",
      fontFamily: FontFamily.dGBaysan,
      fontSize: FontSize.size_sm,
      textAlign: "right",
    },
    exportExcelWrapper: {
      borderRadius: Border.br_8xs,
      paddingHorizontal: Padding.p_5xs,
      paddingVertical: Padding.p_9xs,
      marginLeft: 140,
      backgroundColor: Color.praimary,
      flexDirection: "row",
    },
    frameContainer: {
      marginTop: 25,
      flexDirection: "row",
      alignItems: "center",
    },
    component6Parent: {
      alignItems: "center",
    },
    groupItemShadowBox: {
      height: 120,
      shadowColor: "rgba(0, 0, 0, 0.05)",
      top: 10,
      borderWidth: 0.5,
      borderColor: Color.gray,
      borderStyle: "solid",
      borderRadius: Border.br_3xs,
      right: "1%",
      width: "98%",
      backgroundColor: Color.whait,
      shadowOpacity: 1,
      elevation: 20,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      position: "absolute",
    },
    frameContainer13Overlay: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(113, 113, 113, 0.3)",
    },
    frameContainer13Bg: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
    },
    frameIcon1: {
      width: 15,
      overflow: "hidden",
      height: 15,
    },
    groupInner: {
      top: 0,
      position: "absolute",
      left: 0,
    },
    text10: {
      fontSize: FontSize.size_4xs,
      lineHeight: 15,
      width: 12,
      height:12,
      display: "flex",
      alignItems: "center",
      textTransform: "capitalize",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: "700",
      position: "absolute",
    },
    ellipseParent: {
      marginLeft: 3,
    },
    framePressable: {
      right: "5%",
      borderRadius: Border.br_10xs,
      width: 40,
      padding: Padding.p_10xs,
      borderWidth: 0.5,
      borderColor: Color.gray,
      top: 0,
      borderStyle: "solid",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: Color.whait,
      alignItems: "center",
    },
    contractId: {
      width: 80,
      fontSize: FontSize.size_3xs,
      height: 25,
      color: Color.black,
      fontWeight: "700",
      alignItems: "center",
    },
    text11: {
      width: 100,
    },
    frameParent1: {
      flexDirection: "row",
    },
    transcationNumber: {
      width: 120,
      fontSize: FontSize.size_3xs,
      height: 25,
      color: Color.black,
      fontWeight: "700",
      alignItems: "center",
    },
    text12: {
      width: 80,
    },
    transcationNumberParent: {
      marginLeft: 5,
      flexDirection: "row",
    },
    department: {
      width: 80,
      fontSize: FontSize.size_3xs,
      height: 25,
      color: Color.black,
      fontWeight: "700",
      alignItems: "center",
    },
    caprenty: {
      width: 100,
    },
    serviceType: {
      width: 60,
      fontSize: FontSize.size_3xs,
      height: 25,
      color: Color.black,
      fontWeight: "700",
      alignItems: "center",
    },
    preventive: {
      width: 100,
    },
    serviceTypeParent: {
      marginLeft: 5,
      flexDirection: "row",
    },
    frameParent2: {
      marginTop: 10,
      flexDirection: "row",
    },
    time: {
      width: 80,
      fontSize: FontSize.size_3xs,
      height: 25,
      color: Color.black,
      fontWeight: "700",
      alignItems: "center",
    },
    text13: {
      width: 100,
    },
    scheduleDate: {
      height: 25,
      lineHeight: 25,
      display: "flex",
      textAlign: "left",
      fontFamily: FontFamily.dGBaysan,
      fontSize: FontSize.size_3xs,
      color: Color.black,
      fontWeight: "700",
    },
    text14: {
      width: 80,
    },
    scheduleDateParent: {
      marginLeft: 5,
      flexDirection: "row",
    },
    frameView: {
      top: "20%",
      left: "5%",
      position: "absolute",
    },
    frameContainer24Overlay: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(113, 113, 113, 0.3)",
    },
    frameContainer24Bg: {
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
    },
    rectangleContainer: {
      marginTop: 16,
    },
    groupParent: {
      marginTop: 16,
    },
    frameParent: {
      top: 0,
      width:"96%",
      left:"3%",
      position: "absolute",
    },
    frameIcon3: {
      overflow: "hidden",
      height: 24,
      width: 24,
    },
    home: {
      color: Color.colorLightsteelblue_100,
      fontWeight: "300",
    },
    menu5: {
      marginLeft: 16,
    },
    container: {
      borderColor: Color.whait,
      borderWidth: 4,
      justifyContent: "flex-end",
      padding: Padding.p_sm,
      borderRadius: Border.br_81xl,
      borderStyle: "solid",
      backgroundColor: Color.praimary,
      flexDirection: "row",
    },
    menu31: {
      height: 52,
    },
    schedules1: {
      color: Color.praimary,
      textTransform: "capitalize",
      fontWeight: "700",
    },
    menuList: {
      bottom: 30,
      alignItems: "flex-end",
      paddingHorizontal: Padding.p_xs,
      paddingTop: Padding.p_5xs,
      right: 0,
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: Color.whait,
      position: "absolute",
      width: 375,
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
      height: 30,
      right: 0,
      backgroundColor: Color.whait,
    },
    bottomNav: {
      backgroundColor: Color.colorWhitesmoke_200,
      height: 90,
      marginLeft: -187.5,
      left: "50%",
      overflow: "hidden",
    },
    groupChild2: {
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
      overflow: "hidden",
      maxHeight: "100%",
      maxWidth: "100%",
    },
    batteryIcon: {
      height: 11,
      right: 0,
      width: 24,
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
      left: "50%",
      overflow: "hidden",
    },
    icon: {
      overflow: "hidden",
      width: "100%",
    },
    arrow21: {
      left: "5%",
      width: 24,
    },
    schedules2: {
      width: "96%",
      color: Color.black,
      textTransform: "capitalize",
      fontWeight: "700",
      display: "flex",
      alignItems: "center",
      lineHeight: 30,
      fontFamily: FontFamily.dGBaysan,
      fontSize: FontSize.size_base,
      justifyContent: "center",
      textAlign: "center",
    },
    frameIcon7: {
      right: "5%",
      overflow: "hidden",
      width: 24,
    },
    filterIcon7: {
      right: "5%",
      overflow: "hidden",
      width: 24,
    },
    schedulesChild: {
      marginTop: -406,
      backgroundColor: Color.colorGray_500,
      marginLeft: -187.5,
      height: 812,
      width: 375,
    },
    filter: {
      width: 214,
      height: 16,
      lineHeight: 25,
      display: "flex",
      textAlign: "left",
      fontFamily: FontFamily.dGBaysan,
      fontSize: FontSize.size_base,
      alignItems: "center",
    },
    vectorIcon2: {
      width: 20,
      height: 20,
      marginLeft: 77,
    },
    filterParent: {
      top: 24,
      left: 16,
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
    },
    buttonChild: {
      borderRadius: Border.br_3xs,
      width: 311,
      marginLeft: -155.5,
      backgroundColor: Color.praimary,
      bottom: "0%",
      top: "0%",
      height: "100%",
    },
    search: {
      height: "50%",
      top: "22.92%",
      width: 288,
      lineHeight: 30,
      display: "flex",
      fontFamily: FontFamily.dGBaysan,
      color: Color.whait,
      fontSize: FontSize.size_base,
      textAlign: "center",
      justifyContent: "center",
      fontWeight: "700",
      position: "absolute",
    },
    button: {
      top: 370,
      height: 48,
    },
    frameChild: {
      top: 0,
      width: "100%",
      position: "absolute",
    },
    customerContract: {
      width: 124,
    },
    stickynoteIcon: {
      width: 18,
      height: 18,
    },
    chooseCustomerContract: {
      marginLeft: 8,
      textAlign: "left",
      fontWeight: "300",
      fontSize: FontSize.size_xs,
      color: Color.gray,
    },
    stickynoteParent: {
      flexDirection: "row",
      alignItems: "center",
    },
    groupIcon: {
      marginLeft: 95,
      height: 8,
      width: 14,
    },
    frameParent10: {
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
    customerContractParent: {
      top: 110,
      left: 0,
      position: "absolute",
      width:"80%"
    },
    startDate1: {
      width: 100,
    },
    enter: {
      textTransform: "capitalize",
    },
    startDate2: {
      textTransform: "lowercase",
    },
    startDate: {
      left: 0,
    },
    endDate: {
      width: 100,
    },
    calendarGroup: {
      width: 145,
      flexDirection: "row",
      alignItems: "center",
    },
    endDate1Inner: {
      width: 140,
    },
    endDate1: {
      left: "43%",
    },
    frameParent9: {
      borderRadius: Border.br_xl,
      height: 450,
      width: "100%",
      overflow: "hidden",
      backgroundColor: Color.whait,
    },
    schedules: {
      backgroundColor: Color.colorGray_100,
      flex: 1,
      width: "100%",
    },


    rectangleParentS: {
      top: "30%",
    },
    groupInnerPosition5: {
      height: 390,
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
    vectorIconS: {
      height: 20,
      width: 20,
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
   rectangleParent150: {
    top: 0,
    left: 0,
  },
  groupChildLayoutp: {
    height: 200,
    width: "90%",
    position: "absolute",
    zIndex:1
  },
  button5: {
    bottom: 20,
    height: 48,
  },
  buttonPositionS: {
    width: "92%",
    left:"4%",
    position: "absolute",
    zIndex:1,
  },
  buttonChildForComplete: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.praimary,
    borderRadius: Border.br_3xs,
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
  closeTypoS: {
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    zIndex:1,
  },
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


  });

export default Schedules;

