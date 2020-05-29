import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    Alert,
    NativeModules} from 'react-native';
import CodePush from 'react-native-code-push'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import {
    darcula,
    duotoneLight,
    twilight,
    atomDark,
    ghcolors,
    prism
} from "react-syntax-highlighter/dist/cjs/styles/prism";

const PickerScreen = ({navigation}) => {
    const codeDataStyle = [
        {
            themeId: 1,
            cmdCode: '\'void main() {\\n print(`سلام دنیا`)\\n }\'',
            styles: duotoneLight,
            themeName: 'duotoneLight',
            codeTheme: '1'
        },
        {
            themeId: 2,
            cmdCode: '\'void main() {\\n print(`سلام دنیا`)\\n }\'',
            styles: darcula,
            themeName: 'darcula',
            codeTheme: '2'
        },
        {
            themeId: 3,
            cmdCode: '\'void main() {\\n print(`سلام دنیا`)\\n }\'',
            styles: twilight,
            themeName: 'twilight',
            codeTheme: '3'
        },
        {
            themeId: 4,
            cmdCode: '\'void main() {\\n print(`سلام دنیا`)\\n }\'',
            styles: atomDark,
            themeName: 'atomDark',
            codeTheme: '4'
        },
        {
            themeId: 5,
            cmdCode: '\'void main() {\\n print(`سلام دنیا`)\\n }\'',
            styles: ghcolors,
            themeName: 'ghcolors',
            codeTheme: '5'
        },
        {
            themeId: 6,
            cmdCode: '\'void main() {\\n print(`سلام دنیا`)\\n }\'',
            styles: prism,
            themeName: 'prism',
            codeTheme: '6'
        },
    ];
    const codeInstance = 'void main() {\n print(`سلام دنیا`)\n }';

    // save code theme and back to appearance mode
    const saveTheme = async (codeThemeId) => {
        await AsyncStorage.setItem("codeTheme", codeThemeId);
        navigation.navigate('index');
        Alert.alert("فرایند ذخیره سازی","به منظور اعمال تغییرات مجددا وارد شوید");
        NativeModules.DevSettings.reload();
    }
    return (
        <>
            <FlatList
                vertical
                data={codeDataStyle}
                keyExtractor={code => code.themeId}
                renderItem={({item}) => {
                    return (
                        <View style={styles.codePlace}>
                            <Text style={styles.themeNameTxt}>{item.themeName}: </Text>
                            <TouchableOpacity onPress={() => {
                                saveTheme(item.codeTheme)
                            }}>
                                <SyntaxHighlighter
                                    language='javascript'
                                    highlighter={"prism"}
                                    style={item.styles}
                                    borderRadius={10}
                                    width={Dimensions.get('window').width - 30}
                                    fontSize={15}>
                                    {codeInstance}
                                </SyntaxHighlighter>
                            </TouchableOpacity>
                        </View>
                    )
                }}/>
        </>
    )
}
const styles = StyleSheet.create({
    codePlace: {
        alignSelf: 'center',
        height: 150,
        marginTop: 20,
    },
    themeNameTxt: {
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 20
    }
})
export default PickerScreen;