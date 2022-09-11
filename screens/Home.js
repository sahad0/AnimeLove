import { View, Text, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { SharedElement } from 'react-navigation-shared-element';


const { width, height } = Dimensions.get("screen");



const DATA = [
    {

        id: 1,
        name: "Emily",
        img_url: require("../assets/images/4.png"),
        bg_color: "#5cffb0",
        desc: "Emily explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom",
        subCat: [

            { name: "Duelist", img: "https://static.wikia.nocookie.net/valorant/images/f/fd/DuelistClassSymbol.png/revision/latest?cb=20200408043920", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
        ]
    },


    {
        id: 2,
        name: "Lami",
        img_url: require("../assets/images/2.png"),
        bg_color: "#ffc061",
        desc: "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",

        subCat: [
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
            { name: "Controller", img: "https://static.wikia.nocookie.net/valorant/images/7/77/InitiatorClassSymbol.png/revision/latest?cb=20200408043926", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },
        ]
    },
    {
        id: 3,
        name: "Jane",
        img_url: require("../assets/images/3.png"),
        bg_color: "#ae7cff",
        desc: "The genius of Germany, Jane secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots debuff will help make short work of them.",
        subCat: [

            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
            { name: "Duelist", img: "https://static.wikia.nocookie.net/valorant/images/f/fd/DuelistClassSymbol.png/revision/latest?cb=20200408043920", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },

        ]
    },
    {
        id: 4,
        name: "Jim",
        img_url: require("../assets/images/5.png"),
        bg_color: "#ff8a3a",
        desc: "Representing her home country of South Korea, Jim agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        subCat: [
            { name: "Duelist", img: "https://static.wikia.nocookie.net/valorant/images/f/fd/DuelistClassSymbol.png/revision/latest?cb=20200408043920", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
        ]
    },



    {
        id: 5,
        name: "Gwen",
        img_url: require("../assets/images/1.png"),
        bg_color: "#9efdff",
        desc: "The American chemist, Gwen deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will",
        subCat: [
            { name: "Duelist", img: "https://static.wikia.nocookie.net/valorant/images/f/fd/DuelistClassSymbol.png/revision/latest?cb=20200408043920", },
            { name: "Controller", img: "https://static.wikia.nocookie.net/valorant/images/7/77/InitiatorClassSymbol.png/revision/latest?cb=20200408043926", },
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
        ]
    },
    {
        id: 6,
        name: "Mikasa",
        img_url: require("../assets/images/6.png"),
        bg_color: "#ff838b",
        desc: "A phantom of a memory, Lami hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        subCat: [
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
            { name: "Controller", img: "https://static.wikia.nocookie.net/valorant/images/7/77/InitiatorClassSymbol.png/revision/latest?cb=20200408043926", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },
        ]
    },
    {
        id: 7,
        name: "Laura",
        img_url: require("../assets/images/7.png"),
        bg_color: "#a75dcc",
        desc: "Ghanaian Agent Laura harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.",
        subCat: [
            { name: "Duelist", img: "https://static.wikia.nocookie.net/valorant/images/f/fd/DuelistClassSymbol.png/revision/latest?cb=20200408043920", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
        ]
    },
    {
        id: 8,
        name: "Ligera",
        img_url: require("../assets/images/8.png"),
        bg_color: "#79f6b4",
        desc: "Filipino Agent, Ligera, surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
        subCat: [
            { name: "Duelist", img: "https://static.wikia.nocookie.net/valorant/images/f/fd/DuelistClassSymbol.png/revision/latest?cb=20200408043920", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
        ]
    },
    {
        id: 9,
        name: "Jerry",
        img_url: require("../assets/images/9.png"),
        bg_color: "#f27da7",
        desc: "The bastion of China, Jerry creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        subCat: [
            { name: "Sentinel", img: "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png/revision/latest?cb=20200408043934", },
            { name: "Controller", img: "https://static.wikia.nocookie.net/valorant/images/7/77/InitiatorClassSymbol.png/revision/latest?cb=20200408043926", },
            { name: "Initiator", img: "https://static.wikia.nocookie.net/valorant/images/0/04/ControllerClassSymbol.png/revision/latest?cb=20200408043911", },
        ]
    }
]








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
            </TouchableOpacity >
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
