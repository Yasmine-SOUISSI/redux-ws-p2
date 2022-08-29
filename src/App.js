import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarComponent from "./Components/NavBar";
import ContactList from "./Pages/ContactList";
import ContactListDetails from "./Pages/ContactListDetails";
import Home from "./Pages/Home";
function App() {
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contactList" element={<ContactList />} />
                <Route
                    path="/contactList/:id"
                    element={<ContactListDetails />}
                />
            </Routes>
        </Router>
    );
}

export default App;
