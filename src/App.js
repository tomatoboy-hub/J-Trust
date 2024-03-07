import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GroupList from "./components/GroupList";
import GroupDetail from "./components/GroupDetail";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/group">学生団体一覧</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/group" element={<GroupList />} />
          <Route path="/group/:groupId" element={<GroupDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
