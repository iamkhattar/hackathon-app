import React from "react";
import { View } from "react-native";
import { Text, Button, useThemeMode } from "@rneui/themed";
import AppointmentItem from "../components/AppointmentItem";

export default function login() {
  return (
    <View>
      <Text h3>login window</Text>
      <AppointmentItem
        appointment={{
          clientName: "Tom Williams",
          startTime: 1697056755,
          endTime: 1697063955,
          state: 1,
        }}
      />
    </View>
  );
}
