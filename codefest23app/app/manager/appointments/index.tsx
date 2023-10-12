import React from "react";
import { View } from "react-native";
import { Text, Button, useThemeMode } from "@rneui/themed";
import { Link } from "expo-router";

export default function appointments() {
  return (
    <View>
      <Text h3>appointments window</Text>
      {[0, 1, 2, 3, 4, 5, 6].map((id) => (
        <Link href={`/manager/appointments/${id}`}>{id}</Link>
      ))}
    </View>
  );
}
