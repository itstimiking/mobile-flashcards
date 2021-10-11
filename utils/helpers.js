import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MOBILE_FLASHCARDS_DECK_KEY = "udacityMobileFitnessAppByTimi";

export const initialState = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }



export const getDecks = async () => {

    const data = await AsyncStorage.getItem(MOBILE_FLASHCARDS_DECK_KEY)
    
    if(data !== null){
        return JSON.parse(data);
    }else{
        await AsyncStorage.setItem(MOBILE_FLASHCARDS_DECK_KEY, JSON.stringify(initialState))
        return initialState;
    }
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

    AsyncStorage.mergeItem(MOBILE_FLASHCARDS_DECK_KEY, JSON.stringify({[title]:{}}) )
    .then(data => console.log(data))
    .catch(err=>alert(err))

    console.log(title)
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