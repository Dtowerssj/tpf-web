import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing, NotFound, SignUp } from '../views' 
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        {/*<Route path="/home" element={<Home />} />*/}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
