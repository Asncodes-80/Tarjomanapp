import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Alert,
    Clipboard,
    Share,
    AsyncStorage,
    I18nManager
} from 'react-native';

import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { hopscotch, darcula, twilight, duotoneForest } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';


const SetResult = ({ results, colorGra1, colorGra2, segmentShow }) => {
    I18nManager.allowRTL(false);
    const [existChecked, setExistCheck] = useState('');// to next update
    const [index, setIndex] = useState(0);
    // to show real code or description 
    const [code, setCode] = useState('flex');
    const [des, setDes] = useState('none');
    const [useSize, setSize] = useState(250); // to future error about small spacing in description
    // copy code
    const writeToClipboard = async (codeTxt) => {
        await Clipboard.setString(codeTxt);
        Alert.alert('',
            'دستور مورد نظر کاپی شد', [
            { text: 'باشه' }])
    };
    // share code
    const onShare = async (codeTxt) => {
        try {
            const result = await Share.share({
                message: codeTxt
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    // Save data to favorite code
    const saveCode = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            Alert.alert('ذخیره شد.', 'دستور مورد نظر شما با موفقیت ذخیره شد');

        } catch{
            console.log('catch');
        }
    }

    return (
        <>
            <SegmentedControlTab
                values={["Code", "توضیحات"]}
                selectedIndex={index}
                tabsContainerStyle={{ 
                    marginTop: 15, 
                    marginHorizontal: 20, 
                    borderColor: 'red', 
                    marginBottom: 50, 
                    display: `${segmentShow}` }}
                onTabPress={(handleChangeIndex) => {
                    setIndex(handleChangeIndex)
                    if (index == 0) {
                        setCode('flex');
                        setDes('none');
                        setCode('none');
                        setDes('flex');
                    }
                    if (index == 1) {
                        setCode('flex');
                        setDes('none');
                    }
                }} />


            <FlatList
                data={results}
                keyExtractor={(result) => result.CommandId}
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 0,
                }}
                renderItem={({ item }) => {
                    //  useEffect(()=>{
                    /*  const checkExistFun = async() =>{
                      const existCheck= await AsyncStorage.getItem(`${item.CommandId}`);
                      if(existCheck !== null){
                          setExistCheck('False');
                          console.log(existChecked);
                      }else{
                          setExistCheck('true');
                          console.log(existChecked);
                      }
                  };
                      checkExistFun();*/
                    try {
                        if (item.CommandCode.length != null && item.CommandCode.length > 200) {
                            setSize(450)
                        }
                    }
                    catch{
                        setSize(500)
                    }
                    return (
                        <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
                            <LinearGradient
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    height: useSize,
                                    borderRadius: 10,
                                    marginHorizontal: 10,
                                    flexDirection: 'column',
                                    borderRadius: 10,
                                    display: `${code}`,
                                    marginBottom: 100,
                                    shadowColor: "#fff",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 8,
                                    borderRadius: 10
                                }} colors={[`#2B2B2B`, `#3B3B3B`]}>

                                {/* Long press for copy code */}
                                <TouchableOpacity onLongPress={() => {
                                    writeToClipboard(item.CommandCode)
                                }}>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        highlighter={"prism" || "hljs"}
                                        style={twilight}
                                        fontSize={15}
                                    >
                                        {item.CommandCode}
                                    </SyntaxHighlighter>
                                </TouchableOpacity>
                                
                                {/* Copy and Share */}
                                <View style={{
                                    width: '20%',
                                    height: 35,
                                    justifyContent: 'space-between',
                                    position: 'absolute',
                                    bottom: 10,
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end',
                                    right: 50
                                }}>
                                    {/* save code */}
                                    <TouchableOpacity
                                        onPress={() => {saveCode(`${item.CommandId}`, item.CommandCode)}}
                                        style={{ 
                                            alignSelf: 'flex-end', 
                                            marginHorizontal: 10 }}>

                                        <Ionicons name="ios-bookmark" size={34} color="white" />

                                    </TouchableOpacity>


                                    <TouchableOpacity onPress={() => {
                                        onShare(item.CommandCode, item.CommandDescription)
                                    }}>
                                        <Feather
                                            name="share"
                                            size={24}
                                            color="white"
                                            style={{ marginLeft: 10 }}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { writeToClipboard(item.CommandCode)}}>

                                        <MaterialCommunityIcons
                                            name="content-copy"
                                            size={24}
                                            color="white"
                                            style={{ marginLeft: 20 }}
                                        />

                                    </TouchableOpacity>
                                </View>
                            </LinearGradient>

                            <Text 
                            style={{
                                alignSelf: 'flex-end',
                                alignContent: 'flex-end',
                                textAlign: 'right',
                                fontSize: 20,
                                marginTop: 30,
                                marginHorizontal: 30,
                                fontWeight: 'bold',
                                color: 'white',
                                display: `${des}`
                            }}>توضیحاتی در مورد دستور شما</Text>

                            <LinearGradient
                                style={{
                                    width: Dimensions.get('window').width - 40,
                                    height: 300,
                                    borderRadius: 10,
                                    marginHorizontal: 10,
                                    flexDirection: 'column',
                                    marginTop: 20,
                                    marginBottom: 30,
                                    display: `${des}`
                                }} colors={[`${colorGra1}`, `${colorGra2}`]}>

                                <Text
                                    style={{
                                        marginTop: 35,
                                        color: 'white',
                                        alignSelf: 'stretch',
                                        marginHorizontal: 20,
                                        fontSize: 20,
                                        textAlign: 'justify'
                                    }}
                                >{item.CommandDescription}</Text>
                            </LinearGradient>
                        </View>)
                }} />
        </>
    )
}
export default SetResult;