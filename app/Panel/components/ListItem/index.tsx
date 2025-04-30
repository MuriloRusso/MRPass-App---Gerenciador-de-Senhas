import ButtonEdit from "@/components/ButtonEdit";
import { StyleSheet, Text, View } from "react-native";

export default function ListItem({title}:{title: string}){
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{title}</Text>
            </View>
            <View style={styles.containerAcoes}>
                <ButtonEdit />
                <ButtonEdit />
                <ButtonEdit />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    display: "flex",
    // flexDirection: "row",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: "#ccc"
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
    marginVertical: 5,
    gap: 5
  }
});
