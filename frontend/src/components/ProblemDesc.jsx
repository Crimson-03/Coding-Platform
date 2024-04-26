import React from "react";
import problems from "../Problems/ProblemSet";
import { useParams } from "react-router-dom";

const ProblemDesc = () => {
  const { problemId } = useParams();

  const index = problems.findIndex((problem) => problem._id.$oid === problemId);

  if (index === -1) {
    <div className="container">
      <p>Problem not found</p>
    </div>;
  }
  return (
    <div className="container">
      <p className="fw-bold fs-4 font-monospace">
        {index + 1}. {problems[index].title}
      </p>
      <p>{problems[index].statement}</p>
      <p className="fw-bold">Constraints:</p>
      <ul>
        {problems[index].constraints.map((cnstrnt, ind) => (
          <li key={ind}>{cnstrnt}</li>
        ))}
      </ul>
      <div className="accordion" id="accordionExample">
        {problems[index].testCases.map((testCase, ind) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${ind + 1}`}
                aria-expanded="true"
                aria-controls={`#collapse${ind + 1}`}
              >
                TestCase #{ind + 1}
              </button>
            </h2>
            <div
              id={`collapse${ind + 1}`}
              className={`accordion-collapse collapse`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <dl className="row">
                  {Object.entries(testCase).map(([key, value]) => (
                    <>
                      <dt className="col-sm-3">{key}:</dt>
                      <dd className="col-sm-9">{JSON.stringify(value)}</dd>
                    </>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemDesc;
