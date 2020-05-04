import React, { useState } from 'react';
import {
    View, 
    StyleSheet, 
    StatusBar,
    Text,
    TouchableOpacity,
    Platform,
    AsyncStorage,
    I18nManager
} from 'react-native';
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
I18nManager.isRTL= 'false'

import { Ionicons, Octicons, Foundation, Feather } from '@expo/vector-icons';
// Import screens components 
import MainScreen from '../components/MainScreen'
import SavedCode from '../components/SavedCodes'
import SettingScreen from '../components/SettingScreen'
const TarPage = ({
     navigation,
     themeTextStyle,
     themeContainerStyle,
     themeCmdInput, 
     themeBackCode, 
     themeBackChoser, 
     themeOfStatusBar}) =>{

        const [mainScreenShow, setMainScreenShow] = useState('flex');
        const [savedScreenShow, setSavedScreen] = useState('none');
        const [settingScreen, setSettingScreen] = useState('none');

        const[mainScreenColor, setMainScreenColor] = useState('#0A65D4');
        const[savedScreenColor, setSavedScreenColor] = useState('#95989A');
        const[settingScreenColor, setSettingScreenColor] = useState('#95989A');
        const[statusColor, setColorStatus] = useState('light-content');

        const [results, setResults] = useState([]);


        const mainScreenFun = () =>{
            setMainScreenShow('flex');
            setSavedScreen('none');
            setSettingScreen('none');
            // Colors 
            setMainScreenColor('#0A65D4');
            setSavedScreenColor('#95989A');
            setSettingScreenColor('#95989A');
            setColorStatus('light-content');
        }   
        const SavedScreenFun = () =>{
            setMainScreenShow('none');
            setSavedScreen('flex');
            setSettingScreen('none');
            // Colors 
            setMainScreenColor('#95989A');
            setSavedScreenColor('#EE596C');
            setSettingScreenColor('#95989A');
            setColorStatus('dark-content');
            
            AsyncStorage.getAllKeys().then((key) => {
                return AsyncStorage.multiGet(key)
                  .then((result) => {
                    setResults((result));
                    console.log(results);
                  }).catch((e) =>{
                    console.log(e);
                  });
              });
            
        } 
        const SettingScreenFun = () =>{
            setMainScreenShow('none');
            setSavedScreen('none');
            setSettingScreen('flex');
            // Colors 
            setMainScreenColor('#95989A');
            setSavedScreenColor('#95989A');
            setSettingScreenColor('#C1C3F3');
            setColorStatus('dark-content');
        } 
    
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            {/* Import Lunch page */}
            <View style={{display:`${mainScreenShow}`}}>
                <MainScreen navigation={navigation} statusColor={statusColor}/> 
            </View>
            {/* Import saved screen and show */}
            <View style={{display:`${savedScreenShow}`}}>
                <SavedCode results={results} statusColor={statusColor}/>
            </View>
            <View style={{display:`${settingScreen}`}}>
                <SettingScreen statusColor={statusColor}/>
            </View>

            {/* navigation bar in bottom */}
            <View style={styles.navBar}>
                <TouchableOpacity style={{flexDirection:'column'}} onPress={()=>{ SettingScreenFun()}}>
                    <Ionicons name="ios-cog" size={25} style={{color:`${settingScreenColor}`, marginTop:8, marginHorizontal:40 }}/>
                    <Text style={{marginHorizontal:0, textAlign:'center', color:`${settingScreenColor}`}}>تنظیمات</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ SavedScreenFun()}}>
                    <Octicons name="bookmark" size={25} style={{color:`${savedScreenColor}`, marginTop:8, marginHorizontal:25}}/>
                    <Text style={{marginHorizontal:0, textAlign:'center', color:`${savedScreenColor}`}}>ذخیره شده</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ mainScreenFun()}}>
                    <Foundation name="home" size={25} style={{color:`${mainScreenColor}`, marginTop:8, marginHorizontal:40}}/>
                    <Text style={{marginHorizontal:0, textAlign:'center', color:`${mainScreenColor}`}}>خانه</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       flexDirection:'column',
       backgroundColor:'#F8F9FD',
       alignItems:'center'
   },
   navBar:{
    width: '100%',
    height: Platform.OS === 'ios' ? 80 : 60,
    backgroundColor: '#FBFBFB',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    alignSelf:'flex-start',
    borderTopColor:'#E4E4E4',
    borderTopWidth:1
},
});

export default TarPage;


