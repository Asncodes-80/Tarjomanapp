import React, { useState } from 'react';
import {
    View, 
    Text,  
    StyleSheet, 
    TouchableOpacity, 
    FlatList, 
    isRTL,
    Dimensions,
    I18nManager, 
} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter'

import { dark, base16AteliersulphurpoolLight, xonokai, hopscotch } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { LinearGradient } from 'expo-linear-gradient';

const ABitofInstance = () =>{
    
        //Create data for important command to search
        const instance = [
            {
                key:'1',
                title:'تعریف یک کلاس در سویفت',
                cmd:'Class classname {\n Definition N \n}',
                description:' مهمترین توضیحی که میشه در رابطه با تعریف کلاس داد، این است که براحتی بتوانیم اشیایی در برنامه تعریف کنیم تا بتوانیم در برنامه از آنها نمونه برداری کنیم',
                color1:'#FE8863',
                color2:'#D9394B'
            },
            {
                key:'2',
                title:'تعریف یک تابع در دارت ',
                cmd:'void main() {\n print(`سلام دنیا`)\n }',
                description:'از تابع زمانی استفاده می کنیم که بخواهیم از یک شیوه دستوری در چن طرف از برنامه استفاده کنیم، اینطوری از تکرار کد ها حلوگیری می شه',
                color1:'#00D2B8',
                color2:'#2FA4E3'
            },
        ] 

        I18nManager.allowRTL(false);

    return(
        <>
             <Text style={styles.choseLanguageText}>نمونه ای از دستورات</Text>
            <FlatList
                data={instance}
                keyExtractor={(result) => result.key}
                vertical
                style={{marginTop:20, marginBottom:100, marginHorizontal:-10 }}
                renderItem={({item})=>{
                    return(
                            <View>
                                <Text style={{marginTop:10, textAlign:'right', alignSelf:'flex-end', marginRight:20, fontSize:18, color:'black'}}>{item.title}</Text>
                                    <SyntaxHighlighter    
                                                language='javascript' 
                                                highlighter={"prism" || "hljs"}
                                                style={base16AteliersulphurpoolLight}
                                                
                                            >
                                        {item.cmd}
                                    </SyntaxHighlighter>
                            </View>
                    )
                }}
            />

        </>
    )
}
const styles = StyleSheet.create({
   container:{
       flex:1,
       flexDirection:'column',
       backgroundColor:'#F8F9FD'
   },
   choseLanguageText:{
    alignSelf: isRTL? 'flex-start' : 'flex-end', 
    alignContent:'flex-end', 
    textAlign:'right',
    fontSize:20,
    marginTop:30,
    marginHorizontal:0,
    fontWeight:'bold',
    color:'#848484'
   },
   submitToCode:{
       flexDirection:'row',
       alignItems:'center',
       marginTop:30,
       alignSelf:'flex-start', 
       alignContent:'flex-start', 
       textAlign:'left',
   },
   scrollViewStyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
}
});

export default ABitofInstance;


