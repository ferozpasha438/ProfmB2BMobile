import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, Switch, ScrollView, Dimensions, FlatList, Alert, Keyboard, Platform, DatePickerIOS, DatePickerAndroid, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useIsFocused } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import { Dropdown,MultiSelect,SelectCountry } from 'react-native-element-dropdown';
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



const ListToolItem = ({ item}) => {
  // State to manage modal visibility
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View
      style={[
        styles.groupContainer,
        styles.bigBottunFlexBoxA,
          ]}
        >
        <Image
          style={styles.frameChild1}
          resizeMode="cover"
          source={require("../assets/group-238829.png")}
        />
        <Text style={[styles.copperWires, styles.activitiesLayout]}>
          {item.toolName}
        </Text>
      </View>         
          
  );
};

const Activities = ({route}) => {
  const {ticketNumber}=route.params;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const focus = useIsFocused(); 
  const [pagesData, setPagesData] = useState<any[]>([]);
  const [pagesToolData, setPagesToolData] = useState<any[]>([]);
  const [pageHieght, setPageHieght] = useState(850);
  const [photoListHieght, setPhotoListHieght] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [isFocus3, setIsFocus3] = useState(false);
  const [isFocus4, setIsFocus4] = useState(false);
  const windowHeight = Dimensions.get('screen').height;
  const windowWidth = Dimensions.get('screen').width;
  const [token, setLoginToken] = useState("");
  const [tNumber, setTnumber] = useState("");
 
  const [activityActualList, setActivityActualList] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [desiplineTypeList, setDesiplineTypeList] = useState([]);
  const [resourceDataList, setResourceDataList] = useState([]);
  const [slaDurationp, setSlaDurationp] = useState("");
  const [slaTypep, setSlaTypep] = useState("Days");
  const [slaDurationNotep, setSlaDurationNotep] = useState("");
  

  const [activityCode, setActivityCode] = useState("");
  const [disciplineType, setDisciplineType] = useState("");
  const [activityLocation, setActivityLocation] = useState("");
  const [resourcesList, setResourcesList] = useState([]);
  const [materialsList, setMaterialsList] = useState([]);
  const [toolsList, setToolsList] = useState([]);
  const [slaDuration, setSlaDuration] = useState("");
  const [slaType, setSlaType] = useState("Days");
  const [slaDurationNote, setSlaDurationNote] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  
  const [multiSelectHeight, setMultiSelectHeight] = useState(82);
  const [showSLAPopup, setShowSLAPopup] = useState(false);
  const [showToolsPopup, setShowToolsPopup] = useState(false);
  
  const [slaTypeList, setSlaTypeList] = useState([{label:'Days',value:'Days',image: {
                                                      uri:'https://hvserp.com/FomMob/images/icons/group10p.png',
                                                  }},
                                                  {label:'Hours',value:'Hours',image: {
                                                    uri:'https://hvserp.com/FomMob/images/icons/frame80p.png',
                                                  }}]);


  
  const hideMessage=async () =>{
    setShowSLAPopup(false);
  };
  const showSLADataPopup=async () =>{
    setShowSLAPopup(true);
    setSlaDurationp(slaDuration);
    setSlaTypep(slaType);
    setSlaDurationNotep(slaDurationNote);
  };
 const addSLAConfig=async () =>{
  if(slaDurationp!=''&& slaTypep!='')
  {
    setSlaDuration(slaDurationp);
    setSlaType(slaTypep);
    setSlaDurationNote(slaDurationNotep);
    setShowSLAPopup(false);
  }else{
      Alert.alert("Please fill SLA data");
  }
};
 
  const getResourceDataList = async (type:string) => {
    if(type!=disciplineType){
      setResourcesList([]);
    }
    WebServer.getDataWithToken('FomMobResource/getSelectResourcesByDepCodeList/'+type,token,'', resourceDataListCallback);
  };
  const resourceDataListCallback = resourceResponse => {
    var count = resourceResponse.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:resourceResponse[i].textTwo,value:resourceResponse[i].text});
    }
    setResourceDataList(data);
  }
  const getDesciplineTypeList = async (jwttoken:string) => {
      WebServer.getDataWithToken('FomMobDepartment/getSelectDepartmentsList',jwttoken,'', desciplineTypeListCallback);
  };
  const desciplineTypeListCallback = desciplineResponse => {
    var count = desciplineResponse.length;
    var data=[];
    for (var i = 0; i < count; ++i) {
      data.push({label:desciplineResponse[i].textTwo,value:desciplineResponse[i].text});
    }
    setDesiplineTypeList(data);
  }
  const getActivityList = async (type:string) => {
    if(type!=disciplineType){
        setDisciplineType('');
    }
    getResourceDataList(type);
    WebServer.getDataWithToken('FomMobDepActivities/getSelectActivitiesByDepCodes/'+type,token,'', activityListCallback);
  };
  const activityListCallback = activityListResponse => {
      var count = activityListResponse.length;
      var data=[];
      for (var i = 0; i < count; ++i) {
        data.push({label:activityListResponse[i].textTwo,value:activityListResponse[i].text});
      }
      setActivityList(data);
      setActivityActualList(activityListResponse);
  }
  
  const submitRequest = async () => {
    try {
      if(activityCode!='' && resourcesList.length>0 && slaDuration!='' && slaType!=''
            && activityLocation!='' && pagesData.length>0 && pagesToolData.length>0){
              const activityData : any =activityActualList.find(item=>item.text===activityCode);
              const resourceListDto:Array<any>=[];
              const activityRequestDto:Array<any>=[];
              for(let i=0;i<resourcesList.length;i++){
                 const data:any={
                           resourceCode: resourcesList[i]
                         };
                  resourceListDto.push(data);    
              }
              var activityRequest={
                    activityCode: activityCode,
                    activityName: activityData.textTwo,
                    activityNameAr: activityData.textAr,
                    slaDuration: slaDuration,
                    slaType: slaType,
                    activityLocation: activityLocation,
                    slaDurationNote: slaDurationNote,
                    activityDescription: activityDescription,
                    materialsList: pagesData,
                    toolsList: pagesToolData,
                    resourcesList: resourceListDto
                };
                activityRequestDto.push(activityRequest);
                //console.log(JSON.stringify(activityRequest));
                let activityDataFinalData : any =await AsyncStorage.getItem('activityData'+ticketNumber);
                var activityDataFinalInfo = JSON.parse(activityDataFinalData);
                if (activityDataFinalInfo !== null && activityDataFinalInfo !== undefined) {
                    const finalactivityData = [...activityDataFinalInfo, ...activityRequestDto];
                    AsyncStorage.setItem('activityData'+ticketNumber, JSON.stringify(finalactivityData));
                }else{
                  AsyncStorage.setItem('activityData'+ticketNumber, JSON.stringify(activityRequestDto));
                }
        
                var items = ['finalToolsList'+ticketNumber,'finalMaterialList'+ticketNumber];
                AsyncStorage.multiRemove(items);
                navigation.pop();
                navigation.navigate("CreateWorkOrder",{ticketNumber:ticketNumber});
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
           //clearAllFields();
        }else{
           Alert.alert(response.message);
        }
    }
  };

  

  const checkLoginDetails = async () => {
    try {
      let result : any =await AsyncStorage.getItem('userInfo');
      var userInfo = JSON.parse(result);
      if (userInfo !== null && userInfo !== undefined) {
          setLoginToken(userInfo.token);
          getDesciplineTypeList(userInfo.token);
      }
     
      let materialsListData : any =await AsyncStorage.getItem('finalMaterialList'+ticketNumber);
      var materialsListInfo = JSON.parse(materialsListData);
      if (materialsListInfo !== null && materialsListInfo !== undefined) {
          setPagesData(materialsListInfo);
      } 

      let toolsListDataAsync : any =await AsyncStorage.getItem('finalToolsList'+ticketNumber);
      var toolsListInfo = JSON.parse(toolsListDataAsync);
      if (toolsListInfo !== null && toolsListInfo !== undefined) {
         setPagesToolData(toolsListInfo);
         setPageHieght(850+(toolsListInfo.length*50));
      }

    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };

  useEffect(() => {
    checkLoginDetails()
  }, [focus]);
 
  return (
    <View style={styles.moreInformaion}>

      {/* <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={styles.arrow21}
          onPress={() => navigation.navigate("CreateWorkOrder",{ticketNumber:ticketNumber})}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.serviceRequest, styles.arrow21Position]}>
          Activities
        </Text>
      </View> */}




  <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:pageHieght  }}
            alwaysBounceVertical={false}>
      
      
      <View style={styles.frameParent}>
       
      <View style={styles.filterProjectName}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>Discipline Type</Text>
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
              data={desiplineTypeList}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select Discipline Type' : '...'}
              searchPlaceholder="Search..."
              value={disciplineType}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setDisciplineType(item.value);
                getActivityList(item.value);
                setIsFocus(false);
              }}
            />
        </View>

        <View style={styles.filterProjectName}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>Activity List</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <Dropdown
              activeColor='#fafdff'
              itemTextStyle={{color:'#030303'}}
              itemContainerStyle={{backgroundColor:'#fff'}}
              style={[styles.dropdown, isFocus2]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={activityList}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus2 ? 'Select Activity' : '...'}
              searchPlaceholder="Search..."
              value={activityCode}
              onFocus={() => setIsFocus2(true)}
              onBlur={() => setIsFocus2(false)}
              onChange={item => {
                setActivityCode(item.value);
                setIsFocus2(false);
              }}
            />
        </View>
        

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
             Activity Location
          </Text>
          <TextInput value={activityLocation} onChangeText={(text) => setActivityLocation(text)} 
                    autoCapitalize={'none'} style={[styles.text1Clr,styles.frameShadowBox]} placeholder='Type the exact location'
                        placeholderTextColor="#000" editable={true}/>
        </View>


        <View style={[styles.filterMultiSelect,{height:multiSelectHeight}]}>
          <Text style={styles.projectNameTypo}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>Assign Team</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <MultiSelect 
              activeColor='#fafdff'
              itemTextStyle={{color:'#030303'}}
              itemContainerStyle={{backgroundColor:'#fff'}}
              style={[styles.dropdown, isFocus3]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={resourceDataList}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus3 ? 'Select Team' : '...'}
              searchPlaceholder="Search..."
              value={resourcesList}
              onFocus={() => setIsFocus3(true)}
              onBlur={() => setIsFocus3(false)}
              onChange={item => {
                setResourcesList(item);
                setMultiSelectHeight((resourcesList.length+1)<4?120:((resourcesList.length+1)<7?160:200));
                setIsFocus3(false);
              }}
            />
        </View>

        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
           Tools and Material
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
            <Pressable
                onPress={() => navigation.navigate("ToolsNMaterial",{ticketNumber:ticketNumber,})}>
                <View style={styles.frameShadowBox} />
                <View style={[styles.wrapper, styles.wrapperPosition]}>
                    <Text style={{padding:15}}>Click here to select tools and materials </Text>
                </View>
            </Pressable>
          </View>
        </View>
        
        <View style={styles.mobileNumberParent}>
          <Text style={[styles.mobileNumber, styles.requestFlexBox]}>
            Determine The DSA Duration
          </Text>
          <View style={[styles.rectangleGroup, styles.rectangleSpaceBlock]}>
             <Pressable
              onPress={showSLADataPopup}>
                <View style={styles.frameShadowBox} />
                <View style={[styles.wrapper, styles.wrapperPosition]}>
                  <Text style={{padding:15}}>{slaDuration!=''?('Selected SLA Duration is : '+slaDuration+' '+slaType+'. Click here to change SLA Duration' ):'Click here to select Duration SLA'} </Text>
                </View>
            </Pressable>
          </View>
        </View>

        
        
        
        <View style={styles.problemOrRequestParent}>
          <Text
            style={[styles.problemOrRequestContainer, styles.requestFlexBox]}>
            <Text style={styles.serviceTypeTxtContainer}>
              <Text style={styles.serviceType2}>Activity Description</Text>
              <Text style={styles.text2}>*</Text>
            </Text>
          </Text>
          <View style={[styles.encapsulatedGroup, styles.groupLayout]}>
            <View style={[styles.groupView, styles.groupPosition]}>
              <View style={[styles.groupChild, styles.childGroupShadowBox]} />
              <TextInput
                  multiline
                  numberOfLines={4}
                  maxLength={300}
                  onChangeText={text => setActivityDescription(text)}
                  value={activityDescription}
                  style={styles.pleaseTypo}
                  placeholder='Please write any comments or notes'
                />
            </View>
          </View>
        </View>


        {(pagesToolData.length>0 || pagesData.length>0 ) && (<View style={styles.activityLocationParent}>
          <Pressable
            style={[
              styles.toolsAndMaterialsWereSelecParent,
              styles.bigBottunFlexBoxA,
            ]}
            onPress={() => navigation.navigate("AllToolsNMaterialsFinalData",{ticketNumber:ticketNumber})}
          >
            <Text style={[styles.toolsAndMaterials, styles.copperWiresTypo]}>
              {pagesToolData.length+pagesData.length} tools and materials were selected
            </Text>
            <Image
              style={[styles.groupIcon, styles.iconLayout1A]}
              resizeMode="cover"
              source={require("../assets/group9light.png")}
            />
          </Pressable>
          <View style={styles.frameParent1}>
             {pagesToolData.map((item:any) => (
                                    <ListToolItem key={item.toolCode} item={item} />
                  ))}
            
            
          </View>
        </View>)}

        
        {/* <View style={styles.moreInformaionChild} /> */}
        <Pressable
          style={styles.button}
          onPress={submitRequest}>
          <Text style={[styles.text, styles.textTypo]}>Save Activity</Text>
        </Pressable>

        {/* <Pressable
          style={[styles.frameGroup, styles.frameGroupBorder,{top:pageHieght-50}]}
          onPress={() => navigation.navigate("Home1")}
        >
          <Image
            style={[styles.frameIcon1, styles.groupIconLayoutw]}
            resizeMode="cover"
            source={require("../assets/frame15workorder.png")}
          />
          <Text style={[styles.addActivity, styles.addActivityTypow]}>
            Add Another Activity
          </Text>
        </Pressable> */}





        

      </View>


      

      </ScrollView>
        
      {showSLAPopup?<View style={{backgroundColor: Color.colorGray_600,
                        width: "100%",
                        position: "absolute",zIndex:1,
                        height: windowHeight}} />:null}
            {showSLAPopup?<View style={[styles.rectangleParentS, styles.groupInnerPosition5]}>
              <View style={[styles.groupInnerp, styles.groupInnerPosition5]} />
              <Text style={[styles.determineClosureReason, styles.closeTypo]}>
                  Determine The SLA Duration
                </Text>
                <Pressable
                    style={styles.vectorp}
                    onPress={hideMessage}>
                    <Image
                              style={styles.vectorIcon}
                              contentFit="cover"
                              source={require("../assets/vector2.png")}
                            />
                  </Pressable>
            
              <View style={[styles.lineViewp, styles.viewGroupPosition]} />
              <View style={[styles.rectangleParent150, styles.groupChildLayoutp]}>
                  <Text style={[styles.selectTheDuration, styles.notesTypo]}>
                    SLA duration
                  </Text>
              </View>
              <View style={[styles.rectangleParent4, styles.groupChild1Layout]}>
                    <View style={[styles.groupChild1, styles.childShadowBoxp]} />
                    <TextInput value={slaDurationp} onChangeText={(text) => setSlaDurationp(text)} 
                        autoCapitalize={'none'} style={[styles.textp, styles.textTypop]}/>

                    <SelectCountry
                                  activeColor='#fafdff'
                                  itemTextStyle={{color:'#030303'}}
                                  itemContainerStyle={{backgroundColor:'#fff'}}
                                  style={styles.dropdownp}
                                  imageStyle={styles.imageStyle}
                                  placeholderStyle={styles.placeholderStyle}
                                  selectedTextStyle={styles.selectedTextStylep}
                                  inputSearchStyle={styles.inputSearchStyle}
                                  iconStyle={styles.iconStyle}
                                  data={slaTypeList}
                                  maxHeight={200}
                                  labelField="label"
                                  valueField="value"
                                  imageField="image"
                                  placeholder="Select"
                                  value={slaTypep}
                                  onFocus={() => setIsFocus4(true)}
                                  onBlur={() => setIsFocus4(false)}
                                  onChange={item => {
                                    setSlaTypep(item.value);
                                    setIsFocus4(false);
                                  }}
                                />



              </View>

              <View style={styles.notesParent}>
                <Text style={styles.notesTypop}>Notes</Text>
                <View style={[styles.rectangleParent3p, styles.rectangleLayout]}>
                  <View style={[styles.rectangleView, styles.rectangleLayout]} />
                  <TextInput
                        multiline
                        numberOfLines={4}
                        maxLength={300}
                        onChangeText={text => setSlaDurationNotep(text)}
                        value={slaDurationNotep}
                        style={[styles.pleaseWriteAll, styles.textTypoNotes]}
                        placeholder="Please write all your notes....."
                        placeholderTextColor="#000"
                      />
                  
                    
                </View>
              </View>
              
              <Pressable
                  style={[styles.button5, styles.buttonPosition]}
                  onPress={addSLAConfig}>
                  <View style={[styles.buttonChildForComplete, styles.buttonPosition]} />
                  <Text style={[styles.close, styles.closeTypo]}>ADD</Text>
              </Pressable>

          </View>:null}
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
    color:'#030303',
  },
  selectedTextStylep: {
    fontSize: 16,
    color:'#030303',
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
    top:"3%"
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
    fontSize:15,
    width:"100%",
    height:40,
    top:3
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
    zIndex: 0,
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
  filterMultiSelect: {
    height: 120,
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
    top: 20,
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
    top:"30%"
  },


  frameGroup: {
    borderColor: Color.praimary,
    paddingHorizontal: Padding.p_95xl_5,
    paddingVertical: Padding.p_lg_5,
    left: "2%",
    flexDirection: "row",
    alignItems: "center",
    width:"96%"
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



  rectangleParent1: {
    top: "25%",
  },
  rectangleParentS: {
    top: "25%",
  },
groupInnerPosition: {
    height: 410,
    width: "96%",
    left:"2%",
    position: "absolute",
    zIndex:1,
  },
  groupInnerPosition5: {
    height: 380,
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
  vectorp:{
    height: 25,
    width: 25,
    top: "6%",
    right: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    zIndex:2
  },
vectorIcon: {
    height: 20,
    width: 20,
    zIndex:1
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
  buttonp: {
    top: 340,
    height: 48,
  },
  button5: {
    top: 300,
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
    width: "100%",
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
childGroupShadowBoxp: {
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
selectTheDuration: {
  top: 72,
  left: "8%",
  position: "absolute",
},
notesTypo: {
  width: "100%",
  height: 25,
  lineHeight: 25,
  display: "flex",
  textAlign: "left",
  color: Color.black,
  fontSize: FontSize.size_sm,
  fontFamily: FontFamily.dGBaysan,
  fontWeight: "700",
  textTransform: "capitalize",
  alignItems: "center",
},
rectangleParent4: {
  height: 40,
  top: 105,
  position: "absolute",
  zIndex:1
},
groupChild1Layout: {
  width: "100%",
  height: 40,
  
},
groupChild1: {
  left: "8%",
  height: 40,
  width: "50%",
  top: 0,
},
childShadowBox: {
  borderRadius: Border.br_8xs,
  elevation: 20,
  shadowRadius: 20,
  shadowColor: "rgba(0, 0, 0, 0.03)",
  borderWidth: 0.5,
  borderColor: Color.color,
  shadowOpacity: 1,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  transform: [
    {
      rotate: "180deg",
    },
  ],
  backgroundColor: Color.whait,
  borderStyle: "solid",
  position: "absolute",
},
textp: {
  top: 0,
  left: "8%",
  width: "50%",
  color: Color.praimary,
  height: 50,
  lineHeight:40,
  fontWeight: "700",
},
textTypop: {
  fontSize: 15,
  textAlign: "left",
  fontFamily: FontFamily.dGBaysan,
  position: "absolute",
  flexDirection: "row",
  display: "flex",
  alignItems:"flex-start"
},
selectTheDuration1: {
  width: "50%",
  height: 40,
  zIndex:1,
  position:'absolute'
},
rectangleParent4Position: {
  top: 105,
  position: "absolute",
  flexDirection: "row",
  display: "flex",
  alignItems:"flex-end"
},
selectTheDurationChild: {
  right: "15%",
  height: 40,
  width: "100%",
},
childShadowBoxp: {
  borderRadius: Border.br_8xs,
  elevation: 20,
  shadowRadius: 20,
  shadowColor: "rgba(0, 0, 0, 0.03)",
  borderWidth: 0.5,
  borderColor: Color.color,
  shadowOpacity: 1,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  transform: [
    {
      rotate: "180deg",
    },
  ],
  backgroundColor: Color.whait,
  borderStyle: "solid",
  position: "absolute",
},
groupIcon1: {
  height: "44%",
  width: "17%",
  top: 0,
  right: "8%",
  position: "absolute",
},
iconLayout1: {
  maxHeight: "100%",
  maxWidth: "100%",
  overflow: "hidden",
},
dayParent: {
  height: 40,
  width: "100%",
  alignItems: "flex-end",
  justifyContent: "center",
  flexDirection: "row",
  position: "absolute",
},
day: {
  width: 28,
  height: 8,
  lineHeight: 25,
  display: "flex",
  fontFamily: FontFamily.dGBaysan,
  alignItems: "center",
  color: Color.black,
},
dayTypo: {
  fontSize: FontSize.size_xs,
  textAlign: "left",
  textTransform: "capitalize",
},
groupIcon2: {
  width: 10,
  height: 5,
  marginLeft: 8,
},
dropdownp: {
  width:"35%",
  right:"5%",
  height: 40,
  borderColor: Color.colorLightsteelblue_100,
  borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
  marginTop:0,
  display: "flex",
  alignItems:"center",
  position: "absolute",
  textAlign:'left',


},
imageStyle: {
  width: 20,
  height: 20,
},

notesParent: {
  top: 160,
  left: "8%",
  position: "absolute",
  zIndex:1,
  width:"84%"
},
notesTypop: {
  width: "100%",
  height: 25,
  lineHeight: 25,
  display: "flex",
  textAlign: "left",
  color: Color.black,
  fontSize: FontSize.size_sm,
  fontFamily: FontFamily.dGBaysan,
  fontWeight: "700",
  textTransform: "capitalize",
  alignItems: "center",
},
rectangleParent3p: {
  marginTop: 8,
},
rectangleLayout: {
  height: 87,
  width: "100%",
},
rectangleView: {
  borderColor: Color.colorLightsteelblue_100,
  right: 0,
  borderStyle: "solid",
  position: "absolute",
  elevation: 20,
  shadowRadius: 20,
  shadowColor: "rgba(0, 0, 0, 0.03)",
  shadowOpacity: 1,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  backgroundColor: Color.whait,
  top: 0,
  borderWidth: 0.5,
  borderRadius: Border.br_3xs,
},
pleaseWriteAll: {
  marginLeft: -143.1,
  top: 16,
  width: 132,
  color: Color.color,
  fontWeight: "300",
  left: "50%",
},
textTypoNotes: {
  display: "flex",
  textAlign: "left",
  fontFamily: FontFamily.dGBaysan,
  alignItems: "center",
  position: "absolute",
  fontSize: 15,
  color: Color.black,
  paddingTop:"0%",
  width:"100%"

},








activityLocationParent: {
  marginTop: 20,
},
toolsAndMaterialsWereSelecParent: {
  alignItems: "center",
  width: "100%",
  flexDirection: "row",
},
bigBottunFlexBox: {
  flexDirection: "row",
  alignItems: "center",
},
toolsAndMaterials: {
  fontWeight: "600",
  width: "90%",
  lineHeight: 25,
  display: "flex",
  alignItems: "center",
  color: Color.praimary,
  fontFamily: FontFamily.dGBaysan,
},
copperWiresTypo: {
  fontSize: FontSize.size_xs,
  height: 25,
  textAlign: "left",
  textTransform: "capitalize",
},
groupIcon: {
  right: "5%",
  width:"10%"
},
iconLayout1A: {
  height: 20,
  width: 20,
},
frameParent1: {
  marginTop: 16,
},
typeTheExactLocationWrapper: {
  justifyContent: "center",
  alignItems: "flex-start",
},
bigBottunFlexBoxA: {
  flexDirection: "row",
  alignItems: "flex-start",
},
frameChild1: {
  width: 18,
  height: 18,
},
copperWires: {
  color: Color.color,
  width: 102,
  fontWeight: "300",
  fontSize: FontSize.size_xs,
  height: 25,
  textAlign: "left",
  textTransform: "capitalize",
  marginLeft: 8,
},
activitiesLayout: {
  lineHeight: 30,
  display: "flex",
  fontFamily: FontFamily.dGBaysan,
  alignItems: "center",
},
groupContainer: {
  marginTop: 12,
  justifyContent: "flex-start",
  alignItems: "flex-start",
},


});

export default Activities;
