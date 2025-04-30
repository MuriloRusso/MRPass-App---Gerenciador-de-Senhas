import React from 'react';
import {FlatList, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem';
import useGetList from '../../hooks/useGetList';

export default function List(){
    const { rows } = useGetList();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
            <FlatList
                data={rows}
                renderItem={({item}) => <ListItem title={item.title} />}
                keyExtractor={item => item.id}
            />
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: "#ccc",
    minHeight: 500
  },
});

