import { useState, useEffect } from "react";
import Form from "../form/form";


async function creatDeck() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    const deck = await response.json()
    return deck.deck_id
}

async function getCards(deckId) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    return await response.json()
}

const DeckOfCards = () => {

    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await creatDeck()
            const data = await getCards(deckId)

            setDeck({
                cards: data.cards
            })
        }
        fetchData()
    }, [])



    const addCards = (newCard) => {
        console.log(newCard)
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCards={addCards} />
            <ul>
                {
                    deck.cards.map((card, index) => {
                        return (
                            <li key={index}>
                                <img src={card.image} alt={card.value} />
                                <p>{card.value} {card.suit}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )

}

export default DeckOfCards;