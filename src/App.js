import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./navsection/Home";
import Blog from "./navsection/Blog";
import Contact from "./navsection/Contact";
import Projects from "./navsection/Projects";
import TodoData from "./navsection/TodoData";
import User from "./navsection/User";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/User/:id" element={<User />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="Tododata" element={<TodoData />} />
      </Routes>
    </div>
  );
};

export default App;
