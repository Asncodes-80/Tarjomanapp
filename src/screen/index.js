import React, { useState, useEffect} from 'react';
import {StyleSheet, I18nManager, AsyncStorage} from 'react-native';
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
I18nManager.isRTL= 'false'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
//import home page
import TarPage from '../screen/TarPage'

const index = ({navigation}) =>{
    
    const colorScheme = useColorScheme();
     //validating variable for dark/light mode in ios and android
    const themeTextStyle =
        colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeCmdInput = 
        colorScheme === 'light' ? styles.lightInputer : styles.darkInputer;
    const themeBackCode = 
        colorScheme === 'light' ? styles.lightCode : styles.darkCode;
    const themeBackChoser =
       colorScheme === 'light' ? styles.lightChoser : styles.darkChoser;
    const themeOfStatusBar=
        colorScheme === 'light' ? "dark-content": "light-content";

        //Welcome screen for One show that
        const componentShower = async() =>{
            const value = await AsyncStorage.getItem("appear");
            if(value === null){
                navigation.navigate('WelcomeScreen');
                

            }
        }
        componentShower();


        
        return(
            <AppearanceProvider>
                 <TarPage
                     navigation={navigation}
                     themeTextStyle={themeTextStyle}
                     themeContainerStyle={themeContainerStyle}
                     themeCmdInput={themeCmdInput}
                     themeBackCode={themeBackCode}
                     themeBackChoser={themeBackChoser}
                     themeOfStatusBar={themeOfStatusBar}
                 />
            </AppearanceProvider>
 
     )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    lightContainer:{
        backgroundColor:'whitesmoke'
    },
    darkContainer:{
        backgroundColor:'#1C1C1D'
    },
    lightThemeText:{
        color:'black'
    },
    darkThemeText:{
        color:'white'
    },
    lightInputer:{
        backgroundColor:'#FFFFFF',
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius:10
    },
    darkInputer:{
        backgroundColor:'#1C1C1D',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 100,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius:10
    },
    lightCode:{
        backgroundColor:'#FFFFFF',
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius:30
    },
    darkCode:{
        backgroundColor:'#243441',
        shadowColor: "#0C1116",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 100,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius:30
    },
    lightChoser:{
        backgroundColor:'#C4C4C4',
    },
    darkChoser:{
        backgroundColor:'#1C1C1D',
    },
    choseLanPageSectionLight:{
        backgroundColor:"#5A5A5A"
    },
});
export default index