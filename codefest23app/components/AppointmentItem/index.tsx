import React from "react";
import {Avatar, ListItem} from "@rneui/themed";
import {router} from "expo-router";
import {Appointment} from "../../types";

type AppointmentItemProps = {
    appointment: Appointment
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({appointment}: AppointmentItemProps) => {

    const gender = [
        "men", "women"
    ]

    const total = 53;

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
            <Avatar rounded size={"large"} source={{uri: `https://randomuser.me/api/portraits/${gender[Math.round(Math.random())]}/${Math.round(Math.random() * total)}.jpg`}}/>
            <ListItem.Content>
                <ListItem.Title style={{fontWeight: 'bold'}}>
                    {appointment.client.first_name}{" "}{appointment.client.last_name}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {new Date(appointment.start_time).toLocaleString()}
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                    {appointment.address}
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
        </ListItem>

    );
};

export default AppointmentItem;
