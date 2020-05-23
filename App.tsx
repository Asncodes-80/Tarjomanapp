import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {I18nManager} from 'react-native'
import index from './src/screen/index.js';
import MainScreen from './src/components/MainScreen.js'
import ChoseLan from './src/components/ChoseLan.js';
import SettingScreen from './src/components/SettingScreen.js';
import WelcomeScreen from './src/components/WelcomeScreen.js'
import ResultScreen from './src/components/ResultScreen.js'
import SavedCode from './src/components/SavedCodes.js'
import AppearanceScreen from './src/components/AppearanceScreen.js'
import PickerScreen from './src/components/Picker.js'

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
// I18nManager.isRTL= 'false'
const navigator = createStackNavigator(
    {

        ChoseLan: {
            screen: ChoseLan,
            navigationOptions: {
                headerShown: true,
                ...TransitionPresets.ModalTransition,
                cardOverlayEnabled: true,
                gestureEnabled: true,
                headerTitleAlign: 'center',
                title: 'زبان ها',

            }
        },
        PickerScreen: {
            screen: PickerScreen,
            navigationOptions: {
                headerShown: true,
                ...TransitionPresets.DefaultTransition,
                cardOverlayEnabled: true,
                gestureEnabled: true,
                headerTitleAlign: 'center',
                title: 'تم ها'
            }
        },
        ResultScreen: {
            screen: ResultScreen,
            navigationOptions: {
                headerShown: true,
                cardOverlayEnabled: true,
                gestureEnabled: true,
                ...TransitionPresets.ScaleFromCenterAndroid,
                title: 'نتیجه شما',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#2B2B2B',
                },
            }

        },

        WelcomeScreen: {
            screen: WelcomeScreen,
            navigationOptions: {
                headerShown: false,
                ...TransitionPresets.ModalPresentationIOS,
            },
        },

        AppearanceScreen: {
            screen: AppearanceScreen,
            navigationOptions: {
                headerShown: true,
                cardOverlayEnabled: true,
                gestureEnabled: true,
                title: 'ویرایشگر',
                headerTitleAlign: 'center',
                headerTintColor: '#000',
            },
        },

        index: {
            screen: index,
            navigationOptions: {
                headerShown: false,
                title: 'ترجمان',
                headerTintColor: '#000',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#FBFBFD'
                }
            }
        },

        MainScreen: {
            screen: MainScreen,
            navigationOptions: {
                headerShown: false,
            },
        },
        SettingScreen: SettingScreen,

        SavedCode: {
            screen: SavedCode,
        },
    },
    {
        initialRouteName: 'index',
        defaultNavigationOptions: {
            headerShown: false,
        },
    }
)

export default createAppContainer(navigator);


