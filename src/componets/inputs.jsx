import React from "react";
import { useState } from "react";

const Input = ({answers, questions, button}) =>{

    const [guess, setGuess] = useState(" ")
    const [isAnswerCorrect, setResult] = useState("")
    const [currStreak, setStreak] = useState(0)
    const [streak, setHighStreak] = useState(0)
    const [newButton, setNewButton] = useState(0)
    if(newButton != button){
        setGuess("")
        setResult("")
        setNewButton(button)
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(guess == answers[button]){
            setResult("True")
        }else{
            setResult("False")
        }
        if(isAnswerCorrect == "True"){
            setStreak(currStreak + 1)
        }else if(isAnswerCorrect == "False"){
            if(currStreak > streak){
            setHighStreak(currStreak)
            }
            setStreak(0)
        }
    }
    
    return(
        <div>
            <div className = "Streak">
            <h3 id = "streak">Current Streak: {currStreak}, Longest Streak: {streak}</h3>
            </div>
            <h4 id = "guess">Guess Answer: </h4>
            <input placeholder = "Guess" type = "text" value = {guess} className = {isAnswerCorrect} onChange = {(e)=> setGuess(e.target.value)}></input>
            <button onClick = {onSubmit}>Submit Guess</button>
        </div>
    )
}

export default Input