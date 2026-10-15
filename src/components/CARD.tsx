import { StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';

type CardProps = {
  title: string;
  value: string;
  appearance?: 'metric' | 'summary';
};

const CARD = ({ title, value, appearance = 'summary' }: CardProps) => {
  return (
    <View style={[styles.container, appearance === 'metric' ? styles.metric : styles.summary]}>
      <ThemedText style={[styles.title, appearance === 'metric' && styles.metricTitle]}>
        {title}
      </ThemedText>
      <ThemedText style={[styles.value, appearance === 'metric' && styles.metricValue]}>
        {value}
      </ThemedText>
    </View>
  );
};

export default CARD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 0,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#EAE5DB',
    backgroundColor: '#FFFFFF',
  },
  metric: {
    padding: 13,
    minHeight: 88,
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 248, 229, 0.55)',
  },
  summary: {
    minHeight: 128,
    padding: 18,
    gap: 7,
  },
  title: {
    color: '#858991',
    fontSize: 13,
    lineHeight: 18,
  },
  value: {
    color: '#242424',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
  },
  metricTitle: {
    color: '#755624',
    fontSize: 12,
    lineHeight: 17,
  },
  metricValue: {
    color: '#422E0D',
    fontSize: 24,
    lineHeight: 29,
  },
});