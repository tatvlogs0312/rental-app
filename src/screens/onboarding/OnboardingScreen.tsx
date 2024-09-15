import { Image, Pressable, SafeAreaView, StatusBar, Text, View } from "react-native";
import styles from "./OnboardingCss";

export default function OnboardingScreen({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent />
      <Image source={require("../../assets/onboardImage.jpg")} style={styles.image} />

      <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
        <View>
          <Text style={styles.title}>Rental</Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.textStyle}>Ứng dụng tìm và quản lý phòng trọ</Text>
          <Text style={styles.textStyle}>tốt nhất hiện nay</Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "flex-end",
          paddingBottom: 40,
        }}
      >
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Đăng kí</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Đăng nhập</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
