import React, { useEffect,useState, createContext, useContext } from 'react';
import {initialState, getDecks, getDeck, saveDeckTitle, addCardToDeck} from '../utils/helpers';

export const DeckContext = createContext();

export const useDeckContext = () => useContext(DeckContext);
  
export const DeckContextProvider = ({children}) => {

    const [decks, setDecks] = useState(initialState)

    useEffect(()=>{
        console.log(decks)
    },[decks])

    function getDeckContext(title){
        return decks[title]
    }

    function saveDeckTitleContext(deck){
        console.log("::::::::: Deck Added in Context :::::::")
        setDecks({...decks, ...deck })
    }

    function addCardToDeckContext(title){
        return decks[title]
    }
 
    return (
        <DeckContext.Provider 
            value={{
                decks,
                getDeckContext,
                saveDeckTitleContext,
                addCardToDeckContext
            }}
        >
            {children}
        </DeckContext.Provider>
    )
}

