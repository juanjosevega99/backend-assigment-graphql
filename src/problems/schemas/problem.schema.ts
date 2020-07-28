import { Schema } from 'mongoose'

export const ProblemSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  agentId: {
    type: Schema.Types.ObjectId,
    ref: 'Agent'
  },
  description: String,
  solved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})