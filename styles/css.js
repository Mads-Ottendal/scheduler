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

export const lightMode = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fefefe",
        height:"100%"
    },
    signIn:{
        color:"#010101",
        fontSize: normalize(20),
        fontWeight:"bold",
        verticalAlign:"top",
        paddingTop:normalize(35),
        paddingBottom:normalize(10),

    },
    welcomeText:{
        fontSize:normalize(11),
        color:lightModeGray,
        paddingBottom:normalize(15),
    },
    inputContainer:{
        paddingLeft:normalize(10),
        paddingRight:normalize(10)
    },
    infoText:{
        color:"#010101",
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
        borderColor:lightModeGray,
        borderRadius:13,
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        backgroundColor:"#eeeeee",
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
        backgroundColor: lightModeGray,
        margin:5,
    },
    lineText:{
        textAlign: 'center',
        color:lightModeGray,
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

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 50,
        paddingHorizontal: 5
    },
    scrollView: {
        paddingTop: 10,
        paddingHorizontal: 5
    },
    listItem: {
        marginBottom: 10,
    },
    itemCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    itemActivity: {
        backgroundColor: 'darkgreen',
        padding: 10,
        borderRadius: 5
    },
    textActivity: {
        color: 'white',
        fontSize: 18,
        lineHeight: 24
    },
    spaceActivity: {
        height: 50,
    },
    titleText: {
        height: 32,
        fontSize: 22,
        fontWeight: '400'
    },
    headingText: {
        fontSize: 18,
        lineHeight: 22,
        paddingVertical: 5
    },
    subjectText: {
        fontSize: 22,
        lineHeight: 36
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
    }
});