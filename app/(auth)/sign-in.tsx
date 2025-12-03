import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace('/(tabs)');
    }
  }, [isSignedIn]);

  const handleSignIn = async () => {
    // For web, redirect to Clerk's hosted sign-in
    const signInUrl = `https://famous-rabbit-76.clerk.accounts.dev/sign-in`;
    await WebBrowser.openAuthSessionAsync(signInUrl, 'exp://localhost:8081');
  };

  return (
    <View style={styles.container}>
      <SignedOut>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Voca</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>

          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In with Clerk</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <Link href="/(auth)/sign-up" asChild>
              <TouchableOpacity>
                <Text style={styles.link}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </SignedOut>

      <SignedIn>
        <Text>Redirecting...</Text>
      </SignedIn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  button: {
    height: 50,
    backgroundColor: '#6C47FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  link: {
    color: '#6C47FF',
    fontSize: 14,
    fontWeight: '600',
  },
});
