import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { I18nManager } from 'react-native'
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
I18nManager.isRTL= 'false'

import index from './src/screen/index.js';
import MainScreen from '../Tarjoman/src/components/MainScreen.js'
import ChoseLan from './src/components/ChoseLan.js';
import SettingScreen from './src/components/SettingScreen.js';
import WelcomeScreen from './src/components/WelcomeScreen.js'
import ResultScreen from './src/components/ResultScreen.js'
import SavedCode from '../Tarjoman/src/components/SavedCodes.js'
const navigator = createStackNavigator(
  {
  
  ChoseLan: {
   screen: ChoseLan,
   navigationOptions: {
      headerShown: true,
      ...TransitionPresets.ModalTransition,
     cardOverlayEnabled:true,
     gestureEnabled:true,
     headerTitleAlign:'center',
     title:'زبان مورد نظرتون رو انتخاب کنید',

  }

  },
  ResultScreen: {
    screen: ResultScreen, 
    navigationOptions: {
      headerShown: true,
      cardOverlayEnabled:true,
      gestureEnabled:true,
      ...TransitionPresets.ScaleFromCenterAndroid,
      title:'نتیجه شما',
      headerTitleAlign:'center',
      headerTintColor:'#fff',
      headerStyle: {
        backgroundColor:'#2B2B2B',
      },
    }

  },


  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions:{
      headerShown: false,
      ...TransitionPresets.ModalPresentationIOS,
      cardOverlayEnabled:true,
      gestureEnabled:true,
      // drawerLockMode: 'locked-closed'

    },
  },


  index: {
    screen: index,
    navigationOptions: {
      headerShown: false,
      title:'ترجمان',
      headerTintColor:'#000',
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:'#FBFBFD'
      }
    }
  },

  MainScreen:{
    screen:MainScreen,
    navigationOptions:{
      headerShown: false,
    },
  },
  SettingScreen:SettingScreen,

  SavedCode:{
    screen:SavedCode,
  }
},
{
  initialRouteName:'index',
  defaultNavigationOptions:{
    headerShown: false,
}, 
  }
)

export default createAppContainer(navigator);


