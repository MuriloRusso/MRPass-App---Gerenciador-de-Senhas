import ButtonDelete from "@/components/ButtonDelete";
import ButtonEdit from "@/components/ButtonEdit";
import { Folder } from "@/types/folder";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from "react-native";
import FolderIcon from "../../../../components/FolderIcon";

type ListItemProps = {
  folder: Folder;
  // modalConfirmDeleteFunction: () => void;
  // modalCreateFunction: () => void;
  selectItemFunction: (value:Folder | null) => void
}

export default function ListItem({folder, /*modalConfirmDeleteFunction, modalCreateFunction,*/ selectItemFunction}:ListItemProps){
    const handleDelete = () => {      
      selectItemFunction({id: folder.id, nome: folder.nome, descricao: folder.descricao, extensao: folder.extensao, file: folder.file});
      // modalConfirmDeleteFunction();
    }

    const handleUpdate = () => {      
      selectItemFunction({id: folder.id, nome: folder.nome, descricao: folder.descricao, extensao: folder.extensao, file: folder.file});
      // modalCreateFunction();
    }
    
    return (
        <View style={styles.item}>
            <View>
                <View style={{display: 'flex', flexDirection: "row", gap: 10, alignItems: "center"}}>
                    <FolderIcon size={35} />                
                    <View>
                      <Text style={styles.title}>{folder.nome}</Text>
                      <Text>{folder.descricao}</Text>

                      <View style={styles.itemRegister}>
                        <Text>Usuário:</Text>
                        <Text>{folder.nome}</Text>
                      </View>

                      <View style={styles.itemRegister}>
                        <Text>Senha:</Text>
                        <Text>{folder.nome}</Text>
                      </View>
                      
                      <View style={styles.itemRegister}>
                        <Text>Link:</Text>
                        <Text>{folder.nome}</Text>
                      </View>

                    </View>
                </View>
                <View style={styles.containerAcoes}>
                    <ButtonEdit onClick={handleUpdate} />
                    <ButtonDelete onClick={handleDelete}/>
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
    // marginHorizontal: 16,
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
    fontSize: 16,
    maxWidth: '80%'
  },
  containerAcoes: {
    display: "flex",
    flexDirection: "row",
    // padding: 5,
    marginVertical: 15,
    gap: 15
  },
  itemRegister: {
    marginVertical: 20
  }
});
