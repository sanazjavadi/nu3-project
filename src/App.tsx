import React from 'react';
import AppHeader from './components/AppHeader';
import Showcase from './components/Showcase';

function App() {
  return <>
    <AppHeader title="Component Demo" />
    <Showcase>
        {/* Your components goes here... */}
    </Showcase>
  </>;
}

export default App;
