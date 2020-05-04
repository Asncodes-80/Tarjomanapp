import React,{ useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity, Alert, Image, Clipboard, StatusBar, Share, AsyncStorage, I18nManager } from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'; 
import { hopscotch, darcula, twilight, duotoneForest } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
// import Toast from 'react-native-simple-toast'
//import API
import tarAPI from '../api/TranjomanAxios'
import { enableScreens } from 'react-native-screens';
const ResultScreen = ({navigation}) =>{

    I18nManager.allowRTL(false);

    const cmd = navigation.getParam('cmd');
    const langId = navigation.getParam('langId');
    const chLanguage = navigation.getParam('chLanguage');
    const [results, setResults] = useState([]);
    //To set gradiant color
    const [colorGra1, setColorGra1] = useState('transparent');
    const [colorGra2, setColorGra2] = useState('transparent');
    const [useSize, setSize] = useState(250);
    // save shape detector
    const [existChecked, setExistCheck] = useState('');

    //main function to fulling result to show info
    useEffect(()=>{
        const findCommand = async (langId, cmd) =>{
            try{
                          //To get json format
                        const response = await tarAPI.post(
                            '/syncLan',
                               {
                                   lang:langId,
                                   parameter:cmd
                               });
                         if(response.data == ""){
                                navigation.navigate('index')
                                Alert.alert("خطا در هنگام جست و جو", "دستور مورد نظر شما یافت نشد!");
                         } else{
                         setResults(response.data);
                         switch(chLanguage){
                            case 'Cs':
                                setColorGra1('#A078DB');
                                setColorGra2('#280063');
                                break;
                            case 'Cpp':
                                setColorGra1('#659AD2');
                                setColorGra2('#004482');
                                break;
                            case 'Swift':
                                setColorGra1('#FE8863');
                                setColorGra2('#D9394B');
                                break;
                            case 'js':
                                setColorGra2('#DAB92D');
                                setColorGra1('#FFD83A');
                                break;
                         }
                 }
            } catch{
                navigation.navigate('index')
                Alert.alert('خطای دسترسی',
                'ممکن است اتصال خود را به اینترنت از دست داده باشید. میتوانید دوباره سعی کنید',
                    [{text:'لغو', onPress:()=> navigation.navigate('index')}]);
            }
        };
        if(results == ""){
            findCommand(langId, cmd);
        }
    },[results])
        const  writeToClipboard = async (x) => {
            await Clipboard.setString(x);
                Alert.alert('',
                'دستور مورد نظر کاپی شد',
                    [
                    {text:'باشه'},
                ])
        };

        const onShare = async (x,y) => {
            try {
            const result = await Share.share({
                message: x, y
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
        const saveCode = async(key, value) =>{
            try{
                let objectToSave = {code: value};
                objectToSave = JSON.stringify(objectToSave);
                await AsyncStorage.setItem(key, objectToSave);
                Alert.alert('ذخیره شد.', 'دستور مورد نظر شما با موفقیت ذخیره شد');

            }catch{
                console.log('catch');

            }
        }
        const [index, setIndex] = useState(0);
        const [code, setCode] = useState('flex');
        const [des, setDes] = useState('none');
    return (
        <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="white"/>

                <SegmentedControlTab
                    values={["Code","توضیحات"]}
                    selectedIndex={index}
                    tabsContainerStyle={{marginTop:15, marginHorizontal:20, borderColor: 'red', marginBottom: 50}}
                    onTabPress={(handleChangeIndex)=> {
                        setIndex(handleChangeIndex)
                        if(index == 0){
                                setCode('flex');
                                setDes('none');
                                setCode('none');
                                setDes('flex');
                            }
                            if(index == 1){
                                setCode('flex');
                                setDes('none');
                            }
                        }}
                />

            <FlatList
                data={results}
                keyExtractor={(result) => result.CommandId}
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 0, 
                }}
                renderItem={({item})=>{
                  //  useEffect(()=>{
                        const checkExistFun = async() =>{
                        const existCheck= await AsyncStorage.getItem(`${item.CommandId}`);
                        if(existCheck !== null){
                            setExistCheck('False');
                            console.log(existChecked);
                        }else{
                            setExistCheck('true');
                            console.log(existChecked);
                        }
                    };
                        checkExistFun();
                    try{
                        if(item.CommandCode.length!=null && item.CommandCode.length > 200){
                            setSize(450)
                        }
                    }
                    catch{
                        setSize(500)
                    }
                    return(
                        <View style={{alignSelf:'center', flexDirection:'column'}}>            
                            <LinearGradient
                                style={{
                                    width:Dimensions.get('window').width-40,
                                    height:useSize-50,
                                    borderRadius:10,
                                    marginHorizontal:10,
                                    flexDirection:'column',
                                    borderRadius:10, 
                                    display:`${code}`,
                                    marginBottom:100,
                                    shadowColor: "#fff",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 8,
                                    borderRadius:10
                                    }} colors={[`#2B2B2B`, `#3B3B3B`]}>

                                    {/* Long press for copy code */}
                                    <TouchableOpacity onLongPress={()=>{
                                        writeToClipboard(item.CommandCode)
                                    }}>
                                        <SyntaxHighlighter    
                                                language='javascript' 
                                                highlighter={"prism" || "hljs"}
                                                style={twilight}
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
                                    flexDirection:'row',
                                    alignSelf:'flex-end',
                                    right:50                        
                                    }}>
                                        {/* save code */}
                                        <TouchableOpacity
                                            onPress={()=>{
                                                saveCode(`${item.CommandId}`, item.CommandCode)
                                                }}
                                            style={{alignSelf:'flex-end', marginHorizontal:10}}>
                                            <Ionicons name="ios-bookmark" size={34} color="white"/>
                                        </TouchableOpacity> 
                                        
                                        <TouchableOpacity onPress={()=>{
                                            onShare(item.CommandCode , item.CommandDescription)
                                        }}>
                                            <Feather 
                                            name="share" 
                                            size={24}
                                            color="white"
                                            style={{marginLeft:10}}
                                            />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={()=>{
                                            writeToClipboard(item.CommandCode)
                                        }}>
                                            <MaterialCommunityIcons 
                                            name="content-copy" 
                                            size={24}
                                            color="white"
                                            style={{marginLeft:20}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </LinearGradient>
                                    <Text style={{
                                            alignSelf:'flex-end', 
                                            alignContent:'flex-end', 
                                            textAlign:'right',
                                            fontSize:20,
                                            marginTop:30,
                                            marginHorizontal:30,
                                            fontWeight:'bold',
                                            color:'white',
                                            display:`${des}`
                                    }}>توضیحاتی در مورد دستور شما</Text>
                                    <LinearGradient
                                style={{
                                    width:Dimensions.get('window').width-40,
                                    height:300,
                                    borderRadius:10,
                                    marginHorizontal:10,
                                    flexDirection:'column',
                                    marginTop:20,
                                    marginBottom:30,
                                    display:`${des}`
                                    }} colors={[`${colorGra1}`, `${colorGra2}`]}>
                                    <Text
                                    style={{
                                        marginTop:35,
                                        color:'white',
                                        alignSelf:'center',
                                        marginHorizontal:30,
                                        fontSize:18,
                                        textAlign:'right'
                                    }}
                                    >{item.CommandDescription}</Text>
                                    </LinearGradient>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#2B2B2B',
        alignItems:'center'
    },
    closeBtn:{
        marginTop:40,
        marginHorizontal:25,
        alignSelf:'flex-end',
        marginBottom:10,
        flexDirection:'row-reverse'
    },
    submitToCode:{
        alignSelf:'flex-end', 
        alignContent:'flex-end', 
        textAlign:'right',
        fontSize:20,
        marginTop:40,
        marginBottom:20,
        marginHorizontal:30,
        fontWeight:'bold',
        color:'#848484'
    },
})
export default ResultScreen;