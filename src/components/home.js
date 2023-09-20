import React, {useState} from 'react';

export default function Home(props) {
  let color=props.mode==="Black"?"White":props.mode==="Green"?"#62f734":props.mode==="Red"?"#ff3333":props.mode==="Blue"?"#497af5":"Black";
  let colorLight=props.mode==="Black"?"#383737":props.mode==="Green"?"#45eb34":props.mode==="Red"?"#fa4d4d":props.mode==="Blue"?"#3c72f0":"white";
  let colorDark=props.mode==="Black"?"White":props.mode==="Green"?"#073d02":props.mode==="Red"?"#750202":props.mode==="Blue"?"#040738":"Black";
  const [text, setText] = useState("");
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleUpperCase=()=>{
    setText(text.toUpperCase());
  }
  const handleLowerCase=()=>{
    setText(text.toLowerCase());
  }
  const handleInvertCase=()=>{
    let new_text="";
    for(let i=0;i<text.length;i++){
      if(text[i]===text[i].toLowerCase()){
        new_text=new_text+text[i].toUpperCase();
      } else {
        new_text=new_text+text[i].toLowerCase();
      }
    }
    setText(new_text);
  }
  const handleCapitalizeCase=()=>{
    let lines=text.split(/\r?\n/);
    for(let i=0;i<lines.length;i++){
      const words=lines[i].split(/\s/);
      for(let j=0;j<words.length;j++){
        if(words[j].length>0){
          words[j]=words[j][0].toUpperCase()+words[j].substr(1);
        }
      }
      lines[i]=words.join(" ");
    }
    let new_text=lines.join("\n");
    setText(new_text);
  }
  const handleSpaces=()=>{
    let lines=text.split(/\r?\n/);
    for(let i=0;i<lines.length;i++){
      lines[i]=lines[i].replace(/\s+/g,' ').trim();
    }
    let new_text=lines.join("\n");
    setText(new_text);
  }
  const handleLineBreaks=()=>{
    setText(text.split(/\r?\n/).join(" "));
  }
  const [replaceFrom,setReplaceFrom]=useState("");
  const [replaceTo,setReplaceTo]=useState("");
  const handleReplaceFrom=(event)=>{
    setReplaceFrom(event.target.value);
  }
  const handleReplaceTo=(event)=>{
    setReplaceTo(event.target.value);
  }
  const handleReplace=()=>{
    setText(text.replaceAll(replaceFrom, replaceTo));
    setReplaceFrom("");
    setReplaceTo("");
  }
  const handleReverseText=()=>{
    setText(text.split("").reverse().join(""));
  }
  const handleReverseLines=()=>{
    setText(text.split(/\r?\n/).reverse().join("\n"));
  }
  const handleReverseLineWord=()=>{
    let new_text=text.split(/\r?\n/);
    for(let i=0;i<new_text.length;i++){
      new_text[i]=new_text[i].split(" ").reverse().join(" ");
    }
    setText(new_text.join("\n"));
  }
  const handleReverseLineText=()=>{
    let new_text=text.split(/\r?\n/);
    for(let i=0;i<new_text.length;i++){
      new_text[i]=new_text[i].split("").reverse().join("");
    }
    setText(new_text.join("\n"));
  }
  const handleSortLines=()=>{
    setText(text.split(/\r?\n/).sort().join("\n"));
  }
  const handleSortWords=()=>{
    let new_text=text.split(/\r?\n/);
    for(let i=0;i<new_text.length;i++){
      new_text[i]=new_text[i].split(" ").sort().join(" ");
    }
    setText(new_text.join("\n"));
  }
  return (
    <>
    <div className='container' style={{color:color}}>
        <h1>Modify your text as per your wish!!!..</h1>
      <div className="form-floating">
  <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Try our text formatting app...." id="floatingTextarea2" style={{height: '150px',color:colorDark,backgroundColor:colorLight}}></textarea>
  <label htmlFor="floatingTextarea2"></label>
</div>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleUpperCase} style={{color:colorDark,backgroundColor:colorLight}}>Upper Case</button>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleLowerCase} style={{color:colorDark,backgroundColor:colorLight}}>Lower Case</button>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleInvertCase} style={{color:colorDark,backgroundColor:colorLight}}>Invert Case</button>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleCapitalizeCase} style={{color:colorDark,backgroundColor:colorLight}}>Capitalize Case</button>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleSpaces} style={{color:colorDark,backgroundColor:colorLight}}>Remove Extra Spaces</button>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleLineBreaks} style={{color:colorDark,backgroundColor:colorLight}}>Remove Line Breaks</button>
<div className="btn-group">
  <button type="button" className="btn btn-outline-dark my-3 mx-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:colorDark,backgroundColor:colorLight}}>
    Replace
  </button>
  <ul className="dropdown-menu dropdown-menu-end" style={{backgroundColor:colorLight}}>
    <li><input className="dropdown-item" type="text" value={replaceFrom} onChange={handleReplaceFrom} placeholder='From'  style={{color:colorDark,backgroundColor:colorLight}} /></li>
    <li><input className="dropdown-item" type="text" value={replaceTo} onChange={handleReplaceTo} placeholder='To'  style={{color:colorDark,backgroundColor:colorLight,borderTop:`0.5px solid ${colorDark}`}} /></li>
    <li><button className="dropdown-item btn-outline-dark" onClick={handleReplace} type="button"  style={{color:colorDark,backgroundColor:colorLight,borderTop:`0.5px solid ${colorDark}`}}>Replace all</button></li>
  </ul>
