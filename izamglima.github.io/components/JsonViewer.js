import dynamic from "next/dynamic";
import Link from "next/link";
const ReactJson = dynamic(() => import('react-json-view'));
//import ReactJson from 'react-json-view'
import { useState } from 'react';
import styles from '../styles/Tools.module.css'


const JsonViewer = () => {
  const JsonConfig = {
    "type": "front endddd",
    "items": [{ "name": 10, "url": true }]
  };
  const [state, setState] = useState(JsonConfig);

  const handleChange = (e) => {
    let text = e.target.value
    let parsed = {}

    if (text !== "" && text.charAt(0) === '{' || text.charAt(0) === '[') {
      try {
        parsed = JSON.parse(text)

        if (typeof parsed === "object") {
          setState(state => {
            state = parsed
            return state
          })
        }
      } catch (e) {
        console.log(e) 
      }
    }
  }

  return (
    <>
      <div className={`${styles.tool__block}`}>
        <p className={`${["text-center"]} ${styles.title}`}>paste your json</p>
        <textarea onChange={(e) => handleChange(e)} />
        <p>your code will only be formatted if it has <u><Link href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON" target="_blank"><a>the right syntax</a></Link></u></p>
      </div>
      <div className={styles.jsonViewer}>
        
        {ReactJson && <ReactJson src={state} />}
      </div> 
    </>
  )
}

export default JsonViewer;