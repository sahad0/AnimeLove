import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';

export default function Login() {

    const [state, setState] = useState({});


    useEffect(() => {
        console.log(state)
    }, [state]);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '380584674207-1ga5cp8ofe6mt9aunqqkvr9u8ftk7g1j.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        });
        isSignedIn();
    }, [])


    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        setState({ isLoginScreenPresented: !isSignedIn });
    };
    getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        setState({ currentUser });
    };


    signOut = async () => {
        try {
            await GoogleSignin.signOut();
            setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };





    return (
        <>

            <View style={{ flex: 1, top: "50%", position: "absolute" }}>
                <TouchableOpacity onPress={signIn}>
                    <Text style={{ color: "black" }}>
                        <GoogleSigninButton
                            style={{ width: 192, height: 48, }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}


                        />;
                    </Text></TouchableOpacity>
            </View>
        </>
    )
}