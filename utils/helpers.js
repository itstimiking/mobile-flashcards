import React from "react";
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import AsyncStorage from "@react-native-async-storage/async-storage";


const NOTIFICATION_KEY_MOBILE_FLASHCARD =
    "myMobileFlashcardNotificationKey:notifications";

export const initialState = {
    React: {
        title: "React",
        questions: [
            {
                question: "What is React?",
                answer: "A library for managing user interfaces",
            },
            {
                question: "Where do you make Ajax requests in React?",
                answer: "The componentDidMount lifecycle event",
            },
        ],
    },
    JavaScript: {
        title: "JavaScript",
        questions: [
            {
                question: "What is a closure?",
                answer: "The combination of a function and the lexical environment within which that function was declared.",
            },
        ],
    },
};

export const clearLocalNotifications = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY_MOBILE_FLASHCARD).then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
};

export const setLocalNotification = async () => {
    AsyncStorage.getItem(NOTIFICATION_KEY_MOBILE_FLASHCARD)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                
                Location.requestBackgroundPermissionsAsync()
                .then(status=>{
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync();

                        let tomorrow = new Date();
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        tomorrow.setHours(7);
                        tomorrow.setMinutes(0);

                        Notifications.scheduleNotificationAsync({
                            content: {
                                title: "Mobile flashcards app",
                                body: " Dont forget to practice for your upcomming test today",
                            },
                            trigger: {
                                seconds: tomorrow,
                                repeats: true,
                            },
                        });

                        AsyncStorage.setItem(
                            NOTIFICATION_KEY_MOBILE_FLASHCARD,
                            JSON.stringify(true)
                        );
                    }
                })
            }
        })
        .catch(err=>console.log(err))
};
