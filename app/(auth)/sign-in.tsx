import { SignIn } from '@clerk/clerk-react';
import { View, StyleSheet } from 'react-native';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <SignIn
        routing="virtual"
        signUpUrl="/(auth)/sign-up"
        afterSignInUrl="/(tabs)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});
