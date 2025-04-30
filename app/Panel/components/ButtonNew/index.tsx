import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonPrimaryIcon from "@/components/ButtonPrimaryIcon";

function Icon(){
    return <Ionicons name="add-circle-outline" size={24} color="white" /> 
}

export default function ButtonNew(){
    return <ButtonPrimaryIcon text="Novo" icon={Icon}/>
}