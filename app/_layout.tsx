import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from '@/hooks/useColorScheme';
import { WorkProvider } from "@/providers/WorkContext"; // Updated import

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        <WorkProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </WorkProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
