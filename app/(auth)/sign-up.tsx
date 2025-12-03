import { SignUp } from '@clerk/clerk-react';
import { View, StyleSheet } from 'react-native';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUp
        routing="virtual"
        signInUrl="/(auth)/sign-in"
        afterSignUpUrl="/(tabs)"
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
