import { StyleSheet, Text, View } from 'react-native';

import { colors, fontSizes, spacing } from '../constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NourishHer</Text>
      <Text style={styles.tagline}>Nourish her. Every phase.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: spacing.xl,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.brand,
  },
  tagline: {
    marginTop: spacing.sm,
    fontSize: fontSizes.subheading,
    fontStyle: 'italic',
    color: colors.gray,
  },
});
