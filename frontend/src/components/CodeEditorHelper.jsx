import React, { useState, useContext } from "react";
import CodeEditor from "./CodeEditor";
import langs from "../LanguageId";
import axios from "axios";
import Output from "./Output";
import CodeContext from "../context/codes/CodeContext";
import { useLocation, useParams } from "react-router-dom";
import problems from "../Problems/ProblemSet";
import testCases from "../Problems/testCases";

const CodeEditorHelper = () => {
  const [code, setCode] = useState("");
  const [langName, setLangName] = useState("javascript");
  const [langId, setLangId] = useState(93);
  const [theme, setTheme] = useState("vs-dark");
  const [input, setInput] = useState();
  const [output, setOutput] = useState("");
  const singleSubmission = "https://judge0-ce.p.rapidapi.com/submissions";
  const batchSubmission = "https://judge0-ce.p.rapidapi.com/submissions/batch";
  const context = useContext(CodeContext);
  const { addCode } = context;
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };
  const { problemId } = useParams();
  const location = useLocation();

  const handleLanguage = (e) => {
    setLangName(e.target.value);
    setCode("");
    const language = langs.find((lang) => lang.name === e.target.value);
    if (language) {
      setLangId(language.id);
    } else setLangId(null);
  };

  const handleAddCode = (e) => {
    e.preventDefault();
    if (location.pathname.startsWith("/problems/")) {
      const prob = problems.find((problem) => problem._id.$oid === problemId);
      const title = prob.title;
      const program = code;
      const lang = langName;
      addCode(title, program, lang);
    }
  };

  const options = {
    method: "POST",
    url: "",
    params: {
      base64_encoded: "false",
      fields: "*",
    },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    data: {
      language_id: langId,
      source_code: code,
      stdin: input,
    },
  };

  let token;
  const getResult = {
    method: "GET",
    url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
    params: {
      base64_encoded: "false",
      fields: "*",
    },
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
  };

  const handleRun = async () => {
    console.log({ code, langId, langName, input });

    try {
      options.url = singleSubmission;
      const response = await axios.request(options);
      console.log(response.data.token);
      token = response.data.token;
      console.log(token);
      setTimeout(async () => {
        try {
          if (token) {
            const updatedGetResult = {
              ...getResult,
              url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
            };
            const result = await axios.request(updatedGetResult);
            console.log(result.data);
            setOutput(result.data.stdout);
          }
        } catch (error) {
          setOutput(
            "Please Check that you have included all the necessary headers files, or check your code."
          );
          console.log(error);
        }
      }, 2000);
    } catch (error) {
      if (error.response) {
        console.log("Server responded with an error", error.response.data);
        console.log("Status Code", error.response.status);
      } else if (error.request) {
        console.log("Request made but no response recieved", error.request);
      } else {
        console.error("Error", error.message);
      }
    }
  };

  // batched submission
  let submissions = [];
  if (location.pathname.startsWith("/problems/")) {
    const test = testCases.find((testCase) => testCase._id.$oid == problemId);
    submissions = test.cases.map((testCase) => ({
      language_id: langId,
      source_code: code,
      input: testCase.input,
      expected_output: testCase.output,
    }));
  }
  const submitOptions = {
    ...options,
    data: {
      submissions: submissions,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ code, langId, langName });

    try {
      submitOptions.url = batchSubmission;
      console.log(submitOptions);
      const response = await axios.request(submitOptions);
      console.log(response);
      console.log(response.data[0].token);
      token =
        response.data[0].token +
        "," +
        response.data[1].token +
        "," +
        response.data[2].token;
      console.log(token);
      setTimeout(async () => {
        try {
          if (token) {
            const updatedGetResult = {
              ...getResult,
              url: `${batchSubmission}`,
              params: {
                ...getResult.params,
                tokens: token,
              },
            };
            const result = await axios.request(updatedGetResult);
            console.log(result);
            // setOutput(result.data.stdout);
          }
        } catch (error) {
          setOutput(
            "Please Check that you have included all the necessary headers files, or check your code."
          );
          console.log(error);
        }
      }, 2000);
    } catch (error) {
      if (error.response) {
        console.log("Server responded with an error", error.response.data);
        console.log("Status Code", error.response.status);
      } else if (error.request) {
        console.log("Request made but no response recieved", error.request);
      } else {
        console.error("Error", error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-3">
          <select
            className="form-select form-select-sm"
            aria-label="Default select example"
            onChange={handleLanguage}
          >
            {langs.map((lang) => (
              <option key={lang.id} value={lang.name}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <CodeEditor
            language={langName}
            theme={theme}
            code={code}
            onChange={handleCodeChange}
            readOnly={"false"}
          />
          <div className="form-floating my-1">
            <textarea
              className="form-control"
              placeholder="nums"
              id="floatingNum"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            ></textarea>
            <label htmlFor="floatingNum">Input</label>
          </div>
          <Output output={output} />
          <button
            type="button"
            className="btn btn-primary mt-1"
            onClick={handleRun}
          >
            Run
          </button>
          <button
            type="submit"
            className="btn btn-primary mx-1 mt-1"
            // onClick={() => console.log(submitOptions)}
          >
            Submit
          </button>
          {location.pathname.startsWith("/problems/") && (
            <button
              type="button"
              className={`btn btn-primary mt-1 ${
                code === "" ? "disabled" : ""
              }`}
              onClick={handleAddCode}
            >
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CodeEditorHelper;
