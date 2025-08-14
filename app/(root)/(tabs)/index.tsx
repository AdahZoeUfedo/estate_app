import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to estate app</Text>
      <Link href="/signin">SignIn</Link>
      <Link href="/(root)/(tabs)/explore">Explore</Link>
      <Link href="/(root)/(tabs)/profile">Profile</Link>
      <Link href="/(root)/properties/[id]">Property</Link>
    </View>
  );
}
