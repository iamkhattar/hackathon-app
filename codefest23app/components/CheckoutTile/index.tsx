import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {Button, Card, Text} from "@rneui/themed";

type AppointmentDetailsProps = {
    startTime: number;
    endTime: number;
};

const CheckoutTile: React.FunctionComponent<AppointmentDetailsProps> = ({
                                                                            startTime, endTime,
                                                                        }) => {
    let startDate = new Date(0);
    startDate.setUTCSeconds(startTime);

    let endDate = new Date(0);
    endDate.setUTCSeconds(endTime);

    const [remainingTime, setRemainingTime] = useState(
        Math.floor((endDate.getTime() - new Date().getTime()) / 1000)
    );

    const [isAfterEndTime, setIsAfterEndTime] = useState(false);
    const [isEmergency, setIsEmergency] = useState(false);
    const [isAmber, setIsAmber] = useState(false);

    useEffect(() => {
        const timerId = setInterval(() => {
            setRemainingTime((prevTime) => {
                // If we've hit 0 and aren't in the emergency or post-end time state
                if (prevTime === 0 && !isAfterEndTime && !isEmergency) {
                    setIsAfterEndTime(true);
                    setIsAmber(true);
                    // Setting to 15 minutes in seconds
                    return 15 * 60;
                }
                // If we've hit 0 and are in the after end time state
                else if (prevTime === 0 && isAfterEndTime) {
                    setIsEmergency(true);
                    setIsAmber(false);
                    setIsAfterEndTime(false);
                    return 0;
                }
                // Otherwise just decrement the time
                else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [isAfterEndTime, isEmergency]);

    const displayTime = () => {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <Text
            style={{
                marginBottom: 10,
                fontWeight: "bold",
                color: isAmber ? "orange" : isEmergency ? "red" : "black",
            }}
            h4
        >
            {isEmergency
                ? "Emergency Detected"
                : `Time Remaining: ${displayTime()}`}
        </Text>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: "row",
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
    map: {
        width: "100%",
        height: 200,
        marginBottom: 10,
    },
});

export default CheckoutTile;
