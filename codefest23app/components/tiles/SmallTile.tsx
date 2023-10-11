import React from "react";
import { Avatar } from "@rneui/themed";

interface SmallAvatarProps {
  initials: string;
}

export default function SmallAvatar({ initials }: SmallAvatarProps) {
  return (
    <Avatar
      size={32}
      rounded
      title={initials}
      containerStyle={{ backgroundColor: "blue" }}
    />
  );
}
