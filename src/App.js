import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import DetailsList from "./components/details.list.component";
import EditDetail from "./components/edit-details.component";
import CreateDetail from "./components/create-detail.component";
import CreateUser from "./components/create-user.component";
import Index from "./views/Index/Index"
import Dashboard from "./components/AdminDashboard/Dashboard";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br/>
                <Route path="/" exact component={Index} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/details" component={DetailsList} />
                <Route path="/edit/:id" component={EditDetail} />
                <Route path="/create" component={CreateDetail} />
                <Route path="/user" component={CreateUser} />
            </div>
        </Router>
    );
}

export default App;