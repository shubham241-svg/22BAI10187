import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/top-users" element={<TopUsers />} />
                <Route path="/trending-posts" element={<TrendingPosts />} />

            </Routes>
        </Router>
    );
}