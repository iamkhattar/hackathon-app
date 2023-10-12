import React from "react";
import { View } from "react-native";
import { Text, Button, useThemeMode } from "@rneui/themed";
import AppointmentItem from "../components/AppointmentItem";
import AppointmentDetailsTile from "../components/AppointmentDetailsTile";
import CheckoutTile from "../components/CheckoutTile";

export default function login() {
  return (
    <View>
      <Text h3>login window</Text>
      <AppointmentItem
        appointment={{
          clientName: "Tom Williams",
          startTime: 1697056755,
          endTime: 1697063955,
          state: "warning",
        }}
      />
      {/* <AppointmentDetailsTile
        appointment={{
          clientName: "Tom Williams",
          startTime: 1697056755,
          endTime: 1697063955,
          lat: 55.215838,
          long: -4.441463,
          id: 123,
        }}
      /> */}
      <CheckoutTile
        appointment={{
          clientName: "Tom Williams",
          startTime: 1697056755,
          endTime: 1697068845,
          lat: 55.215838,
          long: -4.441463,
          id: 123,
        }}
      />
    </View>
  );
}
