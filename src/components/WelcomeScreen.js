import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, AsyncStorage, ScrollView, Linking, I18nManager} from 'react-native'
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
I18nManager.isRTL= 'false'

const WelcomeScreen = ({navigation}) =>{

    //function for go to main screen and ending welcome screen
    const endTimeForWelcome = async() =>{

        // for checking out the welcome screen page once
        await AsyncStorage.setItem("appear","true");
        navigation.navigate('index');
    }
    return(
        <>
            <View style={styles.mainContainer}>
                <ScrollView>
                <Text style={styles.welTxt}>ترجمان مترجم برنامه نویسان</Text>

                <View style={styles.contentContainer}>
                    {/* View for img */}
                    <View>
                        <Image
                            source={require('../../assets/image/Welcomeban/multiplat.png')}
                            style={{width:44, height:32, marginTop:25, marginRight:25}}
                        />
                    </View>
                    {/* View for content */}

                    <View style={styles.viewContent}>
                        <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'flex-end'}}>چند منظوره</Text>
                        <Text style={{fontSize:15, marginLeft:70, alignSelf:'flex-end', textAlign:'right'}}>
                        برنامه ترجمان را در تمامی دستگاه های خود
                        می توانید داشته باشید، اعم از موبایل، تبلت
                        .لپتاپ، وب، و تمامی سیستم عامل ها 
                        </Text>
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    {/* View for img */}
                    <View>
                        <Image
                            source={require('../../assets/image/Welcomeban/darkmode.png')}
                            style={{width:44, height:44, marginTop:20, marginRight:25}}
                        />
                    </View>
                    {/* View for content */}

                    <View style={styles.viewContent}>
                        <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'flex-end'}}>حالت تاریک</Text>
                        <Text style={{fontSize:15, marginLeft:70, alignSelf:'flex-end', textAlign:'right'}}>
                        به صفحه شما یک حالت تاریک دراماتیک
                        را می بخشد، که شما بتوانید در محیط های
                        .تاریک و کم نور با لذت کار کنید
                        </Text>
                    </View>
                </View>


                <View style={styles.contentContainer}>
                    {/* View for img */}
                    <View>
                        <Image
                            source={require('../../assets/image/Welcomeban/alllan.png')}
                            style={{width:44, height:44, marginTop:20, marginRight:25}}
                        />
                    </View>
                    {/* View for content */}

                    <View style={styles.viewContent}>
                        <Text style={{fontSize:18, fontWeight:'700', marginLeft:70, alignSelf:'flex-end', textAlign:'right'}}>تمام زبان ها رو داریم</Text>
                        <Text style={{fontSize:15, marginLeft:70, alignSelf:'flex-end', textAlign:'right'}}>
                        برای بدست آوردن تمام دستورهایتان می توانید
                        از بیشتر زبان های برنامه نویسی مطرح استفاده
                        .کنید، و در کارتان موفق شوید
                        </Text>
                    </View>
                </View>
            </ScrollView>
            </View>
            {/* View for continue button */}

            <View style={{flex:1, justifyContent:'flex-end', bottom:100}}>
                <View style={{bottom:0, position:'absolute', alignSelf:'center', alignItems:'center'}}>                
                        <TouchableOpacity onPress={()=>{
                                endTimeForWelcome();
                            }}>
                            <View style={styles.imButton}>
                                <Text style={{marginTop:15, fontSize:20, fontWeight:'bold', color:'white'}}>ادامه</Text>
                            </View>
                        </TouchableOpacity>
                </View>
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-between'
    },
    welTxt:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:65,
        marginBottom:35,
        alignSelf:'center'
    },
    contentContainer:{
        width:Dimensions.get('window').width-10,
        height:95,
        marginTop:10,
        flexDirection:'row-reverse'
    },
    viewContent:{
        flexDirection:'column',
        marginHorizontal:25,        
    },
    continueButton:{
        width:Dimensions.get('window').width-30,
        bottom:0,
        justifyContent:'flex-end'
    },
    imButton:{
        width: Dimensions.get('window').width-100,
        height:54,
        backgroundColor:'#E19034',
        borderRadius:7,
        alignSelf:'center',
        alignItems:'center',
        marginTop:15
    },
});
export default WelcomeScreen;