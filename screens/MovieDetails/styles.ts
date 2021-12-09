import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get('window')
const styles=StyleSheet.create({
    container:{
        width:width*0.9,
        marginHorizontal:width*0.05,
        alignItems:'center',
        flexDirection:'column',
        marginTop:height*0.04,
        // backgroundColor:'red'
    },
    upperContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:height*0.01

    },

    movieInfo:{
        width:'90%',
        height:height*0.6,
        backgroundColor:'rgba(20,76,133,0.6)',
        borderRadius:30,
        padding:15
    },
    
    title:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        marginBottom:3,
    },
    movieYear:{
        fontSize:14,
        color:'white',
        marginBottom:3,


    }

})

export default styles;