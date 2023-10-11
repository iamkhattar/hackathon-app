import React from "react";
import { Icon, ListItem } from "@rneui/themed";

type AppointmentItemProps = {
  appointment: {
    clientName: string;
    startTime: number;
    endTime: number;
    state: string;
  };
};

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment }) => {
  const { clientName, startTime, endTime, state } = appointment;

  let dotColor = "";
  switch (state) {
    case "danger":
      dotColor = "red";
      break;
    case "warning":
      dotColor = "orange";
      break;
    case "none":
      dotColor = "gray";
      break;
  }
  let startDate = new Date(0);
  startDate.setUTCSeconds(startTime);

  let endDate = new Date(0);
  endDate.setUTCSeconds(endTime);

  return (
    <>
      <ListItem>
        <Icon name="calendar" type="material-community" color={dotColor} />
        <ListItem.Content>
          <ListItem.Title>{clientName}</ListItem.Title>
          <ListItem.Subtitle>
            Start: {startDate.toLocaleString()}
          </ListItem.Subtitle>
          <ListItem.Subtitle>End: {endDate.toLocaleString()}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  );
};

export default AppointmentItem;
