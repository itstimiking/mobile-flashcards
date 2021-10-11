import React, { useEffect,useState, createContext, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initialState} from '../utils/helpers';

const MOBILE_FLASHCARDS_DECK_KEY = "udacityMobileFitnessAppByTimi:key";

export const DeckContext = createContext();

export const useDeckContext = () => useContext(DeckContext);
  

export const DeckContextProvider = ({children}) => {

    const [decks, setDecks] = useState({})

    useEffect(()=>{

        if(decks !== initialState){
            AsyncStorage.setItem(MOBILE_FLASHCARDS_DECK_KEY, JSON.stringify(decks))
        }
    },[decks])

    useEffect(()=>{
        console.log("::::::::::: ASYNC STORAGE IS RUNNING ::::::::::::")
        AsyncStorage.getItem(MOBILE_FLASHCARDS_DECK_KEY).then((value) => {
            if (value) {
                console.log(JSON.parse(value))
              setDecks(JSON.stringify(value));
            }else{
              setDecks(initialState);
            }
        });
    },[])

    function saveDeckTitleContext(deck){
        setDecks({...decks, ...deck })
    }

    function addCardToDeckContext(title,question){
        setDecks({
            ...decks,
            [title]:{
                ...decks[title],
                questions:[
                    ...decks[title].questions,
                    question
                ]
            }
        })
    }
 
    return (
        <DeckContext.Provider 
            value={{
                decks,
                saveDeckTitleContext,
                addCardToDeckContext
            }}
        >
            {children}
        </DeckContext.Provider>
    )
}

