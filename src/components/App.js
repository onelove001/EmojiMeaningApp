import React from "react";
import SingleEmoji from "./SingleEmoji";
import emojis from "../emojis"


function CreateEmoji (emogi) {
  return (<SingleEmoji key={emogi.id} emoji={emogi.emoji} name={emogi.name} meaning={emogi.meaning}/>);
}


function App () {
    return (
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        <dl className="dictionary">
          {emojis.map(CreateEmoji)}
        </dl>
      </div>
    );
}

export default App; 
