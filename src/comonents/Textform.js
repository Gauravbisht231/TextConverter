import React, { useState } from 'react'

export default function Textform(props) {


    // to convert text to upper case
    const handleUpClick = () => {
        console.log("Upper-case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    // to convert text to lower case
    const handleLoClick = () => {
        console.log("Lower-case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    //to clear the text
    const handleClearClick = () => {
        console.log("clearbutton was clicked" + text);
        let newText ="";
        setText(newText);
    }

    const handleOnChange = (e) => {

        console.log("on change");
        setText(e.target.value);
    }
    const [text, setText] = useState("Enter your text here");
    return (
        <>
            <div>

                <h1> {props.heading}</h1>
                <div className="mb-3">
                    {/* <label HtmlFor="MY BOX" className="form-label">Type Here!</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'gray'}} id="myBox" rows="8"></textarea>

                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>To Upper</button>
           
                <button className="btn btn-primary mx-2" onClick={handleLoClick} >To Lower</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
                
            </div>

            <div className="container">
                <h5>Your text summary</h5>
                <p>characters: {text.length} words: {text.split(" ").length}</p>
                <p>Appx. read time:  {0.008*text.split(" ").length*60} seconds</p>
                <h4> preview</h4>
                <p>{text.length>0? text:"ENTER TEXT ABOVE"}</p>
            </div>

        </>

    ) 
}
