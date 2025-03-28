import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopUsers from "./pages/TopUsers";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/top-users" element={<TopUsers />} />
            </Routes>
        </Router>
    );
}