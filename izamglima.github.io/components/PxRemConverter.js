import { useRef, useState } from 'react';
import styles from '../styles/Tools.module.css'

const PxRemConverter = () => {
  const warning = 'please set a new root size'

  const [refs] = useState({
    root: useRef(null),
    px: useRef(null),
    rem: useRef(null),
  });

  const [state, setState] = useState({
    rootSize: '16',
    pxSize: '0',
    remSize: '0'
  });

  const handleRootChange = e => {
    setState(state => {
      state.rootSize = e.target.value

      if (state.rootSize == "") {
        state.pxSize = ""
        state.remSize = ""
      } else {
        state.pxSize = state.remSize * state.rootSize
        state.remSize = state.pxSize / state.rootSize
      }
      
      return state;
    });
    refs.px.current.value = state.pxSize
    refs.rem.current.value = state.remSize
  };

  const handlePxChange = e => {
    setState(state => {
      state.pxSize = e.target.value

      if (state.rootSize !== "" && state.rootSize !== warning) {
        state.remSize = state.pxSize / state.rootSize
      } else {
        state.rootSize = warning
        state.remSize = ''
      }

      return state;
    });
    refs.root.current.value = state.rootSize
    refs.rem.current.value = state.remSize
  }

  const handleRemChange = e => {
    setState(state => {
      state.remSize = e.target.value

      if (state.rootSize !== "" && state.rootSize !== warning) {
        state.pxSize = state.remSize * state.rootSize
      } else {
        state.rootSize = warning 
        state.pxSize = ''
      }

      return state;
    });
    refs.root.current.value = state.rootSize
    refs.px.current.value = state.pxSize
  }

  return (
    <>
      <p className={`${styles.title}`}>px to rem converter</p>
      <div className={styles['converter__form']}>
        <label htmlFor="rootSize">root font size:</label>
        <input 
          ref={refs.root}
          id="rootSize"
          type="text"
          value={state.rootSize.value}
          maxLength={4}
          defaultValue="16"
          onChange={(e) => handleRootChange(e)} 
          onKeyDown={ (event) => {if (/^[A-Za-z]$/.test(event.key)) {event.preventDefault();}}} />

        <label htmlFor="pxSize">px value:</label>
        <input
          ref={refs.px}
          id="pxSize" 
          type="text"
          value={state.pxSize.value}
          maxLength={4}
          onChange={(e) => handlePxChange(e)} 
          onKeyDown={ (event) => {if (/^[A-Za-z]$/.test(event.key)) {event.preventDefault();}}} />
          
        <label htmlFor="remSize">rem value:</label>
        <input
          ref={refs.rem}
          id="remSize"
          type="text"
          value={state.remSize.value}
          maxLength={4}
          onChange={(e) => handleRemChange(e)} 
          onKeyDown={ (event) => {if (/^[A-Za-z]$/.test(event.key)) {event.preventDefault();}}} />
      </div>
    </>
  )
}

export default PxRemConverter;