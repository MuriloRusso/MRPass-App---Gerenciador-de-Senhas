import { Folder } from '@/types/folder';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem';

type ListProps = {
  modalConfirmDeleteFunction: () => void;
  modalCreateFunction: () => void;
  rows: Folder[];
  selectItemFunction: (value: Folder | null) => void;
}

export default function List({modalConfirmDeleteFunction, modalCreateFunction, rows, selectItemFunction}: ListProps){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={rows}
          renderItem={({ item }) => (
            <ListItem
              folder={item}
              modalConfirmDeleteFunction={modalConfirmDeleteFunction}
              modalCreateFunction={modalCreateFunction}

              selectItemFunction={selectItemFunction}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    marginTop: 0,
    backgroundColor: "#fff",
    minHeight: 500,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
});

