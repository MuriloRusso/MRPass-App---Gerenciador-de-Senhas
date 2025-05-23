import ButtonLogout from '@/components/ButtonLogout';
import Toast from '@/components/Toast';
import { AuthProvider } from '@/contexts/AuthContext';
import { GlobalProvider } from '@/contexts/GlobalContext';
import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <Toast />
        <SafeAreaView style={styles.safeArea}>
          {/* Status bar visível e estilizada */}
          <StatusBar backgroundColor="#FE715B" barStyle="light-content" />

          <View style={styles.header}>
            <Text style={styles.headerText}>MRPass</Text>
            <ButtonLogout />
          </View>

          <View style={styles.container}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#f5f5f5' },
              }}
            />
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
    marginTop: 40
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    height: 80,
    backgroundColor: '#FE715B',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    marginTop: 10
  },
});
