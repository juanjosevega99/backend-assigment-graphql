import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Problem } from './interfaces/problem.interface';
import { CreateProblemDTO } from './dto/create-problem.dto'

import { Agent } from 'src/agents/interfaces/agent.interface';

@Injectable()
export class ProblemsService {

  constructor(
    @InjectModel('Problem') private problemModel: Model<Problem>,
    @InjectModel('Agent') private agentModel: Model<Agent>,
  ) {}

  async createProblem(createProblemDTO: CreateProblemDTO): Promise<Problem> {
    const problem = new this.problemModel(createProblemDTO)
    await problem.save()

    // assign agent to Problem
    const freeAgent = await this.agentModel.findOneAndUpdate({ availability: true }, { $set: { availability: false } })
    if (freeAgent) {
      await this.agentToProblem(problem._id, freeAgent.id)
    }
    return problem
  }

  async agentToProblem(problemID: string, agentAvailable: object): Promise<Problem> {
    return await this.problemModel.findOneAndUpdate({ _id: problemID }, { $set: { agentId: agentAvailable } })
  }

}
