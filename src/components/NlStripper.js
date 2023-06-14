import React, { useState } from "react";

const NlStripper = () => {
    const [text, setText] = useState("");
    const handleTextChange = (event) => {
        const newtext = event.target.value
        setText(newtext)
    }
    const handleClick = () => {
        const strippedtext = text.replace(/\r?\n/g, ' ')
        setText(strippedtext)
    }
    return (
        <div className="word-counter">
            <div className="text-form">
                <textarea className="input-textarea" value={text} onChange={handleTextChange}/>
                <button className="execute-button" onClick={handleClick}>実行</button>
            </div>
        </div>
    )
}

export default NlStripper;