import React,{useState} from 'react'

export default function TextForm(props) {
    const handelUpClick =()=>{
        //console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelLowClick =()=>{
        //console.log("UpperCase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelOnChange =(event)=>{
        //console.log("OnChange was clicked");
        setText(event.target.value);
    }
    const handelClearclick =()=>{
        let newText = '';
        setText(newText);
    }
    const [text, setText] = useState('');

    const handelCopy =()=>{
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handelAlignment=()=>{
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const capitalFirstLetter = ()=>{
        let words = text.split(" ")
       let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="textBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handelUpClick}>Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handelLowClick}>Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handelClearclick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handelCopy}>Copy</button>
        <button className="btn btn-primary mx-1" onClick={handelAlignment}>Align</button>
        <button className="btn btn-primary mx-1" onClick={capitalFirstLetter}>Title Case</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Summary</h2>
            <p>
                <i>{text.split(" ").length}</i> <b>words</b>  <i>{text.length}</i> <b>characters</b>
            </p>
          <p>{0.008*text.split(" ").length} Minutes read</p>
          <h3 my-3>TextUtils</h3>
          <p>TextUtils is a useful utility that allows you to change the case of a paragraph in a single click!!!
         It offers many choices for capitalising, uncapitalizing, copying, and aligning the entered text.</p>
         <h3>How to use it?</h3>
         <p>To use TextUtils: 
             <ul>
                 <li>Write/Paste your text in the input box</li>
                 <li>Select the desired text case.</li>
             </ul>
         </p>
         <h4>Upper Case</h4>
         <p>
             <ul>All written letters are converted to capitals using the upper case converter.
It will convert all lowercase letters to uppercase ones.</ul>
         </p>
         <h4>Lower Case</h4>
         <p>
             <ul>All written letters are converted to lowercase using the lower case converter.
It will convert all uppercase letters to lowercase ones.</ul>
         </p>
         <h4>Title Case</h4>
         <p>
             <ul>This is the finest alternative for individuals who require a way to choose titles.
                It double-checks that all of the letters in the title are capitalized correctly.</ul>
         </p>
         <h4>Align</h4>
         <p>
             <ul>The text is precisely aligned by deleting superfluous spaces.</ul>
         </p>
         <h4>Clear</h4>
         <p>
             <ul>Removes all of the text from the textbox, leaving it empty.</ul>
         </p>
         <h4>Clear</h4>
         <p>
             <ul>Removes all of the text from the textbox, leaving it empty.</ul>
         </p>
         <h4>Copy</h4>
         <p>
             <ul>In a single click, the complete text is copied.</ul>
         </p>
         <h3>Benifits of using TextUtils</h3>
         <p>Case conversion isn't available in a lot of word processing tools.
The following are some of the key advantages of utilising the convertcase online:
             <ul>
                 <li>The converter allows you to rapidly change the case of your text from uppercase to lowercase.</li>
                 <li>With the "Title Case" option, you can easily set the title of your essay.</li>
                 <li>It prevents you from making mistakes with capitalization in your statements.</li>
                 <li>It counts the written letters, words, and lines automatically.</li>
             </ul>
         </p>
        </div>
        </>
    )
}
