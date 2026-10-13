import { StyleSheet, Text, View } from "react-native";

const events = [
  {
    title: "Reubicado a M-12",
    description: "20 sep · Motivo: reorganización de lockers",
  },
  {
    title: "Asignado a L-02",
    description: "08 sep · Registro inicial",
  },
  {
    title: "Paquete aún no recogido",
    description: "Alerta automática de seguimiento",
  },
];

export default function LocationHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Historial de ubicación</Text>

      <View style={styles.card}>
        <View style={styles.timelineLine} />

        {events.map((event) => (
          <View key={event.title} style={styles.event}>
            <View style={styles.markerColumn}>
              <View style={styles.marker} />
            </View>

            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.description}>{event.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: "700",
    color: "#303036",
    marginBottom: 14,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 27,
    borderWidth: 1.5,
    borderColor: "#E9E2D7",
    paddingHorizontal: 15,
    paddingVertical: 25,
    position: "relative",
    overflow: "hidden",
  },
  timelineLine: {
    position: "absolute",
    left: 7,
    top: 10,
    bottom: 10,
    width: 3,
    backgroundColor: "#E9E2D7",
  },
  event: {
    flexDirection: "row",
    marginBottom: 27,
    minHeight: 50,
  },
  markerColumn: {
    width: 15,
    alignItems: "center",
    paddingTop: 5,
    marginRight: 7,
  },
  marker: {
    width: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: "#DE8A00",
    borderWidth: 3,
    borderColor: "#FFF0D0",
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#303036",
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: "#7C818B",
    lineHeight: 20,
  },
});
