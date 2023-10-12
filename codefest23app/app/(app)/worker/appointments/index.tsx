import { Button, TextInput, View, StyleSheet, Text } from 'react-native';
import { useAuthContext } from '../../../../ctx/AuthContext';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../../../../constants';
import { Appointment } from '../../../../types';
import AppointmentItem from '../../../../components/AppointmentItem';

export default function AppointmentsRoute(){

    const {user, setUser} = useAuthContext();

    
    const [appointments, setAppointments] = useState<Appointment[]>(undefined);

    const [error, isError] = useState<boolean>(false);

    useEffect(() => {
        isError(false);
        Axios.get<Appointment>(`${API_URL}/api/v1/appointments`, {headers: {"authorization": `Bearer ${user?.jwt}`}}).then((response) => setAppointments(response.data)).catch((e) => {
            isError(true);
        })
    }, []);

    if(error){
        
    }

    if(appointments){

        console.log(appointments);

    return (
    <>
            {appointments.map((appointment) => <AppointmentItem key={appointment.id} appointment={appointment}/>)}
    </>
    )


    }
}