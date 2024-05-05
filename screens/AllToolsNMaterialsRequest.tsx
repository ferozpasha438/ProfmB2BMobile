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


const ListToolItem = ({ item,index, deleteTool }) => {
    // State to manage modal visibility
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

    const handleDelete = async ()=>{
        deleteTool(item.toolCode);
    };
    
    return (
        <View style={[styles.frameParent, styles.parentFlexBox,{height:100,top:((index)*100+130)}]}>
            <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-2388071.png")}
            />
            <View style={styles.toolParent}>
            <Text style={[styles.tool, styles.toolTypo]}>Tool</Text>
            <Text style={styles.screwdriver}>{item.toolName}</Text>
            </View>
            <TouchableOpacity
                    style={styles.frameIcon}
                    onPress={handleDelete}>
                            <Image
                                        style={styles.frameIcon}
                                        resizeMode="cover"
                                        source={require("../assets/frame10Delete.png")}
                                        />
                    </TouchableOpacity>
            
        </View>               
            
      );
  };


  const ListItem = ({ item,index,topCountValue}) => {
    // State to manage modal visibility
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  
    return (
        <View style={[styles.frameGroupM, styles.framePosition,{top:(index*70)+topCountValue}]}>
          <Text style={[styles.codeM, styles.codeFlexBox]}>Code</Text>
          <Text style={[styles.textLayout,styles.groupChildShadowBox5]}>{item.materialCode}</Text>

          <Text style={[styles.materials2, styles.balTypo]}>Materials</Text>
          <Text style={[styles.textLayout,styles.groupChildShadowBox6]}>{item.materialName}</Text>
          
          <Text style={[styles.avail, styles.reqTypo]}>Avail</Text>
          <Text style={[styles.textLayout,styles.groupChildShadowBox2]}>{item.availableQty}</Text>

          <Text style={[styles.req, styles.reqTypo]}>Req</Text>
          <Text style={[styles.textLayout,styles.groupChildShadowBox1]}>{item.reqQty}</Text>

          <Text style={[styles.bal, styles.reqTypo]}>Bal</Text>
          <Text style={[styles.textLayout,styles.groupChildShadowBox]}>{item.balQty}</Text>

        </View>
        
            
    );
  };

