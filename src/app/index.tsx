import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CARD from '@/components/CARD';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth } from '@/constants/theme';

const navigationItems = [
  { label: 'Inicio', icon: '⌂' },
  { label: 'Paquetes', icon: '▣' },
  { label: 'Pagos', icon: 'Bs' },
  { label: 'Perfil', icon: '◉' },
];

export default function HomeScreen() {
  const [selectedMode, setSelectedMode] = useState<'comprador' | 'comerciante'>('comprador');
  const [selectedTab, setSelectedTab] = useState('Inicio');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
      <ThemedView style={styles.screen}>
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.logo}>
              <ThemedText style={styles.logoIcon}>📦</ThemedText>
            </View>
            <View style={styles.brandCopy}>
              <ThemedText style={styles.brandName}>Cofre Express</ThemedText>
              <ThemedText
                numberOfLines={1}
                style={styles.brandSubtitle}
                themeColor="textSecondary">
                Compras y entregas en una sola app
              </ThemedText>
            </View>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Notificaciones"
            style={styles.notificationButton}>
            <ThemedText style={styles.bell}>🔔</ThemedText>
          </Pressable>
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.hero}>
            <View style={styles.heroGlow} />
            <ThemedText style={styles.eyebrow}>UNA SOLA CUENTA · DOS ROLES</ThemedText>
            <ThemedText style={styles.heroTitle}>
              Administra paquetes como comprador y comerciante
            </ThemedText>
            <ThemedText style={styles.heroDescription}>
              La misma persona puede consultar lo que compra y también los paquetes que deja en
              resguardo.
            </ThemedText>

            <View style={styles.modeRow}>
              <Pressable
                accessibilityRole="button"
                onPress={() => setSelectedMode('comprador')}
                style={[
                  styles.modePill,
                  selectedMode === 'comprador' && styles.modePillSelected,
                ]}>
                <ThemedText
                  style={[
                    styles.modeText,
                    selectedMode === 'comprador' && styles.modeTextSelected,
                  ]}>
                  Modo comprador
                </ThemedText>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => setSelectedMode('comerciante')}
                style={[
                  styles.modePill,
                  selectedMode === 'comerciante' && styles.modePillSelected,
                ]}>
                <ThemedText
                  style={[
                    styles.modeText,
                    selectedMode === 'comerciante' && styles.modeTextSelected,
                  ]}>
                  Modo comerciante
                </ThemedText>
              </Pressable>
            </View>

            <View style={styles.statsRow}>
              <CARD title="Mis compras" value="3" appearance="metric" />
              <CARD title="Mis envíos" value="8" appearance="metric" />
              <CARD title="Pagos pendientes" value="2" appearance="metric" />
            </View>
          </View>

          <HintRow
            title="El pago del locker se define al registrar el paquete"
            hint="Cada paquete muestra claramente si debe pagar el comerciante o el comprador."
          />

          <View style={styles.summaryRow}>
            <CARD title="Mis paquetes" value="1 por recoger pronto" />
            <CARD title="Mis envíos" value="2 con retraso" />
          </View>

          <ThemedText style={styles.sectionTitle}>Tarifa de Servicio Semanal</ThemedText>
          <View style={styles.serviceCard}>
            <View style={styles.serviceIcon}>
              <ThemedText style={styles.bagIcon}>🛍️</ThemedText>
            </View>
            <ThemedText style={styles.serviceDescription}>
              Al utilizar el servicio de recojo y entrega, se establece la tarifa de servicio
              semanal.
            </ThemedText>
          </View>
        </ScrollView>

        <View style={styles.bottomNavigation}>
          {navigationItems.map((item) => {
            const isSelected = selectedTab === item.label;
            return (
              <Pressable
                key={item.label}
                accessibilityRole="button"
                accessibilityState={{ selected: isSelected }}
                onPress={() => setSelectedTab(item.label)}
                style={styles.navigationItem}>
                <ThemedText
                  style={[
                    styles.navigationIcon,
                    item.label === 'Pagos' && styles.paymentIcon,
                    isSelected && styles.navigationSelected,
                  ]}>
                  {item.icon}
                </ThemedText>
                <ThemedText
                  style={[
                    styles.navigationLabel,
                    isSelected && styles.navigationSelected,
                  ]}>
                  {item.label}
                </ThemedText>
              </Pressable>
            );
          })}
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F6F2',
  },
  screen: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    maxWidth: MaxContentWidth,
    backgroundColor: '#F7F6F2',
  },
  header: {
    minHeight: 86,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEAE2',
  },
  brand: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  brandCopy: {
    flex: 1,
    minWidth: 0,
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#FFB313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    fontSize: 25,
  },
  brandName: {
    color: '#242424',
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
  },
  brandSubtitle: {
    fontSize: 13,
    lineHeight: 19,
  },
  notificationButton: {
    width: 50,
    height: 50,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#EEEAE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bell: {
    fontSize: 23,
    color: '#292722',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 26,
    gap: 16,
  },
  hero: {
    position: 'relative',
    overflow: 'hidden',
    padding: 23,
    borderRadius: 30,
    backgroundColor: '#F5A914',
    gap: 10,
  },
  heroGlow: {
    position: 'absolute',
    width: 190,
    height: 190,
    top: -62,
    right: -44,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 231, 165, 0.3)',
  },
  eyebrow: {
    color: '#865008',
    fontSize: 14,
    letterSpacing: 1.4,
    fontWeight: '800',
  },
  heroTitle: {
    maxWidth: 460,
    color: '#392405',
    fontSize: 29,
    lineHeight: 35,
    fontWeight: '800',
  },
  heroDescription: {
    color: '#61400D',
    fontSize: 15,
    lineHeight: 21,
  },
  modeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
    marginTop: 5,
  },
  modePill: {
    minHeight: 37,
    borderRadius: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.66)',
  },
  modePillSelected: {
    backgroundColor: '#FFFFFF',
  },
  modeText: {
    color: '#73501A',
    fontSize: 13,
    fontWeight: '700',
  },
  modeTextSelected: {
    color: '#3D352A',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
  },
  sectionTitle: {
    color: '#242424',
    marginTop: 1,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  serviceCard: {
    minHeight: 98,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#EAE5DB',
    backgroundColor: '#FFFFFF',
  },
  serviceIcon: {
    width: 58,
    height: 58,
    flexShrink: 0,
    borderWidth: 1,
    borderColor: '#F5D992',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF9E9',
  },
  bagIcon: {
    fontSize: 25,
  },
  serviceDescription: {
    flex: 1,
    color: '#242424',
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '700',
  },
  bottomNavigation: {
    minHeight: 70,
    paddingHorizontal: 10,
    paddingTop: 9,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EAE5DB',
    backgroundColor: '#FFFFFF',
  },
  navigationItem: {
    minWidth: 58,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  navigationIcon: {
    height: 25,
    color: '#9399A1',
    fontSize: 22,
    lineHeight: 25,
    fontWeight: '700',
  },
  paymentIcon: {
    fontSize: 19,
  },
  navigationLabel: {
    color: '#9399A1',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
  },
  navigationSelected: {
    color: '#A86400',
  },
});
