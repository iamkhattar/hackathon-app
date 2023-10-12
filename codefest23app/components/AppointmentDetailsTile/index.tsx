import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";

type AppointmentDetailsProps = {
  appointment: {
    clientName: string;
    startTime: number;
    endTime: number;
    lat: number;
    long: number;
    id: number;
  };
};

const AppointmentDetailsTile: React.FunctionComponent<
  AppointmentDetailsProps
> = ({ appointment }) => {
  let startDate = new Date(0);
  startDate.setUTCSeconds(appointment.startTime);

  let endDate = new Date(0);
  endDate.setUTCSeconds(appointment.endTime);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>Appointment with {appointment.clientName}</Card.Title>
            <Card.Divider />
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: appointment.lat,
                longitude: appointment.long,
                latitudeDelta: 0.00922, // Zoom level
                longitudeDelta: 0.00421, // Zoom level
              }}
            >
              <Marker
                coordinate={{
                  latitude: appointment.lat,
                  longitude: appointment.long,
                }}
              />
            </MapView>
            <Text style={{ marginBottom: 10 }}>
              Start: {startDate.toLocaleString()}
            </Text>
            <Text style={{ marginBottom: 10 }}>
              End: {endDate.toLocaleString()}
            </Text>
            <Button
              buttonStyle={{
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: 23 }}
              title="Check In"
            />
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  map: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});

export default AppointmentDetailsTile;
