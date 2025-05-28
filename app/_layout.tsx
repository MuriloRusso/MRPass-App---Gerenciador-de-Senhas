import ButtonLogout from '@/components/ButtonLogout';
import Toast from '@/components/Toast';
import { AuthProvider } from '@/contexts/AuthContext';
import { GlobalProvider } from '@/contexts/GlobalContext';
import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {
  // useEffect(() => {
  // if (Platform.OS === 'android') {
  //   changeNavigationBarColor('#000000', true)
  //       .then(() => console.log('Navigation bar color changed'))
  //       .catch(console.error);
  //   }
  // }, []);

  return (
    <GlobalProvider>
      <AuthProvider>
        <Toast />
        <SafeAreaView style={styles.safeArea}>
          <StatusBar backgroundColor="#FE715B" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.headerText}>MRPass</Text>
            <ButtonLogout />
          </View>
          <View style={styles.container}>
            <Stack
              screenOptions={{
                headerShown: true,
                contentStyle: { backgroundColor: '#f5f5f5' },
              }}
            >
              <Stack.Screen name="index" options={{headerTitle: "", headerShown: false}} />
              <Stack.Screen name="Panel/index" options={{headerTitle: "", headerShown: false}} />
              <Stack.Screen name="PanelRegister/index" options={{headerTitle: "Voltar", headerShown: true}} />
            </Stack>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 Murilo Russo Desenvolvimento</Text>
          </View>
        </SafeAreaView>
      </AuthProvider>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FE715B', // importante para evitar fundo branco no topo
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 80,
    backgroundColor: '#FE715B',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    // marginTop: 40
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  footer: {
    height: 60,
    backgroundColor: '#FE715B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  footerText: {
    color: 'white',
    fontSize: 12,
    marginTop: 10
  },
});
