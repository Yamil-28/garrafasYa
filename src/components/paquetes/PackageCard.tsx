import { StyleSheet, Text, View } from 'react-native';

import StatusBadge from './StatusBadge';
import StatusTag from './StatusTag';

type Props = {
  code: string;
  product: string;
  action: string;
  deadlineLabel: string;
  deadlineVariant: 'success' | 'danger';
  statusLabel: string;
  statusVariant: 'info' | 'warning';
  price: string;
};

export default function PackageCard({
  code,
  product,
  action,
  deadlineLabel,
  deadlineVariant,
  statusLabel,
  statusVariant,
  price,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.iconBox}>
          <Text style={styles.iconEmoji}>📦</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>
            {code} · {product}
          </Text>
          <Text style={styles.subtitle}>{action}</Text>
        </View>

        <StatusBadge label={deadlineLabel} variant={deadlineVariant} />
      </View>

      <View style={styles.divider} />

      <View style={styles.bottomRow}>
        <StatusTag label={statusLabel} variant={statusVariant} />
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E6E0',
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFF4DC',
    borderWidth: 1,
    borderColor: '#F3DDA6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconEmoji: {
    fontSize: 22,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2B2B2B',
  },
  subtitle: {
    fontSize: 13,
    color: '#7A7A7A',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#ECEAE3',
    marginVertical: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2B2B2B',
  },
});