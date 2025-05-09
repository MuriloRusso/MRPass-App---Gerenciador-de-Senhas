// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import LottieView from 'lottie-react-native';

// const Loading = () => {
//   return (
//     <View style={styles.container}>
//       <LottieView
//         source={require('./assets/loading-animation.json')}
//         autoPlay
//         loop
//         style={styles.animation}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   animation: {
//     width: 200,
//     height: 200,
//   },
// });

// export default Loading;
import { GlobalContext } from '@/contexts/GlobalContext';
import useLoading from '@/hooks/useLoading';
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type LoadingProps = {

}

const { loading } = useContext(GlobalContext);

export default function Loading({visible}: {visible:boolean}){ 
    return(
        // loading &&
        visible &&
        <View style={{backgroundColor: "#fff", width: "100%", height: "100%", position: 'fixed', left: 0, top: 0, zIndex: 9}}>
            <SafeAreaProvider>
                <SafeAreaView style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size="large" color="#FE715B" />
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

