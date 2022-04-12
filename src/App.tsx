import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './components/header/index.tsx';
function App() {
  return (
    <>
  <Header/>
   <Outlet/>
</>
  );
}

export default App;
