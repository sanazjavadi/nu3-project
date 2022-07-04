import React, { FunctionComponent } from 'react';
import './index.css';

export const Showcase: FunctionComponent = ({ children }): JSX.Element =>  
<>
  <div className="App-Showcase">
    {children || <p>Nothing to show here...</p> }
  </div>
</>

export default Showcase;
