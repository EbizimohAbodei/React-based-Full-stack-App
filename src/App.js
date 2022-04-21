import "./index.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CreateUser } from "./components/CreateUser";
import { ListUsers } from "./components/ListUsers";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter className="browserRouter">
          <nav>
            <ul>
              <li className="list">
                <Link to="/">List-Users</Link>
              </li>
              <li className="list">
                <Link to="user/create" className="link">
                  Create-Users
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ListUsers />} />
            <Route path="user/create" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
