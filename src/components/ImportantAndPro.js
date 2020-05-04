import React, { useState } from 'react';
import {
    View, 
    Text,  
    StyleSheet, 
    TouchableOpacity, 
    FlatList, 
    ScrollView,
    I18nManager,
    isRTL
} from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const Prodata = ({setCmd}) =>{
    

        //Create data for important command to search
        const importantCmd = [
            {
                key:'1',
                cmdName:'کلاس',
                width:160,
                height:40,
                color1:'#802F25',
                color2:'#B03C41'
                
            },
            {
                key:'2',
                cmdName:'تابع',
                width:160,
                height:40,
                color1:'#1A684E',
                color2:'#44A7A0'
            }] 
            const importantCmd2 = [
            {
                key:'3',
                cmdName:'States',
                width:160,
                height:40,
                color1:'#896651',
                color2:'#A07B6A'
            },
            {
                key:'4',
                cmdName:'تعریف متغیر',
                width:160,
                height:40,
                color1:'#1F5592',
                color2:'#1F5592'
            },
        ]
        
        const proData = [
            {
                key:'5',
                cmdName:'حلقه',
                width:160,
                height:40,
                color1:'#8B601E',
                color2:'#B08F13'
            },
            {
                key:'6',
                cmdName:'شرط ها',
                width:160,
                height:40,
                color1:'#393A39',
                color2:'#8A9193'
            }
        ] 

    I18nManager.allowRTL(false);

    return(
        <>
                   <Text style={styles.choseLanguageText}>دسترسی به مهمترین دستورات</Text>
                   <FlatList
                       data={importantCmd}
                       horizontal
                       flexDirection="row-revers"
                       showsHorizontalScrollIndicator={false}
                       style={{
                           marginTop:10,
                           alignSelf:isRTL? 'flex-start' : 'flex-end',
                           alignSelf:'center',
                           marginVertical:5,
                       }}
                       contentContainerStyle={styles.scrollViewStyle}
                       keyExtractor={(results)=>results.key}
                       renderItem={({item})=>{
                           return(
                               <TouchableOpacity onPress={()=>{setCmd(`${item.cmdName}`)}}>
                                    <View
                                        style={{
                                        width:item.width,
                                        height:item.height,
                                        backgroundColor:'#1F5592',
                                        borderRadius:5,
                                        marginHorizontal:10,
                                        // shadowColor: "#000000",
                                        //     shadowOpacity: 0.25,
                                        //     shadowRadius: 3.84,
                                        //     elevation: 0,
                                            alignSelf:'center',
                                        }}>
                                            <Text style={{
                                                    fontSize:20, 
                                                    color:'white',
                                                    fontWeight:'bold', 
                                                    marginTop:8, 
                                                    textAlign:'center',
                                                    color:'#fff'}}>{item.cmdName}</Text>
                                    </View>

                               </TouchableOpacity>
                           )
                       }}
                   />

                    <FlatList
                       data={importantCmd2}
                       horizontal
                       flexDirection="row-revers"
                       showsHorizontalScrollIndicator={false}
                       style={{
                           marginVertical:5,
                           alignSelf:'center'
                       }}
                       contentContainerStyle={styles.scrollViewStyle}
                       keyExtractor={(results)=>results.key}
                       renderItem={({item})=>{
                           return(
                               <TouchableOpacity onPress={()=>{setCmd(`${item.cmdName}`)}}>

                                    <View
                                        style={{
                                        width:item.width,
                                        height:item.height,
                                        backgroundColor:'#1F5592',
                                        borderRadius:5,
                                        marginHorizontal:10,
                                        marginVertical:0,
                                        // shadowColor: "#000000",
                                        //     shadowOpacity: 0.25,
                                        //     shadowRadius: 3.84,
                                        //     elevation: 2,
                                            alignSelf:'center'
                                        }}>
                                            <Text style={{
                                                    fontSize:20, 
                                                    color:'white',
                                                    fontWeight:'bold', 
                                                    marginTop:6, 
                                                    textAlign:'center',
                                                    color:'#FFF'}}>{item.cmdName}</Text>
                                    </View>

                               </TouchableOpacity>
                           )
                       }}
                   />

                   <FlatList
                       data={proData}
                       horizontal
                       flexDirection="row-revers"
                       showsHorizontalScrollIndicator={false}
                       style={{
                            marginVertical:5,
                            alignSelf:'center',
                       }}
                       keyExtractor={(results)=>results.key}
                       renderItem={({item})=>{
                           return(
                               <TouchableOpacity onPress={()=>{setCmd(`${item.cmdName}`)}}>

                                    <View
                                        style={{
                                        width:item.width,
                                        height:item.height,
                                        backgroundColor:'#1F5592',
                                        borderRadius:5,
                                        marginHorizontal:10,
                                        marginVertical:0,
                                        alignSelf:'center'
                                        }}>
                                            <Text style={{
                                                    fontSize:20, 
                                                    color:'white',
                                                    fontWeight:'bold', 
                                                    marginTop:8, 
                                                    textAlign:'center',
                                                    color:'#FFF'}}>{item.cmdName}</Text>
                                    </View>
                               </TouchableOpacity>
                           )
                       }}
                   />
        </>
    )
}
const styles = StyleSheet.create({
   scrollViewStyle: {
    justifyContent: 'flex-end',
    flexDirection: isRTL? 'row-reverse' : 'row',
    alignItems: 'center',
},
choseLanguageText:{
    alignSelf: isRTL? 'flex-start' : 'flex-end', 
    alignContent:isRTL? 'flex-start' : 'flex-end', 
    textAlign: isRTL? 'left' : 'right',
    fontSize:20,
    marginTop:10,
    marginHorizontal:10,
    fontWeight:'bold',
    color:'#848484',
    marginBottom:10
   },
});

export default Prodata;


