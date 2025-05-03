import useToast from "@/hooks/useToast";
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from "react-native";

export default function Toast(/*{alerts}:{alerts:ToastProps[]}*/){
    
    const {alerts} = useToast();
    
    return(
        <View style={styles.alertsContainer} id="alerts-container">
            {
                alerts.map((alert, i)=>{
                    let bgColor = "";
                    if(alert.type === "success"){
                        bgColor = "#4CAF50";
                    }
                    else if(alert.type === "warning"){
                        bgColor = "#FF9800";
                    }
                    else if(alert.type === "error"){
                        bgColor = "#F44336";
                    }
                    else if(alert.type === "info"){
                        bgColor = "#2196F3";
                    }
                    return(
                        <View key={i} style={{backgroundColor: bgColor, padding: 10, flexDirection: "row", gap: 5, alignItems: 'center', borderRadius: 4,}}>
                            <Feather name="info" size={24} color="#fff" />
                            <Text style={{ color: "#fff", fontWeight: "bold"}} >{alert.message}</Text>
                        </View>
                    )
                })
            }
        </View>

    )
}

const styles = StyleSheet.create({
    alertsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'absolute',
        right: 20,
        top: 20,
        width: 300,
        zIndex: 2
    }
})