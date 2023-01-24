import React from "react"

function TextInput(props){
    return <input style={props.text !== "" ? props.style : {}} 
                    onKeyDown={props.startedWriting} 
                    onKeyUp={props.writingStopped} 
                    onChange={props.handleChange} 
                    placeholder={props.text==="" ? "Click and Write here" : ""}>
            </input>
}

export default TextInput;