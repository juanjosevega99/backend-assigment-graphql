import { Document } from 'mongoose'

export interface Problem extends Document {
  userId: object,
  agentId: object,
  description: string
  solved: boolean
  createdAt: Date
}