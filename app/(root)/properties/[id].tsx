import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

// Example fetch function (replace with real Appwrite fetch)
async function fetchPropertyById(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    title: "Luxury Apartment",
    age: "5 years old",
    location: "Lagos, Nigeria",
    price: "₦25,000,000",
    facilities: "Swimming Pool, Gym, Parking Space",
    image: "https://picsum.photos/600/400?random=" + id,
  };
}

const Property = () => {
  const { id } = useLocalSearchParams();
  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    fetchPropertyById(id as string).then(setProperty);
  }, [id]);

  if (!property)
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#00b894" />
        <Text className="mt-2 text-gray-600">Loading property...</Text>
      </View>
    );

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Image
        source={{ uri: property.image }}
        className="w-full h-60 rounded-2xl mb-4"
      />

      <Text className="text-2xl font-bold text-gray-900 mb-2">
        {property.title}
      </Text>
      <Text className="text-lg text-gray-700 mb-1">📍 {property.location}</Text>
      <Text className="text-lg text-gray-700 mb-1">🏠 {property.age}</Text>
      <Text className="text-lg text-gray-700 mb-1">💰 {property.price}</Text>
      <Text className="text-lg text-gray-700">✨ {property.facilities}</Text>
    </ScrollView>
  );
};

export default Property;
