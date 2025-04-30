import { ScrollView, Text, View } from "react-native";
import Header from "./templates/Header";
import Search from "./templates/Search";
import List from "./templates/List";

export default function Panel(){
    return (
        <View style={{height: "100%"}}>
            <Header/>
            <Search/>
            {/* <ScrollView style={{backgroundColor: "red", height: "auto", minHeight: 500}} showsVerticalScrollIndicator> */}
                <List/>
            {/* </ScrollView> */}
        </View>
    )
}