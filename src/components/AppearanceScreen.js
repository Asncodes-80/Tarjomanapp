import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    Button,
    NativeModules} from 'react-native'
import UIStepper from 'react-native-ui-stepper'
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import {
    darcula,
    duotoneLight,
    twilight,
    atomDark,
    ghcolors,
    prism
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const AppearanceScreen = ({navigation}) => {

    const [step, setStepper] = useState(8);

    const [synHl, setSynHL] = useState();

    const [txtTheme, setTxtThem] = useState();
    const codeInstance = 'void main() {\n print(`سلام دنیا`)\n }';

    // to get default font
    useEffect(() => {
        const checkStyle = async () => {
            const colorThemeVal = parseInt(await AsyncStorage.getItem("codeTheme"));
            const fontSizeVal = parseInt(await AsyncStorage.getItem("font"));
            setStepper(fontSizeVal);
            // switch for adopting number to code theme
            switch (colorThemeVal) {
                case 1: setSynHL(duotoneLight);
                        setTxtThem('duotoneLight')
                    break;
                case 2: setSynHL(darcula);
                        setTxtThem('darcula')
                    break;
                case 3: setSynHL(twilight);
                        setTxtThem('twilight')
                    break;
                case 4: setSynHL(atomDark);
                    setTxtThem('atomDark')
                    break;
                case 5: setSynHL(ghcolors);
                    setTxtThem('ghcolors')
                    break;
                case 6: setSynHL(prism);
                    setTxtThem('prism')
                    break;
            }
        }
        checkStyle();
    }, [])

    // save changes
    const defaultFont = async (value) => {
        await AsyncStorage.setItem("font", String(value));
        NativeModules.DevSettings.reload();
    }

    return (
        <View style={styles.container}>
            <ScrollView indicatorStyle={false}>
                <View style={styles.styleSyntax}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PickerScreen');
                    }}>
                        <View style={styles.appearanceSection}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'right',
                                marginRight: 20,
                            }}>تغییر ظاهر کد</Text>
                            <Text style={{ marginRight: 100, fontSize: 15, fontWeight: 'bold'}}>{txtTheme}</Text>
                            <Ionicons name="ios-arrow-back" size={24} color="#CFCFD1" style={{marginLeft: 20}}/>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        borderBottomColor: '#DCDCDD',
                        borderBottomWidth: 0.25,
                        marginHorizontal: 0,
                        marginRight: 20
                    }}/>
                    <View style={styles.appearanceSection2}>
                        <View style={styles.stepperHold}>
                            <UIStepper
                                initialValue={step}
                                minimumValue={8}
                                maximumValue={22}
                                backgroundColor="#EFEEEF"
                                borderColor="#DCDCDD"
                                tintColor="#000"
                                border={0.2}
                                onValueChange={val =>
                                    setStepper(val)
                                }/>
                            <Text style={{marginLeft: 10, color: "#969599", fontSize: 18}}>{step}pt</Text>
                        </View>
                        <Text style={{marginRight: 20, fontSize: 18}}>اندازه قلم</Text>
                    </View>
                </View>

                <View style={styles.codePlace}>
                    <SyntaxHighlighter
                        language='javascript'
                        highlighter={"prism" || "hljs"}
                        style={synHl}
                        borderRadius={17}
                        fontSize={step}>
                        {codeInstance}
                    </SyntaxHighlighter>
                    <Button title="ذخیره تغییرات" color="green" onPress={() => {
                        defaultFont(step)
                    }}/>

                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F3F3F8'
    },
    styleSyntax: {
        width: Dimensions.get('window').width - 30,
        backgroundColor: '#FFFFFF',
        height: 120,
        borderRadius: 17,
        alignSelf: 'center',
        marginTop: 50
    },
    appearanceSection: {
        flexDirection: 'row-reverse',
        width: Dimensions.get('window').width - 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        alignItems: 'center',
        height: 60,
        justifyContent: 'space-between'
    },
    appearanceSection2: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 30,
        backgroundColor: '#FFFFFF',
        borderRadius: 17,
        alignItems: 'center',
        height: 60,
        justifyContent: 'space-between'
    },
    stepperHold: {
        flexDirection: 'row',
        marginLeft: 20,
        alignSelf: 'center'
    },
    codePlace: {
        width: Dimensions.get('window').width - 30,
        alignSelf: 'center',
        height: 200,
        marginTop: 50,
    }
})
export default AppearanceScreen;