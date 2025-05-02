import { StyleSheet, Text, View } from "react-native";

type ToastProps = {
    message: string;
    type: "success | error | info | warning"
}

export default function Toast({alerts}:{alerts:ToastProps[]}){
    <View>
        {
            alerts.map((alert)=>{
                return(
                    <Text>{alert.message}</Text>
                )
            })
        }
    </View>
}

const styles = StyleSheet.create({
    alertsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'absolute',
        right: 20,
        top: 20
    }
})