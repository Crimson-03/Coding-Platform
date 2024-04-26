import React from "react";
import NavBar from "../../components/NavBar";
import ProblemDesc from "../../components/ProblemDesc";
import CodeEditorHelper from "../../components/CodeEditorHelper";

const Problem = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ProblemDesc />
          </div>
          <div className="col-md-6">
            <CodeEditorHelper />
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem;
