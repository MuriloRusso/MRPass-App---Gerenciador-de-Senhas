import React from 'react';
import {FlatList, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem';
import useGetList from '../../hooks/useGetList';

export default function List({modalConfirmDeleteFunction}: {modalConfirmDeleteFunction: () => void}){
    const { rows } = useGetList();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
            <FlatList
                data={rows}
                renderItem={({item}) => <ListItem title={item.title} modalConfirmDeleteFunction={modalConfirmDeleteFunction} />}
                keyExtractor={item => item.id}
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

