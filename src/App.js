import React from 'react';
import './App.css';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import HomePage from './pages/home_page';
import LoginPage from './pages/login_page';
import NavBar from './components/nav_bar';


function App() {
    render(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>,
        document.getElementById("root")
    );
}

export default App;
