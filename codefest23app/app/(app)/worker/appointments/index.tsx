import {useAuthContext} from '../../../../ctx/AuthContext';
import {useState} from 'react';
import {Appointment} from '../../../../types';
import AppointmentItem from '../../../../components/AppointmentItem';
import {Text} from "react-native";

export default function AppointmentsRoute() {
    const {user, setUser} = useAuthContext();
    const [appointments, setAppointments] = useState<Appointment[]>([
        {
            "end_time": "2023-02-02T13:12:12",
            "long": 1.2,
            "appointment_status": null,
            "start_time": "2023-02-02T12:12:12",
            "id": 1,
            "lat": 1.1,
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
        }
    ]);
    const [error, isError] = useState<boolean>(false);

    // useEffect(() => {
    //     isError(false);
    //     Axios.get<Appointment>(`${API_URL}/api/v1/appointments`, {headers: {"authorization": `Bearer ${user?.jwt}`}}).then((response) => setAppointments(response.data)).catch((e) => {
    //         isError(true);
    //     })
    // }, []);

    return (
        <>
            {error && <Text>Error</Text>}
            {appointments && appointments.map((appointment) => <AppointmentItem key={appointment.id}
                                                                                appointment={appointment}/>)}
        </>
    )

}