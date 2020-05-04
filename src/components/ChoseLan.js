import React, { useState } from 'react';
import {
    View, 
    Text,FlatList,
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    StatusBar,
    Dimensions, 
    ScrollView, 
    TextInput,
    TouchableWithoutFeedback,
    I18nManager
} from 'react-native';

import { AntDesign, Ionicons } from '@expo/vector-icons'

import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
  } from "rn-placeholder";

const ChoseLan = ({navigation}) =>{

    const [timePassed, setTimePassed] = useState(false);
    
    setTimeout(()=>{setTimePassed(true)}, 500);

    const themeTextStyle = navigation.getParam('themeTextStyle');
    
    const themeContainerStyle = navigation.getParam('themeContainerStyle');
    
    const themeBackChoser = navigation.getParam('themeBackChoser');
    
    const themeCmdInput = navigation.getParam('themeCmdInput');

    const [searchVal, setSearchVal] = useState('');

    I18nManager.allowRTL(false);

    const lanData=[
        {
            name:'سی شارپ',
            lanName:'Cs',
            img: require("../../assets/image/LanguageLogo/Csharp.png"),
            shadowColor:'#A078DB',
            moshakhasat:'ویندوز- مک- لینوکس',
            langId:'5'
        },
        {
            name:'C++',
            lanName:'Cpp',
            img: require("../../assets/image/LanguageLogo/cpplogo.png"),
            shadowColor:'#659AD2',
            moshakhasat:'ویندوز- مک- لینوکس',
            langId:'7'
        },
        {
            name:'سویفت',
            lanName:'Swift',
            img: require("../../assets/image/LanguageLogo/swiftlogo.png"),
            shadowColor:'#F9A140',
            moshakhasat:'iOS MacOS iPadOS',
            langId:'4'
        },
        {
            name:'جاوا اسکریپت',
            lanName:'js',
            img: require("../../assets/image/LanguageLogo/js.png"),
            shadowColor:'#DAB92D',
            moshakhasat:'Free Platform',
            langId:'11'
        }
    ]


         if(!timePassed){
            return(
                <View style={[styles.container, themeContainerStyle]}>
                    <ScrollView>

                    <View style={{
                        alignSelf:'center',
                        alignItems:'center',
                        marginHorizontal:40
                        }}>

                        <Placeholder
                            Animation={Fade}
                            style={{marginTop:70}}>
                            <PlaceholderLine 
                            color="transparent"
                             
                             height={47}
                              />
                        </Placeholder>

                        <Placeholder
                            Animation={Fade}
                            style={{marginTop:20}}>
                            <PlaceholderLine 
                            color="transparent"
                             width={100}
                             height={150}
                              />
                        </Placeholder>

                        <Placeholder
                            Animation={Fade}
                            style={{marginTop:-120}}>
                            <PlaceholderLine 
                            color="transparent"
                             width={100}
                             height={150}
                              />
                        </Placeholder>

                        <Placeholder
                            Animation={Fade}
                            style={{marginTop:-120}}>
                            <PlaceholderLine 
                            color="transparent"
                             width={100}
                             height={150}
                              />
                        </Placeholder>

                        <Placeholder
                            Animation={Fade}
                            style={{marginTop:-120}}>
                            <PlaceholderLine 
                            color="transparent"
                             width={100}
                             height={150}
                              />
                        </Placeholder>

                        <Placeholder
                            Animation={Fade}
                            style={{marginTop:-120}}>
                            <PlaceholderLine 
                            color="transparent"
                             width={100}
                             height={150}
                              />
                        </Placeholder>

                        <Placeholder
                            Animation={Fade}
                            style={{marginTop:-120}}>
                            <PlaceholderLine 
                            color="transparent"
                             width={100}
                             height={150}
                              />
                        </Placeholder>
                       
                    </View>
                    </ScrollView>
                </View>

            )
   }

    const lanData2 = lanData.filter((item)=>{
        return item.name == searchVal;
    })


    return (
        <View style={[styles.container, themeContainerStyle]}>
            


            <StatusBar barStyle="default"/>
                <View style={styles.inputBackground}>

                <TouchableOpacity onPress={()=>setSearchVal('')}>
                    <AntDesign name="closecircle" size={22} color="#EE596C" style={{marginLeft:10}}/>
                </TouchableOpacity>

                <TextInput
                    value={searchVal}
                    onChangeText={newSearchText => setSearchVal(newSearchText)}
                    placeholder="تو ترجمان زبانتو پیدا کن"
                    placeholderTextColor="#666"
                    style={{alignSelf:'center',                     
                     color:"#333",marginRight:10, textAlign:'right', fontSize:15, width:Dimensions.get('window').width-110}}
                    maxLength={40}
                />

                <Ionicons name="ios-search" size={32} color="#EE596C" style={{marginRight:0, transform: [{rotateY: '180deg'}]}}/>
            </View>



            <FlatList
                 data={lanData2}
                 keyExtractor={(data)=> data.lanName}
                 horizontal={false}

                style={{marginBottom:30, marginTop:20}}
                 renderItem={({item})=>{
                     return  <TouchableWithoutFeedback onPress={()=> 

                             navigation.navigate('MainScreen',{
                                 lanName:item.lanName,
                                 name:item.name,
                                 langId:item.langId
                                 })
                             }>

                 <View style={{
                     alignSelf:'center',
                     alignItems:'center',
                     marginBottom:100,
                     backgroundColor:`${item.shadowColor}`,
                     width:Dimensions.get('window').width-40,
                     height:150,
                     borderRadius:20,
                     shadowColor: `${item.shadowColor}`,
                     shadowOffset: {
                         width: 0,
                         height: 1,
                     },
                     shadowOpacity: 0.25,
                     shadowRadius: 3.84,
                     elevation: 10,
                     flexDirection:'row'
                     }}>

                    <Image style={styles.imgLogo} source={item.img}/>
                        
                        <View style={{flexDirection:'column', alignSelf:'center', alignItems:'center'}}>     
                        
                            <Text style={{alignSelf:'flex-end', marginTop:0, marginLeft:50}}>

                            {item.moshakhasat}</Text>

                             <Text 
                             style={{
                                 fontSize:20,
                                 fontWeight:'900',
                                 textAlign:'right',
                                 marginLeft:20,
                                 marginTop:10,
                                 }}>{item.name}</Text>


                        </View>
                 </View>
                </TouchableWithoutFeedback>}}
             />





             <FlatList
                 data={lanData}
                 keyExtractor={(data)=> data.lanName}
                 horizontal={false}

                 style={{marginTop:0}}

                 renderItem={({item})=>{
                     return  <TouchableOpacity onPress={()=> 

                             navigation.navigate('index',{
                                 lanName:item.lanName,
                                 name:item.name,
                                 langId:item.langId
                                 })
                             }>

                 <View style={{
                     alignSelf:'center',
                     alignItems:'center',
                     marginBottom:20,
                     backgroundColor:`${item.shadowColor}`,
                     width:Dimensions.get('window').width-40,
                     height:150,
                     borderRadius:20,
                     shadowColor: `${item.shadowColor}`,
                     shadowOffset: {
                         width: 0,
                         height: 1,
                     },
                     shadowOpacity: 0.25,
                     shadowRadius: 3.84,
                     elevation: 10,
                     flexDirection:'row'
                     }}>

                    <Image style={styles.imgLogo} source={item.img}/>
                        
                        <View style={{flexDirection:'column', alignSelf:'center', alignItems:'center'}}>     
                        
                            <Text style={{alignSelf:'flex-end', marginTop:0, marginLeft:50}}>

                            {item.moshakhasat}</Text>

                             <Text 
                             style={{
                                 fontSize:20,
                                 fontWeight:'900',
                                 textAlign:'right',
                                 marginLeft:20,
                                 marginTop:10,
                                 }}>{item.name}</Text>


                        </View>
                 </View>
                </TouchableOpacity>}}
             />
             </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFF0F5',
    },
    txtTitle:{
        alignSelf:'center',
        marginBottom:20,
        fontWeight:'bold',
        marginTop:-15,
        fontSize:20,
        marginBottom:20,
        color:'#4185F4'
    },
    text:{
        marginTop:0,
        fontSize:22,
        marginHorizontal:50,
        fontWeight:'bold',
        alignSelf:'center',
        color:"#4185F4",
    },

    optionStyle:{
        color:"#4185F4",
        fontSize:18,
        marginHorizontal:15,
        marginTop:10
    },
    mainer:{
        backgroundColor:'#5A5A5A',
        marginVertical:10
    },   
     mainer2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10,
        marginLeft:0,
    },
    stretch: {
        width: 207,
        height: 173,
        alignSelf:'center',
        marginVertical:100
      },
      imgLogo:{
        width:60,
        height:60,
        marginLeft:20,
        marginRight:20,
        alignSelf:'center'
      },
      txtTitlesSearch:{
        alignSelf:'flex-end',
        fontWeight:'normal',
        marginTop:15,
        fontSize:20,
        marginBottom:20,
        color:'#4185F4',
        marginHorizontal:10
      },
      searchBackground:{
        color:'#484848',
        width:Dimensions.get('window').width-40,
        height:50,
        alignSelf:'center'
    },
    inputBackground:{
        flexDirection:'row',
        marginTop:10,
        width:Dimensions.get('window').width-30,
        height:59,
        backgroundColor:'#F8F9FD',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
        borderRadius:10,
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center'
    },
});
export default ChoseLan;