import React from 'react';

import classes from './buttons.css';

const buttons = (props) => (
  <div>
    <button onClick={ () => props.onclickHandler(1) } className={ classes.Button } >1</button>
    <button onClick={ () => props.onclickHandler(2)} className={ classes.Button } >2</button>
    <button onClick={ () => props.onclickHandler(5)} className={ classes.Button } >5</button>
    <button onClick={ () => props.onclickHandler(10) } className={ classes.Button } >10</button>
    <button onClick={ () => props.onResetHandler() } className={ classes.Button } >Reset</button>
  </div>
)

export default buttons;