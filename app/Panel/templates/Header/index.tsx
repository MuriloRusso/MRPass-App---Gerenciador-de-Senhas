import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import ButtonNew from '../../components/ButtonNew';

export default function Header({handleModalCreate}:{handleModalCreate: () => void;}){
    return (
        <View style={styles.header}>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <FontAwesome name="dashboard" size={40} color="#777" />
                <Text style={{fontSize: 30}}>Painel</Text>
            </View>
            <ButtonNew onClick={handleModalCreate}/>
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