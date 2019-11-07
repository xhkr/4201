import React from 'react';

// Utils
import { setI18n } from 'get-i18n';
import { i18n } from './data/translations';

// Components
import { Search } from './components/Search';

function App() {
  // Translations
  setI18n(i18n);

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
