import React from "react";
import NavBar from "../../components/NavBar";
import Codes from "../../components/Codes";

const CodesListPage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <Codes />
        </div>
      </div>
    </>
  );
};

export default CodesListPage;
