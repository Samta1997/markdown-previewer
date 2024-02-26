import { useState } from "react";
import { FaEdit,FaExpandArrowsAlt } from "react-icons/fa";
import { marked } from "marked";
import {GlobalStyle} from './GlobalStyles'

const App = () => {
    marked.setOptions({
        breaks:true
    })
    const default_text=`# Welcome to my React Markdown Previewer! \n## This is a sub-heading... \n### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    `
  const [inputText, setInputText]=useState(default_text)
  const parseIntoHtml=(event)=>{
    setInputText(event.target.value)
  }
  return (
    <>
      <GlobalStyle/>
      <div className="editor-wrap">
        <div className="toolbar">
          <FaEdit />
          <h4>Editor</h4>
          <div className="arrow">
            <FaExpandArrowsAlt />
          </div>  
        </div>
        <textarea 
          id="editor" 
          type="text" 
          value={inputText} 
          onChange={parseIntoHtml}
           
        > 
        </textarea>
      </div>
      <div className="preview-wrap">
        <div className="toolbar">
          <FaEdit />
          <h4>Previewer</h4>
          <div className="arrow">
            <FaExpandArrowsAlt />
          </div>  
        </div>
        <div 
          id="preview" 
          dangerouslySetInnerHTML={{ __html: marked(inputText,{gfm:true}) }}
        >
        
        </div>
      </div>
      </>
  )
}

export default App