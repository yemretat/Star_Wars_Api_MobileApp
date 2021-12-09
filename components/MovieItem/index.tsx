import React from 'react'
import { TouchableOpacity,Text,View,Dimensions, ImageBackground } from 'react-native'
import { MovieType } from '../../types'
import styles from "./styles"
import {Soldier} from "../../assets/images/svgimages"
import { Yoda } from '../../assets/images/svgimages'
import { useNavigation } from '@react-navigation/native'
const {height,width} = Dimensions.get('window')
type MovieProps={
    movie:MovieType,

}

function index({movie}:MovieProps) {

    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate("MovieDetails",{movie:movie})
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}> 
            <View style={styles.miniContainer}>
            <Soldier width={width*0.12} height={width*0.12} />
            <View style={styles.textBox}>
            <Text style={styles.movieName}>{movie.title}</Text>
            <Text style={styles.movieYear}>{movie.release_date.substring(0,4)}-{movie.episode_id}</Text>
            </View>
            </View>
            <Yoda width={width*0.21} height={width*0.21} color="#0E213F"/>
        </TouchableOpacity>
    )
}

export default index
