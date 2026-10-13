import {
    CircleDollarSign,
    CircleUserRound,
    House,
    Package,
} from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

const tabs = [
  { label: "Inicio", Icon: House },
  { label: "Paquetes", Icon: Package },
  { label: "Pagos", Icon: CircleDollarSign },
  { label: "Perfil", Icon: CircleUserRound },
];

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      {tabs.map(({ label, Icon }) => {
        const active = label === "Paquetes";
        const color = active ? "#B96500" : "#858B94";

        return (
          <View key={label} style={styles.tab}>
            <Icon size={23} color={color} strokeWidth={active ? 2.5 : 2} />

            <Text
              style={[styles.label, { color }, active && styles.activeLabel]}
            >
              {label}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E9E2D7",
    paddingTop: 16,
    paddingBottom: 20,
    justifyContent: "space-around",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
  },
  activeLabel: {
    fontWeight: "800",
  },
});
