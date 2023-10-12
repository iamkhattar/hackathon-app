import React from "react";
import {SafeAreaView, ScrollView, StyleSheet, View} from "react-native";
import {Button, Card, Text} from "@rneui/themed";
import MapView, {Marker} from "react-native-maps";
import {Appointment} from "../../types";

type AppointmentDetailsProps = {
    appointment: Appointment
};

const AppointmentDetailsTile: React.FunctionComponent<
    AppointmentDetailsProps
> = ({appointment}) => {
    let startDate = new Date(0);
    // startDate.setUTCSeconds(appointment.start_time);

    let endDate = new Date(0);
    // endDate.setUTCSeconds(appointment.end_time);
    return (
        <>
            <SafeAreaView style={{width: "100%", height: "100%", flex: 1}}>
                <Card containerStyle={{height: "95%"}}>
                    <Card.Title>Appointment
                        with {appointment?.client?.first_name}{" "}{appointment?.client?.last_name}</Card.Title>
                    <Card.Divider/>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: appointment?.lat,
                            longitude: appointment?.long,
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
                    <Text style={{marginBottom: 10}}>
                        Start: {startDate.toLocaleString()}
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        End: {endDate.toLocaleString()}
                    </Text>
                    {!appointment.appointment_status &&
                        <Button
                            buttonStyle={{
                                borderRadius: 5,
                                marginBottom: 10,
                                marginTop: 10
                            }}
                            titleStyle={{fontWeight: "bold", fontSize: 23}}
                            title="Check In"
                        />
                    }
                </Card>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%"
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
        // width: "100%",
        height: "65%",
        marginBottom: 10,
    },
});

export default AppointmentDetailsTile;
