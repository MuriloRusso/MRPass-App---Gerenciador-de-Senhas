import { StyleSheet } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function FolderIcon({size}: {size: number}){
    return <FontAwesome name="folder" size={size} color="#777" style={styles.folderIcon} />
}

const styles = StyleSheet.create({
    folderIcon: {
        height: "auto"
    }
})