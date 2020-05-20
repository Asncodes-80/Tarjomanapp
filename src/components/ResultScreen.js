import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Alert,
    StatusBar,
    I18nManager
} from 'react-native';

import { WaveIndicator } from 'react-native-indicators'
import SetResult from '../components/SetResult'
// import API
import tarAPI from '../api/TranjomanAxios'

const ResultScreen = ({ navigation }) => {
    I18nManager.allowRTL(false);
    // forward data to fetch in axios
    const cmd = navigation.getParam('cmd');
    const langId = navigation.getParam('langId');
    const chLanguage = navigation.getParam('chLanguage');

    const [results, setResults] = useState([]);
    // display code or description 
    const [segmentShow, setSegmentShow] = useState('none');
    //To set gradiant color
    const [colorGra1, setColorGra1] = useState('transparent');
    const [colorGra2, setColorGra2] = useState('transparent');
    // save shape detector
    const [isLoading, setLoadingState] = useState(true);
    // main function result to show info
    useEffect(() => {
        const findCommand = async (langId, cmd) => {
            try {
                //To get json format
                const response = await tarAPI.post('/syncLan', 
                {
                    lang: langId,
                    parameter: cmd
                });

                if (response.data == "") {
                    navigation.navigate('index')
                    Alert.alert("خطا در هنگام جست و جو", "دستور مورد نظر شما یافت نشد!");
                } else {

                    setResults(response.data);

                    if (results === []) {
                        navigation.navigate('index')
                        Alert.alert("خطا در هنگام جست و جو", "دیتابیس اررور!");
                    }
                    // to define color
                    switch (chLanguage) {
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
                var errMessage = 'ممکن است اتصال خود را به اینترنت از دست داده باشید. میتوانید دوباره سعی کنید';
                Alert.alert('خطای دسترسی', errMessage, [{ text: 'لغو', onPress: () => navigation.navigate('index') }]);
            }
        };
        if (results == "") {
            setLoadingState(true);
            findCommand(langId, cmd);
        }
        else {
            setLoadingState(false);
            setSegmentShow('flex');
        }
    }, [results]);
    console.log(results);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#2B2B2B" />
            {
                isLoading ? <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    justifyContent: "space-around",
                    marginTop: Dimensions.get('window').width - 250
                }}><WaveIndicator color="#F954DE" size={50} /></View> : null
            }
            <SetResult 
                results={results} 
                colorGra1={colorGra1} 
                colorGra2={colorGra2} 
                segmentShow={segmentShow} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2B2B2B',
        alignItems: 'center'
    },
})
export default ResultScreen;