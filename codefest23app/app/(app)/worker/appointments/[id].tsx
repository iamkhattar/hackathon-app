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

    const [appointment, setAppointment] = useState<Appointment | undefined>({
        "end_time": "2023-02-02T13:12:12",
        "long": -4.2655378,
        "appointment_status": null,
        "start_time": "2023-02-02T12:12:12",
        "id": 1,
        "lat": 55.8552066,
        "address": "Some long address",
        "severity_status": null,
        "client": {
            "email": "a@mail.test",
            "first_name": "Andy",
            "phone": "001001010101013",
            "last_name": "Smith",
            "id": 1
        },
        "worker": {
            "type": "worker",
            "first_name": "Andy",
            "email": "a@mail.test",
            "last_name": "Smith",
            "id": 1,
            "phone": "001001010101013"
        }
    });

    const [error, isError] = useState<boolean>(false);

    // useEffect(() => {
    //     isError(false);
    //     Axios.get<Appointment>(`${API_URL}/api/v1/appointment/${id}`, {headers: {"authorization": `Bearer ${user?.jwt}`}}).then((response) => setAppointment(response.data)).catch((e) => {
    //         isError(true);
    //     })
    // }, [id]);

    return <>
        {appointment && <AppointmentDetailsTile appointment={appointment}/>}
    </>
}