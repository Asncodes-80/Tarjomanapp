import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions, Linking, ScrollView, I18nManager} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const SettingScreen = ({navigation}) =>{
  I18nManager.allowRTL(false);

    return(
        <View style={styles.container}>
            <ScrollView>


             <View style={styles.comment}>
                <Text style={styles.appearanceText}>نظرتون رو برامون بفرستيد</Text>
             </View>    
             
             
             
             
             
             
                                    <Text>
             ترجمان براي نسخه
               {Platform.OS === 'ios'? <Text>IOS</Text> : <Text>Android</Text>}
               موبايل
             </Text>
            </ScrollView>


        </View>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1, 
    flexDirection:'column',
  }, 
  appearance:{
    height:56,
    width: Dimensions.get('window').width-20,
    backgroundColor: '#FFFFFF',
    alignSelf:'center',
    borderRadius:10,
    marginTop:40
  },
  appearanceText:{
    fontSize:18,
    marginTop:10,
    alignSelf:'flex-end',
    marginRight:20,
    fontWeight:'bold',
    
  },
  comment:{
    height:56,
    width: Dimensions.get('window').width-20,
    backgroundColor: '#FFFFFF',
    alignSelf:'center',
    borderRadius:10,
    marginTop:50
  },
 })
export default SettingScreen;