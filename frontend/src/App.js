import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import SignInPage from "./pages/Authentication/SignInPage";
import LoginPage from "./pages/Authentication/LoginPage";
import ProblemPage from "./pages/ProblemPage/ProblemPage";
import ProblemListPage from "./pages/ProblemListPage/ProblemListPage";
import CodeState from "./context/codes/CodeState";
import CodesListPage from "./pages/CodesList/CodesListPage";
import CodePage from "./pages/CodePage/CodePage";

function App() {
  return (
    <>
      <CodeState>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignInPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/problems" element={<ProblemListPage />} />
            <Route path="/problems/:problemId" element={<ProblemPage />} />
            <Route path="/codes" element={<CodesListPage />} />
            <Route path="/codes/:codeId" element={<CodePage />} />
          </Routes>
        </Router>
      </CodeState>
    </>
  );
}

export default App;
