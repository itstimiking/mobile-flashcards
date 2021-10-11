import React, { useEffect,useState, createContext, useContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initialState} from '../utils/helpers';

const MOBILE_FLASHCARDS_DECK_KEY = "udacityMobileFitnessAppByTimi";

export const DeckContext = createContext();

export const useDeckContext = () => useContext(DeckContext);
  

export const DeckContextProvider = ({children}) => {

    const [decks, setDecks] = useState({})

    useEffect(()=>{
        console.log("::::::::::: ASYNC SETITEM ::::::::::::")

        if(decks !== initialState){
            AsyncStorage.setItem(MOBILE_FLASHCARDS_DECK_KEY, JSON.stringify(decks))
        }
    },[decks])

    useEffect(()=>{
        console.log("::::::::::: ASYNC STORAGE IS RUNNING ::::::::::::")
        AsyncStorage.getItem(MOBILE_FLASHCARDS_DECK_KEY)
        .then(res=>JSON.parse(res))
        .then(data=>{
            console.log(data)
            if(data === null){
                setDecks(initialState)
            }else{
                setDecks(data)
            }
        })
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

