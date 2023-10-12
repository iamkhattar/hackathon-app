import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Appointment } from "../../../../types";
import { API_URL } from "../../../../constants";
import { useAuthContext } from "../../../../ctx/AuthContext";
import AppointmentDetailsTile from "../../../../components/AppointmentDetailsTile";

export function AppointmentRoute(){

    const { id } = useLocalSearchParams();

    const {user} = useAuthContext();


    const [appointment, setAppointment] = useState<Appointment | undefined>(undefined);

    const [error, isError] = useState<boolean>(false);

    useEffect(() => {
        isError(false);
        Axios.get<Appointment>(`${API_URL}/api/v1/appointment/${id}`, {headers: {"authorization": `Bearer ${user?.jwt}`}}).then((response) => setAppointment(response.data)).catch((e) => {
            isError(true);
        })
    }, [id]);

    if(!appointment){
        return undefined;
    }

    return  <AppointmentDetailsTile
        appointment={{
          clientName: "Tom Williams",
          startTime: 1697056755,
          endTime: 1697063955,
          lat: 55.215838,
          long: -4.441463,
          id: 123,
        }}
      />


}