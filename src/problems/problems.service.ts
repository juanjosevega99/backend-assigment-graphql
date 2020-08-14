import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Problem } from './interfaces/problem.interface';
import { CreateProblemDTO } from './dto/create-problem.dto'

import { Agent } from 'src/agents/interfaces/agent.interface';
import { ProblemDto } from '../graphql'

@Injectable()
export class ProblemsService {

  constructor(
    @InjectModel('Problem') private problemModel: Model<Problem>,
    @InjectModel('Agent') private agentModel: Model<Agent>,
  ) {}

  async createProblem(problemDto: ProblemDto): Promise<Problem> {
    const problem = new this.problemModel(problemDto)
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

  async listProblems(): Promise<Problem[]> {
    const problems = await this.problemModel.find()
    return problems
  }

  async solveProblem(problemID: string): Promise<Problem> {
    const problemSolved = await this.problemModel.findOneAndUpdate({ _id: problemID }, { $set: { solved: true } })

    //availability agent
    const freeAgent = await this.agentModel.findOneAndUpdate({ _id: problemSolved.agentId }, { $set: { availability: true } })
    await this.agentLessProblem(freeAgent)

    return problemSolved
  }

  async agentLessProblem(agent: object): Promise<Problem> {
    const problemAssigned = await this.problemModel.findOneAndUpdate({ solved: false, agentId: null }, { $set: { agentId: agent } })
    if (problemAssigned) {
      await this.availabilityAgent(agent)
      return problemAssigned
    }
  }

  async availabilityAgent(agentId: object): Promise<Agent> {
    return await this.agentModel.findOneAndUpdate({ _id: agentId }, { $set: { availability: false } })
  }

}
