import 'react-native-gesture-handler';
import React from 'react';

import AppNavContainer from './src/navigation';
import {GlobaleProvider, StoreProvider} from './src/Context/Provider';

const App = () => {
  return (
    <GlobaleProvider>
      <AppNavContainer />
    </GlobaleProvider>
  );
};

export default App;
