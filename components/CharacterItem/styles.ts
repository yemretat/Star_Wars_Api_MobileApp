import { StyleSheet,Dimensions } from "react-native";

const {height} = Dimensions.get('window')
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:height*0.07,
        backgroundColor:'rgba(20,76,133,0.6)',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        justifyContent:'space-between',
        marginTop:height*0.02,
        paddingHorizontal:'2%'
    },
    miniContainer:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    charText:{
        fontSize:12,
        color:'white'
    },
    textBox:{
        marginLeft:2
    }
})
export default styles;