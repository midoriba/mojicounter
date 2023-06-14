import React, { useState } from "react";

const WordCounter = () => {
    const [text, setText] = useState("");
    const [length, setLength] = useState(0)
    const [lengthWithoutNl, setLengthWithoutNl] = useState(0)
    const handleTextChange = (event) => {
        const newtext = event.target.value
        setText(newtext)
        setLength(newtext.length)
        setLengthWithoutNl(newtext.replace('\n', '').length)
    }
    return (
        <div className="word-counter">
            <div className="text-form">
                <div className="output-lines">
                    <p className="output">文字数：{length}</p>
                    <p className="output">改行無し文字数：{lengthWithoutNl}</p>
                </div>
                <textarea className="input-textarea" value={text} onChange={handleTextChange} />
            </div>
        </div>
    )
}

export default WordCounter;