import React from "react";
import problems from "../Problems/ProblemSet";
import { Link } from "react-router-dom";

const ProblemList = () => {
  return problems.map((problem,ind) => (
    <div className="card my-1" key={ind}>
      <div className="card-body">
        <h5 className="card-title">{ind+1}. {problem.title}</h5>
        <p className="card-text">{problem.statement}</p>
        <Link to={`/problems/${problem._id.$oid}`} className="btn btn-primary">
          Solve Problem
        </Link>
      </div>
    </div>
  ));
};

export default ProblemList;
