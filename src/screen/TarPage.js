import React, {useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    TouchableOpacity,
    Platform,
    AsyncStorage,
    I18nManager
} from 'react-native';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
I18nManager.isRTL = 'false'

import {Ionicons, Octicons, Foundation, Feather} from '@expo/vector-icons';
// Import screens components 
import MainScreen from '../components/MainScreen'
import SavedCode from '../components/SavedCodes'
import SettingScreen from '../components/SettingScreen'
import {
    darcula,
    duotoneLight,
    twilight,
    atomDark,
    ghcolors,
    prism
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const TarPage = ({
                     navigation,
                     themeTextStyle,
                     themeContainerStyle,
                     themeCmdInput,
                     themeBackCode,
                     themeBackChoser,
                     themeOfStatusBar
                 }) => {

    const [mainScreenShow, setMainScreenShow] = useState('flex');
    const [savedScreenShow, setSavedScreen] = useState('none');
    const [settingScreen, setSettingScreen] = useState('none');

    const [mainScreenColor, setMainScreenColor] = useState('#0A65D4');
    const [savedScreenColor, setSavedScreenColor] = useState('#95989A');
    const [settingScreenColor, setSettingScreenColor] = useState('#95989A');
    const [statusColor, setColorStatus] = useState('light-content');

    const [results, setResults] = useState([]);

    const [step, setStepper] = useState(8);

    const [synHl, setSynHL] = useState();

    // to get default font
    useEffect(() => {
        const checkStyle = async () => {
            const colorThemeVal = parseInt(await AsyncStorage.getItem("codeTheme"));
            const fontSizeVal = parseInt(await AsyncStorage.getItem("font"));
            setStepper(fontSizeVal);
            // switch for adopting number to code theme
            switch (colorThemeVal) {
                case 1: setSynHL(duotoneLight);
                    break;
                case 2: setSynHL(darcula);
                    break;
                case 3: setSynHL(twilight);
                    break;
                case 4: setSynHL(atomDark);
                    break;
                case 5: setSynHL(ghcolors);
                    break;
                case 6: setSynHL(prism);
                    break;
            }
        }
        checkStyle();
    }, [])


    const mainScreenFun = async () => {
        setMainScreenShow('flex');
        setSavedScreen('none');
        setSettingScreen('none');
        // Colors
        setMainScreenColor('#0A65D4');
        setSavedScreenColor('#95989A');
        setSettingScreenColor('#95989A');
        setColorStatus('light-content');
        const colorThemeVal = parseInt(await AsyncStorage.getItem("codeTheme"));
        const fontSizeVal = parseInt(await AsyncStorage.getItem("font"));
        setStepper(fontSizeVal);
        // switch for adopting number to code theme
        switch (colorThemeVal) {
            case 1: setSynHL(duotoneLight);
                break;
            case 2: setSynHL(darcula);
                break;
            case 3: setSynHL(twilight);
                break;
            case 4: setSynHL(atomDark);
                break;
            case 5: setSynHL(ghcolors);
                break;
            case 6: setSynHL(prism);
                break;
        }
    }
    const SavedScreenFun = async () => {
        setMainScreenShow('none');
        setSavedScreen('flex');
        setSettingScreen('none');
        // Colors
        setMainScreenColor('#95989A');
        setSavedScreenColor('#EE596C');
        setSettingScreenColor('#95989A');
        setColorStatus('dark-content');

        // AsyncStorage.getAllKeys().then((key) => {
        //     return AsyncStorage.multiGet(key)
        //       .then((result) => {
        //         setResults((result));
        //         console.log(results);
        //       }).catch((e) =>{
        //         console.log(e);
        //       });
        //   });
        // try {
        //     const keys = await AsyncStorage.getAllKeys()
        //     const itemsArray = await AsyncStorage.multiGet(keys)
        //     let object = {}
        //     itemsArray.map(item => {
        //         object[`${item[0]}`] = {inCode: `${item[1]}`}
        //         //object[`{code :${item[0]}}`] = item[1]
        //     })
        //     console.log(object)
        //     setResults(object);
        // } catch (error) {
        //     console.log(error, 'error')
        // }


        // async componentDidMount() {
        //
        //     listData = [ ];
        //     let keys = await AsyncStorage.getAllKeys();
        //     keys.forEach(async function(inKey) {
        //         const person = await AsyncStorage.getItem(inKey);
        //         person.key = inKey;
        //         listData.push(person);
        //     });
        //
        //     //listData.push({ key : 1, firstName : "Jeff", lastName : "Tate", middleInitial : "W", relationship : "friend" });
        //
        // };


        // const keys = await AsyncStorage.getAllKeys();
        // keys.forEach(async function(inKey){
        //     const code = await AsyncStorage.getItem(inKey);
        //     code.key = inKey;
        //     setResults(results+code);
        // })

    }
    const SettingScreenFun = () => {
        setMainScreenShow('none');
        setSavedScreen('none');
        setSettingScreen('flex');
        // Colors
        setMainScreenColor('#95989A');
        setSavedScreenColor('#95989A');
        setSettingScreenColor('#000');
        setColorStatus('dark-content');
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            {/* Import Lunch page */}
            <View style={{display: `${mainScreenShow}`}}>
                <MainScreen navigation={navigation} statusColor={statusColor} step={step} synHL={synHl}/>
            </View>
            {/* Import saved screen and show */}
            <View style={{display: `${savedScreenShow}`}}>
                <SavedCode results={results} statusColor={statusColor}/>
            </View>
            <View style={{display: `${settingScreen}`, alignSelf: 'center'}}>
                <SettingScreen statusColor={statusColor} navigation={navigation}/>
            </View>

            {/* navigation bar in bottom */}
            <View style={styles.navBar}>
                <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => {
                    SettingScreenFun()
                }}>
                    <Ionicons name="ios-cog" size={25}
                              style={{color: `${settingScreenColor}`, marginTop: 8, marginHorizontal: 40}}/>
                    <Text style={{
                        marginHorizontal: 0,
                        textAlign: 'center',
                        color: `${settingScreenColor}`
                    }}>تنظیمات</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    SavedScreenFun()
                }}>
                    <Octicons name="bookmark" size={25}
                              style={{color: `${savedScreenColor}`, marginTop: 8, marginHorizontal: 25}}/>
                    <Text style={{marginHorizontal: 0, textAlign: 'center', color: `${savedScreenColor}`}}>ذخیره
                        شده</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    mainScreenFun()
                }}>
                    <Foundation name="home" size={25}
                                style={{color: `${mainScreenColor}`, marginTop: 8, marginHorizontal: 40}}/>
                    <Text style={{marginHorizontal: 0, textAlign: 'center', color: `${mainScreenColor}`}}>خانه</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F3F3F8',
        alignItems: 'flex-end'
    },
    navBar: {
        width: '100%',
        height: Platform.OS === 'ios' ? 80 : 60,
        backgroundColor: '#FBFBFB',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        borderTopColor: '#E4E4E4',
        borderTopWidth: 1
    },
});

export default TarPage;


