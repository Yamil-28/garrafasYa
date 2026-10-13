import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  variant: 'info' | 'warning';
};

const COLORS = {
  info: { background: '#E6F0FF', text: '#2F66C8' },
  warning: { background: '#FFF1D6', text: '#B25E00' },
};

export default function StatusTag({ label, variant }: Props) {
  const colors = COLORS[variant];

  return (
    <View style={[styles.tag, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
});