import React from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    Dimensions,
    TouchableOpacity,
    I18nManager,
    isRTL
} 
from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

const CmdInputer = ({themeTextStyle, themeCmdInput, data, setChange, setCmd}) =>{
    
    I18nManager.allowRTL(false);
    return(
        <>
            <View style={styles.inputBackground}>

                <TouchableOpacity onPress={()=>{setCmd('')}}>
                    <AntDesign name="closecircle" size={22} color="#FFF" style={{marginLeft:10}}/>
                </TouchableOpacity>

                <TextInput
                    value={data}
                    onChangeText={setChange}
                    placeholder="دستورت رو جست و جو کن"
                    placeholderTextColor="#FFF"
                    style={{alignSelf:'center',
                     marginRight:0, 
                     textAlign:'right', 
                     fontSize:20, 
                     width:Dimensions.get('window').width-85,
                     color:"#FFF",
                     fontWeight:'bold'
                     }}
                    maxLength={40}
                />

                {/* <Ionicons name="ios-search" size={32} color="#EE596C" style={{marginRight:0, transform: [{rotateY: '180deg'}]}}/> */}
            </View>
        </>
    )
    
}
const styles = StyleSheet.create({
    inputBackground:{
        flexDirection: isRTL? 'row-reverse' : 'row',
        width:Dimensions.get('window').width-30,
        height:59,
        // backgroundColor:'#F8F9FD',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
        borderRadius:10,
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
        marginTop:30,
        backgroundColor: 'transparent'
    },
});

export default CmdInputer;