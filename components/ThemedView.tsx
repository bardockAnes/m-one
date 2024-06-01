import { View as OriginalView, type ViewProps } from 'react-native';
import { SafeAreaView, type SafeAreaViewProps } from "react-native-safe-area-context";
import { useThemeColor } from '@/hooks/useThemeColor';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export type ThemedSafeProps = SafeAreaViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function MyView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <OriginalView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function MySafe({ style, lightColor, darkColor, ...otherProps }: ThemedSafeProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}