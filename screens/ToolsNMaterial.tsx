import React, {FC, ReactElement, useEffect, useState, Component} from 'react';
import { StyleSheet, View, Text, Pressable, Image, TextInput, Switch, ScrollView, Dimensions, FlatList, Alert, Keyboard, Platform, DatePickerIOS, DatePickerAndroid, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
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



const ListToolItem = ({ item, qty,changeToolsHieght,addToolRow, totalHieght }) => {
    // State to manage modal visibility
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [isShowTool, setIsShowTool] = useState(false);
    const windowHeight = Dimensions.get('screen').height;
    const windowWidth = Dimensions.get('screen').width;
    const [toolHeight, setToolHeight] = useState(80);
    const [toolQuantity, setToolQuantity] = useState(qty?.toString()??'0');

    const showHideTool= async () =>{
       setIsShowTool(!isShowTool);
       if(!isShowTool){
        setToolHeight(200);
        changeToolsHieght(totalHieght+120);
       }else{
        setToolHeight(80);
        changeToolsHieght(totalHieght-120);
       }       
    };
    const handleIncrement= async () =>{
        setToolQuantity((parseInt(toolQuantity)+1).toString());
    };
    const handleDecrease =async () => {
        setToolQuantity(((parseInt(toolQuantity)-1)<1?'0':(parseInt(toolQuantity)-1).toString()));
    };
    const addToolData=async () =>{
      addToolRow(item.text,parseInt(toolQuantity));
    };
    return (
        <View style={[styles.tools1,{height: toolHeight,}]}>
           <Pressable
              style={styles.frameIconT}
              onPress={showHideTool}>
              <Image
                 style={styles.iconT}
                  resizeMode="cover"
                  source={isShowTool?require("../assets/frame30TopT.png"):require("../assets/frame30T.png")}
                   />
           </Pressable>
            
                  <Text style={styles.name}>Name</Text>
                  <Text style={styles.copperWires}>{item.textTwo}</Text>

                {isShowTool && (<View style={{width:"100%",zIndex:1}}>
                                  <Text style={styles.typeName}>Type</Text>
                                  <Text style={styles.typecopperWires}>{item.type}</Text>
                                  <View style={styles.toolQuantityView}>
                                      <Text style={styles.typeName}>Required</Text>
                                          <TouchableOpacity
                                                  style={styles.minusicon}
                                                  onPress={handleDecrease}>
                                                                <Image style={styles.icon}
                                                                                resizeMode="cover"
                                                                                source={require("../assets/minus_icon.png")}/>
                                            </TouchableOpacity>
                                            <TextInput value={toolQuantity} style={styles.textp} onChangeText={(text) => setToolQuantity(text)} editable={false}/>
                                            <TouchableOpacity onPress={handleIncrement}
                                                    style={styles.plusicon}>
                                                                  <Image
                                                                        style={styles.icon}
                                                                        resizeMode="cover"
                                                                        source={require("../assets/plus_icon.png")}/>
                                            </TouchableOpacity>
                                  </View>
                                          <TouchableOpacity onPress={addToolData}
                                                    style={[styles.button2,{width:windowWidth-10}]}>
                                                                  <Text style={{color:Color.whait,fontSize:14,fontWeight:'800'}}>Add</Text>
                                            </TouchableOpacity>
                            </View>)}


                  <View style={[styles.toolsChild, styles.toolsPosition,{width:windowWidth}]} />
        </View>                   
            
      );
  };

const ListItem = ({ item,token,changeMaterial, changeQuantities }) => {
    // State to manage modal visibility
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [isFocus, setIsFocus] = useState(false);
    //id:pid, materialCode: '',materialName:'',materialNameAr:'',reqQty:0,availableQty:0,balQty:0
    const [materialDataList, setMaterialDataList] = useState([]);
    const [materialCode, setMaterialCode] = useState(item.materialCode);
    const [selectedMaterial, setSelectedMaterial] = useState(item.materialCode);
    const [materialAvail, setMaterialAvail] = useState(item.availableQty==0?'':item.availableQty.toString());
    const [materialReq, setMaterialReq] = useState(item.reqQty==0?'':item.reqQty.toString());
    const [materialBal, setMaterialBal] = useState(item.balQty==0?'':item.balQty.toString());
    
    useEffect(() => {
        if(materialAvail!='' && materialReq!=''){
          setMaterialBal(parseFloat(materialReq)-parseFloat(materialAvail)<0?"0":(parseFloat(materialReq)-parseFloat(materialAvail)).toString());
          changeQuantities(item.id,materialReq,materialAvail,parseFloat(materialReq)-parseFloat(materialAvail)<0?"0":(parseFloat(materialReq)-parseFloat(materialAvail)).toString());
        }
     }, [materialAvail]);
     useEffect(() => {
        if(materialAvail!='' && materialReq!=''){
              setMaterialBal(parseFloat(materialReq)-parseFloat(materialAvail)<0?"0":(parseFloat(materialReq)-parseFloat(materialAvail)).toString());
              changeQuantities(item.id,materialReq,materialAvail,parseFloat(materialReq)-parseFloat(materialAvail)<0?"0":(parseFloat(materialReq)-parseFloat(materialAvail)));
        }
     }, [materialReq]);
     const getMaterialList = async (jwttoken:string) => {
        WebServer.getDataWithToken('FomMobItemMaster/getSelectMaterialList',jwttoken,'', materialListCallback);
      };
      const materialListCallback = materialListResponse => {
            var count = materialListResponse.length;
            var data=[];
            for (var i = 0; i < count; ++i) {
                data.push({label:materialListResponse[i].textTwo,value:materialListResponse[i].text});
            }
            setMaterialDataList(data);
      }
      useEffect(() => {
        getMaterialList(token);
      }, []);
  
    return (
        <View style={[styles.frameGroup, styles.framePosition,{top:(item.id<2?0:((item.id)*80)-80)}]}>
          <Text style={[styles.code, styles.codeFlexBox]}>Code</Text>
          <TextInput style={[styles.text, styles.codeFlexBox,styles.groupChildShadowBox5]} value={materialCode} editable={false}/>

          <View style={styles.materialsParent}>
            <Text style={[styles.materials2, styles.balTypo]}>Material</Text>
            <View style={styles.rectangleLayout}>
                      <Dropdown
                              activeColor='#fafdff'
                              itemTextStyle={{color:'#030303'}}
                              itemContainerStyle={{backgroundColor:'#fff'}}
                              style={styles.dropdown}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={materialDataList}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select Material' : '...'}
                              searchPlaceholder="Search..."
                              value={selectedMaterial}
                              onFocus={() => setIsFocus(true)}
                              onBlur={() => setIsFocus(false)}
                              onChange={item2 => {
                                  setSelectedMaterial(item2.value);
                                  setMaterialCode(item2.value);
                                  changeMaterial(item.id,item2.value);
                                  setIsFocus(false);
                              }}
                              />
            </View>
          </View>
          
          <Text style={[styles.avail, styles.reqTypo]}>Avail</Text>
          <TextInput style={[styles.textLayout,styles.groupChildShadowBox2]} value={materialAvail} onChangeText={(text) => setMaterialAvail(text)}/>

          <Text style={[styles.req, styles.reqTypo]}>Req</Text>
          <TextInput style={[styles.textLayout,styles.groupChildShadowBox1]} value={materialReq} onChangeText={(text) => setMaterialReq(text)}/>

          <Text style={[styles.bal, styles.balPosition]}>Bal</Text>
          <TextInput style={[styles.textLayout,styles.groupChildShadowBox]} value={materialBal} onChangeText={(text) => setMaterialBal(text)} editable={false}/>

        </View>
        
            
    );
  };

const ToolsNMaterial = ({route}) => {
    const {ticketNumber}=route.params;
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [pageHieght, setPageHieght] = useState(200);
    const [photoListHieght, setPhotoListHieght] = useState(0);
    
    const windowHeight = Dimensions.get('screen').height;
    const windowWidth = Dimensions.get('screen').width;
    const [token, setLoginToken] = useState("");
    const [tNumber, setTnumber] = useState("");
    const [pid, setPId] = useState(1);
    const [pagesData, setPagesData] = useState<any[]>([]);
    const [pagesToolData, setPagesToolData] = useState<any[]>([]);
    const [lstMaterial, setLstMaterial] = useState<any[]>([]);
   
    const [materialDataList, setMaterialDataList] = useState([]);
    const [toolDataList, setToolDataList] = useState([]);
    const [isShowTools, setIsShowTools] = useState(false);
    const [isShowMaterials, setIsShowMaterials] = useState(true);
    const [openTools, setOpenTools] = useState(0);
    const [showRecordsDataList, setShowRecordsDataList] = useState([{label:'5',value:'5'}]);
    const [itemsPerPage, setItemsPerPage] = useState("5");
    const [isFocus2, setIsFocus2] = useState(false);
    const [serachTxt, setSerachTxt] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [toolDataListForPaging, setToolDataListForPaging] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isShowPaging, setIsShowPaging] = useState(false);

    const [toolsHeight, setToolsHeight] = useState(windowHeight);

    
    
    
    const addToolRow= async (toolCode:string,qty:number) =>{
      const uniqueCodes = new Set(pagesToolData.map((item) => item.toolCode));
      var tData=toolDataList.find(item => item.text === toolCode);
      if(!uniqueCodes.has(toolCode)){
        var newRowData={
          toolCode: toolCode,
          toolName: tData.textTwo,
          toolNameAr: tData.textAr,
          qty: qty,
          toolType: tData.type
          };
         setPagesToolData(old => [...old, newRowData]);
       }else{
          var rowData=pagesToolData.find(item => item.toolCode === toolCode);
          if(rowData){
               if(qty===0){
                  let index = pagesToolData.findIndex(item => item.toolCode === toolCode);
                  if (index !== -1) {
                     pagesToolData.splice(index, 1);
                  }
               }else{
                  rowData.toolName=tData.textTwo;
                  rowData.toolNameAr=tData.textAr;
                  rowData.qty=qty;
                  rowData.toolType=tData.type;
               }                
          }
       }
    };
     
    const changeToolsHieght = async (toolsH:number) => {
      setToolsHeight(toolsH);
    };
    
    const changeMaterial=async (id:number,mcode:string) => {
       var rowData=pagesData.find(item => item.id === id);
       var materialData=lstMaterial.find(item => item.text === mcode);
       if(rowData){
            rowData.materialCode=mcode;
            rowData.materialName=materialData.textTwo;
            rowData.materialNameAr=materialData.textAr;
       }
    };
    const changeQuantities=async (id:number,reqQty:string,availableQty:string,balQty:string) => {
        var rowData=pagesData.find(item => item.id === id);
        if(rowData){
            if(reqQty!=''){
                rowData.reqQty=parseFloat(reqQty);
            }
            if(availableQty!=''){
                rowData.availableQty=parseFloat(availableQty);
            }
            if(balQty!=''){
                rowData.balQty=parseFloat(balQty);
            }           
        }
     };
    const showToolsData=async () => {
        setIsShowTools(true);
        setIsShowMaterials(false);
    };
    const showMaterialsData=async () => {
        setIsShowMaterials(true);
        setIsShowTools(false);
    };
    const addRow= async () =>{
        const uniqueIds = new Set(pagesData.map((item) => item.id));
        if(pid>1 && materialDataList.length<pid){
           Alert.alert('The number of rows is equals to the number of materials.');
        }else if(!uniqueIds.has(pid)){
            var newRowData={ id:pid, materialCode: '',materialName:'',materialNameAr:'',reqQty:0,availableQty:0,balQty:0 };
            setPagesData(old => [...old, newRowData]);
            setPId(pid+1);
            setPageHieght((pid-1)*80);
        }
    };
    // const deleteRow= async () =>{
    //         setPagesData(old => [...old, newRowData]);
    //         setPId(pid-1);
    //         setPageHieght((pid-2)*80);
    // };
    // const addRequestMaterialsDataToArray= async (id:number,materialCode:string,materialName:string,
    //           materialNameAr:string,reqQty:number,availableQty:number,balQty:number) =>{
    // };

    const addRequestMaterialsNTools= async () =>{
        let isValid=true;
        if(isShowMaterials){
            for(let i=0;i<pagesData.length;i++){
               if(pagesData[i].materialCode!=''&& pagesData[i].reqQty!=0 && pagesData[i].availableQty!=0){
                  isValid=true;
               }else{
                isValid=false;
                break;
               }
            }
            if(isValid){
                AsyncStorage.setItem('materialsList'+ticketNumber, JSON.stringify(pagesData));
                if(pagesToolData.length<1){
                  Alert.alert('Add atleast one tool');
                }else{
                  navigation.navigate("AllToolsNMaterialsRequest",{ticketNumber:ticketNumber});
                }
            }else{
                Alert.alert('Please fill all the data');
            }  
        }
        if(isShowTools){
            if(pagesToolData.length<1){
              Alert.alert('Add atleast one tool');
            }else{
              AsyncStorage.setItem('toolsList'+ticketNumber, JSON.stringify(pagesToolData));
              isValid=true;
              for(let i=0;i<pagesData.length;i++){
                if(pagesData[i].materialCode!=''&& pagesData[i].reqQty!=0 && pagesData[i].availableQty!=0){
                   isValid=true;
                }else{
                 isValid=false;
                 break;
                }
             }
             if(isValid){
                 navigation.navigate("AllToolsNMaterialsRequest",{ticketNumber:ticketNumber});
             }else{
                 Alert.alert('Add atleast one material');
             }  
            }
        } 

    };
      const getMaterialList = async (jwttoken:string) => {
        WebServer.getDataWithToken('FomMobItemMaster/getSelectMaterialList',jwttoken,'', materialListCallback);
      };
      const materialListCallback = materialListResponse => {
            setLstMaterial(materialListResponse);
            var count = materialListResponse.length;
            var data=[];
            for (var i = 0; i < count; ++i) {
                data.push({label:materialListResponse[i].textTwo,value:materialListResponse[i].text});
            }
            setMaterialDataList(data);
      }
      
      const handleNextPage = () => {
        if(currentPage <totalPages){
          setCurrentPage(currentPage + 1);
          setToolsHeight(windowHeight);
        }        
      };
      const handlePrevPage = () => {
        if(currentPage >1){
           setCurrentPage(currentPage - 1);
           setToolsHeight(windowHeight);
        }
      };
      const searchData =async (searchText:string) => {
          setSerachTxt(searchText);
          if(currentPage==1){
            if(toolDataList.length>0){
                const startIndex = (currentPage - 1) * parseInt(itemsPerPage);
                const endIndex = startIndex + parseInt(itemsPerPage);
                if(toolDataList.length>parseInt(itemsPerPage)){
                  setIsShowPaging(true);
                }else{
                  setIsShowPaging(false);
                }
                if(searchText!=''){
                  const searchData = toolDataList.filter(item =>
                    item.textTwo.toLowerCase().includes(searchText.toLowerCase())
                  );
                  if(searchData.length>parseInt(itemsPerPage)){
                    setIsShowPaging(true);
                  }else{
                    setIsShowPaging(false);
                  }
                  const itemsToShow = searchData.slice(startIndex, endIndex);
                  setToolDataListForPaging(itemsToShow);
                } else{
                  const itemsToShow = toolDataList.slice(startIndex, endIndex);
                  setToolDataListForPaging(itemsToShow);
                }            
            }  
          }else{
            setCurrentPage(1);
          }
      };

      useEffect(() => {
        if(toolDataList.length>0){
            const startIndex = (currentPage - 1) * parseInt(itemsPerPage);
            const endIndex = startIndex + parseInt(itemsPerPage);
            if(toolDataList.length>parseInt(itemsPerPage)){
              setIsShowPaging(true);
            }else{
              setIsShowPaging(false);
            }
            if(serachTxt!=''){
              const searchData = toolDataList.filter(item =>
                item.textTwo.toLowerCase().includes(serachTxt.toLowerCase())
              );
              if(searchData.length>parseInt(itemsPerPage)){
                setIsShowPaging(true);
              }else{
                setIsShowPaging(false);
              }
              const itemsToShow = searchData.slice(startIndex, endIndex);
              setToolDataListForPaging(itemsToShow);
            } else{
              const itemsToShow = toolDataList.slice(startIndex, endIndex);
              setToolDataListForPaging(itemsToShow);
            }            
        }       
      }, [currentPage]);
         
      useEffect(() => {
        if(toolDataList.length>0){
           setCurrentPage(1);
        }
      }, [toolDataList]);
      const getToolList = async (jwttoken:string) => {
        WebServer.getDataWithToken('FomMobItemMaster/getSelectToolsList',jwttoken,'', toolListCallback);
      };
      const toolListCallback = toolListResponse => {
        if(toolListResponse.length>0){
            setToolDataList(toolListResponse);
            const totalPages = Math.ceil(toolListResponse.length / parseInt(itemsPerPage));
            setTotalPages(totalPages);
        }
        // else{
        //     setToolDataList([]);
        // }
      }
    
    const checkLoginDetails = async () => {
        try {
        let result : any =await AsyncStorage.getItem('userInfo');
        var userInfo = JSON.parse(result);
            if (userInfo !== null && userInfo !== undefined) {
                setLoginToken(userInfo.token);
                getMaterialList(userInfo.token);
                getToolList(userInfo.token);

                let materialsListData : any =await AsyncStorage.getItem('materialsList'+ticketNumber);
                var materialsListInfo = JSON.parse(materialsListData);
                if (materialsListInfo !== null && materialsListInfo !== undefined) {
                    setPagesData(materialsListInfo);
                    setPId(materialsListInfo.length+1);
                    setPageHieght((materialsListInfo.length-1)*80);
                }else{
                    addRow();
                }  

                let toolsListDataAsync : any =await AsyncStorage.getItem('toolsList'+ticketNumber);
                var toolsListInfo = JSON.parse(toolsListDataAsync);
                if (toolsListInfo !== null && toolsListInfo !== undefined) {
                   setPagesToolData(toolsListInfo);
                }
            }
        } catch (error) {
          console.error('AsyncStorage Error:', error);
        }
        
    };

  useEffect(() => {
    checkLoginDetails()
  }, [ticketNumber]);

  return (
    <View style={styles.toolsMaterials}>

      {/* <View style={styles.groupChild11Position}>
        <View style={[styles.groupChild11, styles.groupChild11Position]} />
        <Pressable
          style={styles.arrow21}
          onPress={() => navigation.navigate("Activities",{ticketNumber:ticketNumber})}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text
          style={[styles.toolsMaterials1, styles.arrow21Position]}
        >{`Tools & Materials`}</Text>
      </View> */}

      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildShadowBox3]} />
        <View style={[styles.groupItemTools, isShowTools?styles.groupItemActive:null]} />
        <Pressable
          style={styles.groupInnerTools}
          onPress={showToolsData}>
            <Text style={[styles.tools,{color:isShowTools?Color.whait:Color.praimary}]}>Tools</Text>
        </Pressable>
        <View style={[styles.groupItem, isShowMaterials?styles.groupItemActive:null]} />
        <Pressable
          style={styles.groupInner}
          onPress={showMaterialsData}>
             <Text style={[styles.materials, styles.materialsTypo1,{color:isShowMaterials?Color.whait:Color.praimary}]}>Materials</Text>
        </Pressable>
      </View>
        
        
        { isShowMaterials? <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:(430+pageHieght)}}
            scrollEnabled={(430+pageHieght)<=windowHeight?false:true}
            alwaysBounceVertical={false}>
                <View style={styles.materials1}>
                    {pagesData.map((item:any) => (
                        <ListItem key={item.id} item={item} token={token} changeMaterial={changeMaterial} changeQuantities={changeQuantities} />
                    ))}
                </View>
                <View style={[styles.rectangleParent1, styles.groupChild10Position]}>
                            <Pressable style={[styles.groupChild10, styles.groupChild10Position]} onPress={addRow}>
                                <View style={[styles.groupParent, styles.wrapperFlexBox]}>
                                    <Image
                                        style={styles.frameItem}
                                        resizeMode="cover"
                                        source={require("../assets/group-238960.png")} />
                                    <Text style={[styles.add, styles.addTypo]}>Add</Text>
                                </View>
                            </Pressable>
                </View>

                <View style={[styles.frameParent, styles.frameParentPositionM]}>
                        <View style={[styles.buttonWrapper, styles.wrapperFlexBox]}>
                            <Pressable
                                style={styles.button}
                                onPress={addRequestMaterialsNTools}>
                                    <Text numberOfLines={1} style={[styles.requestMaterials, styles.materialsTypo]}>
                                        View and Confirm
                                    </Text>
                            </Pressable>
                        </View>
                </View>

        </ScrollView> :null}
      
        
        { isShowTools? <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:toolsHeight}} scrollEnabled={toolsHeight==windowHeight?false:true}
            alwaysBounceVertical={false}>
        
        <View style={[styles.rectangleParentTS, styles.parentFlexBox]}>
                        <View style={[styles.frameChildTS, styles.childGroupLayout]} />
                        <View style={styles.frameWrapper}>
                        <View style={[styles.fiRrZoomOutParent, styles.homeIndicatorFlexBox]}>
                            <Image
                            style={styles.fiRrZoomOutIcon}
                            resizeMode="cover"
                            source={require("../assets/firrzoomout.png")}
                            />
                            <TextInput value={serachTxt} onChangeText={(text) => searchData(text)} 
                                     autoCapitalize={'none'} style={styles.searchForThe} placeholder='Search for the , tools, materials...' placeholderTextColor="#000"/>
                            
                        </View>
                        </View>
                    </View>

                    <View style={[styles.frameParentT, styles.frameParentPositionT]}>
                    <View style={[styles.frameGroupT, styles.parentPosition,{height:windowHeight}]}>
                        <View>
                                {toolDataListForPaging.map((item:any) => (
                                    <ListToolItem key={item.value} item={item} qty={pagesToolData.find(titem => titem.toolCode === item.text)?.qty}  changeToolsHieght={changeToolsHieght} addToolRow={addToolRow} totalHieght={toolsHeight} />
                                ))}
                        </View>
                    </View>
                </View>


                { isShowPaging?<View style={styles.frameContainerT}>
                        <View style={styles.showingParent}>
                          <Text style={[styles.showing, styles.textTypoT]}>Showing</Text>
                          {/* <Text style={[styles.textT, styles.textTypoT]}>5</Text> */}
                          <Dropdown
                                activeColor='#fafdff'
                                itemTextStyle={{color:'#030303'}}
                                itemContainerStyle={{backgroundColor:'#fff'}}
                                style={styles.dropdownT}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={showRecordsDataList}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                value={itemsPerPage}
                                onFocus={() => setIsFocus2(true)}
                                onBlur={() => setIsFocus2(false)}
                                onChange={item => {
                                    setItemsPerPage(item.value);
                                    setIsFocus2(false);
                                }}
                                />
                          <Text style={[styles.of50Entries, styles.textTypoT]}>
                            of {toolDataList.length} entries
                          </Text>
                        </View>
                        <View style={styles.groupParentT}>
                            <Pressable
                                onPress={handlePrevPage}>
                                <Image
                                    style={styles.frameLayout}
                                    resizeMode="cover"
                                    source={currentPage==1?require("../assets/group-238805.png"):require("../assets/group-238805-fill.png")}
                                />
                            </Pressable>
                            <Pressable
                                onPress={handleNextPage}>
                                <Image
                                    style={[styles.frameInner, styles.frameLayout]}
                                    resizeMode="cover"
                                    source={currentPage==totalPages?require("../assets/group-238804-empty.png"):require("../assets/group-238804.png")}
                                />
                            </Pressable>
                            
                            
                        </View>
                    </View>:null}

                   <View style={[styles.frameParentTool, styles.frameParentPositionTool]}>
                        <View style={[styles.buttonWrapperTool, styles.wrapperFlexBox]}>
                            <Pressable
                                style={styles.button}
                                onPress={addRequestMaterialsNTools}>
                                    <Text numberOfLines={1} style={[styles.requestMaterials, styles.materialsTypo]}>
                                        View and Confirm
                                    </Text>
                            </Pressable>
                        </View>
                </View>
                
                </ScrollView>:null}

                

                
      
       






      
    </View>
  );
};

