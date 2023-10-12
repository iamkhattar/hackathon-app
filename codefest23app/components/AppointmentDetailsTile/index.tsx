import React, {useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Button, Card, Dialog, Text} from "@rneui/themed";
import MapView, {Marker} from "react-native-maps";
import {Appointment} from "../../types";
import {router} from "expo-router";
import Axios from "axios";
import {API_URL} from "../../constants";
import {useAuthContext} from "../../ctx/AuthContext";

type AppointmentDetailsProps = {
    appointment: Appointment
};

const AppointmentDetailsTile: React.FunctionComponent<
    AppointmentDetailsProps
> = ({appointment}) => {
    const {user, setUser} = useAuthContext();
    const [error, isError] = useState<boolean>(false);


    let startDate = new Date(appointment.start_time);
    let endDate = new Date(appointment.end_time);

    return (
        <ScrollView style={{width: "100%", height: "100%", flex: 1}}>
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
                    {appointment.appointment_status == "CHECKED_IN" &&
                        <Button
                            buttonStyle={{
                                borderRadius: 5,
                                marginBottom: 10
                            }}
                            color={"primary"}
                            title={"Extend"}
                            titleStyle={{fontWeight: "bold", fontSize: 23}}
                            onPress={() => <Dialog />}
                        />
                    }
                    {(appointment.appointment_status == "none" || appointment.appointment_status == "CHECKED_IN") &&
                        <Button
                            buttonStyle={{
                                borderRadius: 5
                            }}
                            color={appointment.appointment_status == "CHECKED_IN" ? "secondary" : "primary"}
                            titleStyle={{fontWeight: "bold", fontSize: 23}}
                            title={appointment.appointment_status == "none" ? "Check In" : "Check Out"}
                            onPress={() => {
                                Axios.put(`${API_URL}/api/v1/appointments/${appointment.id}/status`,
                                    {"status": appointment.appointment_status == "CHECKED_IN" ? "CHECKED_OUT" : "CHECKED_IN"},
                                    {headers: {'Authorization': `Bearer ${user?.jwt}`}}
                                )
                                    .then(res => router.replace({
                                        pathname: "/worker/appointments/[id]",
                                        params: {id: appointment.id}
                                    }))
                                    .catch((e) => isError(true));
                            }}
                        />
                    }
                    {appointment.appointment_status == "CHECKED_IN" &&
                        <Button
                            buttonStyle={{
                                borderRadius: 5,
                                marginTop: 10
                            }}
                            color={"error"}
                            title={"Notify Manager"}
                            titleStyle={{fontWeight: "bold", fontSize: 23}}
                            onPress={() => {
                                Axios.put(`${API_URL}/api/v1/appointments/${appointment.id}/severity`,
                                    {"status": "SOS"},
                                    {headers: {'Authorization': `Bearer ${user?.jwt}`}}
                                )
                                    .then(res => router.replace({
                                        pathname: "/worker/appointments/[id]",
                                        params: {id: appointment.id}
                                    }))
                                    .catch((e) => isError(true));
                            }}
                        />
                    }

                    {appointment.appointment_status == "CHECKED_IN" &&
                        <Button
                            buttonStyle={{
                                borderRadius: 5,
                                marginTop: 10
                            }}
                            color={"error"}
                            title={"Notify Emergency Services"}
                            titleStyle={{fontWeight: "bold", fontSize: 23}}
                            onPress={() => {
                                Axios.put(`${API_URL}/api/v1/appointments/${appointment.id}/severity`,
                                    {"status": "SOS"},
                                    {headers: {'Authorization': `Bearer ${user?.jwt}`}}
                                )
                                    .then(res => router.replace({
                                        pathname: "/worker/appointments/[id]",
                                        params: {id: appointment.id}
                                    }))
                                    .catch((e) => isError(true));
                            }}
                        />
                    }

                </Card>
            </SafeAreaView>
        </ScrollView>
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
        height: "70%",
        marginBottom: 10,
    },
});

export default AppointmentDetailsTile;
