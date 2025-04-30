import { StyleSheet, Text, View } from 'react-native';
import ButtonNew from '../../components/ButtonNew';
import FolderIcon from '../../components/FolderIcon';

export default function Header(){
    return (
        <View style={styles.header}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <FolderIcon size={40} />
                <Text>Pastas</Text>
            </View>
            <ButtonNew/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        gap: 5,
        padding: 10,
        justifyContent: "space-between"
    },
})