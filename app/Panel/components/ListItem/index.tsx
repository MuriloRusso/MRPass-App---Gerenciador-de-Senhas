import ButtonEdit from "@/components/ButtonEdit";
import { StyleSheet, Text, View } from "react-native";
import FolderIcon from "../FolderIcon";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ListItem({title}:{title: string}){
    return (
        <View style={styles.item}>
            <View>
                <View style={{display: 'flex', flexDirection: "row", gap: 10, alignItems: "center"}}>
                    <FolderIcon size={35} />                
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{title}</Text>
                    </View>
                </View>
                <View style={styles.containerAcoes}>
                    <ButtonEdit />
                    <ButtonEdit />
                </View>

            </View>
            <MaterialIcons name="arrow-forward-ios" size={40} color="#777" />
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: "#ccc",
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 16
  },
  containerAcoes: {
    display: "flex",
    flexDirection: "row",
    // padding: 5,
    marginVertical: 15,
    gap: 15
  }
});
