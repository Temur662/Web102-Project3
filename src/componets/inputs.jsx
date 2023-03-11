import React from "react";
import { useState } from "react";

const Input = ({array, arrayIndex}) =>{
    const [guess, setGuess] = useState(" ")
    const onSubmit = (e) =>{
        e.preventDefault();
        if(guess == array[arrayIndex.indexOf()]){
            console.log("Works");
        }else{
            console.log(array[arrayIndex.indexOf()])
            console.log(guess)
        }
    }


    return(
        <div>
            <h4>Guess Answer: </h4>
            <input placeholder = "Guess" type = "text" value = {guess} onChange = {(e)=> setGuess(e.target.value)}></input>
            <button onClick = {onSubmit}>Submit Guess</button>
        </div>
    )
}

export default Input