import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeNavigatorParamsList } from '../types'
import TabOneScreen from '../screens/TabOneScreen';
import {Dimensions} from "react-native"
import { StarWarsImage } from '../assets/images/svgimages';
import MovieDetails from '../screens/MovieDetails';
import {Text,View} from "react-native"
const  Stack = createNativeStackNavigator<HomeNavigatorParamsList>();
const {width,height} = Dimensions.get('window')

function MyStack({navigation,route}){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={TabOneScreen}   
                options={{
                    headerTransparent:true,
                    headerTitle:() => (
                     <StarWarsImage width={width*0.25} height={width*0.25} />
                     ),

                }}
            />

            <Stack.Screen 
                name="MovieDetails"
                component={MovieDetails}
                options={{
                    headerShown:false
                }}
            />
        </Stack.Navigator>
    )


}

function HomeStack({navigation,route}) {
    return <MyStack navigation={navigation} route={route} />
}

export default HomeStack
