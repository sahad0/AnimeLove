import { View, Text, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { SharedElement } from 'react-navigation-shared-element';
import DATA from '../assets/json/agentData';


const { width, height } = Dimensions.get("screen");


const Home = ({ navigation }) => {




    const _renderItems = ({ item }) => (
        <SharedElement id={`item.${item.id}.bg`}>
            <TouchableOpacity activeOpacity={1} onPress={() => { navigation.navigate("Details", { item, width: width, height: height }) }} style={{
                backgroundColor: item.bg_color, width: width * 0.6, height: height * 0.46, margin: width * 0.02, alignItems: "center", borderRadius: 25, elevation: 30
            }}>
                <Text style={{ position: "absolute", color: "white", zIndex: 99, fontSize: 40, fontFamily: "Cookie", bottom: "5%" }}>{item.name}</Text>
                <SharedElement id={`item.${item.id}.photo`}>
                    <Image source={item.img_url} style={{ height: height * 0.4, width: width * 0.5 }} resizeMode="cover" />
                </SharedElement>
            </TouchableOpacity>
        </SharedElement>

    )








    return (
        <View  >
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: 30 }}>
                <TouchableOpacity><Ionicons style={{ color: "black", }} name='skull' size={30} /></TouchableOpacity>
                <Text style={{ color: "black", fontSize: height * 0.025, fontFamily: "Fire", textTransform: "uppercase", }}>  Agents</Text></View>

            <FlatList showsHorizontalScrollIndicator={false} data={[...DATA]} renderItem={_renderItems} horizontal pagingEnabled snapToInterval={(width * 0.6) + (2 * (width * 0.02))} decelerationRate={"fast"} bounces={false} />
        </View>
    )
}

export default Home
