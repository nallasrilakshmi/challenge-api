/**
 * This defines ChallengeSetting model.
 */

const dynamoose = require('dynamoose')

const Schema = dynamoose.Schema

const schema = new Schema({
  id: {
    type: String,
    hashKey: true,
    required: true
  },
  name: {
    type: String,
    required: true
  }
},
{
  throughput: { read: 4, write: 2 }
})

module.exports = schema
