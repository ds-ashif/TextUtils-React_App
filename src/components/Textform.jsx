import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase!","success");
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase!","success");
    }
    const handleReset=()=>{
        let newtext='';
        setText(newtext);
        props.showAlert("Text Reset","success");
    }
    const reverse=()=>{
        let newText=text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed!","success");
    }
    const decorate=()=>{
        setAnimationClass('');
        setTimeout(()=>{
            setAnimationClass('scaleUp')
        },3);
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        let text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }
    const wordcount = (words) => {
        const filteredWords = words.filter((word) => word !== '');
        return filteredWords.length;
    }


    const [text,setText]=useState('');
    const [animationClass, setAnimationClass] = useState('');
    // text="jvds";  worng way to change the state
    // setText("jkdnslk") correct way to chage the state

  return (

    <>
        <div className='container'>
            <h3><i>{props.heading}</i></h3>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} placeholder='Enter Text' rows="10" style={{ animation: animationClass ? 'scaleUp 0.5s ease-out forwards' : '' , backgroundColor: props.mode==='light'?'white':'#0222', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-5" onClick={handleLowerClick}>Convert to LowerCase</button>
            <button className="btn btn-danger" onClick={handleReset}>Reset Text</button>
            <button className="btn btn-dark mx-5"onClick={reverse}>Reverse Text</button>
            <button className="btn btn-success mx-5" onClick={decorate}>Move text</button>
            <button className="btn btn-info" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3">
            <h3><i>Your Text Summary</i></h3>
            <p>{wordcount(text.trim().split(/\s+/))} words and {text.length} characters.</p>
            <p>On Average, You can take {0.008*text.split(" ").length} minutes to read the above text.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter Text to preview'}</p>
        </div>

    </>
  );
}
