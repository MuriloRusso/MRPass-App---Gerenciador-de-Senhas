import { ToastProps } from "@/types/toast";
import { StyleSheet, View } from "react-native";

export default function Toast({alerts}:{alerts:ToastProps[]}){
    return(
        <View /*style={styles.alertsContainer}*/ className="alerts-container">
            {/* {
                alerts.map((alert, i)=>{
                    return(
                        <Text key={i}>{alert.message}</Text>
                    )
                })
            } */}
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
        backgroundColor: "#333",
        width: 300,
        minHeight: 200
    }
})