import type { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

type HintRowProps = {
  title?: string;
  hint?: ReactNode;
  icon?: string;
};

export function HintRow({
  title = 'Try editing',
  hint = 'app/index.tsx',
  icon = '💡',
}: HintRowProps) {
  return (
    <View style={styles.stepRow}>
      <ThemedText style={styles.icon}>{icon}</ThemedText>
      <View style={styles.copy}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.hint}>{hint}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F5D88B',
    borderRadius: 22,
    backgroundColor: '#FFF5D9',
  },
  icon: {
    fontSize: 20,
  },
  copy: {
    flex: 1,
    gap: 3,
  },
  title: {
    color: '#895308',
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '700',
  },
  hint: {
    color: '#946D2E',
    fontSize: 14,
    lineHeight: 20,
  },
});
