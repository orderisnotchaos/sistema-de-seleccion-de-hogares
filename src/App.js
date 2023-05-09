
import Map from './components/Map/Map';
import ThemeContext from './contexts/themeContext';
import './App.css';
import { useState } from 'react';

function App() {


  const [token,setToken] = useState(null);

  const getters = {token};
  const setters = {setToken};
  const APIURL = "http://localhost:3000/api";
  return (
    <ThemeContext.Provider value={{...getters, ...setters, APIURL}}>
      <Map />
    </ThemeContext.Provider>
  );
}

export default App;
