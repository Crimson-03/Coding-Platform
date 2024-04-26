import React, { useContext, useRef, useState } from "react";
import Codes from "./Codes";
import CodeContext from "../context/codes/CodeContext";
import { Link } from "react-router-dom";
import CodeEditor from "./CodeEditor";

const CodeItem = (props) => {
  const context = useContext(CodeContext);
  const { deleteCode } = context;
  const { code } = props;
  const dateAndTimeString = code.date;
  const dateTime = new Date(dateAndTimeString);
  const ref = useRef();

  const handleClick = () => {
    // setSelectedCodeId(code._id);
    ref.current.click();
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal-${code._id}`}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id={`exampleModal-${code._id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel-${code._id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {code.title} - {code.lang}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <CodeEditor
                language={code.lang}
                theme={"vs-dark"}
                code={code.program}
                readOnly= {"true"}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-3">
        <div className="card">
          <div className="card-header">{dateTime.toDateString()}</div>
          <div className="card-body">
            <h5 className="card-title">Problem: {code.title}</h5>
            <p className="card-text">Language: {code.lang}</p>
            <button onClick={handleClick} className="btn btn-primary me-1">
              See Code
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                deleteCode(code._id);
              }}
            >
              Delete Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeItem;
