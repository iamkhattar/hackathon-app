import { Text, View } from 'react-native';
import { useAuthContext } from '../../ctx/AuthContext';


export default function Index() {
  const { setUser } = useAuthContext();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          setUser?.();
        }}>
        Sign Out
      </Text>
    </View>
  );
}