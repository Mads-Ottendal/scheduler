import {Dimensions, PixelRatio, Platform, StyleSheet} from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export const shadedGray = "#7d7e7f"
export const lightModeGray = "#101009"

export const sparklesEmoji = "\u2728"

export const darkMode = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#0e1317",
        height:"100%"
    },
    signIn:{
        color:"#fefefe",
        fontSize: normalize(20),
        fontWeight:"bold",
        verticalAlign:"top",
        paddingTop:normalize(35),
        paddingBottom:normalize(10),

    },
    welcomeText:{
        fontSize:normalize(11),
        color:shadedGray,
        paddingBottom:normalize(15),
    },
    inputContainer:{
        paddingLeft:normalize(10),
        paddingRight:normalize(10)
    },
    infoText:{
        color:"#fefefe",
        fontSize: normalize(12),
        marginBottom:normalize(4),
    },
    input:{
        justifyContent:"center",
        alignSelf:"center",
        marginBottom:normalize(10),
        width:"100%",
        height:normalize(40),
        borderWidth:1,
        borderColor:shadedGray,
        borderRadius:13,
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        backgroundColor:"#0e1317",
        marginTop:normalize(3),

    },
    gradientButton:{
        justifyContent:"center",
        alignSelf:"center",
        marginBottom:normalize(10),
        width:"100%",
        height:normalize(40),
        borderWidth:1,
        borderRadius:13,
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        paddingLeft:normalize(5),
        backgroundColor:"#0e1317",
        marginTop:normalize(3),
    },
    lines:{
        flex: 1,
        height: 1,
        backgroundColor: shadedGray,
        margin:5,
    },
    lineText:{
        textAlign: 'center',
        color:shadedGray,
    },
    signUp:{
        justifyContent:"center",
        alignSelf:"center",
        marginBottom:normalize(10),
        width:"25%",
        height:normalize(40),
        borderWidth:1,
        borderRadius:13,
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        paddingLeft:normalize(5),
        backgroundColor:"#0e1317",
        marginTop:normalize(3),
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