const styles = StyleSheet.create({
    dropdownT: {
        height: 30,
        borderColor: Color.color,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop:3,
        width:"35%"
      },
    dropdown: {
        height: 38,
        borderColor: Color.color,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop:3,
      },
      placeholderStyle: {
        fontSize: 13,
      },
      selectedTextStyle: {
        fontSize: 13,
        color:'#030303'
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 13,
      },
  groupChildShadowBox3: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
  },
  materialsTypo1: {
    color: Color.whait,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  frameParentPosition: {
    width: "96%",
    backgroundColor: Color.colorAliceblue_100,
    left: "2%",
    position: "absolute",
  },
  frameParentPositionM: {
    width: "96%",
    position: "absolute",
    left:"2%",
    bottom:30
  },
  wrapperFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  materialsTypo: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  childShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
  },
  homeIndicatorFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  materials1Position: {
  },
  framePosition: {
    right: "0%",
    position: "absolute",
  },
  balTypo: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    fontWeight: "300",
    height: 20,
    textTransform: "capitalize",
    textAlign:'center'
  },
  rectangleLayout: {
    height: 38,
    width: "100%",
  },
  textTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.praimary,
  },
  reqTypo: {
    width: "15%",
    fontSize: FontSize.size_xs,
    display: "flex",
    fontWeight: "300",
    lineHeight: 30,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  addTypo: {
    width: "80%",
    fontSize: 16,
    display: "flex",
    fontWeight: "300",
    lineHeight: 30,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  groupChildShadowBox5: {
    width: "15%",
    height: 38,
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    top: 23,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#fff",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  groupChildShadowBox2: {
    width: "13%",
    height: 38,
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    top: 23,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#fff",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    position: "absolute",
    left:"58%"
  },
  codeFlexBox: {
    left: 3,
    display: "flex",
    lineHeight: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
  },
  balPosition: {
    width: "15%",
    fontSize: FontSize.size_xs,
    display: "flex",
    fontWeight: "300",
    lineHeight: 30,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
  },
  textLayout: {
    width: "100%",
    fontSize: FontSize.size_3xs,
    display: "flex",
    lineHeight: 20,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    left:"15%",
    
  },
  textLayoutReq:{
    width: "15%",
    top: 30,
    fontSize: FontSize.size_3xs,
    display: "flex",
    lineHeight: 30,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    left:"30%"
  },
  groupChild10Position: {
    position: "absolute",
  },
  groupChild11Position: {
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupChild: {
    shadowRadius: 4,
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    right: 0,
    top: 0,
    height: 48,
    width: "100%",
    position: "absolute",
  },
  groupItemTools:{
    top: 5,
    left: "10%",
    width: "45%",
    height: 38,
    position: "absolute",
  },
  groupItem: {
    top: 5,
    right: "5%",
    width: "45%",
    height: 38,
    position: "absolute",
  },
  groupItemActive: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.praimary
  },
  tools: {
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
    width:"100%",
    zIndex:1,
    left:"3%"
  },
  materials: {
    right: "2%",
    textAlign: "center",
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
    width:"100%"
  },
  groupInnerTools:{
    left: "3%",
    width: "42%",
    height: 28,
    top: 15,
    position: "absolute",
    zIndex:1
  },
  groupInner: {
    right: 0,
    width: "50%",
    height: 28,
    top: 15,
    position: "absolute",
    zIndex:1
  },
  rectangleParent: {
    top: 10,
    left: "2%",
    height: 48,
    width: "96%",
    position: "absolute",
    zIndex:1
  },
  requestMaterials: {
    width: "100%",
    color: Color.whait,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  button: {
    height: 56,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    backgroundColor: Color.praimary,
    width: "100%",
  },
  button2: {
    height: 35,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    backgroundColor: Color.praimary,
    left:2,
    top: 150,
  },
  buttonWrapper: {
    width:'100%',
  },
  buttonWrapperTool: {
    width:'100%',
  },
  frameChild: {
    zIndex: 0,
    borderRadius: Border.br_3xs,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    height: 48,
    width: "100%",
  },
  fiRrZoomOutIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  searchForThe: {
    fontSize: 14,
    color: '#000',
    width: "95%",
    marginLeft: 5,
    height: 40,
    fontWeight: "300",
    display: "flex",
    textAlign: "left",
    lineHeight: 25,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
  },
  fiRrZoomOutParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    left: 16,
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    top: 5,
    position:'absolute'
  },
  rectangleGroup: {
    alignItems: "flex-end",
    top: 24,
    justifyContent: "center",
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  materials2: {
    width: "40%",
    color: Color.black,
    display: "flex",
    lineHeight: 30,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "center",
    left:"20%"
  },
  rectangleView: {
    left: 0,
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    width: 139,
    top: 0,
    position: "absolute",
  },
  selectMaterials: {
    top: 10,
    left: 8,
    width: 73,
    display: "flex",
    lineHeight: 30,
    alignItems: "center",
    fontFamily: FontFamily.dGBaysan,
    textAlign: "left",
    height: 16,
    position: "absolute",
  },
  frameIcon: {
    top: 13,
    left: 121,
    width: 10,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleContainer: {
  },
  materialsParent: {
    width: "40%",
    left: "17%",
    height: 40,
    position: "absolute",
  },
  avail: {
    left: "56%",
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    left: "58%",
    width: "15%",
  },
  code: {
    width: "15%",
    color: Color.black,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    height: 20,
    textTransform: "capitalize",
    top: 0,
  },
  groupChild2: {
    left: 0,
  },
  req: {
    left: "70%",
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox1: {
    left: "72%",
    width: "13%",
    height: 38,
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    top: 23,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#fff",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  bal: {
    left: "85%",
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox: {
    left: "86%",
    width: "13%",
    height: 38,
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    top: 23,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#fff",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  balParent: {
    left: 299,
    height: 60,
  },
  text: {
    top: 30,
    width: "15%",
    height: 38,
    fontSize: FontSize.size_4xs,
    color: Color.praimary,
  },
  text1: {
  },
  text2: {
  },
  text3: {
    left: 314,
  },
  frameGroup: {
    top: "0%",
    width: "100%",
    height:200
  },
  groupChild5: {
    left: 0,
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    width: 139,
    top: 0,
    position: "absolute",
  },
  groupChild6: {
    left: 201,
    width: 36,
  },
  groupChild7: {
    left: 0,
  },
  frameContainer: {
    top: "38.78%",
    bottom: "30.61%",
    left: "0.29%",
    width: "99.71%",
    height: "30.61%",
  },
  groupChild10: {
    borderColor: Color.grayDark,
    borderWidth: 1.5,
    height: 40,
    width: "30%",
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    left:"3%"
  },
  frameItem: {
    width: 12,
    height: 12,
    top:"25%",
    left:-25
  },
  add: {
    color: Color.grayDark,
    top:"-25%",
  },
  groupParent: {
    height: 40,
    width: "100%",
  },
  rectangleParent1: {
    width: "100%",
    position:'absolute',
    bottom:200
  },
  materials1: {
    top: 80,
    width: "96%",
    position: "absolute",
    left:"2%"
  },
  homeIndicator1: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    alignSelf: "stretch",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    height: 34,
  },
  webViewbottom: {
    bottom: 0,
    height: 34,
  },
  frameParent: {
    bottom: 0,
    height: 50,
  },
  frameParentTool: {
    bottom:120,
    height: 50,
    width:"100%"
  },
  groupChild11: {
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
    left: 21,
    width: 54,
    height: 21,
    top: 12,
    position: "absolute",
  },
  iphoneXOrNewer: {
    marginLeft: -185.5,
    width: 371,
    height: 35,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    width: "100%",
  },
  arrow21: {
    left: "5%",
    width: 25,
    top:"30%",
    height: 25,
    zIndex:2
  },
  toolsMaterials1: {
    fontSize: 20,
    width: "100%",
    top: 15,
    color: Color.praimary,
    height: 25,
    textAlign: "center",
    lineHeight: 25,
    zIndex:1
  },
  toolsMaterials: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },



frameParentT: {
    top: 120,
    width: "100%",
},
frameParentPositionT: {
    backgroundColor: Color.colorAliceblue_100,
    width: "98%",
    left: "1%",
    position: "absolute",
},
frameParentPositionTool: {
  width: "96%",
  position: "absolute",
  right:"2%"
},
frameGroupT: {
    top: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
},
parentPosition: {
    left: 0,
    position: "absolute",
},
tools1: {
    width: "100%",
},
toolsChild: {
    borderTopWidth: 0.5,
},
frameIconT: {
    width: 30,
    top: 14,
    height: 30,
    left: 12,
    position: "absolute",
    overflow: "hidden",
    zIndex:1
},
iconT:{
  width: 30,
  height: 30,
},
name: {
    left: 55,
    width: 200,
    color: Color.black,
    top: 15,
    fontSize: FontSize.size_sm,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    height: 25,
    alignItems: "center",
    position: "absolute",
    fontWeight:'bold'
},
copperWires: {
    left: 175,
    width: 200,
    top: 15,
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    lineHeight: 30,
    height: 25,
    alignItems: "center",
    position: "absolute",
    fontWeight:'bold'
},
typeName: {
  left: 55,
  width: 200,
  color: Color.black,
  top: 50,
  fontSize: FontSize.size_sm,
  display: "flex",
  textAlign: "left",
  fontFamily: FontFamily.dGBaysan,
  lineHeight: 30,
  height: 25,
  alignItems: "center",
  position: "absolute",
  fontWeight:'bold'
},
typecopperWires: {
  left: 175,
  width: 200,
  top: 50,
  color: Color.praimary,
  textTransform: "capitalize",
  fontSize: FontSize.size_sm,
  display: "flex",
  textAlign: "left",
  fontFamily: FontFamily.dGBaysan,
  lineHeight: 30,
  height: 25,
  alignItems: "center",
  position: "absolute",
  fontWeight:'bold'
},
toolQuantityView:{
  width: "100%",
  top: 45,
  display: "flex",
  textAlign: "left",
  fontFamily: FontFamily.dGBaysan,
  lineHeight: 30,
  height: 50,
  alignItems: "center",
  position: "absolute",
},
toolsPosition: {
  borderBottomWidth: 0.2,
  left: -8,
  bottom: "0%",
  right: "0%",
  top: "0%",
  height: "100%",
  borderColor: Color.color,
  borderStyle: "solid",
  position: "absolute",
  alignItems:'flex-start'
},
frameContainerT: {
    width:"100%",
    left:"2%",
    bottom:120,
    height:100,
    position: "absolute",
    alignItems:'flex-start'
},
showingParent: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    position:'absolute',
    width:"50%",
    left:"5%"
},
showing: {
    width: "30%",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    height: 25,
},
textTypoT: {
    fontSize: FontSize.size_xs,
    color: Color.black,
    display: "flex",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "300",
    lineHeight: 30,
    alignItems: "flex-start",
},
groupView: {
    width: 27,
    height: 12,
    marginLeft: 12,
},
parent: {
    top: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
},
textT: {
    width: 12,
    height: 10,
    textAlign: "center",
    justifyContent: "center",
},
frameIcon5: {
    marginLeft: 9,
    overflow: "hidden",
},
iconLayoutT: {
    height: 6,
    width: 6,
},
lineView: {
    width: 28,
    height: 1,
    borderTopWidth: 0.5,
    top: 12,
    borderColor: Color.color,
    borderStyle: "solid",
},
of50Entries: {
    width: "35%",
    marginLeft: 12,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    height: 25,
},
groupParentT: {
    flexDirection: "row",
    width:"45%",
    right:0,
    justifyContent: "center",
    alignItems: "flex-end",
    position:'absolute',
    top:"5%"
},
frameLayout: {
    width: 40,
    height: 24,
},
frameInner: {
    marginLeft: 8,
},


rectangleParentTS: {
    top: 80,
    justifyContent: "center",
    position: "absolute",
    alignItems: "flex-end",
    width:"90%",
    left:"5%",
  },
  frameChildTS: {
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 0.5,
    zIndex: 0,
    borderColor: Color.color,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    height: 48,
    borderRadius: Border.br_3xs,
  },

  parentFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  childGroupLayout: {
    height: 48,
    width: "100%",
  },
  textp:{
    top: 48,
    left: 205,
    width: 45,
    fontSize: 14,
    display: "flex",
    lineHeight: 20,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#fff",
    backgroundColor: Color.whait,
    borderRadius: Border.br_5xs,
    
  },
  minusicon:{
    left: 165,
    width: 32,
    height:32,
    top: 50,
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
    fontWeight:'bold',
    zIndex:1
  },
  plusicon:{
    left: 260,
    width: 32,
    height:32,
    top: 50,
    color: Color.praimary,
    textTransform: "capitalize",
    fontSize: FontSize.size_sm,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    fontWeight:'bold',
    zIndex:1
  },

});

export default ToolsNMaterial;
