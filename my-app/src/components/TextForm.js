import React, { useState } from "react";

export default function TextForm(props)
{
    const [text, setText] = useState('');

    const handelUpClick = () =>
    {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handelDownClick = () =>
    {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success");
    }
    const handelDeleteClick = () =>
    {
        let newText = '';
        setText(newText)
        props.showAlert("Deleted", "warning");
    }
    const handelEmailClick = () =>
    {
        let newText = text + '@gmail.com';
        setText(newText)
        props.showAlert("E-mail added", "success");
    }
    const handelOnChange = (event) =>
    {
        setText(event.target.value)
    }
    // const handleCopy = () =>
    // {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.value);
    //     props.showAlert("Copied to Clipboard", "success");
    // }
    let words = text.split(" ").length - 1;
    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>

                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handelOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handelDownClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handelEmailClick}>Convert To Email</button>
                <button className="btn btn-danger mx-2" onClick={handelDeleteClick}>Delete</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button> */}
            </div>

            <div className="container my-3">
                <h2>Your Summary</h2>
                <p>{words} words and {text.length} characters</p>
                <p>{0.008 * words} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}