const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Code = require("../models/Code");
const { body, validationResult } = require("express-validator");

// route 1 : get all the codes using : get "/api/codes/fetchallcodes" . Login is required

router.get("/fetchallcodes", fetchUser, async (req, res) => {
  try {
    const codes = await Code.find({ user: req.user.id });
    res.json(codes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// route 2 : add a new Code using: Post "/api/codes/addcode". Login required

router.post(
  "/addcode",
  fetchUser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("lang", "Please give a language for the program").isLength({ min: 1 }),
    body("program", "Please give the program code").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, lang, program } = req.body;
      // if there are errors, return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const code = new Code({
        title,
        lang,
        program,
        user: req.user.id,
      });
      const savedCode = await code.save();
      res.json(savedCode);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// route 3 : Update an existing Code using: PUT "/api/codes/updatecode", login required

router.put("updatecode/:id", fetchUser, async (req, res) => {
  const { title, lang, program } = req.body;
  // create a newCode object
  try {
    const newCode = {};
    if (title) {
      newCode.title = title;
    }
    newCode.lang = lang;
    if (program) {
      newCode.program = program;
    }

    // find the code to be updated and update it
    let code = await Code.findById(req.params.id);
    if (!code) {
      return res.status(400).send("Not Found");
    }
    if (code.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    code = await Code.findByIdAndUpdate(
      req.params.id,
      { $set: newCode },
      { new: true }
    );
    res.json({ code });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// route 4 : Delete an existing Code using "/api/codes/deletecode". Login Required

router.delete("/deletecode/:id", fetchUser, async (req, res) => {
  try {
    // find the code to be delete and delete it
    let code = await Code.findById(req.params.id);
    if (!code) {
      return res.status(404).send("Node Found");
    }
    // allow deletion only if user owns this code
    if (code.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    code = await Code.findByIdAndDelete(req.params.id);
    res.json({ Success: "Code has been deleted", code: code });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// route 5 : get a specific code by id using : Get "/api/codes/getcode/:id". Login required
router.get("/getcode/:id", fetchUser, async (req, res) => {
  try {
    const code = await Code.findById(req.params.id);
    if (!code) {
      return res.status(404).send("Code doesn't exist");
    }
    // check if the user owns this code
    if (code.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    res.json(code);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
