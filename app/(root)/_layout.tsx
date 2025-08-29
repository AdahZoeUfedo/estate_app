import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { Slot } from "expo-router";

export default function AppLayout() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator size="large" color="#00bfa5" />
      </SafeAreaView>
    );
  }

 
  return <Slot />;
}
