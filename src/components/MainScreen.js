import React, { useState, useEffect } from 'react';
import {
    View, 
    Text, 
    Alert, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView,
    Image,
    StatusBar,
    Dimensions,
    I18nManager,
    isRTL
} from 'react-native';
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
I18nManager.isRTL= 'false'

import { Ionicons } from '@expo/vector-icons';
//import Components
import CmdInputer from '../components/CmdInputer'
//Import my Pro data 
import Prodata from '../components/ImportantAndPro'
//]Import to description
import ABitofInctance from '../components/ABitofInctance'
import { LinearGradient } from 'expo-linear-gradient';
const MainScreen = ({
     navigation,
     themeTextStyle,
     themeContainerStyle,
     themeCmdInput, 
     themeBackCode, 
     themeBackChoser, 
     themeOfStatusBar,
     statusColor, 
     step}) =>{

    //State and Var placement
    //to get name of programming language to EN and For database set
    const chLanguage = navigation.getParam('lanName');
    //to get name of programming language to EN and For database set
    const chLanguageFA = navigation.getParam('name');
    //To ger Language ID :
    const langId = navigation.getParam('langId');
    const [cmd, setCmd] = useState('');
        
    const goToResultScreen = () =>{
            if(cmd == ""){
                navigation.navigate('index')
                Alert.alert(
                    'خطا',
                    'لطفا دستور مورد نظر را وارد کنید.',
                    [
                    {text:'الان بررسی می کنم', onPress:()=> console.log('ok')}
                    ],
                    { cancelable: false }
                )
            }else{
                 navigation.navigate('ResultScreen',{ cmd: cmd, langId:langId, chLanguage: chLanguage});
            }    
    }


    return(
        <View style={styles.container}>
                <StatusBar barStyle={statusColor} backgroundColor="#F954DE"/>
            
            <LinearGradient
                style={{
                    width:Dimensions.get('window').width-0,
                    height:250,
                    borderRadius:40,
                    marginTop:-40
                    }} colors={[`#F954DE`, `#4F0BA8`]}>

                    <Text style={{
                        marginTop:100, 
                        fontSize:25, 
                        marginHorizontal:20, 
                        fontWeight:'bold', 
                        textAlign: isRTL? 'left' : 'right', 
                        color:'white',  
                        writingDirection:'ltr'
                        }}>
                        ترجمان
                        </Text>

                    <CmdInputer
                        data={cmd}
                        setCmd={setCmd}
                        setChange={(newSearch)=>setCmd(newSearch)}
                    />

           </LinearGradient>

            <ScrollView showsVerticalScrollIndicator={false} style={{margin:0, padding:0}}> 
            
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('ChoseLan')}}
                    
                        style={{
                            alignSelf: isRTL? 'flex-start' : 'flex-end', 
                            alignContent:'flex-end', 
                            textAlign:'right', 
                            backgroundColor:'#1F5592',
                            borderRadius:5,
                            width:160,
                            height:40,
                            marginTop:40,
                            marginHorizontal: 15
                            }}>
                        <Text style={styles.choseLanguageText}>انتخاب زبان</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    style={{marginHorizontal:10, alignSelf:isRTL? 'flex-end' : 'flex-start'}}
                    onPress={()=> { goToResultScreen()}}>
                        <View style={styles.submitToCode}>
                            <Ionicons name="ios-arrow-back" size={40} color="#EE596C" style={{ fontWeight:'bold'}}/>
                            <Text
                                style={{
                                    color:"#EE596C",
                                    fontSize:20,
                                    fontWeight:'bold',
                                    marginLeft:10
                                }}
                            >{chLanguageFA}</Text>
                        </View>
                    </TouchableOpacity>
            
            

           
                <View style={{borderBottomColor:'#8F8F8F', borderBottomWidth:0.75, marginTop:30, marginHorizontal:-15}}/>                        
                    <Prodata setCmd={setCmd}/>
                <View style={{borderBottomColor:'#8F8F8F', borderBottomWidth:0.75, marginTop:30, marginHorizontal:-15}}/>
                    <ABitofInctance step={step}/>

            </ScrollView>


        </View>
    )
}
const styles = StyleSheet.create({
   container:{
       flex:1,
       flexDirection:'column',
       backgroundColor:'#EFF0F5',
       alignItems:'center'
   },
   choseLanguageText:{
       alignSelf:'center',
       color:'white',
       fontSize:18,
       marginTop:5,
       fontWeight:'bold'
   },
   submitToCode:{
       flexDirection:'row',
       alignItems:'center',
       marginTop:30,
       alignSelf:'flex-start', 
       alignContent:'flex-start', 
       textAlign:'left',
       marginLeft:-10
   },
   scrollViewStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
},
});

export default MainScreen;


