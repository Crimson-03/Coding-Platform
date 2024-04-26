import React from "react";
import NavBar from "../../components/NavBar";
import CodeProgram from "../../components/CodeProgram";

const CodePage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <CodeProgram />
        </div>
      </div>
    </>
  );
};

export default CodePage;
