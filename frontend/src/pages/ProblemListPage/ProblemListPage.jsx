import React from "react";
import ProblemList from "../../components/ProblemList";
import NavBar from "../../components/NavBar";

const ProblemListPage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row px-2">
          <ProblemList />
        </div>
      </div>
    </>
  );
};

export default ProblemListPage;
