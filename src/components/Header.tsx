import { ChevronLeft } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <ChevronLeft size={25} color="#303036" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Detalle del paquete</Text>
        <Text style={styles.subtitle}>
          Vista cuando actúas como comerciante
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 20,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E9E2D7",
  },
  backButton: {
    width: 52,
    height: 52,
    borderWidth: 1.5,
    borderColor: "#E9E2D7",
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: "700",
    color: "#303036",
  },
  subtitle: {
    fontSize: 14,
    color: "#7C818B",
    marginTop: 5,
  },
});
