const { Schema, SchemaTypes } = require('mongoose');
const {
  ObjectId,
  String
} = SchemaTypes;

module.exports = new Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  text: {
    type: String,
    required: true
  },
});