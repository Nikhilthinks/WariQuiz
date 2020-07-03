const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema1 = new Schema({
  user: [
    {
      type: Schema.Types.ObjectId,
      name: String,
      score: String,
      ref: "users"
    },
  ],
  questions: [{
      ques: "Nikhil lives in?",
      ans1: [
          {
        answer: "Delhi",
        correct: true
          }
      ],
      ans2: [
        {
      answer: "Faridabad",
      correct: false
        }
    ],
    ans3: [
        {
      answer: "Gurgaon",
      correct: false
        }
    ],
    ans4: [
        {
      answer: "Noida",
      correct: false
        }
    ]
  }]
});

module.exports = Quiz1 = mongoose.model("quiz1", QuizSchema1)