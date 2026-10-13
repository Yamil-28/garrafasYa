import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

import ActionButtons from "../components/ActionButtons";
import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import LocationHistory from "../components/LocationHistory";
import PackageDetails from "../components/PackageDetails";

export default function PackageDetailScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <Header />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <PackageDetails />
        <LocationHistory />
        <ActionButtons />
      </ScrollView>

      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7F6F3",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
});
