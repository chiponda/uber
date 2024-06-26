import { FlatList, StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native';
import React from 'react';
import tw from "twrnc";

import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data=[

    {
        id:123,
        title:"Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen"
    },

    {
        id:456,
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:"EatsScreen"// change in future....
    },
]; 







const NavOptions = () => {
    const navigation = useNavigation();
  return (
   <FlatList
   data={data}
   horizontal    
   keyExtractor={(item)=>item.id  }
   
   renderItem={({item})=>(<TouchableOpacity
   
    onPress={()=>navigation.navigate(item.screen)}
   style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}>
    
    <View>
        <Image
        style={{width:120,height:120, resizeMode:'contain'}}
         source= {{uri:item.image}}
        />
        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
        <Icon style={tw`p-2 bg-blue-400 rounded-full w-10 mt-4`} name="arrowright" color="white" type="antdesign"/>
    </View> 
   </TouchableOpacity>

   )}  
   
   />
  )
}

export default NavOptions; 

const styles = StyleSheet.create({})