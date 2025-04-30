import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import ButtonNew from '../../components/ButtonNew';

export default function Header(){
    return (
        <View style={styles.header}>
            <View style={styles.header}>
                <FontAwesome name="folder" size={24} color="#777" style={styles.folderIcon} />
                <Text>Pastas</Text>
            </View>
            <ButtonNew/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: "row",
        gap: 5,
        padding: 5,
    },
    folderIcon: {
        width: 25,
        height: "auto"
    }
})