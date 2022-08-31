import ReactJson from 'react-json-view'
import { useState } from 'react';
import styles from '../styles/Tools.module.css'

const JsonViewer = () => {
  let JsonConfig = {
    type: "front end",
    items: [{ name: 10, url: true }]
  };

  const [state, setState] = useState(JsonConfig);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      let paste = JSON.parse(e.target.value)
      console.log(typeof paste)
      if ( typeof paste === "object") {
        setState(state => {
          state = paste
          return state;
        })
      }
    }
    
  }

  return (
    <>
     <p className={`${["text-center"]} ${styles.title}`}>paste your json</p>
     <textarea 
      onChange={(e) => handleChange(e)}/>
     <ReactJson src={state} theme="monokai" />
    </>
  )
}

export default JsonViewer;