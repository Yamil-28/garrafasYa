import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  variant: 'success' | 'danger';
};

const COLORS = {
  success: { background: '#E3F5EA', text: '#1F8A4C' },
  danger: { background: '#FDE8E8', text: '#C0392B' },
};

export default function StatusBadge({ label, variant }: Props) {
  const colors = COLORS[variant];

  return (
    <View style={[styles.badge, { backgroundColor: colors.background }]}>
      <Text style={[styles.text, { color: colors.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  },
});