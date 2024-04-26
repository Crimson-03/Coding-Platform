const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const CodeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Code = mongoose.model("code", CodeSchema);
module.exports = Code;
