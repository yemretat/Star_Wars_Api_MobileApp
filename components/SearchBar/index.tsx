import React,{useState} from 'react'
import {View,TextInput, TouchableOpacity,Text} from 'react-native'
import styles from './styles'
import {Feather} from "@expo/vector-icons"

//interface koy
type  SearchBarProps = {
    searchValue:string;
    setSearchValue : (search:string) => void;

}

function index({searchValue,setSearchValue}:SearchBarProps) {


    return (
        <View style={styles.container}>
            <Feather style={styles.icons} name="search" size={20} color="gray"    />
            <TextInput 
                testID="Search.Bar"
                style={styles.textInput}
                placeholderTextColor="gray"
                placeholder="Search Movie ..."
                onChangeText={(text) => setSearchValue(text)}
            />
            

        </View>
    )
}

export default index
