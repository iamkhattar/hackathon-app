import React from "react";
import {Avatar, ListItem} from "@rneui/themed";
import {router} from "expo-router";
import {Appointment} from "../../types";

type AppointmentItemProps = {
    appointment: Appointment
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({appointment}: AppointmentItemProps) => {

    let dotColor = "";
    // switch (state) {
    //   case "danger":
    //     dotColor = "red";
    //     break;
    //   case "warning":
    //     dotColor = "orange";
    //     break;
    //   case "none":
    //     dotColor = "gray";
    //     break;
    // }
    // let startDate = new Date(0);
    // startDate.setUTCSeconds(startTime);
    //
    // let endDate = new Date(0);
    // endDate.setUTCSeconds(endTime);

    return (
        <ListItem
            key={appointment.id}
            containerStyle={{
                marginHorizontal: 16,
                marginVertical: 8,
                borderRadius: 8,
                width: "100%",
                padding: "7%"
            }}
            onPress={() => router.replace({
                pathname: "/worker/appointments/[id]",
                params: {id: appointment.id}
            })}
        >
            <Avatar rounded source={{uri: "https://uifaces.co/our-content/donated/XdLjsJX_.jpg"}}/>
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: 'bold'}}>
                    {appointment.client.first_name}{" "}{appointment.client.last_name}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {appointment.address}
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
        </ListItem>

    );
};

export default AppointmentItem;
