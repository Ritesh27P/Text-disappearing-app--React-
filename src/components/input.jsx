import React, { useState } from "react";
import TextInput from "../inputText";

function Input(props){

    const [text, setText] = useState("")
    const [time, setTime] = useState(0)
    const [istimerOn, setIsTimerOn] = useState(true)
    let nIntervalId;

    const myStyle = {
        opacity: 0.5
    }

    const myInputStyle = {
        maxWidth: "2px",
        backgroundColor: "white"
    }

    function handleChange(event){
        let message = event.target.value

        setText(prevText=>{
            return prevText + message
        })
        event.target.value = ""
    }
    
    function writingStopped(event){
        if(istimerOn){
            setIsTimerOn(false);
            nIntervalId = setInterval(()=>{
                setTime((prevTime)=>{
                    return prevTime + 1;
                })
            }, 1000)
        }
    }

    function startedWriting(event){
        if (event.keyCode === 8) setText(prevText=> {return text.substring(0, text.length-1)})
        setTime(0)
    }

    function gameOver(){
        setText("")
        setTime(0)
        clearInterval(nIntervalId)
        nIntervalId = null;
        
    }

    return <div className="message">
                {time > 6 ? gameOver() : ""}

                <h2 style={time>3 ? myStyle : {}}>
                    {text}
                    <TextInput text={text}
                                startedWriting={startedWriting}
                                writingStopped={writingStopped}
                                handleChange={handleChange}
                                style={myInputStyle}
                    />
                </h2>
            </div>
}

export default Input;