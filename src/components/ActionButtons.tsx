import { StyleSheet, Text, View } from "react-native";

export default function ActionButtons() {
  return (
    <View style={styles.container}>
      <View style={styles.primaryButton}>
        <Text style={styles.primaryText}>Ver código de recojo</Text>
      </View>

      <View style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Contactar al comprador</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    gap: 12,
  },
  primaryButton: {
    minHeight: 70,
    backgroundColor: "#303034",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  secondaryButton: {
    minHeight: 66,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E9E2D7",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryText: {
    color: "#303036",
    fontSize: 16,
    fontWeight: "700",
  },
});
