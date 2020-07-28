import { Schema } from 'mongoose'

export const UserSchema = new Schema({
  name: String,
  problemId: {
    type: Schema.Types.ObjectId,
    ref: 'Problem'
  }
})