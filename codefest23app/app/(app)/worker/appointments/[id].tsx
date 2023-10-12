import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Appointment} from "../../../../types";
import {API_URL} from "../../../../constants";
import {useAuthContext} from "../../../../ctx/AuthContext";
import AppointmentDetailsTile from "../../../../components/AppointmentDetailsTile";

export default function AppointmentRoute() {

    const {id} = useLocalSearchParams();

    const {user} = useAuthContext();

    const [appointment, setAppointment] = useState<Appointment | undefined>(undefined);

    const [error, isError] = useState<boolean>(false);

    useEffect(() => {
        isError(false);
        Axios.get<Appointment>(`${API_URL}/api/v1/appointments/${id}`, {headers: {"authorization": `Bearer ${user?.jwt}`}}).then((response) => setAppointment(response.data)).catch((e) => {
            isError(true);
        })
    }, [id]);

    return <>
        {appointment && <AppointmentDetailsTile appointment={appointment}/>}
    </>
}