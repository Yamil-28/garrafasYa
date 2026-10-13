import { StyleSheet, Text, View } from "react-native";

const details = [
  { label: "Fecha de depósito", value: "08 sep 2026 · 11:20" },
  { label: "Comprador", value: "María Quispe" },
  { label: "Ubicación actual", value: "Locker M-12" },
  { label: "Quién paga el locker", value: "Comerciante" },
  { label: "Costo acumulado", value: "Bs 6" },
  { label: "Recargo extra", value: "Bs 4" },
];

export default function PackageDetails() {
  return (
    <View style={styles.card}>
      <Text style={styles.reference}>PK-184 · Rol comerciante</Text>

      <View style={styles.heading}>
        <Text style={styles.packageName}>Cámara deportiva</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>No recogido a tiempo</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {details.map((item) => (
        <View key={item.label} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#E9E2D7",
    padding: 23,
  },
  reference: {
    color: "#7C818B",
    fontSize: 14,
    marginBottom: 10,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 10,
  },
  packageName: {
    color: "#303036",
    fontSize: 23,
    fontWeight: "700",
    flexShrink: 1,
  },
  badge: {
    backgroundColor: "#FDECEC",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 25,
  },
  badgeText: {
    color: "#D74747",
    fontSize: 12,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#E9E2D7",
    marginTop: 30,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    paddingVertical: 8,
  },
  label: {
    color: "#7C818B",
    fontSize: 15,
    flex: 1,
  },
  value: {
    color: "#303036",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "right",
    flexShrink: 1,
  },
});
