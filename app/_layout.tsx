// app/_layout.js
import { AuthProvider } from '@/contexts/AuthContext';
// import { LoadingProvider } from '@/contexts/LoadingContext';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// import Toast from 'react-native-toast-message';
// import Loading from './components/Loading';
import ButtonLogout from '@/components/ButtonLogout';

export default function RootLayout() {

  return (
    // <LoadingProvider>
    <AuthProvider>
        {/* <Loading/> */}
        {/* <Toast /> */}

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
    // {/* </LoadingProvider> */}

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