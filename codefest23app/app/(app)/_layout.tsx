import { Redirect, Slot } from 'expo-router';

import { useAuthContext } from '../../ctx/AuthContext';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    //   justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
  });

export default function AppLayout() {
  const { user } = useAuthContext();

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <View style={styles.container}>
          <Header/>
        <Slot />
        </View>
}
