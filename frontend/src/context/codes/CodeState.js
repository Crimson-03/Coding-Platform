import { useState } from "react";
import CodeContext from "./CodeContext";

const CodeState = (props) => {
  const host = "http://localhost:3001";

  const codesInitial = [];

  const [codes, setCodes] = useState(codesInitial);

  // Get all Codes
  const getCode = async () => {
    // API Call
    const response = await fetch(`${host}/api/codes/fetchallcodes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setCodes(json);
    console.log(json);
  };

  // Add a Code
  const addCode = async (title, program, lang) => {
    // API Call
    const response = await fetch(`${host}/api/codes/addcode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, program, lang }),
    });

    const code = await response.json();
    setCodes(codes.concat(code));
  };

  // Delete a Code
  const deleteCode = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/codes/deletecode/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    console.log(json);
    const newCodes = codes.filter((code) => {
      return code._id !== id;
    });
    setCodes(newCodes);
  };

  // Edit a Code
  const editCode = async (id, title, program, lang) => {
    // API Call
    const response = await fetch(`${host}/api/codes/updatecode/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, program, lang }),
    });
    const json = await response.json();
    console.log(json);

    let newCodes = JSON.parse(JSON.stringify(codes));

    // Logic to edit in client
    for (let index = 0; index < newCodes.length; index++) {
      const element = newCodes[index];
      if (element._id === id) {
        newCodes[index].title = title;
        newCodes[index].program = program;
        break;
      }
    }
    setCodes(newCodes);
  };

  // get a single code by id
  const getCodeById = async (id) => {
    // API Call Get "/api/codes/getcode/:id"
    const response = await fetch(`${host}/api/codes/getcode/${id}`);
    const CodeById = await response.json();
    return CodeById;
  };

  return (
    <CodeContext.Provider
      value={{ codes, getCode, addCode, deleteCode, editCode, getCodeById }}
    >
      {props.children}
    </CodeContext.Provider>
  );
};

export default CodeState;
