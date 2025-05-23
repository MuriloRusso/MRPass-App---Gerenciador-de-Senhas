import useToast from "@/hooks/useToast";
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from "react-native";

export default function Toast() {
  const { alerts } = useToast();

  if (alerts.length === 0) return null;

  return (
    <View style={styles.alertsContainer} pointerEvents="box-none">
      {alerts.map((alert, i) => {
        let bgColor = "#2196F3"; // default: info
        if (alert.type === "success") bgColor = "#4CAF50";
        else if (alert.type === "warning") bgColor = "#FF9800";
        else if (alert.type === "error") bgColor = "#F44336";

        return (
          <View
            key={i}
            style={[
              styles.toast,
              { backgroundColor: bgColor }
            ]}
          >
            <Feather name="info" size={24} color="#fff" />
            <Text style={styles.toastText}>{alert.message}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  alertsContainer: {
    position: "absolute",
    top: 40,
    right: 20,
    width: 300,
    zIndex: 99999999999,
    flexDirection: "column",
    gap: 10,
    pointerEvents: "box-none",
  },
  toast: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 4,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  toastText: {
    color: "#fff",
    fontWeight: "bold",
    flexShrink: 1,
  },
});
