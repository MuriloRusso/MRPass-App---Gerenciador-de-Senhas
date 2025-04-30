import { StyleSheet, Text, View } from 'react-native';
import ButtonNew from '../../components/ButtonNew';
import FolderIcon from '../../components/FolderIcon';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header(){
    return (
        <View style={styles.header}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                {/* <FolderIcon size={40} /> */}
                <AntDesign name="dashboard" size={40} color="#777" />
                <Text style={{fontSize: 30}}>Pastas</Text>
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