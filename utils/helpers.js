import React from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const MOBILE_FLASHCARDS_DECK_KEY = "udacityMobileFitnessAppByTimi";


export const getDecks = () => {

    const decks = {}

    AsyncStorage.getItem(MOBILE_FLASHCARDS_DECK_KEY)
    .then(data => console.log(JSON.parse(data)))
    .catch(err=>console.log("Error in Async Storage ::::::::::::"))
}

export const getDeck = (id) => {

    const deck = {}

    AsyncStorage.mergeItem(packageKey, deck)
    .then(data => JSON.parse(data))
    .then(res=> deck = res[id])
    .catch(err=>alert(err))

    return deck
}


export const saveDeckTitle = (title) => {

    AsyncStorage.getItem(packageKey, deck)
    .then(data => JSON.parse(data))
    .then(res=> deck = res[id])
    .catch(err=>alert(err))
}


/*** addCardToDeck: take in two arguments, title and card, 
 * and will add the card to the list of 
 * questions for the deck with the associated title.
 * 
 */

 export const addCardToDeck = (title,card) => {

    AsyncStorage.getItem(packageKey, deck)
    .then(data => JSON.parse(data))
    .then(res=> deck = res[id])
    .catch(err=>alert(err))
}