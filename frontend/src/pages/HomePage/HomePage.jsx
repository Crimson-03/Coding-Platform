import React from "react";
import CodeEditorHelper from "../../components/CodeEditorHelper";
import NavBar from "../../components/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <CodeEditorHelper />
        </div>
      </div>
    </>
  );
};

export default HomePage;
