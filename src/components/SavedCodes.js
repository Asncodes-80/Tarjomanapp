import React, {useState} from 'react';
import {View, Text, FlatList, StatusBar, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions, I18nManager} from 'react-native'

const SavedCodes = ({results, statusColor}) =>{
    I18nManager.allowRTL(false);
    console.log((results))
    return(
        <View>
            <StatusBar barStyle={statusColor}/>
            <FlatList
                data={results}
                style={{marginTop:10,  marginBottom:60}}
                renderItem={({item})=>{
                    
                    return <View style={{marginVertical:15,
                     alignSelf:'flex-start', 
                     borderBottomColor:'black', 
                     borderBottomWidth:0.5, 
                     width:Dimensions.get('window').width-20,}}>
                        <Text style={{textAlign:'left'}}>{item}</Text>
                    </View>
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({

});
export default SavedCodes;