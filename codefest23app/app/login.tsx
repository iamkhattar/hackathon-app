import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { API_URL } from "../constants";
// @ts-ignore
import base64 from "react-native-base64";
import jwt_decode from "jwt-decode";
import { useAuthContext } from "../ctx/AuthContext";
import { User } from "../types";
import { Redirect } from "expo-router";
import { Button, Input } from "@rneui/themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, displayError] = useState<boolean>(false);

  const { user, setUser } = useAuthContext();

  if (user?.type === "worker") {
    return <Redirect href="/worker/appointments" />;
  }

  if (user?.type === "manager") {
    return <Redirect href="/manager/dashboard" />;
  }

  const login = () => {
    const authHeader = "Basic " + base64.encode(`${username}:${password}`);
    axios
      .post(
        `${API_URL}/api/v1/users/login`,
        {},
        { headers: { Authorization: authHeader } }
      )
      .then((response) => {
        const jwt = response.headers["authorization"].split(" ")[1];
        const decoded = jwt_decode(jwt);
        setUser?.({ ...(decoded as User), jwt });
      })
      .catch((_: any) => {
        displayError(true);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{ resizeMode: "contain", width: "75%" }}
      />
      <Input
        placeholder="Username"
        onChangeText={setUsername}
        style={{ width: "75%" }}
        leftIcon={{ type: "font-awesome", name: "user" }}
      />

      <Input
        placeholder="Password"
        onChangeText={setPassword}
        leftIcon={{ type: "font-awesome", name: "lock" }}
        secureTextEntry={true}
        errorStyle={{ color: "red" }}
        errorMessage={error ? "Incorrect Credentials" : undefined}
      />

      <Button
        title="Log in"
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={login}
      />
    </View>
  );
}
