import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons"
import { SharedElement } from 'react-navigation-shared-element';

export default function AgentDetails({ route, navigation }) {
    const { id, name, img_url, bg_color, subCat, desc } = route.params.item;
    const width = route.params.width;
    const height = route.params.height;

    const DURATION = 400
    const animation = {
        0: { opacity: 0, transform: [{ translateY: 100 }] },
        1: { opacity: 1, transform: [{ translateY: 0 }] }
    }

    const createAnim = (from) => ({
        0: { transform: [{ translateY: -150 }, { translateX: from }], },
        1: { transform: [{ translateY: 0 }, { translateX: 0 }], }
    })

    const anim = [
        createAnim(100),
        createAnim(0),
        createAnim(-100)
    ]



    return (
        <ScrollView>
            <SharedElement id={`item.${id}.bg`} style={[StyleSheet.absoluteFillObject]}>
                <View style={[StyleSheet.absoluteFillObject, { backgroundColor: bg_color, }]} />
            </SharedElement>
            <View style={{ display: "flex", flex: 1 }}>
                <View>
                    <TouchableOpacity style={{ position: "absolute", zIndex: 999, top: height * 0.03, right: width * 0.07 }}>
                        <Ionicons style={{ color: "black", }} onPress={() => { navigation.goBack() }} name='chevron-back-outline' size={30} />
                    </TouchableOpacity>

                </View>
                <View style={{ height: height * 0.5, width: width * 0.65, alignSelf: "center", zIndex: 5 }}>
                    <SharedElement id={`item.${id}.photo`}>
                        <Image source={img_url} resizeMode={"contain"} style={{ height: height * 0.6, width: width * 2, alignSelf: "center" }} />
                    </SharedElement>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", zIndex: 999, marginTop: height * 0.05, paddingBottom: width * 0.1 }}>
                    {subCat.map((k, i) => (
                        <View key={i} >
                            <Text style={{ color: "black", fontFamily: "Cookie" }}>                                               </Text>
                            <Animatable.Image useNativeDriver animation={anim[i]} DURATION={DURATION + 2000} duration={1200} style={{ height: width * 0.1, height: width * 0.1, }} resizeMode={"contain"} source={{ uri: k.img }} />
                        </View>
                    ))}
                </View>
                <View >
                    <Animatable.View useNativeDriver animation={animation} delay={DURATION + 1000} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "black", fontFamily: "Fire", fontSize: width * 0.15, alignSelf: "center" }}>Agent</Text>
                        <Text style={{ color: "#2C2F33", fontSize: width * 0.1, fontFamily: "Cookie" }}>{" -" + " " + name}</Text>
                    </Animatable.View>

                    <Animatable.Text useNativeDriver animation={animation} delay={DURATION + 1300} style={{ color: "#2C2F33", fontFamily: "Ale", fontSize: width * 0.05, padding: 50, }}>{desc}</Animatable.Text>
                </View>

            </View>
        </ScrollView>
    )
}

AgentDetails.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    return [
        { id: `item.${item.id}.bg` },
        { id: `item.${item.id}.photo` }

    ];
}