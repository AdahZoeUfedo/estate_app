import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator size="large" color="#0c4c43ff" />
      </SafeAreaView>
    );
  }

  if(!isLoggedIn) return <Redirect href='/signin' />

 
  return <Slot />;
}
