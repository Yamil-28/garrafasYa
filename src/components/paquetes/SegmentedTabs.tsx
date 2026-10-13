import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
};

export default function SegmentedTabs({ tabs, activeTab, onChange }: Props) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <Pressable
            key={tab}
            onPress={() => onChange(tab)}
            style={[styles.tab, isActive ? styles.tabActive : styles.tabInactive]}
          >
            <Text
              style={[
                styles.text,
                isActive ? styles.textActive : styles.textInactive,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
  },
  tabActive: {
    backgroundColor: '#2B2B2B',
    borderColor: '#2B2B2B',
  },
  tabInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E6E0',
  },
  text: {
    fontSize: 13,
    fontWeight: '700',
  },
  textActive: {
    color: '#FFFFFF',
  },
  textInactive: {
    color: '#2B2B2B',
  },
});