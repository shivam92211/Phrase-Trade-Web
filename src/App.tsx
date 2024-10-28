import React from 'react';
import Header from './components/Header';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero6 from './components/Hero6';
import Hero7 from './components/Hero7';
import Hero8 from './components/Hero8';
import Hero9 from './components/Hero9';
import { RecoilRoot } from 'recoil';



function App() {
  return (
    <RecoilRoot>
      <div>
        <Header />
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7 />
        <Hero8 />
        <Hero9 />
      </div>
    </RecoilRoot>
  );
}

export default App;
