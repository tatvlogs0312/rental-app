import { Pressable, SafeAreaView, StatusBar, Text, TextInput, View } from "react-native";
import styles from "./LoginCss";
import { useState } from "react";
import CInput from "../../components/CInput";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CButton from "../../components/CButton";
import COLORS from "../../consts/Color";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const login = () => {
    if (username !== "" && password !== "") {
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white", justifyContent: "space-between" }}>
      <View style={{ marginTop: 200 }}>
        <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "600", color: COLORS.lightBlue, marginBottom: 20 }}>Đăng nhập</Text>
        <CInput value={username} onChangeText={setUsername} placeholder="Tài khoản" />
        <CInput value={password} onChangeText={setpassword} placeholder="Mật khẩu" secureTextEntry={true}/>
        <Text style={{ textAlign: "right", marginRight: 20, color: COLORS.lightBlue }}>Quên mật khẩu?</Text>
      </View>

      <CButton style={styles.btn} text={"Đăng nhập"} onPress={login}/>
    </SafeAreaProvider>
  );
}
