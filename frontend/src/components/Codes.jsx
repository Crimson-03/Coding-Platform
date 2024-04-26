import React, { useContext, useEffect, useState } from "react";
import CodeContext from "../context/codes/CodeContext";
import { useNavigate } from "react-router-dom";
import CodeItem from "./CodeItem";

const Codes = () => {
  const context = useContext(CodeContext);
  const { codes, getCode, editCode } = context;

  // console.log(codes);
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCode();
    } else {
      navigate("/login");
    }
  }, []);

  const [code, setCode] = useState({ id: "", etitle: "", eprogram: "" });

  const updateCode = (currentCode) => {
    setCode({
      id: currentCode._id,
      etitle: currentCode.title,
      eprogram: currentCode.program,
    });
  };

  return (
    <>
      <div className="text-white">{codes.length === 0 && "No Codes to display"}</div>
      {codes.length > 0 && (
        <>
          {codes.map((code) => (
            <CodeItem key={code._id} updateCode={updateCode} code={code} />
          ))}
        </>
      )}
    </>
  );
};

export default Codes;
