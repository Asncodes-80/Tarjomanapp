import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Dimensions,
    Linking,
    ScrollView,
    I18nManager
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SettingScreen = ({navigation}) => {
    I18nManager.allowRTL(false);
    return (
        <>
            <View style={styles.mainContent}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('AppearanceScreen');
                }}>
                    <View style={styles.appearanceSection}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'right',
                            marginRight: 20,
                        }}>تغییر ظاهر کد</Text>
                        <Ionicons name="ios-arrow-back" size={24} color="#CFCFD1" style={{marginLeft: 20}}/>
                    </View>
                </TouchableOpacity>
                <Text style={{
                    textAlign: 'right',
                    marginRight: 20,
                    marginTop: 8,
                    fontWeight: '200',
                    color: '#75757A'
                }}>شما میتوانید استایل موردنیاز خود را به محیط کد دهید.</Text>
            </View>
            {/* Version and some info section*/}
            <View style={styles.detailVer}>
                <Text
                    style={styles.detailVerText}>{Platform.OS === 'ios' ? "ترجمان نسخه آی او اس" : "ترجمان نسخه اندروید"}</Text>
                <Text style={styles.detailVerText}>{Platform.OS === 'ios' ? "ترجمان ورژن 0.7.5.0iPx64Alpha2020.29.02" : "0.7.5.0x64Alpha20.29.02"}</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    mainContent: {
        flexDirection: 'column',
        marginTop: Platform.OS === 'ios' ? 100 : 50,
        alignSelf: 'center',
        alignItems: 'flex-end'
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
    detailVer: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    detailVerText: {
        color: '#75757A',
        marginBottom: 5
    }
})
export default SettingScreen;