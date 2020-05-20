import React, {useState} from 'react';
import {View, Text, FlatList, StatusBar, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions, I18nManager} from 'react-native'

const SavedCodes = ({results, statusColor}) =>{
    I18nManager.allowRTL(false);
    // console.log(results);
    return(
        <>
            <StatusBar barStyle={statusColor}/>
            <View style={styles.savedText}>
            <Text style={{ 
                textAlign: 'right', 
                fontSize: 24, 
                alignSelf: 'flex-end',
                fontWeight: 'bold'}}>ذخیره شده</Text>
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    savedText:{
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginHorizontal: 30,
        marginTop: 30, 

    },
});
export default SavedCodes;