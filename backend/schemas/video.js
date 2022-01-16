const { Schema, SchemaTypes } = require('mongoose');
const {
  Number,
  ObjectId,
  String
} = SchemaTypes;

module.exports = new Schema({
  questions: [
    {
      time: {
        type: Number, // Time in seconds where this question is located (integer)
        required: true
      },
      questionId: {
        type: ObjectId,
        required: true
      }
    }
  ],
  videoId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});