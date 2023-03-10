import {useState} from 'react'
import React from 'react'

const Cards = () => {
    const [card, setCardFlip] = useState("flip-card")
    const [button, setButton] = useState(0);
    const [flip, SetFlip] = useState(false);
    const questionsList = ["What animal is known as the King of the Jungle?", "What animal has 8 tentacles?", "What is the fastest land mammal?", "This animal when they are in a group are reffered to as a 'Murder', What animal is this?", "Are reptiles cold or warm blooded?" , "How do bats see in the night?", "Do Alligators live in salt or fresh water?", "What is national animal of Uzbekistan?", "What species of living ape is the biggest?", "What is the biggest living animal?"]
    const answersList = ["The Lion", "A Octopus","A Cheetah", "A Crow", "Cold Blooded", "Using Echolocation", "Fresh Water", "A Snow Leopard", "The Eastern Gorilla", "The Antartic Blue Whale"]
    const handleButtonClick = () => {
        if(button == 9){
            setButton(0);
        }else{
        if(flip){
        SetFlip(false);
        }
        setButton(button + 1);
        }
    }
    const flipTheCard = () =>{
        if(card == "flip-card"){
            setCardFlip("flip-card-flip");
        }else{
            setCardFlip("flip-card");
        }
    }
    return (
        <div>
        <div className= "card">
    <div className = {`flipcard ${flip ? "flip" : ""}`} onClick = {() => SetFlip(!flip)}>
            <div className= "front">
                {questionsList[button]}
            </div>
            <div className= "back">
                {answersList[button]}
            </div>
        </div>
        </div>
        <button type="next" class="nextCard" onClick = {handleButtonClick}>⭢</button>
        </div>
    )
}

export default Cards