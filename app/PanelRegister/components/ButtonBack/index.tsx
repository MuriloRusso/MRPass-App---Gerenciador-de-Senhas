import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonBack() {
    const router = useRouter();
    const handleBack = () => router.push('/Panel');
    return (
        <TouchableOpacity style={styles.containerButton} onPress={handleBack}>
            {/* <Ionicons name="return-up-back" size={40} color="#777" /> */}
            <Ionicons name="chevron-back-circle-outline" size={40} color="#777" />
            <Text style={{fontSize: 30, color: "#555"}}>Voltar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 10
    }
})