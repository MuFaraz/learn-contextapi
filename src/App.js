import React, { createContext } from 'react';
import './App.css';
import ComA from './Component/ComA';
const FirstName = createContext();
const LastName = createContext();

function App() {

  return (
    <div className="App">
      <FirstName.Provider value="Muhammad">
        <LastName.Provider value="Faraz">
          <ComA />
        </LastName.Provider>

      </FirstName.Provider>

    </div>
  );
}

export default App;
export { FirstName,LastName };
