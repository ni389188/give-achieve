import React from 'react';
import './App.css';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HomePage from './pages/home-page';


function App() {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>,
        document.getElementById("root")
    );
}

export default App;
