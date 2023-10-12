import * as React from "react";
import {Header} from "@rneui/base";
import {Image} from "react-native";
import {router} from "expo-router";

export default () => {
    return (
        <Header
            barStyle="default"
            centerComponent={
                <Image
                    source={require("../../assets/logo.png")}
                    style={{resizeMode: "center"}}
                />}
            centerContainerStyle={{maxHeight: "10%", alignItems: "center", justifyContent: "center"}}
            leftContainerStyle={{}}
            linearGradientProps={{}}
            placement="center"
            rightContainerStyle={{}}
            statusBarProps={{}}
            backgroundColor="transparent"
            onTouchEnd={() => router.replace("/worker/appointments")}
            containerStyle={{borderBottomWidth: 1, borderBottomColor: "black"}}
        />
    );
}