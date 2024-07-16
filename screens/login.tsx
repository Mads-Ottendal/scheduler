import React, {useState, useRef, useContext, useEffect} from 'react';
import validator from 'email-validator';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    View,
    Text, Appearance, PixelRatio, Dimensions
} from 'react-native';
import { Button, TextInput, ActivityIndicator } from 'react-native-paper';
import {darkMode, lightMode, lightModeGray, normalize, shadedGray, sparklesEmoji} from '../styles/css';
import { UserContext } from '../components/Context';
import { DOMAIN_URL } from '../lib/constants';
import {UserContextType} from '../lib/types';
import {StatusBar} from "expo-status-bar";
import GradientText from "react-native-gradient-texts";
import {LinearGradient} from 'expo-linear-gradient';

export default function LoginScreen({ navigation }: { navigation: any}) {
    const userContext: UserContextType = useContext(UserContext);
    const initialState = {
        email: '',
        password: ''
    };
    const [user, setUser] = useState(initialState);
    const [emailerr, setEmailErr] = useState('');
    const emailEl = useRef(null);
    const [passwderr, setPassWdErr] = useState('');
    const passwdEl = useRef(null);
    const [inPost, setInPost] = useState(false);

    const [secureTextEntry, setSecureTextEntry] = useState(true);


    function changeEmail(text: string){
        const value = text.trim().replace(/<\/?[^>]*>/g, "");
        setUser(prevState => ({ ...prevState, email: value }));
    }

    function changePasswd(text: string){
        const value = text.trim().replace(/<\/?[^>]*>/g, "");
        setUser(prevState => ({ ...prevState, password: value }));
    }

    function resetErrMsg(){
        setEmailErr('');
        setPassWdErr('');
    }

    async function submitForm(){
        //Reset all the err messages
        resetErrMsg();
        //Check if Email is filled
        if (!user.email){
            setEmailErr("Please type your email, this field is required!");
            (emailEl.current as any).focus();
            return;
        }
        //Validate the email
        if (!validator.validate(user.email)){
            setEmailErr("This email is not a legal email.");
            (emailEl.current as any).focus();
            return;
        }
        //Check if Passwd is filled
        if (!user.password){
            setPassWdErr("Please type your password");
            (passwdEl.current as any).focus();
            return;
        }

        setInPost(true);
        const {data} = await axios.post(`${DOMAIN_URL}/api/login`, user);
        setInPost(false);

        if (data.no_account){
            setEmailErr("Sorry, we can't find this account.");
            (emailEl.current as any).focus();
            return;
        }
        if (data.password_error){
            setPassWdErr("Wrong password");
            (passwdEl.current as any).focus();
            return;
        }
        const {token, ...others} = data;

        const userData = {...others, logintime: Math.round(new Date().getTime() / 1000)};
        await AsyncStorage.setItem('user', JSON.stringify(userData));
        await SecureStore.setItemAsync('token', token);
        userContext.login(userData);
        setUser(initialState);
    }

    function resetForm(){
        setUser(initialState);
        resetErrMsg();
    }


    const [colorScheme, setColorScheme] = React.useState(
        Appearance.getColorScheme(),
    );

    useEffect(() => {
        Appearance.addChangeListener(({colorScheme}) => setColorScheme(colorScheme));
        console.log(colorScheme)
    }, []);

    const isDarkmode = colorScheme === 'dark';


    return (userContext &&
        <SafeAreaView style={isDarkmode ? darkMode.container : lightMode.container}>
            <StatusBar barStyle={isDarkmode ? "light-content" : "dark-content"}/>
            <KeyboardAvoidingView
                style={darkMode.container}>
                <View style={isDarkmode ? darkMode.inputContainer : lightMode.inputContainer}>
                    <GradientText
                        text={"Sign in to your account" + sparklesEmoji}
                        fontSize={normalize(20)}
                        fontWeight={"bold"}
                        width={"100%"}
                        height={"10%"}
                        locations={{x:"41.5%", y:"75%"}}
                        isGradientFill
                        gradientColors={isDarkmode ? ["#886AEA", "#8457C6"] : ["#6478FF", "#27AAFF"]}
                    />
                    <Text style={isDarkmode ? darkMode.welcomeText : lightMode.welcomeText}>Welcome back! Please enter your details.</Text>
                    <Text style={isDarkmode ? darkMode.infoText : lightMode.infoText}>Email</Text>
                    <TextInput
                        style={isDarkmode ? darkMode.input : lightMode.input}
                        value={user.email}
                        placeholder={"Enter your email"}
                        autoCapitalize={"none"}
                        placeholderTextColor={shadedGray}
                        textColor={shadedGray}
                        selectionColor={isDarkmode ? "#886AEA" : "#27AAFF"}
                        underlineStyle={{display:"none"}}
                        left={<TextInput.Icon icon={"email-outline"}/>}
                        onChangeText={text => changeEmail(text)}
                        autoComplete="email"
                        keyboardType="email-address"
                        ref={emailEl}
                    />
                    <Text style={{color: 'red'}}>{emailerr}</Text>

                    <Text style={isDarkmode ? darkMode.infoText : lightMode.infoText}>Password</Text>
                    <TextInput
                        secureTextEntry={secureTextEntry}
                        value={user.password}
                        style={[darkMode.input, {marginBottom: normalize(5)}]}
                        placeholder={"Enter your password"}
                        autoCapitalize={"none"}
                        placeholderTextColor={isDarkmode ? shadedGray : lightModeGray}
                        onChangeText={text => changePasswd(text)}
                        ref={passwdEl}
                        right={<TextInput.Icon onPress={() => setSecureTextEntry(!secureTextEntry)} icon={(secureTextEntry ? "eye-off-outline" : "eye-outline")}/>}
                        left={<TextInput.Icon icon={"lock-outline"}/>}
                        textColor={isDarkmode ? shadedGray : lightModeGray}
                        selectionColor={isDarkmode ? "#886AEA" : "#27AAFF"}
                        underlineStyle={{display:"none"}}
                    />
                    <View style={{alignContent:"space-between", marginBottom:normalize(15), flexDirection:"row", flex:1, height:"100%"}}>
                        <View style={{flex:1}}>
                            <Text style={{color: 'red'}}>{passwderr}</Text>
                        </View>
                        <View style={{flex:1, alignContent:"flex-end", height:normalize(30)}}>
                            <Button textColor={isDarkmode ? "#886AEA" : "#27AAFF"} mode="text" uppercase={false} onPress={() => navigation.navigate('ForgotPasswd', {userEmail: user.email})}>
                                Forgot Password?
                            </Button>
                        </View>
                    </View>

                    {inPost ? <ActivityIndicator size={"large"} color={isDarkmode ? "#886AEA" : "#27AAFF"}/>
                        : <>
                            <LinearGradient
                                start={[0,1]}
                                end={[1,0]}
                                colors={isDarkmode ? ["#65379B","#886AEA","#6457C6"] : ["#6478FF", "#27AAFF", "#6878FF"]} style={isDarkmode ? darkMode.gradientButton : lightMode.gradientButton}>
                                <Button textColor={"#FEFEFE"} onPress={submitForm}>
                                    Sign in
                                </Button>
                            </LinearGradient>
                        </>}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:"5%"}}>
                        <View style={isDarkmode ? darkMode.lines : lightMode.lines} />
                        <View>
                            <Text style={isDarkmode ? darkMode.lineText : lightMode.lineText}>Don't have an account yet?</Text>
                        </View>
                        <View style={isDarkmode ? darkMode.lines : lightMode.lines}/>
                    </View>
                    <View style={{borderBottomWidth:1, borderBottomColor: isDarkmode ? "#886AEA" : "#27AAFF", width:"100%", justifyContent:"center", alignContent:"center", paddingTop:normalize(10), flex:1}}>
                        <Button style={{height:normalize(40)}} textColor={isDarkmode ? "#886AEA" : "#27AAFF"} onPress={() => navigation.navigate("UserJoin")}>
                            Sign up
                        </Button>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}