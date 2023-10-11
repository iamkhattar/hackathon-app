import React from "react";
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";
import SmallAvatar from "./tiles/SmallTile";

export default function App() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <View style={styles.container}>
      <Text h3>Start Using RNE </Text>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
      <SmallAvatar initials="RD"></SmallAvatar>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
