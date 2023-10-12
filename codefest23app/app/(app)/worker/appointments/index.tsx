import {useAuthContext} from '../../../../ctx/AuthContext';
import {useEffect, useState} from 'react';
import {Appointment} from '../../../../types';
import AppointmentItem from '../../../../components/AppointmentItem';
import {ScrollView, Text} from "react-native";
import Axios from "axios";
import {API_URL} from "../../../../constants";
import {LinearProgress} from "@rneui/themed";

export default function AppointmentsRoute() {
    const {user, setUser} = useAuthContext();
    const [appointments, setAppointments] = useState<Appointment[] | undefined>(undefined);
    const [error, isError] = useState<boolean>(false);

    useEffect(() => {
        isError(false);
        Axios.get<Appointment[]>(`${API_URL}/api/v1/appointments`, {headers: {"authorization": `Bearer ${user?.jwt}`}})
            .then((response) => response?.data)
            .then(data => setAppointments(data))
            .catch((e) => isError(true))
    }, []);

    return (
        <ScrollView style={{width: "100%", paddingRight: 30}}>
            {error && <Text>Error</Text>}
            {appointments ?
                appointments.map((appointment) => <AppointmentItem key={appointment.id} appointment={appointment}/>) :
                <LinearProgress variant="indeterminate" style={{width: "90%"}} color="primary"/>
            }

        </ScrollView>
    )
}