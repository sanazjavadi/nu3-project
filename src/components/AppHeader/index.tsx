import React, { FunctionComponent } from 'react';
import './index.css';

export interface AppHeaderProps {
  title: string;
}

export const AppHeader: FunctionComponent<AppHeaderProps> = ({ title }): JSX.Element =>  
<>
  <header className="App-Header">
    <h1>{title}</h1>
  </header>
</>

export default AppHeader;
