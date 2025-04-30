import { ScrollView, Text, View } from "react-native";
import Header from "./templates/Header";
import Search from "./templates/Search";

export default function Panel(){
    return (
        <View>
            <Header/>
            <Search/>
            <ScrollView style={{backgroundColor: "red", height: "auto", minHeight: 500}}>


            </ScrollView>
        </View>
    )
}