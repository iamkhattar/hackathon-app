import React from "react";
import { View } from "react-native";
import { Text, Button, useThemeMode } from "@rneui/themed";
import AppointmentItem from "../components/AppointmentItem";
import AppointmentDetailsTile from "../components/AppointmentDetailsTile";

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
      <AppointmentDetailsTile
        appointment={{
          clientName: "Tom Williams",
          startTime: 1697056755,
          endTime: 1697063955,
          state: 1,
          lat: 55.215838,
          long: -4.441463,
          id: 123,
        }}
      />
    </View>
  );
}
