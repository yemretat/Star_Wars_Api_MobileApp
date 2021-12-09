import React from 'react'
import { MaterialCommunityIcons  } from '@expo/vector-icons'
import { TouchableOpacity,Dimensions,View } from 'react-native'
import styles from './styles'
import { ButtonImage } from '../../assets/images/svgimages'

var {height} = Dimensions.get('window')

interface TabButtonProps{
    onPress: () => void;
}

function index({onPress}:TabButtonProps) {
    // console.log("The label is ",label," Label type is ",typeof(label))
    return (
        <TouchableOpacity onPress={onPress} style={styles.tabBarButton}>
            <MaterialCommunityIcons name="hexagon" size={height*0.135} />
            <View style={{position:'absolute'}} >
            <ButtonImage  height={height*0.07} width={height*0.07} />
            </View>
        </TouchableOpacity>
    )
}

export default index