const AllToolsNMaterialsRequest = ({route}) => {
  const {ticketNumber}=route.params;
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const windowHeight = Dimensions.get('screen').height;
    const windowWidth = Dimensions.get('screen').width;
    const [pid, setPId] = useState(1);
    const [pagesData, setPagesData] = useState<any[]>([]);
    const [pagesToolData, setPagesToolData] = useState<any[]>([]);
    const [pageHieght, setPageHieght] = useState(200);
    
    const confirmToolsNMaterials = async () =>{

        let materialsListFinalData : any =await AsyncStorage.getItem('finalMaterialList'+ticketNumber);
        var materialsListFinalInfo = JSON.parse(materialsListFinalData);
        if (materialsListFinalInfo !== null && materialsListFinalInfo !== undefined) {
            const finalMatData = [...materialsListFinalInfo, ...pagesData];
            const mergedArray = finalMatData.reduce((acc, current) => {
              // Check if an object with the same id exists in the accumulator array
              const existingItem = acc.find(item => item.id === current.id);
              if (!existingItem) {
                // If not found, add the current object to the accumulator array
                acc.push(current);
              } else {
                // If found, merge the properties of the current object into the existing object
                existingItem.reqQty += current.reqQty;
                existingItem.availableQty += current.availableQty;
                existingItem.balQty += current.balQty;
              }
              return acc;
            }, []);
            AsyncStorage.setItem('finalMaterialList'+ticketNumber, JSON.stringify(mergedArray));
        }else{
            AsyncStorage.setItem('finalMaterialList'+ticketNumber, JSON.stringify(pagesData));
        }  

        let toolsListDataFinalAsync : any =await AsyncStorage.getItem('finalToolsList'+ticketNumber);
        var toolsListFinalInfo = JSON.parse(toolsListDataFinalAsync);
        if (toolsListFinalInfo !== null && toolsListFinalInfo !== undefined) {
            const finalToolData = [...toolsListFinalInfo, ...pagesToolData];
            const mergedToolArray = finalToolData.reduce((acc, current) => {
              // Check if an object with the same id exists in the accumulator array
              const existingItem = acc.find(item => item.toolCode === current.toolCode);
              if (!existingItem) {
                // If not found, add the current object to the accumulator array
                acc.push(current);
              } else {
                // If found, merge the properties of the current object into the existing object
                existingItem.qty += current.qty;
              }
              return acc;
            }, []);
            AsyncStorage.setItem('finalToolsList'+ticketNumber, JSON.stringify(mergedToolArray));
        }else{
            AsyncStorage.setItem('finalToolsList'+ticketNumber, JSON.stringify(pagesToolData));
        }
        
        navigation.pop();
        navigation.pop();
        var items = ['materialsList'+ticketNumber,'toolsList'+ticketNumber];
        AsyncStorage.multiRemove(items);
        navigation.navigate("Activities",{ticketNumber:ticketNumber});
    };
    const deleteTool= async (toolCode:string) =>{
        setPagesToolData(pagesToolData.filter(item => item.toolCode != toolCode));
    };
    const getToolsNMaterialsDetails = async () => {
      try {
        let materialsListData : any =await AsyncStorage.getItem('materialsList'+ticketNumber);
        var materialsListInfo = JSON.parse(materialsListData);
        if (materialsListInfo !== null && materialsListInfo !== undefined) {
            setPagesData(materialsListInfo);
            setPId(materialsListInfo.length+1);
            setPageHieght((materialsListInfo.length-1)*80);
        } 

        let toolsListDataAsync : any =await AsyncStorage.getItem('toolsList'+ticketNumber);
        var toolsListInfo = JSON.parse(toolsListDataAsync);
        if (toolsListInfo !== null && toolsListInfo !== undefined) {
           setPagesToolData(toolsListInfo);
        }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
    
};

useEffect(() => {
    getToolsNMaterialsDetails()
}, [ticketNumber]);

  return (
    <View style={styles.allRequest}>
      <View style={styles.tapPosition}>
        <View style={[styles.tapChild, styles.tapPosition]} />
        <Pressable
          style={styles.arrow21T}
          onPress={() => navigation.navigate("ToolsNMaterial",{ticketNumber:ticketNumber})}
        >
          <Image
            style={styles.iconT}
            resizeMode="cover"
            source={require("../assets/arrow-2-1.png")}
          />
        </Pressable>
        <Text style={[styles.serviceRequest, styles.arrow21PositionT]}>
          All Request
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}
            contentContainerStyle={{ height:((pagesToolData.length*100)+(pagesData.length*70)+350)}}
            scrollEnabled={true}
            alwaysBounceVertical={false}>
               <Text style={styles.totalOf4Container}>
                    <Text style={styles.totalOf4Container1}>
                    <Text style={styles.totalOf}>{`total of `}</Text>
                    <Text style={styles.text1}>{pagesToolData.length+pagesData.length}</Text>
                    <Text style={styles.totalOf}> items</Text>
                    </Text>
                </Text>

                <Text style={[styles.tools, styles.toolTypoT]}>Tools</Text>
                
                    {pagesToolData.map((item:any,index:any) => (
                                <ListToolItem key={item.toolCode} item={item} index={index} deleteTool={deleteTool}/>
                    ))}
                
                <Text style={[styles.materials3, styles.toolTypo,{top:((pagesToolData.length*100)+160)}]}>Materials</Text>
                
                <View style={styles.materials1}>
                    {pagesData.map((item:any,index:any) => (
                        <ListItem key={item.id} item={item} index={index} topCountValue={((pagesToolData.length*100)+80)}  />
                    ))}
                </View>
                
                
                
                

                <Pressable
                    style={[styles.button, styles.parentFlexBox]}
                    onPress={confirmToolsNMaterials}
                >
                    <Text style={styles.text}>{`confirm tools & materials`}</Text>
                </Pressable>
        </ScrollView>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  toolTypo: {
    color: Color.black,
    height: 25,
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    alignItems: "center",
  },
  groupFramePosition: {
    left: "4.27%",
    right: "4.27%",
    width: "91.47%",
    height: "7.39%",
    position: "absolute",
  },
  codeTypo: {
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    height: 16,
    display: "flex",
    fontWeight: "300",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    alignItems: "center",
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
  groupChildShadowBox6: {
    width: "38%",
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
    left:"18%"
  },
  codePosition: {
    top: 0,
    position: "absolute",
  },
  balPosition: {
    width: 43,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    height: 12,
    top: 36,
    fontSize: FontSize.size_3xs,
    color: Color.black,
    display: "flex",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  textLayout: {
    width: "100%",
    fontSize: FontSize.size_3xs,
    display: "flex",
    lineHeight: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.praimary,
    fontFamily: FontFamily.dGBaysan,
    position: "absolute",
    left:"15%",
  },
  lubricantsLayout: {
    width: 66,
    fontSize: FontSize.size_3xs,
    left: 8,
    top: 10,
    color: Color.black,
    height: 16,
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    alignItems: "center",
    position: "absolute",
  },
  groupChild12Position: {
    height: 87,
    top: 0,
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
  },
  iconPosition: {
    display: "none",
    position: "absolute",
  },
  arrow21Position: {
    height: 24,
    top: 48,
    position: "absolute",
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
    alignItems: "center",
    height: 34,
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
  text: {
    color: Color.whait,
    width: 291,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
  },
  button: {
    bottom: 50,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.praimary,
    width: "96%",
    height: 56,
    paddingHorizontal: Padding.p_111xl,
    paddingVertical: Padding.p_sm,
    justifyContent: "center",
    position: "absolute",
    left:"2%"
  },
  totalOf: {
    color: Color.colorLightsteelblue_100,
  },
  text1: {
    color: Color.praimary,
  },
  totalOf4Container1: {
    width: "100%",
  },
  totalOf4Container: {
    top: 65,
    left: "3%",
    width: "100%",
    height: 25,
    fontWeight: "300",
    display: "flex",
    textAlign: "left",
    lineHeight: 30,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    alignItems: "center",
    position: "absolute",
  },
  frameChild: {
    width: 80,
    height: 80,
  },
  tool: {
    fontSize: FontSize.size_sm,
    width: 150,
    color: Color.black,
  },
  screwdriver: {
    marginTop: 8,
    color: Color.grayDark,
    fontSize: FontSize.size_xs,
    width: 102,
    height: 25,
    display: "flex",
    textAlign: "left",
    fontWeight: "300",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    alignItems: "center",
  },
  toolParent: {
    marginLeft: 16,
    width:"90%"
  },
  groupParent: {
    width:"100%",
    height:100,
    position:'absolute'
  },
  frameIcon: {
    width: 20,
    height: 20,
    left: "70%",
    display: "flex",
    alignItems:'flex-end',
    position:'absolute'
  },
  frameParent: {
    top: 135,
    left: "3%",
    position: "absolute",
  },
  materials: {
    width: 52,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  groupChildShadowBox3: {
    borderWidth: 0.5,
    borderColor: Color.color,
    borderStyle: "solid",
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    left: 0,
    top: 0,
    height: 36,
    width: 139,
    position: "absolute",
  },
  rectangleParent: {
    height: 36,
    width: 139,
    marginTop: 8,
  },
  materialsParent: {
    width: "40.52%",
    top: "0%",
    right: "45.19%",
    bottom: "0%",
    left: "14.29%",
    height: "100%",
    position: "absolute",
  },
  avail: {
    left: "56%",
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 201,
    width: 36,
    top: 24,
  },
  code: {
    left: 3,
    width: 31,
    fontSize: FontSize.size_xs,
    color: Color.praimary,
    height: 16,
    display: "flex",
    fontWeight: "300",
    lineHeight: 30,
    fontFamily: FontFamily.dGBaysan,
    textTransform: "capitalize",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  groupInner: {
    width: 36,
    top: 24,
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
  text2: {
    width: 12,
    height: 12,
    top: 36,
    left: 16,
  },
  balParent: {
    left: 300,
    height: 60,
  },
  text3: {
    width: 28,
    height: 12,
    top: 36,
    left: 4,
    fontWeight: "300",
  },
  text4: {
    left: 212,
  },
  text5: {
    left: 262,
    width: 12,
    height: 12,
    top: 36,
  },
  frameGroup: {
    top: "34.36%",
    bottom: "58.25%",
  },
  groupChild3: {
    left: 201,
    width: 36,
    top: 24,
  },
  groupChild4: {
    width: 36,
    top: 24,
    left: 0,
  },
  frameContainer: {
    top: "43.72%",
    bottom: "48.89%",
  },
  spareParts: {
    textTransform: "capitalize",
    width: 66,
    fontSize: FontSize.size_3xs,
    left: 8,
    top: 10,
  },
  groupChild8: {
    left: 201,
    width: 36,
    top: 24,
  },
  groupChild9: {
    width: 36,
    top: 24,
    left: 0,
  },
  text13: {
    left: 261,
  },
  groupView: {
    top: "53.08%",
    bottom: "39.53%",
  },
  materials3: {
    left: 16,
    width: 102,
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  groupChild12: {
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.whait,
    height: 87,
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
    right: 0,
    width: 24,
    height: 11,
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
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  arrow21: {
    right: 335,
    width: 24,
  },
  allRequest1: {
    marginLeft: -74.5,
    width: 149,
    color: Color.praimary,
    display: "flex",
    lineHeight: 30,
    height: 24,
    top: 48,
    textAlign: "center",
    fontFamily: FontFamily.dGBaysan,
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
  },
  allRequest: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray_100,
  },
  tapPosition: {
    height: 50,
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex:1
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
    arrow21T: {
        left: "5%",
        width: 25,
        top:"30%",
        height: 25,
        zIndex:2
    },
    iconT: {
        overflow: "hidden",
        width: "100%",
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
    arrow21PositionT: {
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
    tools: {
        top: 100,
        left: "3%",
        width: "100%",
        color: Color.black,
        fontSize: FontSize.size_base,
        position: "absolute",
    },
    toolTypoT: {
        width: "100%",
        color: Color.black,
        height: 25,
        display: "flex",
        textAlign: "left",
        lineHeight: 30,
        fontFamily: FontFamily.dGBaysan,
        fontWeight: "700",
        textTransform: "capitalize",
        alignItems: "center",
    },
    materials1: {
        top: 120,
        width: "96%",
        position: "absolute",
        left:"2%"
    },
    frameGroupM: {
        top: "0%",
        width: "100%",
        height:200
      },
      framePosition: {
        right: "0%",
        position: "absolute",
      },
      codeM: {
        width: "15%",
        color: Color.black,
        fontSize: FontSize.size_xs,
        fontWeight: "300",
        height: 20,
        textTransform: "capitalize",
        top: 0,
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
      textM: {
        top: 30,
        width: "15%",
        height: 38,
        lineHeight:38,
        fontSize: FontSize.size_4xs,
        color: Color.praimary,
      },
      textMaterial:{
        top: 30,
        width: "15%",
        height: 38,
        fontSize: FontSize.size_4xs,
        color: Color.praimary,
      },
      groupChildShadowBox5: {
        width: "16%",
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
        left:"1%"
      },
      materialsParentM: {
        width: "40%",
        left: "17%",
        height: 40,
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
    
});

export default AllToolsNMaterialsRequest;
