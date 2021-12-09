import { StyleSheet,Dimensions } from "react-native";

const {width,height} =Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        width:width*0.9,
        marginHorizontal:width*0.05,
        height:height*0.07,
        backgroundColor:'rgba(20,76,133,0.6)',
        borderRadius:10,
        marginBottom:height*0.02,
        marginTop:-height*0.015,
        flexDirection:'row',
        alignItems:'center'
    },
    textInput:{
        flex:1,
        fontSize:14,
        marginLeft:width*0.02,
        color:'gray',
        
    },
    icons:{
        marginLeft:width*0.02
    },

})

export default styles;
