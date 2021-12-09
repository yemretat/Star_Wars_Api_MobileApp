import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get('window')
const styles=StyleSheet.create({
    container:{
        width:width*0.9,
        marginHorizontal:width*0.05,
        height:height*0.1,
        backgroundColor:'rgba(20,76,133,0.6)',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        justifyContent:'space-between',
        paddingHorizontal:width*0.01,
        marginBottom:height*0.015
    },
    miniContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    movieName:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginBottom:3,
    },
    movieYear:{
        fontSize:14,
        color:'white'
    },
    textBox:{
        marginLeft:width*0.015
    }

})
export default styles;