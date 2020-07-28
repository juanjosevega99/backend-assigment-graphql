import { Document } from 'mongoose'

export interface Agent extends Document {
  name: string
  availability: boolean
}