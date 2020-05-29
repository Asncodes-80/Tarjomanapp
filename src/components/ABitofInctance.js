import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    isRTL,
    I18nManager,
    AsyncStorage
} from 'react-native';

import SyntaxHighlighter from 'react-native-syntax-highlighter'
import {
    darcula,
    duotoneLight,
    twilight,
    atomDark,
    ghcolors,
    prism
} from 'react-syntax-highlighter/dist/esm/styles/prism';

const ABitofInstance = ({step, synHl}) => {

    I18nManager.allowRTL(false);


    //Create data for important command to search
    const instance = [
        {
            key: '1',
            title: 'تعریف یک کلاس در سویفت',
            cmd: 'Class classname {\n Definition N \n}',
        },
        {
            key: '2',
            title: 'تعریف یک تابع در دارت ',
            cmd: 'void main() {\n print(`سلام دنیا`)\n }',
        },
    ]

    return (
        <>
            <Text style={styles.choseLanguageText}>نمونه ای از دستورات</Text>
            <FlatList
                data={instance}
                keyExtractor={(result) => result.key}
                vertical
                style={{marginTop: 20, marginBottom: 100}}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text style={{
                                marginTop: 10,
                                textAlign: 'right',
                                alignSelf: 'flex-end',
                                marginRight: 20,
                                fontSize: 18,
                                color: 'black'
                            }}>{item.title}</Text>
                            <View style={{marginHorizontal: 0}}>
                                <SyntaxHighlighter
                                    language='javascript'
                                    highlighter={"prism" || "hljs"}
                                    style={synHl}
                                    fontSize={step || 18 }
                                >
                                    {item.cmd}
                                </SyntaxHighlighter>
                            </View>

                        </View>
                    )}} />
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F8F9FD'
    },
    choseLanguageText: {
        alignSelf: isRTL ? 'flex-start' : 'flex-end',
        alignContent: 'flex-end',
        textAlign: 'right',
        fontSize: 20,
        marginTop: 30,
        marginHorizontal: 0,
        fontWeight: 'bold',
        color: '#848484'
    },
    submitToCode: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        alignSelf: 'flex-start',
        alignContent: 'flex-start',
        textAlign: 'left',
    },
    scrollViewStyle: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default ABitofInstance;


