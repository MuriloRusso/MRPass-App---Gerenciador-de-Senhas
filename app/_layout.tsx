import { AuthProvider } from '@/contexts/AuthContext';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import ButtonLogout from '@/components/ButtonLogout';
import Toast from '@/components/Toast';
import { GlobalProvider } from '@/contexts/GlobalContext';

export default function RootLayout() {

  return (
    <GlobalProvider>
      <AuthProvider>
        <Toast/>
        <View style={styles.container}>
          {/* Cabeçalho que aparecerá em todas as telas */}
          <View style={styles.header}>
            <Text style={styles.headerText}>MRPass</Text>
            <ButtonLogout/>
          </View>

          {/* Área de conteúdo dinâmico (as telas serão renderizadas aqui) */}
          <Stack
            screenOptions={{
              headerShown: false, // Oculta o cabeçalho padrão do Stack
              contentStyle: { backgroundColor: '#f5f5f5' },
            }}
          />

          {/* Rodapé que aparecerá em todas as telas */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 Murilo Russo Desenvolvimento</Text>
          </View>
        </View>
      </AuthProvider>
    </GlobalProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#FE715B',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    height: 50,
    backgroundColor: '#FE715B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
  },
});