</div>
<div className="btn-group">
  <button type="button" className="btn btn-outline-dark my-3 mx-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{color:colorDark,backgroundColor:colorLight}}>
    Reverse
  </button>
  <ul className="dropdown-menu dropdown-menu-end" style={{backgroundColor:colorLight}}>
    <li><button type="button" className="btn btn-outline-dark dropdown-item" onClick={handleReverseText} style={{color:colorDark,backgroundColor:colorLight}}>Reverse whole text</button></li>
    <li><button type="button" className="btn btn-outline-dark dropdown-item" onClick={handleReverseLines} style={{color:colorDark,backgroundColor:colorLight,borderTop:`0.5px solid ${colorDark}`}}>Reverse lines</button></li>
    <li><button type="button" className="btn btn-outline-dark dropdown-item" onClick={handleReverseLineWord} style={{color:colorDark,backgroundColor:colorLight,borderTop:`0.5px solid ${colorDark}`}}>Reverse words in lines</button></li>
    <li><button type="button" className="btn btn-outline-dark dropdown-item" onClick={handleReverseLineText} style={{color:colorDark,backgroundColor:colorLight,borderTop:`0.5px solid ${colorDark}`}}>Reverse each line</button></li>
  </ul>
</div>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleSortLines} style={{color:colorDark,backgroundColor:colorLight}}>Sort Lines</button>
<button type="button" className="btn btn-outline-dark my-3 mx-3" onClick={handleSortWords} style={{color:colorDark,backgroundColor:colorLight}}>Sort words (each line)</button>
    </div>
    <div className="container" style={{marginBottom:"30px"}}>
    <ul className="list-group">
  <li className="list-group-item" style={{color:colorDark,backgroundColor:colorLight}}><strong>Number of lines: </strong>{text.split(/\r?\n/).filter((item) => item.length>0).length}</li>
  <li className="list-group-item" style={{color:colorDark,backgroundColor:colorLight}}><strong>Number of words: </strong>{text.split(/\s+/g).filter((item) => item.length>0).length}</li>
  <li className="list-group-item" style={{color:colorDark,backgroundColor:colorLight}}><strong>Number of characters: </strong>{text.length}</li>
</ul>
    </div>
    </>
  )
}
