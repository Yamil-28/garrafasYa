import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import PackageCard from '@/components/paquetes/PackageCard';
import SearchBar from '@/components/paquetes/SearchBar';
import SegmentedTabs from '@/components/paquetes/SegmentedTabs';

const PACKAGES = [
  {
    id: '1',
    code: 'PK-204',
    product: 'Audífonos inalámbricos',
    action: 'Por recoger',
    deadlineLabel: 'En plazo',
    deadlineVariant: 'success' as const,
    statusLabel: 'Recojo pendiente',
    statusVariant: 'info' as const,
    price: 'Bs 0,00',
  },
  {
    id: '2',
    code: 'PK-184',
    product: 'Cámara deportiva',
    action: 'Por entregar',
    deadlineLabel: 'Atrasado',
    deadlineVariant: 'danger' as const,
    statusLabel: 'Pago y recojo pendiente',
    statusVariant: 'warning' as const,
    price: 'Bs 12,00',
  },
  {
    id: '3',
    code: 'PK-221',
    product: 'Libro técnico',
    action: 'Por recoger',
    deadlineLabel: 'En plazo',
    deadlineVariant: 'success' as const,
    statusLabel: 'Recojo pendiente',
    statusVariant: 'info' as const,
    price: 'Bs 6,00',
  },
];

export default function PaquetesScreen() {
  const [activeTab, setActiveTab] = useState('Mis paquetes');
  const [search, setSearch] = useState('');

  const filtered = PACKAGES.filter((p) =>
    `${p.code} ${p.product}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis paquetes</Text>
        <Text style={styles.subtitle}>Compras y paquetes registrados por mí</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <SegmentedTabs
          tabs={['Mis paquetes', 'Mis envíos']}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <SearchBar value={search} onChangeText={setSearch} />

        {filtered.map((p) => (
          <PackageCard
            key={p.id}
            code={p.code}
            product={p.product}
            action={p.action}
            deadlineLabel={p.deadlineLabel}
            deadlineVariant={p.deadlineVariant}
            statusLabel={p.statusLabel}
            statusVariant={p.statusVariant}
            price={p.price}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F5F1',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ECEAE3',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2B2B2B',
  },
  subtitle: {
    fontSize: 14,
    color: '#7A7A7A',
    marginTop: 4,
  },
  content: {
    padding: 16,
    gap: 14,
  },
});