import ButtonDelete from "@/components/ButtonDelete";
import ButtonEdit from "@/components/ButtonEdit";
import { Folder } from "@/types/folder";
import { Linking, StyleSheet, Text, View } from "react-native";
import RegisterIcon from "../RegisterIcon";

type ListItemProps = {
  folder: Folder;
  modalConfirmDeleteFunction: () => void;
  modalCreateFunction: () => void;
  selectItemFunction: (value:Folder | null) => void
}

export default function ListItem({folder, modalConfirmDeleteFunction, modalCreateFunction, selectItemFunction}:ListItemProps){
    const handleDelete = () => {      
      selectItemFunction({id: folder.id, nome: folder.nome, descricao: folder.descricao, extensao: folder.extensao, file: folder.file});
      modalConfirmDeleteFunction();
    }

    const handleUpdate = () => {      
      selectItemFunction({id: folder.id, nome: folder.nome, descricao: folder.descricao, extensao: folder.extensao, file: folder.file});
      modalCreateFunction();
    }
    
    const handleLink = (link: string) => {
      Linking.openURL(link);

    }

    return (
        <View style={styles.item}>
            <View>
                <View style={{display: 'flex', gap: 10}}>
                    <View>
                      <View style={{display: "flex", flexDirection: "row", gap: 10}}>

                        <RegisterIcon size={35}/>
                        <Text style={styles.title}>{folder.nome}</Text>
                      </View>
                      <Text>{folder.descricao}</Text>

                      <View style={styles.itemRegister}>
                        <Text style={styles.itemRegisterText}>Usuário:</Text>
                        <Text style={styles.itemRegisterText}>{folder.nome}</Text>
                      </View>

                      <View style={styles.itemRegister}>
                        <Text style={styles.itemRegisterText}>Senha:</Text>
                        <Text style={styles.itemRegisterText}>{folder.nome}</Text>
                      </View>

                      <View style={styles.itemRegister}>
                        <Text style={styles.itemRegisterText}>Link:</Text>
                        <Text style={{...styles.itemRegisterText, ...styles.itemRegisterLink}} onPress={() => handleLink(folder.nome)}>{folder.nome}</Text>
                      </View>

                    </View>
                </View>
                <View style={styles.containerAcoes}>
                    <ButtonEdit onClick={handleUpdate} />
                    <ButtonDelete onClick={handleDelete}/>
                </View>

            </View>
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
    marginVertical: 20,
  },
  itemRegisterText: {
    fontSize: 20
  },
  itemRegisterLink: {
    color: "#0000ff",
    textDecorationLine: "underline"
  }
});
