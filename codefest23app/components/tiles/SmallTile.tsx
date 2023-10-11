import React from "react";
import { Avatar } from "@rneui/themed";

export default function SmallAvatar({ initials }) {
  return (
    <Avatar
      size={32}
      rounded
      title={initials}
      containerStyle={{ backgroundColor: "blue" }}
    />
  );
}
