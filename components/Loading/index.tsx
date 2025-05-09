import React from 'react';
import { ActivityIndicator, StyleSheet, View, Modal } from 'react-native';

export default function Loading({visible}: {visible:boolean}){ 
    return (
        <Modal visible={visible} transparent animationType="none">
            <View style={styles.wrapper}>
                <ActivityIndicator size="large" color="#FE715B" />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
