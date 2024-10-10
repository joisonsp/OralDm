import * as React from 'react';

import MainContainer from './src/navigation/MainContainer';
import { LanguageProvider } from './src/assets/utils/LanguageContext';
import { FontSizeProvider } from './src/assets/utils/FontSizeContext';

function App() {
  return (
    <LanguageProvider>
      <FontSizeProvider>
        <MainContainer />
      </FontSizeProvider>
    </LanguageProvider>
  );
}

export default App;