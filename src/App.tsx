import React from 'react';
import {Outlet} from "react-router-dom";
import Header from './components/header/index.tsx';
import Footer from './components/footer/index.tsx'
function App() {
  return (
    <div className="App">
  <Header/>
   <Outlet/>
   <Footer />
</div>
  );
}

export default App;
